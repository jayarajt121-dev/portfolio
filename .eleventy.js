// .eleventy.js
module.exports = function(eleventyConfig) {
  // Collection for case studies
  eleventyConfig.addCollection("caseStudies", function(collection) {
    return collection.getFilteredByGlob("src/case-studies/*.md");
  });

  // Passthrough copy for static data
  eleventyConfig.addPassthroughCopy({ "src/data": "data" });

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
    description: "Personal portfolio showcasing digital marketing expertise, data-driven performance campaigns, and case studies."
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "dist"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
