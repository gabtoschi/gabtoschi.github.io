const blogTags = require('./blog-tags')
const notShowTags = require('./not-show-tags')

module.exports = blogTags
  .filter(tag => !notShowTags.blog.includes(tag.key))
  .map(tag => tag.key);