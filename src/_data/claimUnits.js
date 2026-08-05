const path = require("path");
const fs = require("fs");

const unitsDir = path.join(__dirname, "../../content/units");

function loadUnitFiles() {
  if (!fs.existsSync(unitsDir)) {
    return [];
  }

  return fs
    .readdirSync(unitsDir)
    .filter((name) => name.endsWith(".json"))
    .map((name) => {
      const filePath = path.join(unitsDir, name);
      return JSON.parse(fs.readFileSync(filePath, "utf8"));
    });
}

const packs = loadUnitFiles();

module.exports = {
  packs,
  bySourceId: Object.fromEntries(
    packs.map((pack) => [pack.source_id, pack])
  ),
  allUnits: packs.flatMap((pack) =>
    (pack.units || []).map((unit) => ({
      ...unit,
      source_id: pack.source_id,
      article:
        (pack.incorporated_articles || []).find(
          (article) => article.article_id === unit.article_id
        ) || null,
    }))
  ),
};
