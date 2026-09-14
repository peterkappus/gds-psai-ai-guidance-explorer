const conflictsData = require("./conflicts");
const faqData = require("./faq");
const sourcesCatalog = require("./sourcesCatalog");

/**
 * Curated topic labels for conflict rows so we can group by topic later.
 * Keys are conflict_id values from content/conflicts.json.
 */
const CONFLICT_TOPICS = {
  "conflict-public-ai-data-rules": {
    id: "public-generative-ai",
    label: "Public generative AI",
  },
  "conflict-bias-unavoidable-vs-manageable": {
    id: "bias-fairness",
    label: "Bias and fairness",
  },
  "conflict-prompt-injection-vendor-resilience": {
    id: "prompt-injection",
    label: "Prompt injection",
  },
  "conflict-meeting-transcription": {
    id: "meeting-transcription",
    label: "Meeting transcription",
  },
  "conflict-procurement-routes-currency": {
    id: "procurement",
    label: "Procurement routes",
  },
  "conflict-cloud-first-vs-private-ai-hosting": {
    id: "hosting-cloud",
    label: "Hosting and cloud",
  },
  "conflict-voluntary-ai-cyber-cop-vs-mandatory-gov-security": {
    id: "security-assurance",
    label: "Security assurance",
  },
  "conflict-ai-transparency-when-to-disclose": {
    id: "transparency-disclosure",
    label: "Transparency and disclosure",
  },
  "conflict-adm-presumption-vs-service-manual-stack": {
    id: "adm-transparency",
    label: "ADM transparency",
  },
  "conflict-dpia-all-personal-vs-high-risk": {
    id: "dpia",
    label: "DPIA",
  },
  "conflict-separate-vs-merged-dpia-eqia": {
    id: "dpia-equality",
    label: "DPIA and equality assessments",
  },
};

const CAUSE_LABELS = {
  "different-scope": "Different scope",
  "different-audience": "Different audience",
  "different-time": "Different time",
  ambiguity: "Ambiguity",
  "true-disagreement": "True disagreement",
};

/** Compact labels for dense tables; full title stays on the link title attribute. */
const SOURCE_SHORT_LABELS = {
  "ai-playbook-uk-government": "Playbook",
  "ai-insights": "AI Insights",
  "ai-knowledge-hub-how-tos": "Knowledge Hub",
  "guidelines-ai-procurement": "AI procurement",
  "service-manual": "Service Manual",
  "technology-code-of-practice": "TCoP",
  "ai-cyber-security-code-of-practice": "AI Cyber CoP",
  "atrs-hub": "ATRS Hub",
  "ico-ai-data-protection": "ICO AI",
  "data-and-ai-ethics-framework": "Data & AI Ethics",
  "ncsc-secure-ai-system-development": "NCSC",
  "secure-by-design": "Secure by Design",
  "ethics-transparency-accountability-adm": "ADM framework",
  "introduction-to-ai-assurance": "AI assurance",
  "lga-responsibly-buying-ai": "LGA buying AI",
};

function uniqueSorted(values) {
  return [...new Set(values.filter(Boolean))].sort((a, b) =>
    a.localeCompare(b)
  );
}

function sourceByIdMap() {
  return Object.fromEntries(
    sourcesCatalog.items.map((source) => [source.id, source])
  );
}

function faqByIdMap() {
  return Object.fromEntries(faqData.items.map((item) => [item.id, item]));
}

function resolveSource(sourceId, sourcesById) {
  const source = sourcesById[sourceId];
  const title = source ? source.title : sourceId;
  return {
    id: sourceId,
    title,
    short_label: SOURCE_SHORT_LABELS[sourceId] || title,
    organisation: source ? source.organisation : null,
    url: `/sources/${sourceId}/`,
  };
}

function topicFromConflict(conflict) {
  return (
    CONFLICT_TOPICS[conflict.conflict_id] || {
      id: "uncategorised",
      label: "Uncategorised",
    }
  );
}

function topicFromFaq(faq) {
  return {
    id: faq.category_id || "uncategorised",
    label: faq.category_title || "Uncategorised",
  };
}

function relatedFaqs(conflict, faqsById) {
  return (conflict.related_faq_ids || [])
    .map((id) => faqsById[id])
    .filter(Boolean)
    .map((faq) => ({
      id: faq.id,
      question: faq.question,
      url: faq.url,
      status: faq.status,
    }));
}

