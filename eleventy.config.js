const path = require("path");
const nunjucks = require("nunjucks");

module.exports = function (eleventyConfig) {
  const njkEnv = new nunjucks.Environment(
    new nunjucks.FileSystemLoader([
      path.join(__dirname, "src/_includes"),
      path.join(__dirname, "node_modules/govuk-frontend/dist"),
    ])
  );
  eleventyConfig.setLibrary("njk", njkEnv);

  eleventyConfig.addPassthroughCopy({
    "node_modules/govuk-frontend/dist/govuk/assets": "assets",
    "node_modules/govuk-frontend/dist/govuk/govuk-frontend.min.js":
      "assets/govuk-frontend.min.js",
    "src/assets/css": "assets/css",
  });

  eleventyConfig.addFilter("textFragmentUrl", function (item) {
    const base =
      item.documentUrl ||
      "https://www.gov.uk/government/publications/ai-playbook-for-the-uk-government/artificial-intelligence-playbook-for-the-uk-government-html";
    const encode = (value) =>
      encodeURIComponent(value)
        .replace(/-/g, "%2D")
        .replace(/'/g, "%27");

    let fragment = `:~:text=${encode(item.textStart)}`;
    if (item.textEnd) {
      fragment += `,${encode(item.textEnd)}`;
    }
    return `${base}#${fragment}`;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
  };
};
