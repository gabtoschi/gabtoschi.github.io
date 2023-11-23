module.exports = {
  lang: 'en-US',
  eleventyComputed: {
    permalink: (data) => {
      if (data.noRender) return false;

      const { page } = data
      const { filePathStem, outputFileExtension } = page

      return `${filePathStem.replace('/en', '')}.${outputFileExtension}`
    }
  },
}