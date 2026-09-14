const path = require("path");
const fs = require("fs");
const sass = require("sass");
const nunjucks = require("nunjucks");
const markdownIt = require("markdown-it");
const markdownItGovuk = require("markdown-it-govuk");

function compileSass() {
  const scssPath = path.join(__dirname, "src/scss/main.scss");
  const cssPath = path.join(__dirname, "src/assets/css/main.css");
  const result = sass.compile(scssPath, {
    loadPaths: [path.join(__dirname, "node_modules/govuk-frontend/dist")],
  });
  const previous = fs.existsSync(cssPath)
    ? fs.readFileSync(cssPath, "utf8")
    : null;
  if (previous === result.css) {
    return;
  }
  fs.mkdirSync(path.dirname(cssPath), { recursive: true });
  fs.writeFileSync(cssPath, result.css);
}

module.exports = function (eleventyConfig) {
  const njkEnv = new nunjucks.Environment(
    new nunjucks.FileSystemLoader([
      path.join(__dirname, "src/_includes"),
      path.join(__dirname, "node_modules/govuk-frontend/dist"),
    ])
  );
  eleventyConfig.setLibrary("njk", njkEnv);

  eleventyConfig.setLibrary(
    "md",
    markdownIt({
      html: true,
      linkify: true,
      typographer: true,
    }).use(markdownItGovuk)
  );

  // SCSS is not passthrough-copied — watch it and compile before each build.
  eleventyConfig.addWatchTarget("./src/scss/");
  eleventyConfig.on("eleventy.before", () => {
    compileSass();
  });

  eleventyConfig.addPassthroughCopy({
    "node_modules/govuk-frontend/dist/govuk/assets": "assets",
    "node_modules/govuk-frontend/dist/govuk/govuk-frontend.min.js":
      "assets/govuk-frontend.min.js",
    "src/assets/css": "assets/css",
    "src/assets/js": "assets/js",
    "src/assets/icons": "assets/icons",
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

  eleventyConfig.addFilter("humanizeToken", function (value) {
    if (!value) return "";
    return String(value)
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  });

  eleventyConfig.addFilter("statusTagClass", function (status) {
    switch (status) {
      case "incorporated":
        return "govuk-tag--green";
      case "candidate":
        return "govuk-tag--blue";
      case "watch":
        return "govuk-tag--yellow";
      case "superseded":
        return "govuk-tag--grey";
      case "rejected":
        return "govuk-tag--red";
      default:
        return "";
    }
  });

  eleventyConfig.addFilter("faqStatusTagClass", function (status) {
    switch (status) {
      case "answered":
        return "govuk-tag--green";
      case "partial":
        return "govuk-tag--blue";
      case "gap":
        return "govuk-tag--yellow";
      case "conflicted":
        return "govuk-tag--orange";
      default:
        return "govuk-tag--grey";
    }
  });

  eleventyConfig.addFilter("citationRoleTagClass", function (role) {
    switch (role) {
      case "primary":
        return "govuk-tag--blue";
      case "supporting":
        return "govuk-tag--green";
      case "contrasting":
        return "govuk-tag--orange";
      default:
        return "govuk-tag--grey";
    }
  });

  eleventyConfig.addFilter("citationRoleLabel", function (role) {
    switch (role) {
      case "primary":
        return "Primary (how)";
      case "supporting":
        return "Secondary (normative)";
      case "contrasting":
        return "Contrasting";
      default:
        return String(role || "");
    }
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
