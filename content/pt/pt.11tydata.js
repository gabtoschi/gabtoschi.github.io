module.exports = {
  lang: 'pt',
  eleventyComputed: {
    permalink: (data) => {
      if (data.noRender) return false;

      const { page, pagination } = data;
      const { filePathStem, outputFileExtension } = page;

      if (pagination) {
        return pagination.hrefs[pagination.pageNumber];
      }

      return `${filePathStem}.${outputFileExtension}`;
    }
  },
}