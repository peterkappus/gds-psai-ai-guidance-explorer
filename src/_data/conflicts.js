const path = require("path");
const fs = require("fs");

const conflictsPath = path.join(__dirname, "../../content/conflicts.json");

const data = fs.existsSync(conflictsPath)
  ? JSON.parse(fs.readFileSync(conflictsPath, "utf8"))
  : { updated: null, conflicts: [] };

module.exports = {
  updated: data.updated || null,
  items: data.conflicts || [],
  byId: Object.fromEntries(
    (data.conflicts || []).map((conflict) => [conflict.conflict_id, conflict])
  ),
};
