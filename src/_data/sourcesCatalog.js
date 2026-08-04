const path = require("path");
const catalog = require(path.join(__dirname, "../../sources.json"));

function uniqueSorted(values) {
  return [...new Set(values.filter(Boolean))].sort((a, b) =>
    a.localeCompare(b)
  );
}

function normalizeSource(source) {
  return {
    ...source,
    audience: source.audience || [],
    themes: source.themes || [],
    related_faq_themes: source.related_faq_themes || [],
    formats: source.formats || [],
    related_urls: source.related_urls || [],
    aliases_from_potential_list: source.aliases_from_potential_list || [],
  };
}

const incorporatedExtras = (catalog.meta.already_incorporated || []).map(
  (item) =>
    normalizeSource({
      id: item.id,
      title: item.title,
      url: item.url,
      organisation: item.organisation,
      type: "guidance",
      status: "incorporated",
      audience: [
        "central government",
        "public sector delivery teams",
        "policy and digital roles",
      ],
      themes: [
        "adoption",
        "ethics",
        "security",
        "procurement",
        "governance",
      ],
      summary:
        item.notes ||
        "Official cross-government guidance on using AI safely, responsibly and effectively.",
      why_include:
        "Primary source currently powering FAQ answers and citations in this explorer.",
      related_faq_themes: [
        "getting-started",
        "lawful-ethical",
        "security-tools",
        "buying-building",
        "delivery-assurance",
        "collaboration",
      ],
      formats: ["HTML"],
      priority: 1,
      notes: item.notes,
      discovered_via: "incorporated",
      discovered_on: catalog.meta.updated,
    })
);

const existingIds = new Set((catalog.sources || []).map((source) => source.id));
const items = [
  ...incorporatedExtras.filter((source) => !existingIds.has(source.id)),
  ...(catalog.sources || []).map(normalizeSource),
].sort((a, b) => {
  const priorityDiff = (a.priority || 99) - (b.priority || 99);
  if (priorityDiff !== 0) return priorityDiff;
  return a.title.localeCompare(b.title);
});

module.exports = {
  meta: catalog.meta,
  items,
  statuses: uniqueSorted(items.map((item) => item.status)),
  types: uniqueSorted(items.map((item) => item.type)),
  themes: uniqueSorted(items.flatMap((item) => item.themes)),
};
