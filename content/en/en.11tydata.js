module.exports = {
  lang: 'en',
  eleventyComputed: {
    permalink: (data) => {
      if (data.noRender) return false;

      const { page, pagination } = data;
      const { filePathStem, outputFileExtension } = page;

      if (pagination) {
        return pagination.hrefs[pagination.pageNumber];
      }

      if (filePathStem.includes('index')) {
        return `${filePathStem.replace('/en', '')}.${outputFileExtension}`
      }

      return `${filePathStem.replace('/en', '')}`
    }
  },
}