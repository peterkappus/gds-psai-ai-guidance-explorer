(function () {
  const form = document.getElementById("source-filters");
  const cards = Array.from(document.querySelectorAll("[data-source-card]"));
  const countEl = document.getElementById("app-filter-count");
  const emptyEl = document.getElementById("no-source-results");
  const resetButton = document.querySelector("[data-filter-reset]");

  if (!form || !cards.length) return;

  function selectedValues(name) {
    return Array.from(form.querySelectorAll('input[name="' + name + '"]:checked')).map(
      function (input) {
        return input.value;
      }
    );
  }

  function matches(card, statuses, types, themes) {
    const statusOk = !statuses.length || statuses.indexOf(card.dataset.status) !== -1;
    const typeOk = !types.length || types.indexOf(card.dataset.type) !== -1;
    const cardThemes = (card.dataset.themes || "").split(/\s+/).filter(Boolean);
    const themeOk =
      !themes.length ||
      themes.some(function (theme) {
        return cardThemes.indexOf(theme) !== -1;
      });
    return statusOk && typeOk && themeOk;
  }

  function applyFilters() {
    const statuses = selectedValues("status");
    const types = selectedValues("type");
    const themes = selectedValues("theme");
    let visible = 0;

    cards.forEach(function (card) {
      const show = matches(card, statuses, types, themes);
      card.hidden = !show;
      if (show) visible += 1;
    });

    if (countEl) {
      countEl.textContent = "Showing " + visible + " of " + cards.length + " sources";
    }
    if (emptyEl) {
      emptyEl.hidden = visible !== 0;
    }
  }

  form.addEventListener("change", applyFilters);

  if (resetButton) {
    resetButton.addEventListener("click", function () {
      form.querySelectorAll('input[type="checkbox"]').forEach(function (input) {
        input.checked = false;
      });
      applyFilters();
    });
  }

  applyFilters();
})();
