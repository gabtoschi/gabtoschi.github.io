const { EleventyI18nPlugin } = require('@11ty/eleventy');

const sass = require('sass');
const path = require('path');
const fs = require('fs');

const DEFAULT_LANG = 'en-US'

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: DEFAULT_LANG
  });

  eleventyConfig.addGlobalData('lang', DEFAULT_LANG);

  eleventyConfig.addPassthroughCopy('content/img');

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

  return {
    dir: {
			input: 'content',          // default: '.'
			includes: '../_includes',  // default: '_includes'
			data: '../_data',          // default: '_data'
			output: '_site'
		},
  }
};