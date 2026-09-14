(function () {
  const form = document.getElementById("guidance-map-filters");
  const rows = Array.from(document.querySelectorAll("[data-map-row]"));
  const sections = Array.from(document.querySelectorAll("[data-map-section]"));
  const countEl = document.getElementById("guidance-map-filter-count");
  const emptyEl = document.getElementById("guidance-map-no-results");
  const resetButton = document.querySelector("[data-filter-reset]");
  const defaultKinds = { conflict: true, gap: true, alignment: false };

  if (!form || !rows.length) return;

  function selectedValues(name) {
    return Array.from(form.querySelectorAll('input[name="' + name + '"]:checked')).map(
      function (input) {
        return input.value;
      }
    );
  }

  function matches(row, kinds, topics, causes) {
    const kind = row.dataset.kind || "";
    const topic = row.dataset.topic || "";
    const cause = row.dataset.cause || "";

    const kindOk = !kinds.length || kinds.indexOf(kind) !== -1;
    const topicOk = !topics.length || topics.indexOf(topic) !== -1;
    const causeOk =
      !causes.length ||
      (kind === "conflict" && causes.indexOf(cause) !== -1);

    return kindOk && topicOk && causeOk;
  }

  function applyFilters() {
    const kinds = selectedValues("kind");
    const topics = selectedValues("topic");
    const causes = selectedValues("cause");
    const visibleIds = {};

    rows.forEach(function (row) {
      if (row.hasAttribute("data-empty-gap")) {
        row.hidden = kinds.length > 0 && kinds.indexOf("gap") === -1;
        return;
      }

      const show = matches(row, kinds, topics, causes);
      row.hidden = !show;
      if (show && row.dataset.mapId) {
        visibleIds[row.dataset.mapId] = true;
      }
    });

    const visible = Object.keys(visibleIds).length;
    const totalIds = {};
    rows.forEach(function (row) {
      if (row.dataset.mapId) totalIds[row.dataset.mapId] = true;
    });

    sections.forEach(function (section) {
      const kind = section.dataset.mapSection;
      const kindEnabled = !kinds.length || kinds.indexOf(kind) !== -1;
      const hasVisibleRow = Array.from(
        section.querySelectorAll("[data-map-row]:not([data-empty-gap])")
      ).some(function (row) {
        return !row.hidden;
      });
      const emptyGap = section.querySelector("[data-empty-gap]");
      const emptyGapVisible = Boolean(emptyGap && !emptyGap.hidden);

      section.hidden = !kindEnabled || (!hasVisibleRow && !emptyGapVisible);
    });

    if (countEl) {
      countEl.textContent =
        "Showing " + visible + " of " + Object.keys(totalIds).length + " rows";
    }
    if (emptyEl) {
      emptyEl.hidden = visible !== 0;
    }
  }

  form.addEventListener("change", applyFilters);

  if (resetButton) {
    resetButton.addEventListener("click", function () {
      form.querySelectorAll('input[name="topic"], input[name="cause"]').forEach(
        function (input) {
          input.checked = false;
        }
      );
      form.querySelectorAll('input[name="kind"]').forEach(function (input) {
        input.checked = Boolean(defaultKinds[input.value]);
      });
      applyFilters();
    });
  }

  applyFilters();
})();
