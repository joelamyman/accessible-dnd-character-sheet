const { EleventyEdgePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(EleventyEdgePlugin);
  
  return {
    // Change input directory to src and output directory to dist
    dir: {
      input: 'src',
      output: 'dist'
    },
    // HTML files will be processed as if they were Nunjucks
    htmlTemplateEngine: "njk"
  }
};
