module.exports = {
  lang: 'en-US',
  eleventyComputed: {
    permalink: (data) => {
      const { page } = data
      const { filePathStem, outputFileExtension } = page

      return `${filePathStem.replace('/en', '')}.${outputFileExtension}`
    }
  },
}