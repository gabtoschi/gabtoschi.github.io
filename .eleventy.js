const { EleventyI18nPlugin } = require("@11ty/eleventy");
const sass = require("sass");

const DEFAULT_LANG = 'en-US'

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: DEFAULT_LANG
  });

  eleventyConfig.addGlobalData("lang", DEFAULT_LANG);

  eleventyConfig.addTemplateFormats("scss");
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",

    compile: async function(inputContent) {
      let result = sass.compileString(inputContent);
      return async (_) => {
        return result.css;
      };
    }
  });

  return {
    dir: {
			input: "content",          // default: "."
			includes: "../_includes",  // default: "_includes"
			data: "../_data",          // default: "_data"
			output: "_site"
		},
  }
};