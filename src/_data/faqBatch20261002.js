/**
 * FAQ additions from Service Standard, security.gov.uk AI,
 * Knowledge Hub prompts/tools, and AI Opportunities Action Plan.
 * Applied from faq.js after categories are defined.
 */
function applyFaqBatch20261002(categories, deps) {
  const {
    cite,
    SERVICE_STANDARD,
    SERVICE_STANDARD_P1,
    SERVICE_STANDARD_P9,
    SERVICE_STANDARD_P11,
    SECURITY_GOVUK_AI,
    KH_PROMPTS,
    KH_TOOLS,
    ACTION_PLAN,
    PLAYBOOK,
    HOW_TO_PROMPTS,
    SERVICE_MANUAL_AI,
    SBD,
    TCOP,
  } = deps;

  function cat(id) {
    const c = categories.find((x) => x.id === id);
    if (!c) throw new Error(`Category not found: ${id}`);
    return c;
  }
  function add(catId, question) {
    cat(catId).questions.push(question);
  }
  function patch(catId, qId, updater) {
    const q = cat(catId).questions.find((x) => x.id === qId);
    if (!q) throw new Error(`Question not found: ${catId}/${qId}`);
    updater(q);
  }

  // --- Revisit existing FAQs ---
  patch("getting-started", "write-effective-prompts", (q) => {
    q.last_reviewed = "2026-10-02";
    q.answer =
      "Treat prompting as a conversation. For everyday tasks, be specific about what you want, who it is for, format and background. For complex work, use frameworks such as RACE, GCSE, CRIT or PICSE, and chain multi-step tasks with human review between steps. Always check outputs for accuracy. You can also reuse verified prompts from the Knowledge Hub Prompt library (treat unverified prompts with caution).";
    q.citations = q.citations || [];
    if (!q.citations.some((c) => c.source_id === "ai-knowledge-hub-prompts")) {
      q.citations.push(
        cite(KH_PROMPTS, {
          role: "supporting",
          section: "Important",
          snippet:
            "'Verified' prompts have been reviewed and approved by professionals in their subject. Unverified prompts have not, so use them with caution. You must still check all prompt results for accuracy, as AI can make mistakes.",
          textStart: "Verified' prompts have been reviewed and approved",
          textEnd: "as AI can make mistakes",
        })
      );
    }
  });

  patch("delivery-assurance", "service-standard", (q) => {
    q.last_reviewed = "2026-10-02";
    q.answer =
      "Yes. AI services must meet the same standards as other technology. If you build a service, meet the Service Standard (TCoP point 13). Point 9 requires Secure by Design principles; point 11 expects teams to understand AI technologies and avoid tech choices that undermine reliable information or decisions. All government AI must be secure and resilient per security.gov.uk. Follow Secure by Design / Service Manual security expectations.";
    q.citations = [
      cite(SERVICE_MANUAL_AI, {
        role: "primary",
        section: "Using artificial intelligence (AI) in services",
        snippet:
          "Services using AI need to meet the same standards as services using other technology.",
        textStart: "Services using AI need to meet the same standards",
        textEnd: "services using other technology",
      }),
      cite(SERVICE_STANDARD_P9, {
        role: "supporting",
        section: "9. Create a secure service which protects users’ privacy",
        snippet:
          "Service teams must follow the Secure By Design principles and ensure senior leaders accountable for security are aware of risks, plan and budget for security over the life of the service, and perform due diligence on third-party software.",
        textStart: "Service teams must follow the Secure By Design principles",
        textEnd: "due diligence on the security of third-party software",
      }),
      cite(SERVICE_STANDARD_P11, {
        role: "supporting",
        section: "11. Choose the right tools and technology",
        snippet:
          "Understand how the technology they use works, including emerging technologies and artificial intelligence (AI).",
        textStart: "including emerging technologies and artificial intelligence (AI)",
        textEnd: null,
      }),
      cite(TCOP, {
        role: "supporting",
        section: "13. Meet the Service Standard",
        snippet:
          "If you’re building a service as part of your technology project or programme you will also need to meet the Service Standard",
        textStart: "you will also need to meet the Service Standard",
        textEnd: null,
      }),
      cite(PLAYBOOK, {
        role: "supporting",
        section:
          "Principle 5: You understand how to manage the full AI life cycle",
        snippet:
          "If you develop a service, you must use the government Service Standard.",
        textStart:
          "If you develop a service, you must use the government Service Standard",
        textEnd: null,
      }),
      cite(SBD, {
        role: "supporting",
        section: "Secure by Design’s wider context",
        snippet:
          "The Service Standard Point 9 advises service teams that they must follow the Secure by Design principles.",
        textStart: "they must follow the Secure by Design principles",
        textEnd: null,
      }),
      cite(SECURITY_GOVUK_AI, {
        role: "supporting",
        section: "Using AI securely",
        snippet:
          "All government AI technologies and services must be secure and resilient. They should comply with the Secure by Design principles and the government’s Cyber Security Standard.",
        textStart:
          "all government AI technologies and services must be secure and resilient",
        textEnd:
          "Secure by Design principles and the government’s Cyber Security Standard",
      }),
    ];
  });

  patch("collaboration", "other-departments", (q) => {
    q.last_reviewed = "2026-10-02";
    q.answer =
      "Join cross-government communities such as the AI community of practice, engage departments tackling similar problems, review ATRS records and published case studies, and browse the AI Knowledge Hub Tool library for tools created or bought for public-sector delivery — remembering listings are time-bound and not endorsements.";
    q.citations = q.citations || [];
    if (!q.citations.some((c) => c.source_id === "ai-knowledge-hub-tools")) {
      q.citations.push(
        cite(PLAYBOOK, {
          role: "primary",
          section: "Principle 7: You are open and collaborative",
          snippet:
            "You should make use of existing cross-government communities where there is a space to solve problems collaboratively, such as the AI community of practice. You should also engage with other government departments that are trying to address similar issues and reuse ideas, code and infrastructure.",
          textStart: "AI community of practice",
          textEnd: "reuse ideas, code and infrastructure",
        }),
        cite(KH_TOOLS, {
          role: "supporting",
          section: "Tool library",
          snippet:
            "These AI tools have been created or bought to support public sector delivery.",
          textStart: "created or bought to support public sector delivery",
          textEnd: null,
        })
      );
    }
  });

  patch("collaboration", "reuse", (q) => {
    q.last_reviewed = "2026-10-02";
    q.answer =
      "Yes — the Playbook encourages reusing ideas, code and infrastructure. The Knowledge Hub Tool library shows tools already created or bought across the public sector (with due diligence); the Prompt library lets you reuse and share prompts.";
    q.citations = q.citations || [];
    if (!q.citations.some((c) => c.source_id === "ai-knowledge-hub-tools")) {
      q.citations.push(
        cite(PLAYBOOK, {
          role: "primary",
          section: "Principle 7: You are open and collaborative",
          snippet:
            "You should also engage with other government departments that are trying to address similar issues and reuse ideas, code and infrastructure.",
          textStart: "reuse ideas, code and infrastructure",
          textEnd: null,
        }),
        cite(KH_TOOLS, {
          role: "supporting",
          section: "Important",
          snippet:
            "Where third-party tools are mentioned, this does not imply endorsement. Please carry out your own due diligence before use.",
          textStart: "this does not imply endorsement",
          textEnd: "due diligence before use",
        }),
        cite(KH_PROMPTS, {
          role: "supporting",
          section: "Prompt library",
          snippet:
            "Use this user-submitted library of AI instructions (prompts) to support your work in government.",
          textStart: "user-submitted library of AI instructions (prompts)",
          textEnd: "support your work in government",
        })
      );
    }
  });

  patch("buying-building", "buy-or-build", (q) => {
    q.last_reviewed = "2026-10-02";
    q.citations = q.citations || [];
    if (!q.citations.some((c) => c.source_id === "ai-opportunities-action-plan")) {
      q.citations.push(
        cite(ACTION_PLAN, {
          role: "supporting",
          section: "2.2 Adopt a “Scan → Pilot → Scale” approach in government",
          snippet:
            "Government should generally employ a flexible “Scan → Pilot → Scale” approach.",
          textStart: "flexible “Scan → Pilot → Scale” approach",
          textEnd: null,
        })
      );
    }
  });

  patch("security-tools", "secure-by-design-mandatory", (q) => {
    q.last_reviewed = "2026-10-02";
    q.citations = q.citations || [];
    if (!q.citations.some((c) => c.source_id === "security-govuk-ai")) {
      q.citations.push(
        cite(SECURITY_GOVUK_AI, {
          role: "supporting",
          section: "Using AI securely",
          snippet:
            "All government AI technologies and services must be secure and resilient. They should comply with the Secure by Design principles and the government’s Cyber Security Standard.",
          textStart:
            "all government AI technologies and services must be secure and resilient",
          textEnd:
            "Secure by Design principles and the government’s Cyber Security Standard",
        })
      );
    }
  });

  // --- New FAQs ---
  add("getting-started", {
    id: "prompt-library",
    question:
      "Where can I find ready-made prompts for government AI work?",
    status: "answered",
    last_reviewed: "2026-10-02",
    answer:
      "Use the AI Knowledge Hub Prompt library — a user-submitted collection of prompts for government work. Prefer verified prompts where available, still check every output for accuracy, and use Knowledge Hub prompting how-tos for how to write and structure prompts.",
    citations: [
      cite(KH_PROMPTS, {
        role: "primary",
        section: "Prompt library",
        snippet:
          "Use this user-submitted library of AI instructions (prompts) to support your work in government.",
        textStart: "user-submitted library of AI instructions (prompts)",
        textEnd: "support your work in government",
      }),
      cite(HOW_TO_PROMPTS, {
        role: "supporting",
        section: "Experimenting with prompts",
        snippet:
          "You can structure detailed prompts using frameworks to help you remember what information to include.",
        textStart: "structure detailed prompts using frameworks",
        textEnd: null,
      }),
      cite(KH_PROMPTS, {
        role: "supporting",
        section: "Important",
        snippet:
          "You must still check all prompt results for accuracy, as AI can make mistakes.",
        textStart: "check all prompt results for accuracy",
        textEnd: "as AI can make mistakes",
      }),
    ],
  });

  add("getting-started", {
    id: "prompt-library-verified",
    question:
      "Should I trust unverified prompts from the AI Knowledge Hub?",
    status: "answered",
    last_reviewed: "2026-10-02",
    answer:
      "Use caution. Verified prompts have been reviewed by subject professionals; unverified ones have not. Either way, you must check all results for accuracy because AI can make mistakes.",
    citations: [
      cite(KH_PROMPTS, {
        role: "primary",
        section: "Important",
        snippet:
          "'Verified' prompts have been reviewed and approved by professionals in their subject. Unverified prompts have not, so use them with caution.",
        textStart: "Verified' prompts have been reviewed and approved",
        textEnd: "use them with caution",
      }),
      cite(KH_PROMPTS, {
        role: "supporting",
        section: "Important",
        snippet:
          "You must still check all prompt results for accuracy, as AI can make mistakes.",
        textStart: "You must still check all prompt results for accuracy",
        textEnd: "as AI can make mistakes",
      }),
    ],
  });

  add("collaboration", {
    id: "tool-library",
    question:
      "Where can I see AI tools other public bodies are already using?",
    status: "answered",
    last_reviewed: "2026-10-02",
    answer:
      "Browse the AI Knowledge Hub Tool library for tools created or bought to support public-sector delivery, tagged by agile life-cycle phase. Treat entries as discovery aids — information can be outdated and third-party tools are not endorsements.",
    citations: [
      cite(KH_TOOLS, {
        role: "primary",
        section: "Tool library",
        snippet:
          "These AI tools have been created or bought to support public sector delivery.",
        textStart: "created or bought to support public sector delivery",
        textEnd: null,
      }),
      cite(KH_TOOLS, {
        role: "supporting",
        section: "Important",
        snippet:
          "Information reflects a specific point in time and may be outdated. Where third-party tools are mentioned, this does not imply endorsement.",
        textStart: "may be outdated",
        textEnd: "does not imply endorsement",
      }),
      cite(PLAYBOOK, {
        role: "supporting",
        section: "Principle 7: You are open and collaborative",
        snippet:
          "Engage with other government departments that are trying to address similar issues and reuse ideas, code and infrastructure.",
        textStart: "reuse ideas, code and infrastructure",
        textEnd: null,
      }),
    ],
  });

  add("collaboration", {
    id: "tool-library-endorsement",
    question:
      "Does listing a tool in the Knowledge Hub mean government endorses it?",
    status: "answered",
    last_reviewed: "2026-10-02",
    answer:
      "No. Third-party mentions do not imply endorsement. Carry out your own due diligence before use, and remember catalogue information may be outdated.",
    citations: [
      cite(KH_TOOLS, {
        role: "primary",
        section: "Important",
        snippet:
          "Where third-party tools are mentioned, this does not imply endorsement. Please carry out your own due diligence before use.",
        textStart: "this does not imply endorsement",
        textEnd: "due diligence before use",
      }),
      cite(KH_TOOLS, {
        role: "supporting",
        section: "Important",
        snippet:
          "Information reflects a specific point in time and may be outdated.",
        textStart: "specific point in time and may be outdated",
        textEnd: null,
      }),
    ],
  });

  add("security-tools", {
    id: "gov-ai-security-team",
    question:
      "Who is the Government AI Security Team and when should I contact them?",
    status: "answered",
    last_reviewed: "2026-10-02",
    answer:
      "The Government AI Security Team sits in the Government Cyber Unit. It provides governance, advice and consultancy on AI security risks and investigates technical solutions. For AI security questions, email ai.security@dsit.gov.uk. Use security.gov.uk AI resources alongside Secure by Design, the AI Cyber Security CoP, the Playbook and NCSC guidelines.",
    citations: [
      cite(SECURITY_GOVUK_AI, {
        role: "primary",
        section: "Government AI Security Team",
        snippet:
          "The Government AI Security Team is part of the Government Cyber Unit (GCU) and provides a holistic view of security risks and threats related to the use of Artificial Intelligence.",
        textStart: "provides a holistic view of security risks and threats",
        textEnd: "use of Artificial Intelligence",
      }),
      cite(SECURITY_GOVUK_AI, {
        role: "supporting",
        section: "Contact",
        snippet:
          "If you have any questions about AI security, email the team at ai.security@dsit.gov.uk.",
        textStart: "email the team at ai.security@dsit.gov.uk",
        textEnd: null,
      }),
      cite(SECURITY_GOVUK_AI, {
        role: "supporting",
        section: "Using AI securely",
        snippet:
          "All government AI technologies and services must be secure and resilient. They should comply with the Secure by Design principles and the government’s Cyber Security Standard.",
        textStart:
          "must be secure and resilient",
        textEnd: "Cyber Security Standard",
      }),
    ],
  });

  add("delivery-assurance", {
    id: "service-standard-tech-choices",
    question:
      "What does the Service Standard say about choosing AI technology?",
    status: "answered",
    last_reviewed: "2026-10-02",
    answer:
      "Point 11 requires teams to choose tools that create a high-quality service cost-effectively, understand how their technology works — including AI — preserve future choice (avoid lock-in via open standards), and consider impacts on user experience, inclusion, and the reliability of information or decisions about users.",
    citations: [
      cite(SERVICE_STANDARD_P11, {
        role: "primary",
        section: "11. Choose the right tools and technology",
        snippet:
          "Understand how the technology they use works, including emerging technologies and artificial intelligence (AI).",
        textStart: "including emerging technologies and artificial intelligence (AI)",
        textEnd: null,
      }),
      cite(SERVICE_STANDARD_P11, {
        role: "supporting",
        section: "11. Choose the right tools and technology",
        snippet:
          "Consider how the technology will impact user experience and inclusion — for example, avoid situations where your technology choices might reduce the reliability of information given to users or decisions made about them.",
        textStart: "impact user experience and inclusion",
        textEnd: "decisions made about them",
      }),
      cite(SERVICE_STANDARD_P11, {
        role: "supporting",
        section: "11. Choose the right tools and technology",
        snippet:
          "Preserve the ability to make different choices in future — for example, reducing the chances of getting locked into contracts for specific tools and suppliers by using open standards.",
        textStart: "reducing the chances of getting locked into contracts",
        textEnd: "by using open standards",
      }),
    ],
  });

  add("delivery-assurance", {
    id: "service-standard-user-needs",
    question:
      "How does the Service Standard affect whether I should use AI?",
    status: "answered",
    last_reviewed: "2026-10-02",
    answer:
      "Start from user needs (point 1): understand the problem users need solved, not a preferred solution. Combine that with Service Manual AI guidance — only use AI where there is clear evidence of a user need, and prefer established technologies when they solve the problem better.",
    citations: [
      cite(SERVICE_STANDARD_P1, {
        role: "primary",
        section: "1. Understand users and their needs",
        snippet:
          "Develop a deep understanding of users and the problem you’re trying to solve for them. Focusing on the user and the problem — rather than a particular solution — often means that you learn unexpected things about their needs.",
        textStart: "rather than a particular solution",
        textEnd: "unexpected things about their needs",
      }),
      cite(SERVICE_MANUAL_AI, {
        role: "supporting",
        section: "Deciding whether to use AI",
        snippet:
          "More established technologies might solve the problem better than AI. Only use AI where there is clear evidence of a user need.",
        textStart: "Only use AI where there is clear evidence of a user need",
        textEnd: null,
      }),
    ],
  });

  add("getting-started", {
    id: "scan-pilot-scale",
    question:
      "What is the Scan → Pilot → Scale approach to government AI adoption?",
    status: "answered",
    last_reviewed: "2026-10-02",
    answer:
      "The AI Opportunities Action Plan recommends a flexible Scan → Pilot → Scale approach: build a continually updated understanding of AI capabilities mapped to high-impact needs (Scan), rapidly prototype or light-touch procure and evaluate (Pilot), then roll successful pilots beyond organisational boundaries (Scale). Scaling needs different thinking about procurement.",
    citations: [
      cite(ACTION_PLAN, {
        role: "primary",
        section: "2.2 Adopt a “Scan → Pilot → Scale” approach in government",
        snippet:
          "Government should generally employ a flexible “Scan → Pilot → Scale” approach.",
        textStart: "flexible “Scan → Pilot → Scale” approach",
        textEnd: null,
      }),
      cite(ACTION_PLAN, {
        role: "supporting",
        section: "2.2 Adopt a “Scan → Pilot → Scale” approach in government",
        snippet:
          "SCAN – investing in building a deep and continually updated understanding of AI capabilities mapped to their highest impact challenges and opportunities.",
        textStart: "deep and continually updated understanding of AI capabilities",
        textEnd: "highest impact challenges and opportunities",
      }),
      cite(ACTION_PLAN, {
        role: "supporting",
        section: "2.2 Adopt a “Scan → Pilot → Scale” approach in government",
        snippet:
          "Scaling these successes is essential, but will require us to think differently about procurement.",
        textStart: "think differently about procurement",
        textEnd: null,
      }),
    ],
  });

  add("getting-started", {
    id: "mission-ai-leads",
    question:
      "Should each government mission have an AI lead?",
    status: "answered",
    last_reviewed: "2026-10-02",
    answer:
      "The Action Plan recommends appointing an AI lead for each mission to identify where AI could help, considering user needs from the outset, working with cross-government horizon scanning capability.",
    citations: [
      cite(ACTION_PLAN, {
        role: "primary",
        section: "2.2 Adopt a “Scan → Pilot → Scale” approach in government",
        snippet:
          "Appointing an AI lead for each mission to help identify where AI could be a solution within the mission setting, considering the user needs from the outset.",
        textStart: "AI lead for each mission",
        textEnd: "user needs from the outset",
      }),
      cite(ACTION_PLAN, {
        role: "supporting",
        section: "2.1 AI Adoption is core to delivering the government's missions",
        snippet:
          "AI should become core to how we think about delivering services, transforming citizens' experiences, and improving productivity.",
        textStart: "core to how we think about delivering services",
        textEnd: "improving productivity",
      }),
    ],
  });

  add("buying-building", {
    id: "action-plan-procurement",
    question:
      "How does the AI Opportunities Action Plan change AI procurement?",
    status: "answered",
    last_reviewed: "2026-10-02",
    answer:
      "It treats government as a major AI customer and market shaper: become a great customer, think differently about procurement to scale successes and support innovators, and move toward faster multi-stage gated procurement for pilots that adds controls as investment grows. Still follow live commercial law and advice — use Knowledge Hub / Guidelines for operational routes.",
    citations: [
      cite(ACTION_PLAN, {
        role: "primary",
        section: "The opportunity",
        snippet:
          "Government purchasing power can be a huge lever for improving public services, shaping new markets in AI, and boosting the domestic ecosystem… it will require real leadership and radical change, especially in procurement.",
        textStart: "Government purchasing power can be a huge lever",
        textEnd: "especially in procurement",
      }),
      cite(ACTION_PLAN, {
        role: "supporting",
        section: "2.2 Adopt a “Scan → Pilot → Scale” approach in government",
        snippet:
          "Scaling these successes is essential, but will require us to think differently about procurement, especially if this activity is to support the domestic startup and innovation ecosystem.",
        textStart: "think differently about procurement",
        textEnd: "domestic startup and innovation ecosystem",
      }),
      cite(ACTION_PLAN, {
        role: "supporting",
        section: "2.2 Adopt a “Scan → Pilot → Scale” approach in government",
        snippet:
          "A faster, multi-stage gated and scaling AI procurement process that enables easy and quick access to small-scale funding for pilots and only layers bureaucratic controls as the investment-size gets larger.",
        textStart: "multi-stage gated and scaling AI procurement process",
        textEnd: "as the investment-size gets larger",
      }),
    ],
  });
}

module.exports = { applyFaqBatch20261002 };
