const sass = require('sass');
const path = require('path');
const fs = require('fs');

const DEFAULT_LANG = 'en';
const TAGS_WITHOUT_PAGES = ['blog', 'article'];

function eleventyComputedPermalink() {
	return (data) => {
		if (data.noRender) return false;

		return data.permalink;
	}
};

function eleventyComputedTagsWithPages() {
  return (data) => {
    const tagsWithPages = data['blog-tags'].filter(tag => !TAGS_WITHOUT_PAGES.includes(tag.key)).map(tag => tag.key);
    return tagsWithPages
  }
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addGlobalData('lang', DEFAULT_LANG);
  eleventyConfig.addGlobalData("eleventyComputed.permalink", eleventyComputedPermalink);
  eleventyConfig.addGlobalData("eleventyComputed.tagsWithPages", eleventyComputedTagsWithPages);

  eleventyConfig.addPassthroughCopy('content/img');
  eleventyConfig.addPassthroughCopy('content/scripts');

  eleventyConfig.addTemplateFormats('scss');
  eleventyConfig.addExtension('scss', {
    outputFileExtension: 'css',

    compile: async function (inputContent, inputPath) {
      let parsed = path.parse(inputPath);
      if (parsed.name.startsWith('_')) {
        return;
      }

      let result = sass.compileString(inputContent, {
        loadPaths: [parsed.dir || '.'],
        sourceMap: false,
      });

      this.addDependencies(inputPath, result.loadedUrls);

      return async () => {
        return result.css;
      };
    },
  });

  eleventyConfig.addShortcode('svg', function (file) {
    const relativeFilePath = `./content/img/${file}.svg`;
    const data = fs.readFileSync(relativeFilePath, (err, contents) => {
      if (err) return err;
      return contents;
    });

    return data.toString('utf8');
  });

  eleventyConfig.addFilter('remove_intersec', function(array, toRemove) {
    if (!Array.isArray(array) || !Array.isArray(toRemove)) return array;

    return array.filter(el => !toRemove.includes(el));
  });

  eleventyConfig.addFilter('map_key_value', function(array, keyValues) {
    if (!Array.isArray(array) || !Array.isArray(keyValues)) return array;

    return array.map(el => {
      const found = keyValues.find(({ key }) => el === key);
      if (found) return found.value;
      return el;
    });
  });

  eleventyConfig.addFilter('first_nth', function(array, nth) {
    if (!Array.isArray(array)) return array;

    return array.slice(0, nth);
  });

  return {
    dir: {
			input: 'content',          // default: '.'
			includes: '../_includes',  // default: '_includes'
			data: '../_data',          // default: '_data'
			output: '_site'
		},
  }
};