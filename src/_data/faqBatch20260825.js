/**
 * FAQ additions from NCSC secure AI guidelines, Secure by Design,
 * ADM ethics framework, Introduction to AI assurance, and LGA responsibly buying AI.
 * Applied from faq.js after categories are defined.
 */
function applyFaqBatch(categories, deps) {
  const {
    cite,
    NCSC,
    NCSC_DESIGN,
    NCSC_DEV,
    NCSC_DEPLOY,
    SBD,
    SBD_PRINCIPLES,
    SBD_IMPL,
    ADM,
    ASSURANCE,
    LGA,
    PLAYBOOK,
    SERVICE_MANUAL_AI,
    AI_CYBER_COP,
    ICO_AI_ACCOUNTABILITY,
    DATA_ETHICS,
    GUIDELINES_AI_PROCUREMENT,
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
  patch("delivery-assurance", "service-standard", (q) => {
    q.last_reviewed = "2026-08-25";
    q.answer =
      "Yes. AI services must meet the same standards as other technology. Service Standard point 9 requires Secure by Design principles. Central government departments and ALBs must meet the Secure by Design policy when delivering digital services and technical infrastructure. Follow Secure by Design / Service Manual security expectations — including consulting security professionals for AI.";
    q.citations = q.citations || [];
    if (!q.citations.some((c) => c.source_id === "secure-by-design")) {
      q.citations.push(
        cite(SBD, {
          role: "supporting",
          section: "Secure by Design’s wider context",
          snippet:
            "The Service Standard Point 9(Create a secure service which protects users’ privacy) advises service teams that they must follow the Secure by Design principles.",
          textStart: "they must follow the Secure by Design principles",
          textEnd: null,
        }),
        cite(SBD_IMPL, {
          role: "supporting",
          section: "Implementing Secure by Design",
          snippet:
            "All central government departments and arm's length bodies (ALBs) must incorporate effective security practices and meet the Secure by Design policy when delivering and building digital services and technical infrastructure.",
          textStart:
            "must incorporate effective security practices and meet the Secure by Design policy",
          textEnd: "digital services and technical infrastructure",
        })
      );
    }
  });

  patch("delivery-assurance", "secure-ai-supply-chain", (q) => {
    q.last_reviewed = "2026-08-25";
    q.answer =
      "Assess and monitor AI supply-chain security across the life cycle. Require suppliers to meet the same standards you apply to other software; if they cannot, follow your risk policy. Treat third-party models and serialised weights as untrusted code — scan and sandbox on import. Secure by Design also requires continual due diligence on third-party platforms, software and code.";
    q.status = "answered";
    q.citations = [
      cite(NCSC_DEV, {
        role: "primary",
        section: "Secure your supply chain",
        snippet:
          "You assess and monitor the security of your AI supply chains across a system’s life cycle, and require suppliers to adhere to the same standards your own organisation applies to other software.",
        textStart: "assess and monitor the security of your AI supply chains",
        textEnd:
          "same standards your own organisation applies to other software",
      }),
      cite(NCSC_DESIGN, {
        role: "supporting",
        section:
          "Design your system for security as well as functionality and performance",
        snippet:
          "you implement scanning and isolation/sandboxing when importing third-party models or serialised weights, which should be treated as untrusted third-party code and could enable remote code execution",
        textStart:
          "scanning and isolation/sandboxing when importing third-party models",
        textEnd: "could enable remote code execution",
      }),
      cite(SBD_PRINCIPLES, {
        role: "supporting",
        section: "2. Source secure technology products",
        snippet:
          "Where third-party products are used, perform security due diligence by continually assessing platforms, software and code for security vulnerabilities.",
        textStart:
          "perform security due diligence by continually assessing platforms",
        textEnd: "security vulnerabilities",
      }),
      cite(AI_CYBER_COP, {
        role: "supporting",
        section: "Principle 7: Secure your supply chain",
        snippet:
          "Developers and System Operators shall follow secure software supply chain processes for their AI model and system development.",
        textStart: "shall follow secure software supply chain processes",
        textEnd: "AI model and system development",
      }),
    ];
  });

  patch("lawful-ethical", "automated-decisions", (q) => {
    q.last_reviewed = "2026-08-25";
    q.answer =
      "Yes, but with legal limits. Article 22 restricts solely automated decisions with legal or similarly significant effects. The Cabinet Office ADM ethics framework covers both solely automated and AI-assisted decisions and should be applied in full for best practice. Significant automated decisions should get ministerial agreement, with a senior owner for major processes. Do not treat ADM as a fix-all for complex policy problems.";
    q.citations = q.citations || [];
    if (!q.citations.some((c) => c.source_id === "ethics-transparency-accountability-adm")) {
      q.citations.push(
        cite(ADM, {
          role: "supporting",
          section: "What we mean by automated decision-making",
          snippet:
            "Automated decision-making refers to both solely automated decisions (no human judgement) and automated assisted decision-making (assisting human judgement). There are some different legal requirements for the two forms of automated decision-making. This framework should be applied in its entirety for both forms to ensure best practice.",
          textStart:
            "both solely automated decisions (no human judgement) and automated assisted decision-making",
          textEnd: "applied in its entirety for both forms",
        })
      );
    }
  });

  patch("lawful-ethical", "tell-the-public", (q) => {
    q.last_reviewed = "2026-08-25";
    q.status = "conflicted";
    q.conflict_id = "conflict-adm-presumption-vs-service-manual-stack";
    q.answer =
      "Be open about where and how algorithms and AI are used. In-scope organisations must publish ATRS records. The ADM ethics framework works on a presumption of publication for algorithms that enable automated decision-making, with plain-English explanations — exceptions need legal advice before ministerial authorisation. User-facing services also follow Service Manual rules where AI affects data or outcomes (users need not always know the underlying stack).";
    q.conflict = {
      summary:
        "ADM ethics framework: presumption of publication for ADM algorithms. Service Manual: users do not always need to know the technology stack, but must be told when AI affects data/outcomes.",
      likely_cause: "different-scope",
      user_guidance:
        "For ADM, start from presumption of publication and ATRS. For service UX, follow Service Manual disclosure rules. Do not hide AI where it affects outcomes.",
    };
    q.citations = q.citations || [];
    if (!q.citations.some((c) => c.section && c.section.includes("presumption"))) {
      q.citations.push(
        cite(ADM, {
          role: "contrasting",
          stance:
            "Presumption of publication for algorithms that enable automated decision-making, with plain-English explanations.",
          section: "5. Help users and citizens understand how it impacts them",
          snippet:
            "Work on the basis of a ‘presumption of publication’ for all algorithms that enable automated decision-making, notifying citizens when a process or service has automated decision-making with plain English explanations (all exceptions to that rule agreed with government legal advisors before ministerial authorisation).",
          textStart:
            "presumption of publication’ for all algorithms that enable automated decision-making",
          textEnd: "plain English explanations",
        })
      );
    }
  });

  patch("lawful-ethical", "dpia", (q) => {
    q.last_reviewed = "2026-08-25";
    q.status = q.status === "conflicted" ? q.status : "conflicted";
    q.conflict_id = "conflict-dpia-all-personal-vs-high-risk";
    q.conflict = {
      summary:
        "Introduction to AI assurance says all systems using personal data must carry out a DPIA. ICO AI guidance says the vast majority of AI uses are high risk and therefore trigger a DPIA, but you still assess case by case and document if you conclude it is not high risk.",
      likely_cause: "ambiguity",
      user_guidance:
        "Treat DPIA as the default for AI involving personal data. If you think a use is not high risk, document that assessment carefully and take legal/DPO advice — do not skip lightly.",
    };
    q.answer =
      "Almost always yes for AI involving personal data. The ICO says the vast majority of AI uses are high risk and trigger a DPIA; document any conclusion that a use is not. Introduction to AI assurance states all systems using personal data must carry out a DPIA. Consult the ICO before starting if residual high risk cannot be reduced. Involve your DPO early.";
    q.citations = q.citations || [];
    if (!q.citations.some((c) => c.source_id === "introduction-to-ai-assurance")) {
      q.citations.push(
        cite(ASSURANCE, {
          role: "contrasting",
          stance:
            "All systems using personal data must carry out a DPIA.",
          section:
            "5.3 Assuring data, models, systems and governance in practice",
          snippet:
            "All organisations processing data must comply with existing legal requirements, in particular, UK GDPR and the Data Protection Act 2018. All systems using personal data must carry-out a data protection impact assessment (DPIA).",
          textStart:
            "All systems using personal data must carry-out a data protection impact assessment",
          textEnd: null,
        })
      );
    }
  });

  patch("lawful-ethical", "publish-dpia-eia", (q) => {
    q.last_reviewed = "2026-08-25";
    q.status = "conflicted";
    q.conflict_id = "conflict-separate-vs-merged-dpia-eqia";
    q.conflict = {
      summary:
        "Data and AI Ethics Framework treats publishing DPIA and EIA as good practice as separate transparency artefacts. LGA guide suggests integrating DPIA with EqIA or into an AIA to streamline, provided all DPIA and PSED requirements are still met.",
      likely_cause: "different-audience",
      user_guidance:
        "Meet all DPIA and PSED substance either way. Merging documents is fine if nothing required is lost; publishing remains good practice for transparency.",
    };
    q.citations = q.citations || [];
    if (!q.citations.some((c) => c.source_id === "lga-responsibly-buying-ai")) {
      q.citations.push(
        cite(LGA, {
          role: "contrasting",
          stance:
            "Consider integrating DPIA with EqIA or into an AIA if all DPIA and PSED requirements are met.",
          section: "What does data protection law require?",
          snippet:
            "To streamline the process, please consider integrating your Data Protection Impact Assessment (DPIA) with either an Equality Impact Assessment (EqIA) or into an Algorithmic Impact Assessment (AIA, see below), provided all DPIA and PSED requirements are met.",
          textStart:
            "integrating your Data Protection Impact Assessment (DPIA) with either an Equality Impact Assessment",
          textEnd: "provided all DPIA and PSED requirements are met",
        })
      );
    }
  });

  // --- Getting started / assurance ---
  add("getting-started", {
    id: "what-is-ai-assurance",
    question: "What is AI assurance?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "AI assurance measures, evaluates and communicates how trustworthy an AI system is. It uses techniques to gather evidence that systems work as intended, understand limitations and risks, and show how those risks are mitigated — supporting justified trust among teams, users and regulators.",
    citations: [
      cite(ASSURANCE, {
        role: "primary",
        section: "3.1 The importance of trust",
        snippet:
          "Assurance is the process of measuring, evaluating and communicating something about a system or process, documentation, a product or an organisation. In the case of AI, assurance measures, evaluates and communicates the trustworthiness of AI systems.",
        textStart:
          "Assurance is the process of measuring, evaluating and communicating",
        textEnd: "trustworthiness of AI systems",
      }),
    ],
  });

  add("getting-started", {
    id: "ai-assurance-regulatory-principles",
    question:
      "How does AI assurance relate to the UK’s five AI regulatory principles?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "The white paper principles describe what outcomes AI should achieve: safety/security/robustness, transparency/explainability, fairness, accountability/governance, and contestability/redress. Assurance techniques and standards are tools for trustworthy AI that help organisations show how they meet those outcomes in practice.",
    citations: [
      cite(ASSURANCE, {
        role: "primary",
        section: "3.2 AI assurance and governance",
        snippet:
          "AI assurance will play a critical role in the implementation and operationalisation of these principles. The principles identify specific goals – the “what” - that AI systems should achieve, regardless of the sector in which they are deployed. AI assurance techniques and standards (commonly referred to as “tools for trustworthy AI”) can support industry and regulators to understand “how” to operationalise these principles in practice",
        textStart:
          "AI assurance techniques and standards (commonly referred to as “tools for trustworthy AI”)",
        textEnd: "operationalise these principles in practice",
      }),
    ],
  });

  add("getting-started", {
    id: "ai-assurance-existing-law",
    question:
      "Is there statutory AI regulation in the UK I must follow for assurance?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "There is not currently statutory AI regulation in the UK, but existing law still applies — including UK GDPR, the Equality Act 2010 and sector-specific rules. Assurance helps you demonstrate compliance with those obligations and with organisational governance.",
    citations: [
      cite(ASSURANCE, {
        role: "primary",
        section: "6.1 Steps to build AI assurance",
        snippet:
          "While there is not currently statutory AI regulation in the UK, there are existing regulations that are relevant for AI systems. For example, systems must adhere to existing regulation such as UK GDPR, the Equality Act 2010 and other industry-specific regulation.",
        textStart: "there is not currently statutory AI regulation in the UK",
        textEnd:
          "UK GDPR, the Equality Act 2010 and other industry-specific regulation",
      }),
    ],
  });

  // --- Lawful / ADM / LGA ethics-adjacent ---
  add("lawful-ethical", {
    id: "adm-framework-when",
    question:
      "When should I use the Ethics, Transparency and Accountability Framework for Automated Decision-Making?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "Use it whenever you use automated decision-making in a service — both solely automated decisions and AI-assisted decisions. Apply all seven points: test for unintended outcomes, deliver fair services, be clear who is responsible, handle data safely, help people understand impacts, stay lawful, and keep the system future-proof. Use it with existing departmental guidance.",
    citations: [
      cite(ADM, {
        role: "primary",
        section: "What we mean by automated decision-making",
        snippet:
          "This framework should be applied in its entirety for both forms to ensure best practice.",
        textStart: "applied in its entirety for both forms",
        textEnd: "ensure best practice",
      }),
      cite(ADM, {
        role: "supporting",
        section: "How to use this framework",
        snippet:
          "When you use automated decision-making in a service, you should: 1. Test to avoid any unintended outcomes or consequences. 2. Deliver fair services for all of our users and citizens. 3. Be clear who is responsible. 4. Handle data safely and protect citizens’ interests. 5. Help users and citizens understand how it impacts them. 6. Ensure that you are compliant with the law. 7. Build something that is future proof.",
        textStart: "Test to avoid any unintended outcomes or consequences",
        textEnd: "Build something that is future proof",
      }),
    ],
  });

  add("lawful-ethical", {
    id: "adm-not-fix-all",
    question:
      "Should automated decision-making be the default solution for complex policy problems?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "No. Decision-makers should not treat automated or algorithmic decision-making as a fix-all, especially for the most complex problems. Scrutinise whether ADM is appropriate; senior owners should assess risk and be confident the policy intent is best achieved that way.",
    citations: [
      cite(ADM, {
        role: "primary",
        section: "Why we need the framework",
        snippet:
          "Decision-makers should not assume that automated or algorithmic decision-making is a ‘fix-all’ solution, particularly for the most complex problems.",
        textStart:
          "should not assume that automated or algorithmic decision-making is a ‘fix-all’ solution",
        textEnd: "particularly for the most complex problems",
      }),
    ],
  });

  add("lawful-ethical", {
    id: "adm-ministerial-signoff",
    question:
      "Do significant automated decisions need ministerial agreement?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "Work on the assumption that every significant automated decision should be agreed by a minister, and that every major process or service under automation consideration has a senior owner. Officials decide on behalf of the Secretary of State, who remains accountable. Align with the Ministerial Code.",
    citations: [
      cite(ADM, {
        role: "primary",
        section: "3. Be clear who is responsible",
        snippet:
          "Work on the assumption that every significant automated decision should be agreed by a minister and all major processes and services, subject to automation consideration, should have a senior owner.",
        textStart:
          "every significant automated decision should be agreed by a minister",
        textEnd: "should have a senior owner",
      }),
      cite(DATA_ETHICS, {
        role: "supporting",
        section: "Set clear roles and responsibilities",
        snippet:
          "You must set out who is responsible at each stage of the project. This includes naming senior responsible owners (SROs)– as the primary risk owners for the project.",
        textStart:
          "You must set out who is responsible at each stage of the project",
        textEnd:
          "senior responsible owners (SROs)– as the primary risk owners for the project",
      }),
    ],
  });

  add("lawful-ethical", {
    id: "adm-presumption-publication",
    question:
      "Should we publish algorithms used for automated decision-making?",
    status: "conflicted",
    last_reviewed: "2026-08-25",
    conflict_id: "conflict-adm-presumption-vs-service-manual-stack",
    answer:
      "The ADM ethics framework starts from a presumption of publication for algorithms that enable ADM, with plain-English explanations to citizens. Exceptions need government legal advice before ministerial authorisation. That sits alongside ATRS duties and Service Manual rules that users need not always know the technology stack, but must be told when AI affects data or outcomes.",
    conflict: {
      summary:
        "ADM presumption of publication vs Service Manual ‘users need not always know the stack’ framing.",
      likely_cause: "different-scope",
      user_guidance:
        "Publish/explain ADM algorithms unless a cleared exception applies; still follow Service Manual disclosure for user-facing effects.",
    },
    citations: [
      cite(ADM, {
        role: "primary",
        section: "5. Help users and citizens understand how it impacts them",
        snippet:
          "Work on the basis of a ‘presumption of publication’ for all algorithms that enable automated decision-making, notifying citizens when a process or service has automated decision-making with plain English explanations (all exceptions to that rule agreed with government legal advisors before ministerial authorisation).",
        textStart:
          "presumption of publication’ for all algorithms that enable automated decision-making",
        textEnd: "plain English explanations",
      }),
      cite(SERVICE_MANUAL_AI, {
        role: "contrasting",
        stance:
          "Users do not always need to know what technology is used, but must understand AI effects on data and outcomes.",
        section: "Tell users when AI is being used",
        snippet:
          "Users do not always need to know what technology or software is used in a service to be able to access it. However, if you use AI in your service, you must make it clear to users how this might affect: their data; the outcome or information they receive from the service.",
        textStart:
          "Users do not always need to know what technology or software is used",
        textEnd: "the outcome or information they receive from the service",
      }),
    ],
  });

  add("lawful-ethical", {
    id: "adm-legal-signoff",
    question:
      "Do automated decision-making systems need legal sign-off?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "Yes. Ensure the system complies with necessary legislation and has full legal sign-off from relevant government legal advisors. Engage lawyers early — including on Article 22, the Equality Act and Public Sector Equality Duty.",
    citations: [
      cite(ADM, {
        role: "primary",
        section: "6. Ensure that you are compliant with the law",
        snippet:
          "Ensure that your algorithm or system adheres to the necessary legislation and has full legal sign-off from relevant government legal advisors.",
        textStart: "full legal sign-off from relevant government legal advisors",
        textEnd: null,
      }),
      cite(PLAYBOOK, {
        role: "supporting",
        section:
          "Principle 2: You use AI lawfully, ethically and responsibly",
        snippet:
          "You should seek legal advice on the development and use of AI and engage with compliance, legal and data protection experts in your organisation early in your journey, including during product development.",
        textStart:
          "You should seek legal advice on the development and use of AI",
        textEnd: "including during product development",
      }),
    ],
  });

  add("lawful-ethical", {
    id: "adm-proxy-datasets",
    question:
      "Can I use proxy or generalised social datasets for automated decisions about individuals?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "Only with extra caution and robust human oversight. Using datasets for decisions they were not intended for — such as proxy datasets or generalised social data (for example Census regional location for individual decisions) — needs additional safeguards.",
    citations: [
      cite(ADM, {
        role: "primary",
        section: "4. Handle data safely and protect citizens’ interests",
        snippet:
          "In particular, when datasets are used for decision-making purposes they were not intended for, such as proxy datasets and generalised social datasets (for example individual decisions based on regional location data from the Census), additional caution and robust human oversight is required.",
        textStart:
          "when datasets are used for decision-making purposes they were not intended for",
        textEnd: "robust human oversight is required",
      }),
    ],
  });

  add("lawful-ethical", {
    id: "adm-red-team-testing",
    question:
      "Should we red-team automated decision-making systems before go-live?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "Yes. The ADM framework recommends red-team testing on the presumption that algorithmic systems can inflict some degree of harm. Pair with rigorous staged testing, impact/risk assessments (DPIA/EIA where appropriate), and NCSC-style security evaluation before release.",
    citations: [
      cite(ADM, {
        role: "primary",
        section: "1. Test to avoid any unintended outcomes or consequences",
        snippet:
          "Do ‘red team testing’, with the presumption that all algorithms systems are capable of inflicting some degree of harm.",
        textStart: "Do ‘red team testing’",
        textEnd: "capable of inflicting some degree of harm",
      }),
      cite(NCSC_DEPLOY, {
        role: "supporting",
        section: "Release AI responsibly",
        snippet:
          "You release models, applications or systems only after subjecting them to appropriate and effective security evaluation such as benchmarking and red teaming",
        textStart:
          "only after subjecting them to appropriate and effective security evaluation",
        textEnd: "benchmarking and red teaming",
      }),
    ],
  });

  add("lawful-ethical", {
    id: "adm-quarterly-review",
    question:
      "How often should we formally review an automated decision-making system?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "Monitor continuously and set formal review points — recommended at least quarterly. Review datasets, whether the policy intent still holds, and how robust governance, transparency and explainability remain. Adapt to new risks and legal changes.",
    citations: [
      cite(ADM, {
        role: "primary",
        section: "7. Build something that is future proof",
        snippet:
          "Continuously monitor the algorithm or system, institute formal review points (recommended at least quarterly), and end user challenge to ensure it delivers the intended outcomes and mitigates against unintended consequences that may develop over time",
        textStart: "formal review points (recommended at least quarterly)",
        textEnd: "unintended consequences that may develop over time",
      }),
    ],
  });

  add("lawful-ethical", {
    id: "lga-equality-when-outsourcing",
    question:
      "If we contract out AI processing, who owns equality compliance?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "The public authority still does. Responsibility for thoroughly assessing and monitoring equality impact stays with the council even when a public function — including AI processing of data — is contracted to a third party.",
    citations: [
      cite(LGA, {
        role: "primary",
        section: "What does the PSED require?",
        snippet:
          "The responsibility for ensuring that the equality impact of policies is thoroughly assessed and monitored lies with public authorities. This is the case even when they contract out a public function such as processing data using AI-based technologies to a third-party organisation.",
        textStart: "even when they contract out a public function",
        textEnd: "to a third-party organisation",
      }),
    ],
  });

  add("lawful-ethical", {
    id: "lga-merge-dpia-eqia",
    question:
      "Can councils merge DPIA and Equality Impact Assessment for AI buys?",
    status: "conflicted",
    last_reviewed: "2026-08-25",
    conflict_id: "conflict-separate-vs-merged-dpia-eqia",
    answer:
      "The LGA guide says you may integrate DPIA with EqIA or into an Algorithmic Impact Assessment to streamline, provided every DPIA and PSED requirement is still met. Central Data and AI Ethics Framework guidance treats publishing DPIA and EIA as good practice without requiring a single merged document. Keep substance complete either way.",
    conflict: {
      summary:
        "LGA suggests integrating DPIA/EqIA/AIA; Ethics Framework frames them as separate good-practice publications.",
      likely_cause: "different-audience",
      user_guidance:
        "Merge only if all legal requirements remain satisfied; publishing for transparency is still good practice.",
    },
    citations: [
      cite(LGA, {
        role: "primary",
        section: "What does data protection law require?",
        snippet:
          "To streamline the process, please consider integrating your Data Protection Impact Assessment (DPIA) with either an Equality Impact Assessment (EqIA) or into an Algorithmic Impact Assessment (AIA, see below), provided all DPIA and PSED requirements are met.",
        textStart:
          "integrating your Data Protection Impact Assessment (DPIA) with either an Equality Impact Assessment",
        textEnd: "provided all DPIA and PSED requirements are met",
      }),
      cite(DATA_ETHICS, {
        role: "contrasting",
        stance:
          "Good practice to publish completed DPIA and EIA as transparency artefacts.",
        section: "Data protection-related transparency",
        snippet:
          "It’s good practice to publish your completed DPIA to demonstrate that you’re taking the appropriate precautions to protect personal data and ensure your system is fair.",
        textStart: "It’s good practice to publish your completed DPIA",
        textEnd: "ensure your system is fair",
      }),
    ],
  });

  add("lawful-ethical", {
    id: "lga-algorithmic-impact-assessment",
    question:
      "Do I need an Algorithmic Impact Assessment in the UK?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "Not required by UK law, but the LGA guide says you may benefit from an AIA for AI-specific and automated-decision risks, or fold AIA elements into DPIA/EqIA templates. International partners (especially EU) may expect one.",
    citations: [
      cite(LGA, {
        role: "primary",
        section: "Algorithmic Impact Assessment",
        snippet:
          "While not required by law in the UK, you may benefit from undertaking an Algorithmic Impact Assessment (AIA) that promotes investigation into AI-specific and automated decision making risks or otherwise integrating elements of AIAs into organisational DPIA and EqIA templates.",
        textStart:
          "While not required by law in the UK, you may benefit from undertaking an Algorithmic Impact Assessment",
        textEnd: "AI-specific and automated decision making risks",
      }),
      cite(ASSURANCE, {
        role: "supporting",
        section: "4.2 AI assurance mechanisms",
        snippet:
          "(Algorithmic) impact assessment: Used to anticipate the wider effects of a system/product on the environment, equality, human rights, data protection, or other outcomes.",
        textStart: "(Algorithmic) impact assessment",
        textEnd: "data protection, or other outcomes",
      }),
    ],
  });

  // --- Security ---
  add("security-tools", {
    id: "ncsc-secure-ai-lifecycle",
    question:
      "What does NCSC say about securing AI across the life cycle?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "Security must be a core requirement throughout the life cycle, not only in development. NCSC guidelines cover secure design, development, deployment, and operation/maintenance — including threat modelling, supply chain, infrastructure, responsible release, and monitoring.",
    citations: [
      cite(NCSC, {
        role: "primary",
        section: "About the guidelines",
        snippet:
          "Security must be a core requirement, not just in the development phase, but throughout the life cycle of the system.",
        textStart: "Security must be a core requirement",
        textEnd: "throughout the life cycle of the system",
      }),
    ],
  });

  add("security-tools", {
    id: "adversarial-ml-threats",
    question:
      "What is adversarial machine learning and why does it matter?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "Adversarial machine learning exploits fundamental vulnerabilities in ML components — hardware, software, workflows and supply chains — to cause unintended behaviours such as degraded performance, unauthorised actions or extraction of sensitive model information. Examples include prompt injection and data poisoning. Treat these alongside standard cyber threats.",
    citations: [
      cite(NCSC, {
        role: "primary",
        section: "Why is AI security different?",
        snippet:
          "As well as existing cyber security threats, AI systems are subject to new types of vulnerabilities. The term ‘adversarial machine learning’ (AML), is used to describe the exploitation of fundamental vulnerabilities in ML components, including hardware, software, workflows and supply chains.",
        textStart: "AI systems are subject to new types of vulnerabilities",
        textEnd: "hardware, software, workflows and supply chains",
      }),
    ],
  });

  add("security-tools", {
    id: "data-poisoning",
    question: "What is data poisoning in an AI system?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "Data poisoning deliberately corrupts training data or user feedback so the model behaves as an attacker intends. NCSC lists it alongside prompt injection as a way adversarial ML causes unintended behaviours. Sanitise inputs and feedback used for continuous learning.",
    citations: [
      cite(NCSC, {
        role: "primary",
        section: "Why is AI security different?",
        snippet:
          "There are many ways to achieve these effects, such as prompt injection attacks in the large language model (LLM) domain, or deliberately corrupting the training data or user feedback (known as ‘data poisoning’).",
        textStart: "deliberately corrupting the training data or user feedback",
        textEnd: "known as ‘data poisoning’",
      }),
      cite(NCSC_DESIGN, {
        role: "supporting",
        section:
          "Design your system for security as well as functionality and performance",
        snippet:
          "you apply appropriate checks and sanitisation of data and inputs; this includes when incorporating user feedback or continuous learning data into your model, recognising that training data defines system behaviour",
        textStart:
          "checks and sanitisation of data and inputs",
        textEnd: "training data defines system behaviour",
      }),
    ],
  });

  add("security-tools", {
    id: "ai-threat-modelling",
    question: "How should I threat-model an AI system?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "Use a holistic process covering impacts on the system, users, organisations and wider society if an AI component is compromised or behaves unexpectedly. Assess AI-specific threats, document decisions, and note that sensitive data and rising target value increase attacker interest. Secure by Design also expects threat assessment and modelling as part of a risk-driven approach.",
    citations: [
      cite(NCSC_DESIGN, {
        role: "primary",
        section: "Model the threats to your system",
        snippet:
          "As part of your risk management process, you apply a holistic process to assess the threats to your system, which includes understanding the potential impacts to the system, users, organisations, and wider society if an AI component is compromised or behaves unexpectedly. This process involves assessing the impact of AI-specific threats and documenting your decision making.",
        textStart: "you apply a holistic process to assess the threats to your system",
        textEnd: "documenting your decision making",
      }),
      cite(SBD_PRINCIPLES, {
        role: "supporting",
        section: "3. Adopt a risk-driven approach",
        snippet:
          "Establish the project’s risk appetite and maintain an assessment of cyber security risks to build protections appropriate to the evolving threat landscape.",
        textStart: "Establish the project’s risk appetite",
        textEnd: "evolving threat landscape",
      }),
    ],
  });

  add("security-tools", {
    id: "third-party-model-import",
    question:
      "How should I handle importing third-party AI models or weights?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "Treat third-party models and serialised weights as untrusted third-party code that could enable remote code execution. Scan them and use isolation/sandboxing on import. Evaluate external libraries and model providers’ security posture before you rely on them.",
    citations: [
      cite(NCSC_DESIGN, {
        role: "primary",
        section:
          "Design your system for security as well as functionality and performance",
        snippet:
          "you implement scanning and isolation/sandboxing when importing third-party models or serialised weights, which should be treated as untrusted third-party code and could enable remote code execution",
        textStart:
          "scanning and isolation/sandboxing when importing third-party models",
        textEnd: "could enable remote code execution",
      }),
    ],
  });

  add("security-tools", {
    id: "external-ai-api-controls",
    question:
      "What controls do I need when calling an external AI API?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "Apply controls to data that can leave your organisation — for example requiring users to log in and confirm before sending potentially sensitive information. Prefer departmental assured tools where policy requires it.",
    citations: [
      cite(NCSC_DESIGN, {
        role: "primary",
        section:
          "Design your system for security as well as functionality and performance",
        snippet:
          "if using an external API, you apply appropriate controls to data that can be sent to services outside of your organisation’s control, such as requiring users to log in and confirm before sending potentially sensitive information",
        textStart:
          "apply appropriate controls to data that can be sent to services outside",
        textEnd: "before sending potentially sensitive information",
      }),
    ],
  });

  add("security-tools", {
    id: "protect-ai-assets-logs",
    question: "Which AI assets should I protect, including logs?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "Protect models, data (including user feedback), prompts, software, documentation, logs and assessments — including information about unsafe capabilities and failure modes. Treat logs as sensitive data and control confidentiality, integrity and availability. Know where assets live and how to restore a known-good state.",
    citations: [
      cite(NCSC_DEV, {
        role: "primary",
        section: "Identify, track and protect your assets",
        snippet:
          "You understand the value to your organisation of your AI-related assets, including models, data (including user feedback), prompts, software, documentation, logs and assessments (including information about potentially unsafe capabilities and failure modes), recognising where they represent significant investment and where access to them enables an attacker. You treat logs as sensitive data and implement controls to protect their confidentiality, integrity and availability.",
        textStart: "You treat logs as sensitive data",
        textEnd: "confidentiality, integrity and availability",
      }),
    ],
  });

  add("security-tools", {
    id: "model-extraction-risk",
    question:
      "Can attackers steal my model or training data through the API?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "Yes — attackers may reconstruct model functionality or training data by acquiring weights directly or by querying via an application or service. Protect models and data with standard cyber controls and query-interface controls that detect and prevent access, modification and exfiltration. Consider hashes/signatures of model files and datasets.",
    citations: [
      cite(NCSC_DEPLOY, {
        role: "primary",
        section: "Protect your model continuously",
        snippet:
          "Attackers may be able to reconstruct the functionality of a model or the data it was trained on, by accessing a model directly (by acquiring model weights) or indirectly (by querying the model via an application or service).",
        textStart:
          "Attackers may be able to reconstruct the functionality of a model",
        textEnd: "querying the model via an application or service",
      }),
    ],
  });

  add("security-tools", {
    id: "secure-by-default-ai",
    question:
      "Should AI products ship with secure-by-default settings?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "Yes. Ideally the most secure setting is the only option. Where configuration is needed, the default should be broadly secure against common threats. Explain riskier capabilities and require opt-in; state what security users are responsible for.",
    citations: [
      cite(NCSC_DEPLOY, {
        role: "primary",
        section: "Make it easy for users to do the right things",
        snippet:
          "Ideally, the most secure setting will be integrated into the system as the only option. When configuration is necessary, the default option should be broadly secure against common threats (that is, secure by default).",
        textStart:
          "the default option should be broadly secure against common threats",
        textEnd: "secure by default",
      }),
    ],
  });

  add("security-tools", {
    id: "secure-by-design-mandatory",
    question:
      "Is Secure by Design mandatory for government AI services?",
    status: "conflicted",
    last_reviewed: "2026-08-25",
    conflict_id: "conflict-voluntary-ai-cyber-cop-vs-mandatory-gov-security",
    answer:
      "For central government departments and ALBs, yes — Secure by Design principles are mandatory when delivering digital services and technical infrastructure, and Service Standard point 9 says teams must follow them. They are optional for other parts of the public sector. The AI Cyber Security Code of Practice remains a voluntary industry baseline — use it to deepen practice, not as an opt-out from Secure by Design.",
    conflict: {
      summary:
        "Secure by Design is mandatory for central government/ALBs. AI Cyber Security CoP is voluntary industry guidance.",
      likely_cause: "different-audience",
      user_guidance:
        "For government services, Secure by Design / Service Manual are the baseline. Use the AI Cyber CoP for additional supply-chain and lifecycle practice.",
    },
    citations: [
      cite(SBD_PRINCIPLES, {
        role: "primary",
        section: "Overview",
        snippet:
          "As outlined in the Secure by Design policy, these principles are mandatory for government departments and arm’s length bodies (ALBs), and optional for other parts of the public sector.",
        textStart:
          "these principles are mandatory for government departments and arm’s length bodies",
        textEnd: "optional for other parts of the public sector",
      }),
      cite(AI_CYBER_COP, {
        role: "contrasting",
        stance:
          "Voluntary code; ‘shall’ means a requirement for the voluntary Code.",
        section: "Terminology",
        snippet:
          "Shall Indicates a requirement for the voluntary Code. Should Indicates a recommendation for the voluntary Code.",
        textStart: "Indicates a requirement for the voluntary Code",
        textEnd: "Indicates a recommendation for the voluntary Code",
      }),
    ],
  });

  add("security-tools", {
    id: "sbd-detect-respond",
    question:
      "What does Secure by Design expect for detect and respond?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "Design for the inevitability of vulnerabilities and incidents. Integrate logging, monitoring, alerting and response capabilities, and continually test and iterate them. NCSC similarly expects incident plans that reflect AI scenarios and monitoring of system behaviour and inputs.",
    citations: [
      cite(SBD_PRINCIPLES, {
        role: "primary",
        section: "5. Build in detect and respond security",
        snippet:
          "Design for the inevitability of security vulnerabilities and incidents. Integrate appropriate security logging, monitoring, alerting and response capabilities. These must be continually tested and iterated.",
        textStart:
          "Design for the inevitability of security vulnerabilities and incidents",
        textEnd: "continually tested and iterated",
      }),
      cite(NCSC_DEPLOY, {
        role: "supporting",
        section: "Develop incident management procedures",
        snippet:
          "The inevitability of security incidents affecting your AI systems is reflected in your incident response, escalation and remediation plans.",
        textStart:
          "The inevitability of security incidents affecting your AI systems",
        textEnd: "incident response, escalation and remediation plans",
      }),
    ],
  });

  // --- Buying / LGA / SbD procurement ---
  add("buying-building", {
    id: "lga-when-to-use-guide",
    question:
      "When should councils use the LGA Responsibly buying AI guide?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "Use it when procuring any goods or services that include AI-based technologies, or when contracting out public functions that use AI. It helps meet PSED and data protection law with role-based prompts. It does not replace ICO, EHRC or other specialist guidance. Councils typically buy rather than build AI.",
    citations: [
      cite(LGA, {
        role: "primary",
        section: "What is this guide about?",
        snippet:
          "This guide provides councils in England with questions to help them comply with the Public Sector Equality Duty (PSED) and data protection law when procuring artificial intelligence (AI) based technology or contracting out part of their public functions to an organisation that uses AI-based technologies. This guide applies to the procurement of any goods or services that include AI-based technologies.",
        textStart:
          "help them comply with the Public Sector Equality Duty (PSED) and data protection law",
        textEnd: "any goods or services that include AI-based technologies",
      }),
      cite(LGA, {
        role: "supporting",
        section: "Who is this guide for?",
        snippet:
          "This guide does not replace other, more detailed, specialist or regulator guidance, but it provides practical prompts and questions",
        textStart:
          "This guide does not replace other, more detailed, specialist or regulator guidance",
        textEnd: "practical prompts and questions",
      }),
    ],
  });

  add("buying-building", {
    id: "lga-equality-before-buy",
    question:
      "When must a council assess equality impact before buying AI?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "As early as possible and before deciding to procure. Assess impacts on people with different protected characteristics, involve an EDI officer where appropriate, present findings to decision-makers, and keep monitoring after go-live.",
    citations: [
      cite(LGA, {
        role: "primary",
        section: "What does the PSED require?",
        snippet:
          "Assess how using these technologies may impact people with different protected characteristics as early as possible and before they decide to procure them.",
        textStart:
          "as early as possible and before they decide to procure them",
        textEnd: null,
      }),
    ],
  });

  add("buying-building", {
    id: "lga-dpo-in-procurement",
    question:
      "When should a council involve its DPO in an AI procurement?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "At the earliest possible stage of procuring an AI-based technology and when developing the DPIA. Engage procurement, EDI and information governance specialists throughout commissioning and contracting.",
    citations: [
      cite(LGA, {
        role: "primary",
        section: "What does data protection law require?",
        snippet:
          "You should involve your Data Protection Officer (DPO) at the earliest possible stage of procuring an AI-based technology and in developing a DPIA.",
        textStart:
          "involve your Data Protection Officer (DPO) at the earliest possible stage",
        textEnd: "developing a DPIA",
      }),
    ],
  });

  add("buying-building", {
    id: "lga-tender-equality-dp",
    question:
      "How do I build equality and data protection into AI tenders?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "Design tendering and contract arrangements so you get the information needed to monitor impacts and keep use equitable, lawful and safe. Put equality and data protection into specifications, bid questions and contract clauses — including after variations, upgrades or new features.",
    citations: [
      cite(LGA, {
        role: "primary",
        section: "What is this guide about?",
        snippet:
          "Build equality and data protection requirements into the design of their tendering and contract arrangements so councils get the information they need to design a successful procurement process, adequately monitor the impacts of using the technology, and ensure contracts and contract monitoring processes allow them to maintain equitable, lawful and safe use.",
        textStart:
          "Build equality and data protection requirements into the design of their tendering and contract arrangements",
        textEnd: "equitable, lawful and safe use",
      }),
      cite(GUIDELINES_AI_PROCUREMENT, {
        role: "supporting",
        section:
          "9. Focus on the need to address technical and ethical limitations of AI deployment during your evaluation",
        snippet:
          "Have suppliers highlighted and/or addressed any issues of bias within the data? Do they clearly explain why their strategies are appropriate and proportionate?",
        textStart:
          "Have suppliers highlighted and/or addressed any issues of bias within the data",
        textEnd: "appropriate and proportionate",
      }),
    ],
  });

  add("buying-building", {
    id: "lga-may-not-buy",
    question:
      "Is deciding not to buy an AI product a valid outcome?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "Yes. After equality and data-protection assessments, a legitimate outcome is not proceeding if you cannot reduce, mitigate or manage the risks identified.",
    citations: [
      cite(LGA, {
        role: "primary",
        section: "Reminder",
        snippet:
          "When reading this guide and undertaking your equality and data protection impact assessments, it is a genuine possibility and legitimate outcome that you do not move ahead with the procurement or commissioning of a particular technology, because you are unable to reduce, mitigate or manage the risks you have identified.",
        textStart:
          "legitimate outcome that you do not move ahead with the procurement",
        textEnd: "unable to reduce, mitigate or manage the risks",
      }),
    ],
  });

  add("buying-building", {
    id: "sbd-in-procurement",
    question:
      "How should commercial teams apply Secure by Design when buying AI?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "Make Secure by Design a core consideration across the procurement life cycle — requirements, supplier evaluation, contract management and delivery. Use Cabinet Office modular security schedules with Secure by Design requirements where applicable, and require suppliers to complete the evaluation table when you need them to meet the principles. Involve commercial colleagues early on AI projects.",
    citations: [
      cite(SBD_IMPL, {
        role: "primary",
        section: "Guidance for commercial teams",
        snippet:
          "Secure by Design should be a core consideration throughout the procurement life cycle, from defining requirements and evaluating suppliers to contract management and service delivery.",
        textStart:
          "Secure by Design should be a core consideration throughout the procurement life cycle",
        textEnd: "contract management and service delivery",
      }),
      cite(PLAYBOOK, {
        role: "supporting",
        section: "Principle 8: You work with commercial colleagues from the start",
        snippet:
          "AI is a rapidly developing market, and you should get specific advice from commercial colleagues on the implications for your project. Reach out to them early in your journey to understand how to use AI in line with commercial requirements.",
        textStart: "you should get specific advice from commercial colleagues",
        textEnd: "in line with commercial requirements",
      }),
    ],
  });

  add("buying-building", {
    id: "sbd-source-secure-products",
    question:
      "What does Secure by Design require when buying third-party technology?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "Perform continual security due diligence on platforms, software and code. Mitigate risks and share findings with suppliers so they can improve. Pair with NCSC supply-chain expectations for AI components.",
    citations: [
      cite(SBD_PRINCIPLES, {
        role: "primary",
        section: "2. Source secure technology products",
        snippet:
          "Where third-party products are used, perform security due diligence by continually assessing platforms, software and code for security vulnerabilities. Mitigate risks and share findings with suppliers to help them improve product security.",
        textStart:
          "perform security due diligence by continually assessing platforms",
        textEnd: "help them improve product security",
      }),
    ],
  });

  add("buying-building", {
    id: "ncsc-provider-responsibility",
    question:
      "Who is responsible for security when we use third-party AI components?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "NCSC says providers of AI components should take responsibility for security outcomes of users further down the supply chain — implement controls where possible, use secure defaults, and where risks cannot be mitigated inform downstream users and advise how to use the component securely. Buyers still remain accountable for their own use under Secure by Design and data-protection law.",
    citations: [
      cite(NCSC, {
        role: "primary",
        section: "Who is responsible for developing secure AI?",
        snippet:
          "As such, in line with ‘secure by design’ principles, providers of AI components should take responsibility for the security outcomes of users further down the supply chain.",
        textStart:
          "providers of AI components should take responsibility",
        textEnd: "users further down the supply chain",
      }),
    ],
  });

  // --- Delivery / assurance ---
  add("delivery-assurance", {
    id: "ai-assurance-techniques",
    question:
      "Which AI assurance techniques should my organisation use?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "There is no silver bullet. Combine techniques across the life cycle — for example risk assessment, algorithmic impact assessment, bias audit, compliance audit, conformity assessment and formal verification — chosen for context. Low-risk cases may need fewer techniques; high-risk cases need a more robust combination.",
    citations: [
      cite(ASSURANCE, {
        role: "primary",
        section: "4.2 AI assurance mechanisms",
        snippet:
          "There will never be a silver bullet for AI assurance. Rather, multiple assurance techniques will need to be used in combination with one another across the lifecycle.",
        textStart: "There will never be a silver bullet for AI assurance",
        textEnd: "across the lifecycle",
      }),
      cite(ASSURANCE, {
        role: "supporting",
        section: "4.2 AI assurance mechanisms",
        snippet:
          "However, this also allows for a proportionate approach to assurance, with low-risk use-cases able to rely on a smaller range of assurance techniques, and high-risk use-cases utilising a more robust combination of assurance techniques.",
        textStart: "proportionate approach to assurance",
        textEnd: "more robust combination of assurance techniques",
      }),
    ],
  });

  add("delivery-assurance", {
    id: "ai-assurance-proportionate",
    question: "How do I keep AI assurance proportionate to risk?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "Match the mix of assurance techniques to context. Low-risk uses can rely on a smaller set; high-risk uses need a more robust combination. Always underpinned by governance that can escalate risks and make decisions at the right level.",
    citations: [
      cite(ASSURANCE, {
        role: "primary",
        section: "4.2 AI assurance mechanisms",
        snippet:
          "However, this also allows for a proportionate approach to assurance, with low-risk use-cases able to rely on a smaller range of assurance techniques, and high-risk use-cases utilising a more robust combination of assurance techniques.",
        textStart: "proportionate approach to assurance",
        textEnd: "more robust combination of assurance techniques",
      }),
    ],
  });

  add("delivery-assurance", {
    id: "ai-assurance-governance",
    question:
      "What governance should underpin AI assurance?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "Integrate robust organisational governance for AI: clear internal transparency and reporting, named accountability for data, escalation routes, risk management, quality assurance across the life cycle, external transparency, skills and funded assurance capability.",
    citations: [
      cite(ASSURANCE, {
        role: "primary",
        section:
          "5.3 Assuring data, models, systems and governance in practice",
        snippet:
          "As a foundation, all organisations should integrate robust organisational governance frameworks for AI systems. There are core steps organisations should build into governance processes to enable the effective evaluation and measurement of risks and biases associated with AI and to support clear and accurate communication to ensure concerns and issues are flagged.",
        textStart:
          "integrate robust organisational governance frameworks for AI systems",
        textEnd: "concerns and issues are flagged",
      }),
    ],
  });

  add("delivery-assurance", {
    id: "ai-conformity-assessment",
    question:
      "When should we use third-party conformity assessment for AI?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "Conformity assessment shows a product or system meets specified requirements before and during market use. Where you seek third-party conformity assessment, UK government policy is to use a UKAS-accredited organisation. Contingent on risk, independence matters.",
    citations: [
      cite(ASSURANCE, {
        role: "primary",
        section: "5.8 Conformity assessment",
        snippet:
          "It is UK government policy that where third-party conformity assessment services are sought, they should be obtained from an organisation accredited by UKAS.",
        textStart: "obtained from an organisation accredited by UKAS",
        textEnd: null,
      }),
    ],
  });

  add("delivery-assurance", {
    id: "red-team-before-release",
    question:
      "Should we red-team AI before release?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "Yes for security evaluation. NCSC says release only after appropriate security evaluation such as benchmarking and red teaming, and be clear about known limitations. The ADM framework also recommends red-team testing for algorithmic systems.",
    citations: [
      cite(NCSC_DEPLOY, {
        role: "primary",
        section: "Release AI responsibly",
        snippet:
          "You release models, applications or systems only after subjecting them to appropriate and effective security evaluation such as benchmarking and red teaming (as well as other tests that are out of scope for these guidelines, such as safety or fairness), and you are clear to your users about known limitations or potential failure modes.",
        textStart:
          "only after subjecting them to appropriate and effective security evaluation",
        textEnd: "known limitations or potential failure modes",
      }),
    ],
  });

  add("delivery-assurance", {
    id: "model-cards-sboms",
    question:
      "Should we document AI models with model cards or SBOMs?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "Yes. Document creation, operation and life-cycle management of models, datasets and system prompts, including training-data sources, scope, limitations, guardrails, hashes/signatures, retention, review frequency and failure modes. Model cards, data cards and SBOMs are useful structures.",
    citations: [
      cite(NCSC_DEV, {
        role: "primary",
        section: "Document your data, models and prompts",
        snippet:
          "Useful structures to help do this include model cards, data cards and software bills of materials (SBOMs). The production of comprehensive documentation supports transparency and accountability.",
        textStart:
          "Useful structures to help do this include model cards, data cards",
        textEnd: "software bills of materials (SBOMs)",
      }),
    ],
  });

  add("delivery-assurance", {
    id: "monitor-ai-inputs-outputs",
    question:
      "Should we monitor AI system inputs as well as outputs?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "Yes. Monitor outputs and performance for sudden or gradual security-relevant change, and — in line with privacy and data protection — log inputs such as prompts and queries to support audit, investigation and remediation. Secure by Design also requires detect-and-respond capabilities.",
    citations: [
      cite(NCSC, {
        role: "primary",
        section: "Secure operation and maintenance",
        snippet:
          "In line with privacy and data protection requirements, you monitor and log inputs to your system (such as inference requests, queries or prompts) to enable compliance obligations, audit, investigation and remediation in the case of compromise or misuse.",
        textStart: "you monitor and log inputs to your system",
        textEnd: "compromise or misuse",
      }),
      cite(SBD_PRINCIPLES, {
        role: "supporting",
        section: "5. Build in detect and respond security",
        snippet:
          "Integrate appropriate security logging, monitoring, alerting and response capabilities.",
        textStart:
          "security logging, monitoring, alerting and response capabilities",
        textEnd: null,
      }),
    ],
  });

  add("delivery-assurance", {
    id: "sbd-self-assessment",
    question:
      "How do teams evidence Secure by Design?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "Secure by Design is not itself an assurance process, but delivery teams should complete a self-assessment as evidence they are meeting the principles. Continuous assurance of security controls is still required throughout the service life.",
    citations: [
      cite(SBD, {
        role: "primary",
        section:
          "How organisations show they’re implementing Secure by Design",
        snippet:
          "While Secure by Design is not an assurance process, one of its principles is to continuously deliver effective security controls throughout the life of a service. Delivery teams should complete a self assessment as evidence they’re meeting the Secure by Design principles.",
        textStart: "Delivery teams should complete a self assessment",
        textEnd: "meeting the Secure by Design principles",
      }),
    ],
  });

  add("delivery-assurance", {
    id: "sbd-risk-owners",
    question:
      "Who should own cyber security risk for an AI service under Secure by Design?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "Assign senior risk owners with the experience, knowledge and authority to lead security activities across the service life cycle. Make cyber security a senior leadership consideration and resource it appropriately.",
    citations: [
      cite(SBD_PRINCIPLES, {
        role: "primary",
        section: "1. Create responsibility for cyber security risk",
        snippet:
          "Assign risk owners to be accountable for managing cyber security risks for a service throughout its life cycle. These must be senior stakeholders with the experience, knowledge and authority to lead on security activities.",
        textStart:
          "Assign risk owners to be accountable for managing cyber security risks",
        textEnd: "authority to lead on security activities",
      }),
    ],
  });

  add("delivery-assurance", {
    id: "sbd-continuous-assurance",
    question:
      "What is continuous assurance under Secure by Design?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "Implement continuous security assurance so risk owners have evidence controls work at delivery and throughout operations, and so controls stay appropriate as the service and threat landscape change. This complements AI assurance techniques for trustworthiness beyond pure cyber security.",
    citations: [
      cite(SBD_PRINCIPLES, {
        role: "primary",
        section: "9. Embed continuous assurance",
        snippet:
          "Implement continuous security assurance processes to create confidence in the effectiveness of security controls, both at the point of delivery and throughout the operational life of the service.",
        textStart: "Implement continuous security assurance processes",
        textEnd: "throughout the operational life of the service",
      }),
      cite(ASSURANCE, {
        role: "supporting",
        section: "3.1 The importance of trust",
        snippet:
          "In the case of AI, assurance measures, evaluates and communicates the trustworthiness of AI systems.",
        textStart: "assurance measures, evaluates and communicates",
        textEnd: "trustworthiness of AI systems",
      }),
    ],
  });

  add("delivery-assurance", {
    id: "lga-contract-lifecycle-monitoring",
    question:
      "Do equality and data-protection checks stop once an AI contract is signed?",
    status: "answered",
    last_reviewed: "2026-08-25",
    answer:
      "No. Considerations are not static — continue throughout the contract and use of the technology, including when AI is introduced via variations, upgrades or new features. Build monitoring clauses into contracts so you can track real-world impact.",
    citations: [
      cite(LGA, {
        role: "primary",
        section: "What is this guide about?",
        snippet:
          "Understand that these considerations and assessments are not static and that due consideration for equalities and data protection risks must occur throughout the lifecycle of a contract and use of AI-based technologies. This includes where AI is introduced during a contract variation, upgrades to products, or when new features are added.",
        textStart: "must occur throughout the lifecycle of a contract",
        textEnd: "when new features are added",
      }),
    ],
  });

  return categories;
}

module.exports = { applyFaqBatch };
