// .eleventy.js
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  // Automatically transforms URLs to include pathPrefix on GitHub Pages
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // Collection for case studies
  eleventyConfig.addCollection("caseStudies", function(collection) {
    return collection.getFilteredByGlob("src/case-studies/*.md").sort((a, b) => {
      return (a.data.order || 99) - (b.data.order || 99);
    });
  });

  // Passthrough copy for static data, images, and .nojekyll
  eleventyConfig.addPassthroughCopy({ "src/data": "data" });
  eleventyConfig.addPassthroughCopy({ "src/assets/images": "assets/images" });
  eleventyConfig.addPassthroughCopy({ "src/.nojekyll": ".nojekyll" });

  // Date filter for Nunjucks templates
  eleventyConfig.addFilter("date", function(dateVal, format) {
    const d = (!dateVal || dateVal === "now") ? new Date() : new Date(dateVal);
    if (format === "%Y") {
      return d.getFullYear().toString();
    }
    return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  });

  // Year shortcode
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Global site metadata
  eleventyConfig.addGlobalData("site", {
    title: "Jayaraj T – Digital Marketer",
    url: "https://jayarajt121-dev.github.io/portfolio/",
    description: "Personal portfolio of Jayaraj T, a digital marketer specializing in SEO, Performance Marketing, and Analytics for freelance clients."
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "dist"
    },
    pathPrefix: "/portfolio/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