function buildConflictRows(sourcesById, faqsById) {
  return (conflictsData.items || []).map((conflict) => {
    const topic = topicFromConflict(conflict);
    const sources = [];
    const seen = new Set();
    for (const position of conflict.positions || []) {
      if (!position.source_id || seen.has(position.source_id)) continue;
      seen.add(position.source_id);
      sources.push(resolveSource(position.source_id, sourcesById));
    }

    return {
      kind: "conflict",
      id: conflict.conflict_id,
      title: conflict.title,
      summary: conflict.summary,
      status: conflict.status || "open",
      topic_id: topic.id,
      topic_label: topic.label,
      likely_cause: conflict.likely_cause || null,
      likely_cause_label: CAUSE_LABELS[conflict.likely_cause] || conflict.likely_cause,
      user_guidance: conflict.user_guidance || null,
      sources,
      related_faqs: relatedFaqs(conflict, faqsById),
      positions: (conflict.positions || []).map((position) => ({
        ...position,
        source: resolveSource(position.source_id, sourcesById),
      })),
    };
  });
}

function buildGapRows(sourcesById) {
  return faqData.items
    .filter((item) => item.status === "gap" || item.status === "partial")
    .map((item) => {
      const topic = topicFromFaq(item);
      const sources = [];
      const seen = new Set();
      for (const citation of item.citations || []) {
        if (!citation.source_id || seen.has(citation.source_id)) continue;
        seen.add(citation.source_id);
        sources.push(resolveSource(citation.source_id, sourcesById));
      }

      return {
        kind: "gap",
        id: item.id,
        title: item.question,
        summary:
          item.status === "gap"
            ? "No clear cross-government answer found in incorporated sources."
            : "Only partial coverage found across incorporated sources.",
        status: item.status,
        topic_id: topic.id,
        topic_label: topic.label,
        likely_cause: null,
        likely_cause_label: null,
        user_guidance: null,
        sources,
        related_faqs: [
          {
            id: item.id,
            question: item.question,
            url: item.url,
            status: item.status,
          },
        ],
        url: item.url,
      };
    });
}

/**
 * Strict alignment: two or more sources on the same FAQ, none marked contrasting.
 */
function buildAlignmentRows(sourcesById) {
  return faqData.items
    .filter((item) => {
      const citations = item.citations || [];
      if (citations.length < 2) return false;
      if (item.hasContrastingAdvice) return false;
      if (citations.some((citation) => citation.role === "contrasting")) {
        return false;
      }
      const uniqueSources = new Set(
        citations.map((citation) => citation.source_id).filter(Boolean)
      );
      return uniqueSources.size >= 2;
    })
    .map((item) => {
      const topic = topicFromFaq(item);
      const sources = [];
      const seen = new Set();
      for (const citation of item.citations || []) {
        if (!citation.source_id || seen.has(citation.source_id)) continue;
        seen.add(citation.source_id);
        sources.push(resolveSource(citation.source_id, sourcesById));
      }

      return {
        kind: "alignment",
        id: item.id,
        title: item.question,
        summary: item.snippet || item.answer,
        status: item.status,
        topic_id: topic.id,
        topic_label: topic.label,
        likely_cause: null,
        likely_cause_label: null,
        user_guidance: null,
        sources,
        related_faqs: [
          {
            id: item.id,
            question: item.question,
            url: item.url,
            status: item.status,
          },
        ],
        url: item.url,
        sources_count: sources.length,
      };
    })
    .sort((a, b) => {
      if (b.sources_count !== a.sources_count) {
        return b.sources_count - a.sources_count;
      }
      return a.title.localeCompare(b.title);
    });
}

const sourcesById = sourceByIdMap();
const faqsById = faqByIdMap();
const conflicts = buildConflictRows(sourcesById, faqsById);
const gaps = buildGapRows(sourcesById);
const alignments = buildAlignmentRows(sourcesById);

const topics = uniqueSorted(
  [...conflicts, ...gaps, ...alignments].map((row) => row.topic_label)
).map((label) => {
  const sample = [...conflicts, ...gaps, ...alignments].find(
    (row) => row.topic_label === label
  );
  return { id: sample.topic_id, label };
});

const causes = uniqueSorted(conflicts.map((row) => row.likely_cause)).map(
  (cause) => ({
    id: cause,
    label: CAUSE_LABELS[cause] || cause,
  })
);

module.exports = {
  updated: conflictsData.updated || null,
  summary: {
    conflict_count: conflicts.length,
    open_conflict_count: conflicts.filter((row) => row.status === "open").length,
    gap_count: gaps.length,
    alignment_count: alignments.length,
    incorporated_source_count: sourcesCatalog.items.filter(
      (source) => source.status === "incorporated"
    ).length,
  },
  topics,
  causes,
  conflicts,
  gaps,
  alignments,
};
