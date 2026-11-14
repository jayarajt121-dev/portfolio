// .eleventy.js
module.exports = function(eleventyConfig) {
  // Collection for case studies
  eleventyConfig.addCollection("caseStudies", function(collection) {
    return collection.getFilteredByGlob("src/case-studies/*.md").sort((a, b) => {
      return (a.data.order || 99) - (b.data.order || 99);
    });
  });

  // Passthrough copy for static data and images
  eleventyConfig.addPassthroughCopy({ "src/data": "data" });
  eleventyConfig.addPassthroughCopy({ "src/assets/images": "assets/images" });

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
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
