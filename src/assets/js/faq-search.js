(() => {
  const input = document.getElementById("faq-search");
  const suggestions = document.getElementById("faq-suggestions");
  const list = document.getElementById("faq-suggestions-list");
  const dataEl = document.getElementById("faq-suggestion-data");

  if (!input || !suggestions || !list || !dataEl) return;

  const items = Array.from(
    dataEl.querySelectorAll("[data-faq-suggestion]")
  ).map((el) => ({
    question: el.dataset.question || "",
    url: el.dataset.url || "",
    sourcesCount: el.dataset.sourcesCount || "",
    contrasting: el.dataset.contrasting === "true",
  }));

  function hide() {
    suggestions.hidden = true;
    input.setAttribute("aria-expanded", "false");
    list.innerHTML = "";
  }

  function show(matches) {
    list.innerHTML = "";
    matches.forEach((m) => {
      const li = document.createElement("li");
      li.className = "app-faq-suggestion";

      const link = document.createElement("a");
      link.className = "govuk-link app-faq-suggestion__link";
      link.href = m.url;
      link.textContent = m.question;

      const meta = document.createElement("div");
      meta.className = "app-faq-suggestion__meta";

      const sources = m.sourcesCount ? `${m.sourcesCount} source` + (m.sourcesCount == 1 ? '' : 's') : "";
      meta.textContent = sources;

      if (m.contrasting) {
        const mark = document.createElement("span");
        mark.className = "app-faq-suggestion__contrasting";
        mark.textContent = "Contrasting";
        if (sources) meta.appendChild(document.createTextNode(" \u2013 "));
        meta.appendChild(mark);
      }

      li.appendChild(link);
      li.appendChild(meta);
      list.appendChild(li);
    });

    suggestions.hidden = false;
    input.setAttribute("aria-expanded", "true");
  }

  function matchItems(query) {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];

    const tokens = q.split(/\s+/).filter(Boolean);

    const scored = [];
    for (const item of items) {
      const hay = item.question.toLowerCase();
      const containsAllTokens = tokens.every((t) => hay.includes(t));
      if (!containsAllTokens) continue;

      let score = 0;
      if (hay.startsWith(q)) score += 5;
      if (hay.includes(q)) score += 2;
      score += Math.min(3, tokens.length);

      scored.push({ ...item, score });
    }

    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, 10);
  }

  // GOV.UK-ish behaviour: suggestions update as you type.
  input.addEventListener("input", (e) => {
    const matches = matchItems(e.target.value);
    if (matches.length === 0) hide();
    else show(matches);
  });

  // Close suggestions when user leaves the input (but allow clicks).
  input.addEventListener("blur", () => {
    window.setTimeout(hide, 120);
  });
})();

