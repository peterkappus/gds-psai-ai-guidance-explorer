const PLAYBOOK_URL =
  "https://www.gov.uk/government/publications/ai-playbook-for-the-uk-government/artificial-intelligence-playbook-for-the-uk-government-html";

const PLAYBOOK = {
  id: "ai-playbook-uk-government",
  title: "AI Playbook for the UK Government",
  organisation:
    "Department for Science, Innovation and Technology (DSIT) / Government Digital Service (GDS)",
  url: PLAYBOOK_URL,
};

const INSIGHTS_GENERATIVE_AI = {
  id: "ai-insights",
  article_id: "ai-insights-generative-ai",
  title: "AI Insights: Generative AI",
  organisation: "Government Digital Service (GDS)",
  url: "https://www.gov.uk/government/publications/ai-insights/ai-insights-generative-ai-html",
};

const INSIGHTS_PROMPT_RISKS = {
  id: "ai-insights",
  article_id: "ai-insights-prompt-risks",
  title: "AI Insights: Prompt Risks",
  organisation: "Government Digital Service (GDS)",
  url: "https://www.gov.uk/government/publications/ai-insights/ai-insights-prompt-risks-html",
};

const INSIGHTS_LLM_BIAS = {
  id: "ai-insights",
  article_id: "ai-insights-llms-bias",
  title: "AI Insights: Large language models (LLMs) Bias",
  organisation: "Government Digital Service (GDS)",
  url: "https://www.gov.uk/government/publications/ai-insights/ai-insights-large-language-models-llms-bias-html",
};

const HOW_TO_PRINCIPLES = {
  id: "ai-knowledge-hub-how-tos",
  article_id: "how-to-principles",
  title: "AI Knowledge Hub: 10 principles for using AI",
  organisation: "Department for Science, Innovation and Technology (DSIT) / Incubator for AI (i.AI)",
  url: "https://ai.gov.uk/knowledge-hub/how-to/principles",
};

const HOW_TO_USE_AT_WORK = {
  id: "ai-knowledge-hub-how-tos",
  article_id: "how-to-use-ai-at-work",
  title: "AI Knowledge Hub: Using AI at work",
  organisation: "Department for Science, Innovation and Technology (DSIT) / Incubator for AI (i.AI)",
  url: "https://ai.gov.uk/knowledge-hub/how-to/how-to-use-ai-at-work",
};

const HOW_TO_PROMPTS = {
  id: "ai-knowledge-hub-how-tos",
  article_id: "how-to-experiment-with-prompts",
  title: "AI Knowledge Hub: Experimenting with prompts",
  organisation: "Department for Science, Innovation and Technology (DSIT) / Incubator for AI (i.AI)",
  url: "https://ai.gov.uk/knowledge-hub/how-to/experiment-with-prompts",
};

const HOW_TO_ETHICS = {
  id: "ai-knowledge-hub-how-tos",
  article_id: "how-to-ethics",
  title: "AI Knowledge Hub: Using AI ethically and sustainably",
  organisation: "Department for Science, Innovation and Technology (DSIT) / Incubator for AI (i.AI)",
  url: "https://ai.gov.uk/knowledge-hub/how-to/ethics",
};

const HOW_TO_BUILD_SUSTAINABLY = {
  id: "ai-knowledge-hub-how-tos",
  article_id: "how-to-ethics-building-ai",
  title: "AI Knowledge Hub: Building AI sustainably",
  organisation: "Department for Science, Innovation and Technology (DSIT) / Incubator for AI (i.AI)",
  url: "https://ai.gov.uk/knowledge-hub/how-to/ethics-building-ai",
};

const HOW_TO_DATA_READY = {
  id: "ai-knowledge-hub-how-tos",
  article_id: "how-to-making-data-ready",
  title: "AI Knowledge Hub: Making data ready for AI",
  organisation: "Department for Science, Innovation and Technology (DSIT) / Incubator for AI (i.AI)",
  url: "https://ai.gov.uk/knowledge-hub/how-to/Making-data-ready-for-AI",
};

const HOW_TO_PROCUREMENT = {
  id: "ai-knowledge-hub-how-tos",
  article_id: "how-to-procurement",
  title: "AI Knowledge Hub: Procuring AI",
  organisation: "Department for Science, Innovation and Technology (DSIT) / Incubator for AI (i.AI)",
  url: "https://ai.gov.uk/knowledge-hub/how-to/procurement",
};

const HOW_TO_MEASURE_IMPACT = {
  id: "ai-knowledge-hub-how-tos",
  article_id: "how-to-measure-impact",
  title: "AI Knowledge Hub: Measuring the impact of AI solutions",
  organisation: "Department for Science, Innovation and Technology (DSIT) / Incubator for AI (i.AI)",
  url: "https://ai.gov.uk/knowledge-hub/how-to/measure-impact",
};


const SERVICE_MANUAL_AI = {
  id: "service-manual",
  article_id: "using-ai-in-services",
  title: "Service Manual: Using artificial intelligence (AI) in services",
  organisation: "Government Digital Service (GDS)",
  url: "https://www.gov.uk/service-manual/technology/using-artificial-intelligence-ai-in-services",
};

const SERVICE_MANUAL_POINT_9 = {
  id: "service-manual",
  article_id: "service-standard-point-9",
  title: "Service Manual: Create a secure service which protects users’ privacy",
  organisation: "Government Digital Service (GDS)",
  url: "https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service",
};

const TCOP = {
  id: "technology-code-of-practice",
  title: "Technology Code of Practice",
  organisation: "Cabinet Office / Government Digital Service (GDS)",
  url: "https://www.gov.uk/guidance/the-technology-code-of-practice",
};

const AI_CYBER_COP = {
  id: "ai-cyber-security-code-of-practice",
  title: "Code of Practice for the Cyber Security of AI",
  organisation: "Department for Science, Innovation and Technology (DSIT)",
  url: "https://www.gov.uk/government/publications/ai-cyber-security-code-of-practice/code-of-practice-for-the-cyber-security-of-ai",
};

const GUIDELINES_AI_PROCUREMENT = {
  id: "guidelines-ai-procurement",
  title: "Guidelines for AI procurement",
  organisation:
    "Office for Artificial Intelligence / Department for Science, Innovation and Technology (DSIT)",
  url: "https://www.gov.uk/government/publications/guidelines-for-ai-procurement/guidelines-for-ai-procurement",
};

function cite(source, fields) {
  return {
    source_id: source.id,
    article_id: source.article_id || null,
    source_title: source.title,
    organisation: source.organisation,
    documentUrl: source.url,
    ...fields,
  };
}

/**
 * FAQ entries cited from incorporated UK public sector AI guidance.
 * Prefer `citations[]` (multi-source). Legacy single-snippet fields are
 * normalised to a Playbook citation on export.
 */
const categories = [
    {
      id: "getting-started",
      title: "Getting started",
      questions: [
        {
          id: "what-is-ai-limitations",
          question:
            "What is AI, and what are its main limitations in a government context?",
          status: "answered",
          last_reviewed: "2026-08-04",
          answer:
            "Learn what AI can and cannot do before using it. Systems currently lack reasoning and contextual awareness, are not guaranteed to be accurate, and — for generative models — produce probabilistic, human-like output without understanding meaning.",
          citations: [
            cite(PLAYBOOK, {
              role: "primary",
              section:
                "Principle 1: You know what AI is and what its limitations are",
              snippet:
                "AI systems currently lack reasoning and contextual awareness and their limitations vary depending on the tools you use and the context in which they operate. AI systems are also not guaranteed to be accurate.",
              textStart:
                "AI systems currently lack reasoning and contextual awareness",
              textEnd: "AI systems are also not guaranteed to be accurate",
            }),
            cite(INSIGHTS_GENERATIVE_AI, {
              role: "supporting",
              section: "How generative AI works",
              snippet:
                "these models do not understand the content or meaning of the words beyond how an input set of numbers may most likely translate into an output set of numbers, and subsequently into streams of words. This means that there are limitations on what these models can reasonably do. You must consider that these are probabilistic models, and, despite producing human-like output, they are not at all sentient.",
              textStart:
                "these models do not understand the content or meaning of the words",
              textEnd: "they are not at all sentient",
            }),
          ],
        },
        {
          id: "right-tool-for-the-job",
          question:
            "When is AI the right tool for the job, and when should I use something else?",
          status: "answered",
          last_reviewed: "2026-08-07",
          answer:
            "Decide using judgement: AI helps with summarising, themes, drafting support and idea generation, but struggles with high-accuracy or context-heavy decisions. Prefer augmentation over replacing judgement, and use a simpler non-AI tool when it would work just as well.",
          citations: [
            cite(HOW_TO_USE_AT_WORK, {
              role: "primary",
              section: "When to use AI",
              snippet:
                "AI is good at: summarising long documents; finding common themes across multiple documents; suggesting improvements to drafts you've written; restructuring or reformatting existing content; generating initial ideas or options to consider. AI struggles with: tasks that need high accuracy; understanding your specific context or organisational priorities; making decisions that need professional judgement; providing current information unless you give it the latest sources.",
              textStart: "AI is good at:",
              textEnd: "unless you give it the latest sources",
            }),
            cite(HOW_TO_PRINCIPLES, {
              role: "supporting",
              section: "Use the right tool for the job",
              snippet:
                "Choose the most appropriate technology for your needs. Be open to AI solutions, but always consider if the problem could be solved more easily with traditional or simpler technologies.",
              textStart:
                "always consider if the problem could be solved more easily",
              textEnd: "traditional or simpler technologies",
            }),
            cite(PLAYBOOK, {
              role: "supporting",
              section: "Principle 6: You use the right tool for the job",
              snippet:
                "However, you should also be open to the conclusion that, sometimes, AI is not the best solution for your problem: it may be more easily solved with more established technologies.",
              textStart:
                "sometimes, AI is not the best solution for your problem",
              textEnd: "more easily solved with more established technologies",
            }),
          ],
        },
        {
          id: "write-effective-prompts",
          question: "How do I write effective prompts for AI assistants?",
          status: "answered",
          last_reviewed: "2026-08-07",
          answer:
            "Treat prompting as a conversation. For everyday tasks, be specific about what you want, who it is for, format and background. For complex work, use frameworks such as RACE, GCSE, CRIT or PICSE, and chain multi-step tasks with human review between steps. Always check outputs for accuracy.",
          citations: [
            cite(HOW_TO_PROMPTS, {
              role: "primary",
              section: "Write simple prompts for everyday tasks",
              snippet:
                "To write a good prompt: be specific about what you want - use direct language and action words like 'write', 'analyse', 'create' or 'list'; be specific about who it's for - describe your audience and their background so the AI uses the right tone and level of detail; be specific about the format - word count, structure (email, bullet points, table) and tone; give relevant background - include details the AI needs to give you a useful answer.",
              textStart: "be specific about what you want",
              textEnd: "give you a useful answer",
            }),
            cite(HOW_TO_PROMPTS, {
              role: "primary",
              section: "Write detailed prompts for complex tasks",
              snippet:
                "You can structure detailed prompts using frameworks to help you remember what information to include. Use the RACE framework for focused tasks. Use the GCSE framework when you have source documents. Use the CRIT framework for strategic or creative tasks. Use the PICSE framework for iterative workflows.",
              textStart: "structure detailed prompts using frameworks",
              textEnd: "PICSE framework for iterative workflows",
            }),
            cite(HOW_TO_PROMPTS, {
              role: "supporting",
              section: "Experimenting with prompts",
              snippet:
                "Always check AI output for accuracy, as it can give false information, outdated details or biased outputs.",
              textStart: "Always check AI output for accuracy",
              textEnd: "false information, outdated details or biased outputs",
            }),
          ],
        },
        {
          id: "augment-vs-automate",
          question:
            "Should AI augment my work or automate tasks independently?",
          status: "answered",
          last_reviewed: "2026-08-07",
          answer:
            "Prefer augmentation — AI supports you while you stay in control — for work needing judgement, creativity or context. Use automation for well-defined repetitive tasks, and still review outputs. AI cannot replace professional judgement or responsibility.",
          citations: [
            cite(HOW_TO_USE_AT_WORK, {
              role: "primary",
              section: "How AI should support your work",
              snippet:
                "AI can support your work in two ways: support and enhance your work while you stay in control (augmentation); complete tasks independently while you review output (automation). Augmentation is the most common and valuable use of AI for professional work.",
              textStart:
                "support and enhance your work while you stay in control (augmentation)",
              textEnd:
                "Augmentation is the most common and valuable use of AI for professional work",
            }),
            cite(HOW_TO_USE_AT_WORK, {
              role: "supporting",
              section: "Using AI at work",
              snippet:
                "AI cannot replace your professional judgement or responsibility. Use it to support your work, not make decisions.",
              textStart:
                "AI cannot replace your professional judgement or responsibility",
              textEnd: "not make decisions",
            }),
          ],
        },
        {
          id: "verify-ai-outputs",
          question: "How should I check and verify AI outputs before I use them?",
          status: "answered",
          last_reviewed: "2026-08-07",
          answer:
            "Match checking effort to risk: sense-check against your expertise, source-check citations, verify numbers, and get expert review for important or public-facing content. For official content you must review for correctness and quality — you remain responsible as if you wrote it.",
          citations: [
            cite(HOW_TO_USE_AT_WORK, {
              role: "primary",
              section: "How to check outputs",
              snippet:
                "You might need to: sense check - does this align with your knowledge and experience? Does the logic make sense?; source check - verify (cross-reference) any cited sources, references, or legislation; check the numbers - verify statistics, dates, and figures against original sources or datasets; check with experts - ask colleagues or subject matter experts to review important or public-facing content.",
              textStart:
                "sense check - does this align with your knowledge and experience",
              textEnd: "review important or public-facing content",
            }),
            cite(HOW_TO_USE_AT_WORK, {
              role: "supporting",
              section: "Review and approve AI content",
              snippet:
                "If you use AI to create or change official content, you must: review the content for correctness and quality; make sure it meets required standards before publishing or sharing. You're responsible for AI-generated content as if you created it yourself.",
              textStart:
                "review the content for correctness and quality",
              textEnd: "as if you created it yourself",
            }),
            cite(HOW_TO_PRINCIPLES, {
              role: "supporting",
              section: "Understand AI and its limits",
              snippet:
                "AI outputs are not always accurate, you must verify them and manage potential harm.",
              textStart:
                "AI outputs are not always accurate, you must verify them",
              textEnd: "manage potential harm",
            }),
          ],
        },
        {
          id: "use-ai-ethically-day-to-day",
          question: "How do I use AI ethically and sustainably day to day?",
          status: "answered",
          last_reviewed: "2026-08-07",
          answer:
            "Follow your department’s AI policies, review outputs for accuracy/fairness/accessibility, avoid putting personal or identifiable information into unsuitable tools, be transparent about AI use, and prefer the smallest adequate model with short, necessary prompts.",
          citations: [
            cite(HOW_TO_ETHICS, {
              role: "primary",
              section: "Use AI responsibly",
              snippet:
                "You must check and follow your department’s AI policies, as there may be specific tools or approaches you should use. When using AI you must review all content and check: the information is correct; users or groups are treated fairly and equally; outputs follow accessibility rules.",
              textStart:
                "You must check and follow your department’s AI policies",
              textEnd: "outputs follow accessibility rules",
            }),
            cite(HOW_TO_ETHICS, {
              role: "primary",
              section: "Protect sensitive information",
              snippet:
                "Use systems provided by your department for government work, and do not include any content with personal or identifiable information.",
              textStart:
                "do not include any content with personal or identifiable information",
              textEnd: null,
            }),
            cite(HOW_TO_ETHICS, {
              role: "supporting",
              section: "Use AI sustainably",
              snippet:
                "If you do need AI, if your model allows it, pick the smallest one which will do what you need. Keep your prompts short, clear and direct; use as few prompts as possible; only use AI when needed.",
              textStart: "pick the smallest one which will do what you need",
              textEnd: "only use AI when needed",
            }),
          ],
        },
        {
          id: "good-use-cases",
          question: "What kinds of AI use cases work well in government?",
          answer:
            "Use cases should be led by business and user needs. Focus on problems that only AI can solve well, or where AI offers significant advantages — for example pattern detection in large datasets, complex dynamic decisions, or personalisation.",
          snippet:
            "Once you’ve identified the challenges and opportunities through user research, focus on use cases that can only be solved by AI or where AI offers significant advantages over existing techniques.",
          section: "Identifying use cases for AI",
          textStart:
            "focus on use cases that can only be solved by AI",
          textEnd: "significant advantages over existing techniques",
        },
        {
          id: "use-cases-to-avoid",
          question: "Which AI use cases should I avoid?",
          answer:
            "Avoid fully automated decision making for significant decisions, and do not use AI on its own in high-risk areas that could harm health, safety, fundamental rights or the environment.",
          snippet:
            "These include but are not limited to: fully automated decision making: be cautious about any use case involving significant decisions, such as those involving someone’s health or safety. high-risk or high-impact applications: AI should not be used on its own in high-risk areas which could cause harm to someone’s health, safety, fundamental rights or the environment",
          section: "Use cases to avoid",
          textStart: "fully automated decision making",
          textEnd:
            "harm to someone’s health, safety, fundamental rights or the environment",
        },
        {
          id: "governance-before-first-project",
          question:
            "Do I need an AI strategy or governance board before I start my first project?",
          answer:
            "Support structures do not need to be fully mature before your first project, but you should have enough control to use AI safely. Establish strategy, principles, governance, communication, sourcing and training as you go.",
          snippet:
            "These structures do not need to be fully mature before your first project. Your experience in your first AI project will shape the way you organise these structures.",
          section: "Creating the AI support structure",
          textStart:
            "These structures do not need to be fully mature before your first project",
          textEnd:
            "shape the way you organise these structures",
        },
        {
          id: "team-skills",
          question: "What skills and roles do I need on an AI project team?",
          answer:
            "Build a multidisciplinary team covering user needs, delivery, data, engineering, design, and legal/commercial/security/ethics expertise. Balance technical and domain expertise and include diverse viewpoints to help spot bias.",
          snippet:
            "Your team should include or be able to collaborate with: business leaders and experts who understand the context and impact on users and services; data scientists who understand the relevant data, how to use it effectively, and how to build and train and test models; software engineers who can build and integrate solutions; user researchers and designers who can help understand user needs and design compelling experiences; legal, commercial and security colleagues, as well as ethics and data privacy experts, who can help you make your AI solution safe and responsible",
          section: "Building the team",
          textStart:
            "legal, commercial and security colleagues, as well as ethics and data privacy experts",
          textEnd: "make your AI solution safe and responsible",
        },
        {
          id: "training",
          question: "Where can civil servants get training on AI?",
          answer:
            "Free AI courses are available on Civil Service Learning and through Government Campus learning frameworks. Senior civil servants can also use the Digital Excellence Programme AI course.",
          snippet:
            "AI courses are freely available within Civil Service Learning, as well as a series of AI courses from the Government Campus which can be accessed through the learning frameworks.",
          section: "Learning resources",
          textStart:
            "AI courses are freely available within Civil Service Learning",
          textEnd: "accessed through the learning frameworks",
        },
      ],
    },
    {
      id: "lawful-ethical",
      title: "Lawful, ethical and responsible use",
      questions: [
        {
          id: "process-personal-data",
          question: "Can I use AI to process personal data?",
          answer:
            "Yes, but only lawfully and with data protection advice from the start. AI systems can process personal data, so you must protect it, comply with data protection law, and minimise privacy intrusion from the outset.",
          snippet:
            "You should seek data protection advice on your use of AI. This may be from your lawyers or your data protection officer. AI systems can process personal data, so you need to consider how you protect this personal data, be compliant with data protection legislation, and minimise the risk of privacy intrusion from the outset.",
          section: "Principle 2: You use AI lawfully, ethically and responsibly",
          textStart: "You should seek data protection advice on your use of AI",
          textEnd: "minimise the risk of privacy intrusion from the outset",
        },
        {
          id: "dpia",
          question:
            "Do I need a Data Protection Impact Assessment (DPIA) before using AI?",
          answer:
            "Before implementing AI solutions you need to undertake a DPIA. UK GDPR also requires a DPIA for certain high-risk processing, and the ICO requires one when using innovative technologies.",
          snippet:
            "Before implementing AI solutions, you need to undertake a data protection impact assessment (DPIA). This involves an assessment of data protection and privacy risks, and the implementation of appropriate technical and organisational measures to sufficiently mitigate them.",
          section: "Lawfulness and purpose limitation",
          textStart:
            "Before implementing AI solutions, you need to undertake a data protection impact assessment (DPIA)",
          textEnd: "sufficiently mitigate them",
        },
        {
          id: "reuse-personal-data",
          question:
            "Can I reuse existing personal data to train or run an AI system?",
          answer:
            "Only if the new purpose is compatible with the original purpose for collection. Assess expectations, data type, impact on people, and whether extra safeguards are needed.",
          snippet:
            "AI systems often reuse personal data for new purposes that are different from those for which it was originally collected. This may cause tension with the purpose limitation of the UK GDPR. Repurposing of personal data is only legitimate if a new purpose is ‘compatible’ with the purpose for which the data was originally collected.",
          section: "Lawfulness and purpose limitation",
          textStart:
            "Repurposing of personal data is only legitimate if a new purpose is",
          textEnd:
            "purpose for which the data was originally collected",
        },
        {
          id: "automated-decisions",
          question:
            "Can AI make automated decisions that affect people?",
          answer:
            "Solely automated decisions with legal or similarly significant effects are restricted under UK GDPR Article 22. Where AI affects someone’s legal status or rights, it must only support decisions made by a human.",
          snippet:
            "Article 22 currently prohibits decision(s) based solely on automated processing that have legal or similarly significant consequences for individuals. Services using AI that affect a person’s legal status or their legal rights must only use AI to support decisions that must be made by a human decision maker.",
          section: "Human oversight",
          textStart:
            "Article 22 currently prohibits decision(s) based solely on automated processing",
          textEnd: "made by a human decision maker",
        },
        {
          id: "human-oversight",
          question:
            "How much human oversight do I need when using AI in decision making?",
          answer:
            "You need meaningful human control at the right stages, including validation of high-risk decisions and ways for users to report issues and trigger human review.",
          snippet:
            "You need to monitor the AI’s behaviour and have plans in place to prevent any harmful effects on users. This includes ensuring that humans validate any high-risk decisions influenced by AI and that you have strategies for meaningful intervention.",
          section: "Principle 4: You have meaningful human control at the right stages",
          textStart:
            "ensuring that humans validate any high-risk decisions influenced by AI",
          textEnd: "strategies for meaningful intervention",
        },
        {
          id: "tell-the-public",
          question:
            "Do I need to tell the public when we are using AI or algorithms?",
          answer:
            "Yes. Be open about where and how algorithms and AI are used in official duties, and clearly identify automated responses such as chatbot replies.",
          snippet:
            "You should be open with the public about where and how algorithms and AI systems are being used in official duties. If you’re a central government department or an arm’s length body within scope, you’re required to use the Algorithmic Transparency Recording Standard (ATRS).",
          section: "Principle 7: You are open and collaborative",
          textStart:
            "You should be open with the public about where and how algorithms and AI systems are being used",
          textEnd: "Algorithmic Transparency Recording Standard (ATRS)",
        },
        {
          id: "atrs",
          question:
            "Do I need to use the Algorithmic Transparency Recording Standard (ATRS)?",
          answer:
            "Central government departments and in-scope arm’s length bodies must use ATRS for algorithmic tools in decision-making. Other public bodies are encouraged to use it too.",
          snippet:
            "If you’re a central government department or an arm’s length body within scope, you’re required to use the Algorithmic Transparency Recording Standard (ATRS). This means you must document information about any algorithmic tools you use in decision-making processes and make it clearly accessible to the public.",
          section: "Principle 7: You are open and collaborative",
          textStart:
            "you’re required to use the Algorithmic Transparency Recording Standard (ATRS)",
          textEnd: "make it clearly accessible to the public",
        },
        {
          id: "bias-fairness",
          question: "How do I manage bias and fairness in an AI system?",
          status: "conflicted",
          last_reviewed: "2026-08-04",
          conflict_id: "conflict-bias-unavoidable-vs-manageable",
          answer:
            "Treat bias as an expected property of systems trained on human text, and manage it continuously across the lifecycle — including MLOps gates — rather than as a one-off clean-up.",
          conflict: {
            summary:
              "AI Insights says bias in LLMs is fundamentally unavoidable. The Playbook tells you to consider and manage all sources of bias across the lifecycle, without stating that bias cannot be eliminated.",
            likely_cause: "different-audience",
            user_guidance:
              "Read together: expect inherited bias, and still run continuous mitigation and evaluation.",
          },
          citations: [
            cite(INSIGHTS_LLM_BIAS, {
              role: "primary",
              section: "Reducing bias in LLMs",
              snippet:
                "effective bias management requires continuous integration into MLOps workflows, with evaluation running at every stage from development through production monitoring.",
              textStart:
                "effective bias management requires continuous integration into MLOps workflows",
              textEnd: "development through production monitoring",
            }),
            cite(PLAYBOOK, {
              role: "contrasting",
              stance:
                "Consider all potential sources of bias throughout the development life cycle.",
              section:
                "Principle 2: You use AI lawfully, ethically and responsibly",
              snippet:
                "AI models are trained on data which may include biased or harmful materials. As a result, AI systems may display biases and produce harmful outputs, such as unfair, prejudicial or derogatory representations of groups or individuals. You should consider all potential sources of bias throughout the development life cycle, including unrepresentative data sets and deployment scenarios that have unfair or undesirable impacts.",
              textStart:
                "AI models are trained on data which may include biased or harmful materials",
              textEnd: "unfair or undesirable impacts",
            }),
            cite(INSIGHTS_LLM_BIAS, {
              role: "contrasting",
              stance:
                "Bias in LLMs is fundamentally unavoidable because they learn from human-written text.",
              section: "Sources of bias in LLMs",
              snippet:
                "Bias in LLMs is fundamentally unavoidable because they learn from human-written text which contains centuries of accumulated societal biases. Rather than random errors that can be filtered out, these represent systematic patterns reflecting how different groups perceive and describe the world.",
              textStart: "Bias in LLMs is fundamentally unavoidable",
              textEnd: "centuries of accumulated societal biases",
            }),
          ],
        },
        {
          id: "equality-human-rights",
          question:
            "What equality and human rights issues should I consider when using AI?",
          answer:
            "Consider Equality Act and Public Sector Equality Duty obligations, and whether AI may affect Convention rights such as privacy or freedom of expression. Assess equality impacts early.",
          snippet:
            "Lawyers can help you navigate the equality issues raised by the use of AI in government – for example, obligations arising under the Equality Act 2010 and the Public Sector Equality Duty. Conducting an assessment of the equality impacts of your use of AI can also be one way to guard against bias, which is particularly important in the context of AI.",
          section: "Equality issues",
          textStart:
            "obligations arising under the Equality Act 2010 and the Public Sector Equality Duty",
          textEnd: "guard against bias",
        },
        {
          id: "legal-advice",
          question: "Do I need legal advice before starting an AI project?",
          answer:
            "Yes — seek legal advice early on development and use of AI, including equalities, fairness, intellectual property and other legal issues. Explain aims, capabilities and risks when you contact lawyers.",
          snippet:
            "Your use of AI tools must be lawful and responsible. You should seek legal advice on the development and use of AI and engage with compliance, legal and data protection experts in your organisation early in your journey, including during product development.",
          section: "Principle 2: You use AI lawfully, ethically and responsibly",
          textStart:
            "You should seek legal advice on the development and use of AI",
          textEnd: "including during product development",
        },
      ],
    },
    {
      id: "security-tools",
      title: "Security and safe use of tools",
      questions: [
        {
          id: "chatgpt-official-info",
          question:
            "Can I put official or unpublished information into public tools like ChatGPT?",
          status: "conflicted",
          last_reviewed: "2026-08-07",
          conflict_id: "conflict-public-ai-data-rules",
          answer:
            "Do not put unpublished official information into public AI tools. Follow department policy. Free/public services may reuse what you submit; paid enterprise tools with DPAs may handle sensitive data — but that is not a green light for public ChatGPT-style tools. Prefer departmental systems and never put personal/identifiable content into unsuitable tools.",
          conflict: {
            summary:
              "Playbook bans unpublished official info in public AI apps. Insights emphasises org policy and provider reuse. Knowledge Hub how-tos say follow department policy, avoid personal/identifiable content, and note that paid enterprise tools with DPAs can often handle sensitive information — creating scope tension across public vs assured tools.",
            likely_cause: "different-scope",
            user_guidance:
              "Playbook ban for public/unassured tools; department guidance for assured enterprise tools; do not conflate the two.",
          },
          citations: [
            cite(HOW_TO_ETHICS, {
              role: "primary",
              section: "Protect sensitive information",
              snippet:
                "Use systems provided by your department for government work, and do not include any content with personal or identifiable information.",
              textStart:
                "do not include any content with personal or identifiable information",
              textEnd: null,
            }),
            cite(PLAYBOOK, {
              role: "contrasting",
              stance:
                "Must not enter official information into public AI applications unless published or cleared for publication.",
              section: "Public AI applications and web services",
              snippet:
                "When using public AI applications, you must not enter official information unless it has been published or is cleared for publication.",
              textStart:
                "you must not enter official information unless it has been published",
              textEnd: "cleared for publication",
            }),
            cite(INSIGHTS_GENERATIVE_AI, {
              role: "contrasting",
              stance:
                "Act in line with organisation policies; information provided to free services may be used by the provider.",
              section:
                "Public generative AI applications and web endpoints",
              snippet:
                "you must make sure you’re acting in line with the policies of your organisation … while the use of these services may be free of charge, you should be aware that any information provided to these services may be used by the provider",
              textStart:
                "you must make sure you’re acting in line with the policies",
              textEnd: "may be used by the provider",
            }),
            cite(HOW_TO_USE_AT_WORK, {
              role: "contrasting",
              stance:
                "Paid enterprise tools with DPAs can often handle personal and sensitive information safely — check departmental guidance.",
              section: "Using AI in government",
              snippet:
                "paid versions of tools (such as, Copilot Enterprise, or Gemini Pro) have data protection agreements. This means they can often handle personal and sensitive information safely. Check your department's guidance to understand what each tool can handle.",
              textStart:
                "paid versions of tools (such as, Copilot Enterprise, or Gemini Pro) have data protection agreements",
              textEnd:
                "Check your department's guidance to understand what each tool can handle",
            }),
          ],
        },
        {
          id: "embedded-ai",
          question:
            "Can I use Microsoft Copilot, Slack GPT, or similar embedded AI features at work?",
          status: "answered",
          last_reviewed: "2026-08-07",
          answer:
            "Only after you understand architecture, vendor mitigations, and what organisational data the service can see and how it is processed or transmitted. Check departmental guidance for what each tool can handle; speak with your security team first.",
          citations: [
            cite(INSIGHTS_GENERATIVE_AI, {
              role: "primary",
              section: "Integrated generative AI applications",
              snippet:
                "Before enabling a service, you must understand what data is visible to integrated AI services, and how that data is consumed, processed, and potentially transmitted or communicated externally.",
              textStart:
                "you must understand what data is visible to integrated AI services",
              textEnd: "transmitted or communicated externally",
            }),
            cite(PLAYBOOK, {
              role: "supporting",
              section: "Embedded AI applications",
              snippet:
                "Before adopting any of these products it’s important to understand the underlying architecture of the solution, and what mitigations the vendor has put in place for the inherent risks associated with AI.",
              textStart:
                "Before adopting any of these products it’s important to understand the underlying architecture",
              textEnd: "inherent risks associated with AI",
            }),
            cite(HOW_TO_USE_AT_WORK, {
              role: "supporting",
              section: "Using AI in government",
              snippet:
                "paid versions of tools (such as, Copilot Enterprise, or Gemini Pro) have data protection agreements. This means they can often handle personal and sensitive information safely. Check your department's guidance to understand what each tool can handle.",
              textStart:
                "paid versions of tools (such as, Copilot Enterprise, or Gemini Pro) have data protection agreements",
              textEnd:
                "Check your department's guidance to understand what each tool can handle",
            }),
          ],
        },
        {
          id: "transcription-tools",
          question: "Are AI meeting transcription tools allowed?",
          status: "conflicted",
          last_reviewed: "2026-08-07",
          conflict_id: "conflict-meeting-transcription",
          answer:
            "Treat third-party transcription joiners as a serious data-leakage risk. The Playbook says organisers should ban third-party tools up front; Knowledge Hub how-tos say obtain participant consent before AI transcription or summarisation. Prefer approved tools, get consent, and do not treat consent as a substitute for the ban on unassured third-party joiners.",
          conflict: {
            summary:
              "Playbook: state that third-party meeting transcription tools are not allowed. Knowledge Hub Using AI at work: ask for consent before using AI to transcribe, summarise, or process the discussion.",
            likely_cause: "different-scope",
            user_guidance:
              "Default to the Playbook ban for unassured third-party tools; consent is additional, not a replacement.",
          },
          citations: [
            cite(PLAYBOOK, {
              role: "contrasting",
              stance:
                "Organisers should state up front that third-party meeting transcription tools are not allowed.",
              section: "Embedded AI applications",
              snippet:
                "These present a serious risk of data leakage as they silently upload meeting recordings to an AI service for transcription and analysis. When hosting virtual meetings, organisers should verify the identity of all attendees and state up front that the use of third-party meeting transcription tools is not allowed.",
              textStart: "These present a serious risk of data leakage",
              textEnd:
                "third-party meeting transcription tools is not allowed",
            }),
            cite(HOW_TO_USE_AT_WORK, {
              role: "contrasting",
              stance:
                "Ask for consent before using AI to transcribe, summarise, or process a discussion.",
              section: "AI content and Freedom of Information",
              snippet:
                "If using AI in group meetings, ask for consent from participants before using AI to transcribe, summarise, or process the discussion.",
              textStart:
                "ask for consent from participants before using AI to transcribe",
              textEnd: "process the discussion",
            }),
          ],
        },
                {
          id: "hosting-choices",
          question:
            "Should I use a public AI API, a privately hosted model, or a managed platform?",
          status: "conflicted",
          last_reviewed: "2026-08-10",
          conflict_id: "conflict-cloud-first-vs-private-ai-hosting",
          answer:
            "Start from Cloud First and consider public cloud, but choose private or tightly controlled hosting when data sensitivity or model control requires it. Public APIs still send data to a provider; private hosting keeps data in an environment you own.",
          conflict: {
            summary:
              "Technology Code of Practice: consider public cloud first. AI Playbook: private hosting keeps organisational data in an environment you own.",
            likely_cause: "different-scope",
            user_guidance:
              "Document why private hosting is needed when departing from Cloud First defaults.",
          },
          citations: [
            cite(TCOP, {
              role: "contrasting",
              stance: "Consider using public cloud solutions first under Cloud First policy.",
              section: "5. Use cloud first",
              snippet:
                "Consider using public cloud solutions first as stated in the Cloud First policy.",
              textStart: "Consider using public cloud solutions first",
              textEnd: "as stated in the Cloud First policy",
            }),
            cite(PLAYBOOK, {
              role: "contrasting",
              stance: "Private hosting keeps data in an environment you own.",
              section: "Privately hosted AI models",
              snippet:
                "By running a model in your own private cloud infrastructure, you ensure that data never leaves an environment that you own.",
              textStart:
                "By running a model in your own private cloud infrastructure",
              textEnd: "data never leaves an environment that you own",
            }),
          ],
        },
        {
          id: "main-security-risks",
          question:
            "What are the main security risks of using AI in government?",
          answer:
            "AI-specific risks include data/model poisoning, data leakage, insecure AI tooling, prompt injection, perturbation attacks and hallucinations, as well as amplification of existing cyber risks.",
          snippet:
            "Some threats – such as data poisoning, perturbation attacks, prompt injections and hallucinations – are specific to AI. However, AI systems can also amplify generic risks such as phishing and cyber attacks.",
          section: "Principle 3: You know how to use AI securely",
          textStart:
            "data poisoning, perturbation attacks, prompt injections and hallucinations",
          textEnd: "amplify generic risks such as phishing and cyber attacks",
        },
        {
          id: "data-leakage",
          question:
            "How do I stop an AI system from leaking personal or sensitive data?",
          answer:
            "Control what data the model can access, prefer approaches that preserve user access controls (for example RAG/in-context learning), and apply additional security controls when using organisational data.",
          snippet:
            "If you use your own data with an AI model, you immediately increase the data security risk and you need to apply additional security controls to stop data leakage and privacy violations.",
          section: "Working with your organisational data",
          textStart:
            "you need to apply additional security controls to stop data leakage",
          textEnd: "privacy violations",
        },
        {
          id: "prompt-injection",
          question:
            "How should I handle prompt injection and other generative AI-specific threats?",
          status: "conflicted",
          last_reviewed: "2026-08-04",
          conflict_id: "conflict-prompt-injection-vendor-resilience",
          answer:
            "Assume prompts can subvert system instructions. Do not rely on secret prompt structure or vendor resilience alone — add filtering, logging, human oversight, and continuous re-testing as models change.",
          conflict: {
            summary:
              "The Playbook describes an architectural inability to distinguish user prompts from system instructions. AI Insights says most vendor solutions are quite resilient to related vulnerabilities, while still requiring continuous vigilance and non-secret defences.",
            likely_cause: "ambiguity",
            user_guidance:
              "Treat vendor resilience as helpful, not sufficient. Retain Playbook assumptions about prompt subversion.",
          },
          citations: [
            cite(INSIGHTS_PROMPT_RISKS, {
              role: "primary",
              section: "Prompt injection",
              snippet:
                "Our defences should not rely on secret knowledge. For example, the position of the user input in a prompt. Whether it is located above or below other system instructions. This is so we may avoid the “ignore the above instruction” type of attempt.",
              textStart:
                "Our defences should not rely on secret knowledge",
              textEnd: "above or below other system instructions",
            }),
            cite(INSIGHTS_PROMPT_RISKS, {
              role: "primary",
              section: "Vigilance",
              snippet:
                "The price of peace of mind in generative AI-based systems is continuous vigilance. Systems are rarely impenetrable.",
              textStart:
                "The price of peace of mind in generative AI-based systems is continuous vigilance",
              textEnd: "Systems are rarely impenetrable",
            }),
            cite(PLAYBOOK, {
              role: "contrasting",
              stance:
                "A generative AI model cannot distinguish user prompts from system instructions; attackers can circumvent instructions.",
              section: "Prompt injection",
              snippet:
                "Fundamentally, a generative AI model cannot distinguish between the user prompt and these system instructions because both are just seen as input to the model. A hacker can exploit this flaw by crafting special prompts that circumvent the system instructions, causing the model to respond in an unintended way.",
              textStart:
                "a generative AI model cannot distinguish between the user prompt and these system instructions",
              textEnd: "respond in an unintended way",
            }),
            cite(INSIGHTS_PROMPT_RISKS, {
              role: "contrasting",
              stance:
                "Most vendor solutions are quite resilient, but organisations remain responsible for protection.",
              section: "Prompt injection",
              snippet:
                "Most vendor solutions are quite resilient to these vulnerabilities, but it is our responsibility to ensure that we are safe and protected.",
              textStart:
                "Most vendor solutions are quite resilient to these vulnerabilities",
              textEnd: "our responsibility to ensure that we are safe and protected",
            }),
          ],
        },
        {
          id: "prompt-injection-vs-jailbreaking",
          question:
            "What is the difference between prompt injection and jailbreaking?",
          status: "answered",
          last_reviewed: "2026-08-04",
          answer:
            "Both manipulate LLMs, but at different levels: jailbreaking aims at the model’s internal safety constraints; prompt injection aims at unauthorised data or behaviour via crafted inputs.",
          citations: [
            cite(INSIGHTS_PROMPT_RISKS, {
              role: "primary",
              section: "Jailbreaking",
              snippet:
                "While both jailbreaking and prompt injection can be used to manipulate LLMs, they operate at different levels and have distinct goals: jailbreaking is focused on gaining access to the model’s internal workings; whereas prompt injection is focused on manipulating the model’s output through cleverly designed input prompts.",
              textStart:
                "jailbreaking is focused on gaining access to the model’s internal workings",
              textEnd: "cleverly designed input prompts",
            }),
            cite(INSIGHTS_PROMPT_RISKS, {
              role: "supporting",
              section: "Prompt injection",
              snippet:
                "This is a mechanism which manipulates LLM inputs to return unintended responses by crafting specific prompts that exploit the language model’s response mechanisms. It is an attempt to gain unauthorised access to data or behaviour, either returning information to which the user is not entitled or invoking methods or instructions that the user is not authorised to execute.",
              textStart:
                "manipulates LLM inputs to return unintended responses",
              textEnd: "the user is not authorised to execute",
            }),
          ],
        },
        {
          id: "hallucinations",
          question:
            "Can I trust generative AI outputs, or do they hallucinate?",
          status: "answered",
          last_reviewed: "2026-08-07",
          answer:
            "Do not trust generative AI uncritically. Check outputs with sense checks, source checks and expert review matched to risk; for official content you must review quality yourself. Normative guidance is clear that models can invent plausible but false content and correctness is not guaranteed.",
          citations: [
            cite(HOW_TO_USE_AT_WORK, {
              role: "primary",
              section: "How to check outputs",
              snippet:
                "You might need to: sense check - does this align with your knowledge and experience? Does the logic make sense?; source check - verify (cross-reference) any cited sources, references, or legislation; check the numbers - verify statistics, dates, and figures against original sources or datasets; check with experts - ask colleagues or subject matter experts to review important or public-facing content.",
              textStart:
                "sense check - does this align with your knowledge and experience",
              textEnd: "review important or public-facing content",
            }),
            cite(PLAYBOOK, {
              role: "supporting",
              section: "Hallucinations",
              snippet:
                "Fundamentally, generative AI models cannot be trusted to produce factual content. Any generative AI services that output generated content directly to the public – for example, an LLM-powered chatbot giving advice on a government website – would be prone to hallucination and could lead to someone being misled about a government service, policy or point of law.",
              textStart:
                "generative AI models cannot be trusted to produce factual content",
              textEnd:
                "misled about a government service, policy or point of law",
            }),
            cite(INSIGHTS_GENERATIVE_AI, {
              role: "supporting",
              section: "Testing generative AI solutions",
              snippet:
                "Generative AI systems are fallible and the correctness of their responses is not guaranteed. These systems are probabilistic models which predict the likeliest outputs for given inputs. They generate responses that have a high measure of plausibility based on the data that they have processed. This means that they can, and do, make errors.",
              textStart:
                "the correctness of their responses is not guaranteed",
              textEnd: "they can, and do, make errors",
            }),
          ],
        },
      ],
    },
    {
      id: "buying-building",
      title: "Buying and building",
      questions: [
        {
          id: "buy-or-build",
          question: "Should I buy an AI product or build one in-house?",
          status: "answered",
          last_reviewed: "2026-08-07",
          answer:
            "Choose a route that fits the need — exchange schemes, pro-bono pilots, competitive flexible procedure, framework call-off, or standard procurement — and get commercial advice early. Pilots are not exempt from procurement law; you must still follow the Procurement Act 2023 and consider data protection and security from the start.",
          citations: [
            cite(HOW_TO_PROCUREMENT, {
              role: "primary",
              section: "Choose your procurement route",
              snippet:
                "Based on your needs you have a range of options available to you: If you wish to add specific technical expertise to your team temporarily, find out about Exchange schemes; If you wish to explore frontier technology where no proven solution exists, find out about Pro-bono pilot competitions; If you wish to select a supplier based on working prototypes they build during competition, find out about Competitive Flexible Procedure; If you wish to buy standard tools and solutions quickly from pre-approved suppliers, find out about Framework call-off; If you wish to procure when other routes do not fit or contract value requires full competitive tendering, find out about Standard procurement.",
              textStart: "Based on your needs you have a range of options",
              textEnd: "Standard procurement",
            }),
            cite(GUIDELINES_AI_PROCUREMENT, {
              role: "supporting",
              section:
                "AI-specific considerations within the procurement process",
              snippet:
                "As a general principle any AI procurement should be investigated with the mindset of “how could AI technologies potentially benefit us?” rather than “how can we make our problem fit an AI system solution?”.",
              textStart: "how could AI technologies potentially benefit us",
              textEnd:
                "how can we make our problem fit an AI system solution",
            }),
            cite(HOW_TO_PROCUREMENT, {
              role: "supporting",
              section: "Procuring AI",
              snippet:
                "Despite these unique characteristics, you must still: follow the Procurement Act 2023; consider data protection and security from the start; ensure fair competition (or document why you're using direct award); assess value for money; document your procurement decisions. AI procurement is not exempt from procurement law.",
              textStart: "you must still: follow the Procurement Act 2023",
              textEnd: "AI procurement is not exempt from procurement law",
            }),
            cite(PLAYBOOK, {
              role: "supporting",
              section: "Specifying your requirements",
              snippet:
                "This might be an off-the-shelf product, an existing technology with bolt-on AI elements (paid or free), outsourcing AI builds (if applicable), or co-creating AI with suppliers.",
              textStart:
                "off-the-shelf product, an existing technology with bolt-on AI elements",
              textEnd: "co-creating AI with suppliers",
            }),
          ],
        },
        {
          id: "procure-ai-route",
          question:
            "How do I choose a procurement route for an AI solution?",
          status: "conflicted",
          last_reviewed: "2026-08-07",
          conflict_id: "conflict-procurement-routes-currency",
          answer:
            "Match the route to the problem using current commercial practice (Exchange schemes, pro-bono pilots, competitive flexible procedure, framework call-off, or standard procurement) and follow the Procurement Act 2023. Older Guidelines still list useful vehicles (G-Cloud, DOS, AI DPS, innovation contests) but route names and framing have moved on — get commercial advice on what is live today.",
          conflict: {
            summary:
              "Knowledge Hub Procuring AI organises modern routes under the Procurement Act 2023. Guidelines for AI procurement (2020) emphasise G-Cloud, DOS, Spark DPS, GovTech Catalyst, Innovation Partnerships and the CCS AI DPS.",
            likely_cause: "different-time",
            user_guidance:
              "Prefer Knowledge Hub for current route framing; use Guidelines for enduring method. Confirm live frameworks with commercial colleagues.",
          },
          citations: [
            cite(HOW_TO_PROCUREMENT, {
              role: "primary",
              stance:
                "Choose among Exchange schemes, Pro-bono pilots, Competitive Flexible Procedure, Framework call-off, or Standard procurement.",
              section: "Choose your procurement route",
              snippet:
                "Based on your needs you have a range of options available to you: Exchange schemes; Pro-bono pilot competitions; Competitive Flexible Procedure; Framework call-off; Standard procurement.",
              textStart: "Based on your needs you have a range of options",
              textEnd: "Standard procurement",
            }),
            cite(GUIDELINES_AI_PROCUREMENT, {
              role: "contrasting",
              stance:
                "Consider frameworks (G-Cloud, DOS, Spark DPS), innovation contests, Innovation Partnerships, and the CCS AI DPS.",
              section: "Procurement approach and vehicle",
              snippet:
                "Framework agreements including G-Cloud, Digital Outcomes and Specialists, and the Spark Dynamic Purchasing System (DPS) are useful starting points to consider. Innovation-oriented procurement procedures provide opportunities to accelerate the adoption of new technologies within government… The Dynamic Purchasing System for AI from Crown Commercial Service is the first example of this kind of novel approach.",
              textStart:
                "Framework agreements including G-Cloud, Digital Outcomes and Specialists",
              textEnd:
                "Dynamic Purchasing System for AI from Crown Commercial Service",
            }),
            cite(HOW_TO_PROCUREMENT, {
              role: "supporting",
              section: "Procuring AI",
              snippet:
                "Common myths: \"It's just a pilot so procurement rules don't apply\"; \"Innovation means we can skip competitive process\". Get commercial and legal advice early. AI procurement is not exempt from procurement law.",
              textStart:
                "It's just a pilot so procurement rules don't apply",
              textEnd: "AI procurement is not exempt from procurement law",
            }),
          ],
        },
        {
          id: "data-assessment-before-ai-procurement",
          question:
            "Do I need a data assessment before starting an AI procurement?",
          status: "answered",
          last_reviewed: "2026-08-07",
          answer:
            "Yes. Do not spend time on AI procurement if relevant data will not be available. Run a data discovery before going to market, put data governance in place from the start, and if assessment is incomplete make a full data check a tender requirement.",
          citations: [
            cite(GUIDELINES_AI_PROCUREMENT, {
              role: "primary",
              section:
                "3. Conduct a data assessment before starting your procurement process",
              snippet:
                "Availability of relevant data is often a prerequisite for any AI system, so time should not be spent discussing AI procurement if no data will be available. Ensure data governance mechanisms are in place from the start of the procurement process. Assess whether relevant data will be available for the project.",
              textStart:
                "time should not be spent discussing AI procurement if no data will be available",
              textEnd:
                "Assess whether relevant data will be available for the project",
            }),
            cite(GUIDELINES_AI_PROCUREMENT, {
              role: "primary",
              section: "Data assessment and governance",
              snippet:
                "Ensure that a discovery into your data is conducted before you go to market. If a thorough assessment of the data proves difficult or has not been made, make it a requirement in the invitation-to-tender to conduct a comprehensive check of the data the AI system will use to base its decisions upon.",
              textStart:
                "a discovery into your data is conducted before you go to market",
              textEnd:
                "comprehensive check of the data the AI system will use",
            }),
          ],
        },
        {
          id: "ai-procurement-problem-statement",
          question:
            "Should AI procurement requirements describe the problem or prescribe a solution?",
          status: "answered",
          last_reviewed: "2026-08-07",
          answer:
            "Use a clear problem statement and output-based requirements so suppliers can propose the best approach. Avoid over-specifying a solution; prioritise iterative development in the invitation to tender.",
          citations: [
            cite(GUIDELINES_AI_PROCUREMENT, {
              role: "primary",
              section:
                "6. Establish the right route to market and focus on the challenge rather than a specific solution",
              snippet:
                "Provide a clear problem statement, rather than detailed specifications for a solution. Tell suppliers about the situation or challenge, and let them propose a solution that meets your needs. Prioritise an iterative approach to product development and reflect this accordingly in the invitation to tender.",
              textStart:
                "Provide a clear problem statement, rather than detailed specifications for a solution",
              textEnd: "reflect this accordingly in the invitation to tender",
            }),
            cite(GUIDELINES_AI_PROCUREMENT, {
              role: "primary",
              section: "Drafting your requirement",
              snippet:
                "Use output-based requirements in your invitation-to-tender that focus on describing the challenges and opportunities you are facing. This will allow suppliers to determine which technologies are most appropriate for your requirements.",
              textStart:
                "Use output-based requirements in your invitation-to-tender",
              textEnd:
                "which technologies are most appropriate for your requirements",
            }),
          ],
        },
        {
          id: "ai-impact-assessment-procurement",
          question:
            "What should an AI impact assessment cover when buying AI?",
          status: "answered",
          last_reviewed: "2026-08-07",
          answer:
            "Start the impact assessment at design stage and revisit it at key decisions. Cover user needs and public benefit, socio-economic impacts, technical/process consequences, data quality and bias, unintended consequences, and whole-of-life costs — and state public benefit as a main driver in procurement documentation.",
          citations: [
            cite(GUIDELINES_AI_PROCUREMENT, {
              role: "primary",
              section: "AI Impact assessment",
              snippet:
                "Your AI impact assessment should be initiated at the project design stage. Your AI impact assessment should outline: Your user needs and the public benefit of your AI system; Human and socio-economic impacts of your AI system; Consequences for your existing technical and procedural landscape; Data quality and any potential inaccuracy or bias; Any potential unintended consequences; Whole-of-life cost considerations, including ongoing support and maintenance requirements.",
              textStart:
                "Your AI impact assessment should be initiated at the project design stage",
              textEnd: "ongoing support and maintenance requirements",
            }),
            cite(GUIDELINES_AI_PROCUREMENT, {
              role: "supporting",
              section:
                "4. Assess the benefits and risks of AI deployment",
              snippet:
                "Explain in your procurement documentation that the public benefit is a main driver of your decision-making process when assessing proposals. Set out clearly in your procurement documentation why you consider AI to be relevant to the problem, and be open to alternative solutions.",
              textStart:
                "the public benefit is a main driver of your decision-making process",
              textEnd: "be open to alternative solutions",
            }),
          ],
        },
        {
          id: "ai-procurement-market-engagement",
          question:
            "How should I engage the market before buying an AI system?",
          status: "answered",
          last_reviewed: "2026-08-07",
          answer:
            "Engage AI suppliers early in planning, reach a wide mix including SMEs and VCSEs, and keep competition open. Share the same information with all suppliers so none gains a preferential advantage.",
          citations: [
            cite(GUIDELINES_AI_PROCUREMENT, {
              role: "primary",
              section:
                "5. Engage effectively with the market from the outset",
              snippet:
                "Engage with AI suppliers early and within your planning phase. Reach out in various ways to a wide variety of AI suppliers. Encourage an open environment that supports competition in the AI ecosystem.",
              textStart:
                "Engage with AI suppliers early and within your planning phase",
              textEnd: "supports competition in the AI ecosystem",
            }),
            cite(GUIDELINES_AI_PROCUREMENT, {
              role: "supporting",
              section: "Preliminary Market Engagement",
              snippet:
                "All preliminary market engagement must observe the principles of public procurement and be handled in such a way that no supplier gains a preferential advantage. In practice, this means not setting the technical specification to suit a particular solution or supplier and making sure any information shared is also available during the procurement process.",
              textStart: "no supplier gains a preferential advantage",
              textEnd:
                "any information shared is also available during the procurement process",
            }),
          ],
        },
        {
          id: "avoid-black-box-ai-procurement",
          question:
            "How do I avoid black-box algorithms and vendor lock-in when buying AI?",
          status: "answered",
          last_reviewed: "2026-08-07",
          answer:
            "Make explainability and interpretability design criteria so your team (and future suppliers) can understand results. That reduces lock-in by making it easier to continue or rebuild with another supplier; also build exit and portability into requirements from the start.",
          citations: [
            cite(GUIDELINES_AI_PROCUREMENT, {
              role: "primary",
              section:
                "8. Avoid Black Box algorithms and vendor lock in",
              snippet:
                "Encourage explainability and interpretability of algorithms and make this one of your design criteria. This means using methods and techniques that allow the results to be understood by your team. Highly ‘explainable’ outputs from your AI system will be able to be interpreted by your team, and by other suppliers. This will also make it more likely for you to be able to engage with other suppliers to continue or build upon your AI system in the future, limiting the risk of vendor lock-in.",
              textStart:
                "Encourage explainability and interpretability of algorithms",
              textEnd: "limiting the risk of vendor lock-in",
            }),
            cite(PLAYBOOK, {
              role: "supporting",
              section: "Specifying your requirements",
              snippet: "consider strategies to avoid vendor lock-in",
              textStart: "consider strategies to avoid vendor lock-in",
              textEnd: null,
            }),
          ],
        },
        {
          id: "evaluate-ai-suppliers",
          question:
            "What should I look for when evaluating AI supplier tenders?",
          status: "answered",
          last_reviewed: "2026-08-07",
          answer:
            "Use a multidisciplinary evaluation team. Look for ethics approaches, accountability for algorithm outputs, bias mitigation, reproducibility, testing under varied conditions, defined performance, security, and the skills and diversity of the delivery team. Expect approaches to evolve — AI delivery is iterative.",
          citations: [
            cite(GUIDELINES_AI_PROCUREMENT, {
              role: "primary",
              section: "3. Selection, Evaluation and Award",
              snippet:
                "Robust practices may include, but are not limited to: Having an internal AI ethics approach, with examples of how it has been applied to design, develop, and deploy AI-powered solutions; Processes to ensure accountability over outputs of algorithms; Avoiding outputs that could be unfairly discriminatory; Designing for reproducibility; Testing the model under a range of conditions; Defining acceptable model performance; Robust and proportionate security provision. As part of the evaluation process, also review the specialist skills, qualifications and diversity of the team that will develop and deploy the AI system.",
              textStart: "Having an internal AI ethics approach",
              textEnd:
                "diversity of the team that will develop and deploy the AI system",
            }),
            cite(GUIDELINES_AI_PROCUREMENT, {
              role: "supporting",
              section:
                "9. Focus on the need to address technical and ethical limitations of AI deployment during your evaluation",
              snippet:
                "Have suppliers highlighted and/or addressed any issues of bias within the data? Do they clearly explain why their strategies are appropriate and proportionate? Does their governance approach meet your requirements? Have the appropriate technical standards been adhered to?",
              textStart:
                "Have suppliers highlighted and/or addressed any issues of bias within the data",
              textEnd:
                "Have the appropriate technical standards been adhered to",
            }),
          ],
        },
        {
          id: "ai-procurement-lifecycle-contract",
          question:
            "What lifecycle and end-of-life requirements should AI contracts include?",
          status: "answered",
          last_reviewed: "2026-08-07",
          answer:
            "Treat procurement as lifespan management, not a one-off buy: require ongoing model monitoring, knowledge transfer and training for non-specialists, support and hosting, process-based governance/auditability, and defined end-of-contract roles for the system and data.",
          citations: [
            cite(GUIDELINES_AI_PROCUREMENT, {
              role: "primary",
              section:
                "10. Consider the lifecycle management of the AI system",
              snippet:
                "Consider during AI procurement that lifespan testing, not a one-time decision, is required. Ensure that knowledge transfer and training is part of your requirement. Ensure that you make training and explanations for non-specialists that might need to understand the AI system part of your requirement. Ensure you have the appropriate ongoing support and hosting arrangements in place.",
              textStart:
                "lifespan testing, not a one-time decision, is required",
              textEnd: "ongoing support and hosting arrangements in place",
            }),
            cite(GUIDELINES_AI_PROCUREMENT, {
              role: "primary",
              section: "Model testing",
              snippet:
                "Testing the model on an ongoing basis is necessary to maintain its accuracy. An inaccurate model can result in erroneous decisions that negatively impact citizens. Therefore, establish with the supplier how the efficacy of the model will be monitored once deployed.",
              textStart:
                "Testing the model on an ongoing basis is necessary to maintain its accuracy",
              textEnd:
                "how the efficacy of the model will be monitored once deployed",
            }),
            cite(GUIDELINES_AI_PROCUREMENT, {
              role: "supporting",
              section: "End-of-life",
              snippet:
                "Consider what the end-of-life processes for your AI system and the data should look like. Defining end-of-contract roles and processes for both the contracting authority and the supplier is important. Ensure the contract includes such considerations.",
              textStart:
                "end-of-life processes for your AI system and the data",
              textEnd: "Ensure the contract includes such considerations",
            }),
          ],
        },
        {
          id: "measure-ai-impact",
          question: "How do I measure the impact of an AI solution?",
          status: "answered",
          last_reviewed: "2026-08-07",
          answer:
            "Plan evaluation early with a baseline and Theory of Change. Measure benefit/ROI, quality, efficiency, satisfaction, usage and cost during development and after release. After release you must evaluate regularly to confirm the solution still meets user needs.",
          citations: [
            cite(HOW_TO_MEASURE_IMPACT, {
              role: "primary",
              section: "How to approach impact evaluation",
              snippet:
                "Make sure impact evaluation is included in the design of your product throughout its life cycle, for example: plan your evaluation strategy early so you can align delivery with continuous feedback; include evaluation metrics in objectives and key results; develop a Theory of Change; establish a baseline so you can compare information from before the solution was implemented.",
              textStart: "plan your evaluation strategy early",
              textEnd:
                "compare information from before the solution was implemented",
            }),
            cite(HOW_TO_MEASURE_IMPACT, {
              role: "supporting",
              section: "Measure impact after release",
              snippet:
                "After release you must do regular evaluations to understand overall impact make sure the model is continuing to meet user needs",
              textStart: "After release you must do regular evaluations",
              textEnd: "continuing to meet user needs",
            }),
          ],
        },
        {
          id: "make-data-ready-for-ai",
          question: "How do I make government datasets ready for AI?",
          status: "answered",
          last_reviewed: "2026-08-07",
          answer:
            "Prepare data intentionally across technical optimisation, data/metadata quality, ownership and access, and legal/security/ethics. Use the published AI-ready guidelines, self-assessment checklist and action plan; data use must be lawful, secure and trustworthy.",
          citations: [
            cite(HOW_TO_DATA_READY, {
              role: "primary",
              section: "What to do next",
              snippet:
                "Read the Guidelines and best practices for making government datasets ready for AI to gain an understanding of what makes data AI-ready. Identify datasets in your organisation that could support AI use cases. Use the self-assessment checklist to evaluate whether your datasets are AI-ready. Follow the AI-ready data action plan presented in the guidance to address technical, governance or legal barriers.",
              textStart:
                "Use the self-assessment checklist to evaluate whether your datasets are AI-ready",
              textEnd: "technical, governance or legal barriers",
            }),
            cite(HOW_TO_DATA_READY, {
              role: "supporting",
              section: "What does ‘AI-ready’ data mean?",
              snippet:
                "organisations should consider the following aspects to help ensure their datasets are prepared effectively for AI: Technical optimisation; Data and metadata quality; Organisation and infrastructure context; Legal, security and ethical compliance. Data use must be lawful, secure and trustworthy.",
              textStart: "Technical optimisation",
              textEnd: "Data use must be lawful, secure and trustworthy",
            }),
          ],
        },
        {
          id: "reduce-ai-environmental-impact",
          question:
            "How do I reduce the environmental impact of building or using AI?",
          status: "answered",
          last_reviewed: "2026-08-07",
          answer:
            "First ask whether AI is needed. Prefer energy-efficient models and green hosting, manage data retention, and monitor footprint with tools such as CodeCarbon, Ecologits or Green Algorithms. Day-to-day, pick the smallest adequate model and keep prompts short.",
          citations: [
            cite(HOW_TO_BUILD_SUSTAINABLY, {
              role: "primary",
              section: "How to reduce your environmental impact",
              snippet:
                "Choose green providers: Look for hosting providers that use renewable energy and hold environmental certifications. Use efficient hardware: Where possible, select regions with renewable energy, use modern compute types, and right-size your deployments. Manage data thoughtfully: Set up efficient storage with clear retention policies, so you're not keeping data longer than needed.",
              textStart: "Choose green providers",
              textEnd: "not keeping data longer than needed",
            }),
            cite(HOW_TO_BUILD_SUSTAINABLY, {
              role: "primary",
              section: "How to monitor your environmental impact",
              snippet:
                "You can use free online tools to calculate your environmental impact. Each tool serves different use cases: CodeCarbon or Carbontracker; Ecologits; Green Algorithms. Monitoring your AI product's environmental impact throughout its lifecycle helps you spot issues early and make adjustments.",
              textStart: "CodeCarbon or Carbontracker",
              textEnd: "spot issues early and make adjustments",
            }),
            cite(HOW_TO_ETHICS, {
              role: "supporting",
              section: "Use AI sustainably",
              snippet:
                "If you do need AI, if your model allows it, pick the smallest one which will do what you need. Keep your prompts short, clear and direct; use as few prompts as possible; only use AI when needed.",
              textStart: "pick the smallest one which will do what you need",
              textEnd: "only use AI when needed",
            }),
          ],
        },
        {
          id: "commercial-colleagues",
          question:
            "When should I involve commercial colleagues in an AI project?",
          answer:
            "From the start. Get commercial advice early on partners, pricing, products and services, and keep ethical expectations consistent for in-house and procured systems.",
          snippet:
            "AI is a rapidly developing market, and you should get specific advice from commercial colleagues on the implications for your project. Reach out to them early in your journey to understand how to use AI in line with commercial requirements.",
          section: "Principle 8: You work with commercial colleagues from the start",
          textStart:
            "you should get specific advice from commercial colleagues",
          textEnd: "early in your journey",
        },
        {
          id: "business-case",
          question: "How do I write a business case for an AI project?",
          answer:
            "Use the Green Book for larger investments (typically approaching £10m) and consider GDS agile business case guidance for smaller ones. Engage stakeholders first on whether AI is needed.",
          snippet:
            "Consider following the Treasury’s Green Book (2022) guidance to create a fully fledged, five-part business case. This may be a requirement depending on the scale of your project and investment.",
          section: "AI business cases",
          textStart:
            "Treasury’s Green Book (2022) guidance to create a fully fledged, five-part business case",
          textEnd: "scale of your project and investment",
        },
                {
          id: "spend-controls",
          question:
            "What spend controls or approvals apply to AI and digital projects?",
          status: "answered",
          last_reviewed: "2026-08-10",
          answer:
            "Use the Technology Code of Practice in Cabinet Office spend control: you must consider all TCoP points, contact GDS Assurance if approval is needed, and explain any legacy limits. Playbook thresholds still apply for assuring digital/technology spend through your boards.",
          citations: [
            cite(TCOP, {
              role: "primary",
              section: "Spend controls",
              snippet:
                "You must consider all points of the TCoP as part of the Cabinet Office spend control process. If your project or programme needs spend control approval you should contact the GDS Assurance team at digital-spend-assurance@dsit.gov.uk for guidance with the approvals process. Where legacy technology limits your ability to adhere to the TCoP, you must explain this to the GDS Assurance team.",
              textStart: "You must consider all points of the TCoP",
              textEnd: "you must explain this to the GDS Assurance team",
            }),
            cite(PLAYBOOK, {
              role: "supporting",
              section: "AI business cases",
              snippet:
                "When working on your business case, note that it’s mandatory to assure all digital and technology spend above £100,000 for anything public facing and £1 million for anything else, through your assurance boards.",
              textStart: "mandatory to assure all digital and technology spend above £100,000",
              textEnd: "through your assurance boards",
            }),
          ],
        },
        {
          id: "specify-requirements",
          question: "How do I specify requirements when buying AI?",
          status: "answered",
          last_reviewed: "2026-08-07",
          answer:
            "Start from an output-based problem statement backed by user needs, cover data strategy/quality/bias, demand transparency about the supplier’s AI approach, and plan for maintenance, IP, liabilities and avoiding vendor lock-in.",
          citations: [
            cite(GUIDELINES_AI_PROCUREMENT, {
              role: "primary",
              section: "Drafting your requirement",
              snippet:
                "Use output-based requirements in your invitation-to-tender that focus on describing the challenges and opportunities you are facing. This will allow suppliers to determine which technologies are most appropriate for your requirements. Use output-based requirements, which allow the supplier to propose how they will respond to your requirement. You will have to draft sufficiently detailed problem statements backed by user needs and required performance.",
              textStart:
                "Use output-based requirements in your invitation-to-tender",
              textEnd:
                "detailed problem statements backed by user needs and required performance",
            }),
            cite(PLAYBOOK, {
              role: "supporting",
              section: "Specifying your requirements",
              snippet:
                "When drafting requirements for AI, you should: start with your problem statement; highlight your data strategy and requirements; focus on data quality, bias (mitigation) and limitations; underline the need for you to understand the supplier’s AI approach; consider strategies to avoid vendor lock-in",
              textStart: "start with your problem statement",
              textEnd: "strategies to avoid vendor lock-in",
            }),
          ],
        },
        {
          id: "intellectual-property",
          question:
            "Who owns the intellectual property if we develop or procure an AI solution?",
          answer:
            "Decide ownership and ongoing use rights at the outset, including how infringement risk and liability are shared between parties.",
          snippet:
            "For example, you should consider at the outset: which parties will own which parts of any intellectual property generated during the project; which parties will have ongoing rights to use any intellectual property that is generated (and on what basis); how the balance of risk and liability should be determined between the parties, as this will be relevant to any claims for infringement of third party intellectual property",
          section: "Intellectual property, including copyright",
          textStart:
            "which parties will own which parts of any intellectual property generated during the project",
          textEnd: "infringement of third party intellectual property",
        },
        {
          id: "vendor-lock-in",
          question: "How do I avoid vendor lock-in when buying AI?",
          status: "answered",
          last_reviewed: "2026-08-07",
          answer:
            "Require explainable, interpretable approaches so other suppliers can continue the work, and build exit and portability into requirements and contracts from the start.",
          citations: [
            cite(GUIDELINES_AI_PROCUREMENT, {
              role: "primary",
              section:
                "8. Avoid Black Box algorithms and vendor lock in",
              snippet:
                "Highly ‘explainable’ outputs from your AI system will be able to be interpreted by your team, and by other suppliers. This will also make it more likely for you to be able to engage with other suppliers to continue or build upon your AI system in the future, limiting the risk of vendor lock-in.",
              textStart:
                "Highly ‘explainable’ outputs from your AI system",
              textEnd: "limiting the risk of vendor lock-in",
            }),
            cite(PLAYBOOK, {
              role: "supporting",
              section: "Specifying your requirements",
              snippet: "consider strategies to avoid vendor lock-in",
              textStart: "consider strategies to avoid vendor lock-in",
              textEnd: null,
            }),
          ],
        },
      ],
    },
    {
      id: "delivery-assurance",
      title: "Delivery, assurance and operations",
      questions: [
                {
          id: "service-standard",
          question:
            "Do AI projects still need to meet the government Service Standard?",
          status: "answered",
          last_reviewed: "2026-08-10",
          answer:
            "Yes. AI services must meet the same standards as other technology. If you build a service, meet the Service Standard (TCoP point 13) and follow Secure by Design / Service Manual security expectations — including consulting security professionals for AI.",
          citations: [
            cite(SERVICE_MANUAL_AI, {
              role: "primary",
              section: "Using artificial intelligence (AI) in services",
              snippet:
                "Services using AI need to meet the same standards as services using other technology.",
              textStart: "Services using AI need to meet the same standards",
              textEnd: "services using other technology",
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
              section: "Principle 5: You understand how to manage the full AI life cycle",
              snippet:
                "If you develop a service, you must use the government Service Standard.",
              textStart:
                "If you develop a service, you must use the government Service Standard",
              textEnd: null,
            }),
            cite(SERVICE_MANUAL_AI, {
              role: "supporting",
              section: "Involve cyber security professionals",
              snippet:
                "You must consult a security professional to make sure that: users’ data is protected; your service stays secure.",
              textStart: "You must consult a security professional",
              textEnd: "your service stays secure",
            }),
          ],
        },
        {
          id: "tell-users-ai-in-service",
          question:
            "Do I need to tell users when a service uses AI?",
          status: "conflicted",
          last_reviewed: "2026-08-10",
          conflict_id: "conflict-ai-transparency-when-to-disclose",
          answer:
            "Users do not always need to know the underlying stack, but if AI affects their data or outcomes you must explain that. For AI chatbots, tell users answers are not from a human and may be inaccurate, and provide a human contact route. Organisational openness (including ATRS where required) still applies.",
          conflict: {
            summary:
              "Service Manual: users need not always know the technology, but AI effects on data/outcomes (and chatbot non-human answers) must be disclosed. Playbook: be open about how and where AI is used.",
            likely_cause: "different-scope",
            user_guidance:
              "Disclose AI wherever it affects data or outcomes; follow chatbot rules; meet ATRS/Playbook openness obligations.",
          },
          citations: [
            cite(SERVICE_MANUAL_AI, {
              role: "primary",
              section: "Tell users when AI is being used",
              snippet:
                "Users do not always need to know what technology or software is used in a service to be able to access it. However, if you use AI in your service, you must make it clear to users how this might affect: their data; the outcome or information they receive from the service. If you use an AI-powered chatbot, you must make sure users: understand that the answers they receive do not come from a human and might not be accurate; know how to contact a human being.",
              textStart: "Users do not always need to know what technology or software is used",
              textEnd: "know how to contact a human being",
            }),
            cite(AI_CYBER_COP, {
              role: "supporting",
              section: "Principle 10",
              snippet:
                "System Operators shall convey to End-users in an accessible way where and how their data will be used, accessed and stored (for example, if it is used for model retraining, or reviewed by employees or partners).",
              textStart: "where and how their data will be used, accessed and stored",
              textEnd: "reviewed by employees or partners",
            }),
            cite(PLAYBOOK, {
              role: "contrasting",
              stance: "Be open with the public about how and where AI systems are being used.",
              section: "Principle 7: You are open and collaborative",
              snippet:
                "Be open with the public about how and where AI systems are being used, for example: update the ATRS (Algorithmic Transparency Recording Standard Hub)",
              textStart: "Be open with the public about how and where AI systems are being used",
              textEnd: "Algorithmic Transparency Recording Standard Hub",
            }),
          ],
        },
        {
          id: "user-research",
          question: "How should I do user research for an AI product?",
          answer:
            "Use user research to check AI is the right tool, define metrics, prepare/evaluate data and outputs, assess usability and trust, and monitor the live service — keeping humans in the loop.",
          snippet:
            "Doing UR for an AI project helps you keep the human in the loop and understand the human intelligence that the AI will replicate or imitate.",
          section: "User research for AI",
          textStart:
            "Doing UR for an AI project helps you keep the human in the loop",
          textEnd: "the AI will replicate or imitate",
        },
        {
          id: "live-monitoring",
          question: "How do I monitor an AI system once it is live?",
          answer:
            "Put ongoing performance monitoring in place, evidence that the system is operating as expected, and manage model updates through a controlled release process that can be rolled back.",
          snippet:
            "Once you’ve released your AI system for use and it’s operational, you should have ongoing performance monitoring in place. This will ensure your system is operating as expected, and you should be able to provide evidence of this.",
          section: "Operational monitoring",
          textStart:
            "you should have ongoing performance monitoring in place",
          textEnd: "provide evidence of this",
        },
        {
          id: "ai-security-training",
          question:
            "Do staff need AI-specific cyber security training?",
          status: "conflicted",
          last_reviewed: "2026-08-10",
          conflict_id: "conflict-voluntary-ai-cyber-cop-vs-mandatory-gov-security",
          answer:
            "The voluntary AI Cyber Security Code says organisations’ cyber training shall include role-tailored AI security content. For government services, treat Service Manual / Playbook security obligations as mandatory and use the CoP’s training and lifecycle practices to strengthen that baseline.",
          conflict: {
            summary:
              "AI Cyber Security CoP is voluntary (shall within that frame). Service Manual requires consulting security professionals for AI services.",
            likely_cause: "different-audience",
            user_guidance:
              "Meet mandatory government security practice; use the CoP for detailed AI-specific controls including training.",
          },
          citations: [
            cite(AI_CYBER_COP, {
              role: "primary",
              section: "Principle 1: Raise awareness of AI security threats and risks",
              snippet:
                "Organisations’ cyber security training programme shall include AI security content which shall be regularly reviewed and updated. AI security training shall be tailored to the specific roles and responsibilities of staff members.",
              textStart: "cyber security training programme shall include AI security content",
              textEnd: "tailored to the specific roles and responsibilities of staff members",
            }),
            cite(SERVICE_MANUAL_AI, {
              role: "contrasting",
              stance: "Must consult a security professional for AI services.",
              section: "Involve cyber security professionals",
              snippet:
                "You must consult a security professional to make sure that: users’ data is protected; your service stays secure.",
              textStart: "You must consult a security professional",
              textEnd: "your service stays secure",
            }),
            cite(AI_CYBER_COP, {
              role: "supporting",
              section: "Introduction",
              snippet:
                "AI stakeholders should view this document as an addendum to the Software Code of Practice.",
              textStart: "an addendum to the Software Code of Practice",
              textEnd: null,
            }),
          ],
        },
        {
          id: "secure-ai-supply-chain",
          question:
            "How should I secure the AI supply chain (models and components)?",
          status: "answered",
          last_reviewed: "2026-08-10",
          answer:
            "Follow secure software supply chain processes for AI models and systems. If you use poorly documented or secured models, justify that choice in writing, apply mitigating controls, and re-evaluate released models before use.",
          citations: [
            cite(AI_CYBER_COP, {
              role: "primary",
              section: "Principle 7: Secure your supply chain",
              snippet:
                "Developers and System Operators shall follow secure software supply chain processes for their AI model and system development. System Operators that choose to use or adapt any models, or components, which are not well-documented or secured shall be able to justify their decision to use such models or components through documentation.",
              textStart: "shall follow secure software supply chain processes",
              textEnd: "justify their decision to use such models or components through documentation",
            }),
          ],
        },
        {
          id: "document-ai-assets",
          question:
            "What AI assets should I document and inventory?",
          status: "answered",
          last_reviewed: "2026-08-10",
          answer:
            "Maintain a comprehensive inventory of AI assets and interdependencies, and keep an audit trail of system design, data/models/prompts, and post-deployment maintenance plans.",
          citations: [
            cite(AI_CYBER_COP, {
              role: "primary",
              section: "Principle 5: Identify, track and protect your assets",
              snippet:
                "Developers, Data Custodians and System Operators shall maintain a comprehensive inventory of their assets (including their interdependencies/connectivity).",
              textStart: "shall maintain a comprehensive inventory of their assets",
              textEnd: "interdependencies/connectivity",
            }),
            cite(AI_CYBER_COP, {
              role: "primary",
              section: "Principle 8: Document your data, models and prompts",
              snippet:
                "Developers shall document and maintain a clear audit trail of their system design and post-deployment maintenance plans.",
              textStart: "shall document and maintain a clear audit trail",
              textEnd: "post-deployment maintenance plans",
            }),
          ],
        },
        {
          id: "dispose-ai-models",
          question:
            "How should I decommission AI models and training data?",
          status: "answered",
          last_reviewed: "2026-08-10",
          answer:
            "Involve Data Custodians and securely delete applicable data and configuration details when decommissioning a model or system. Plan end-of-life in contracts and operations, not as an afterthought.",
          citations: [
            cite(AI_CYBER_COP, {
              role: "primary",
              section: "Principle 13: Ensure proper data and model disposal",
              snippet:
                "If a Developer or System Operators decides to decommission a model and/or system, they shall involve Data Custodians and securely delete applicable data and configuration details.",
              textStart: "shall involve Data Custodians and securely delete",
              textEnd: "applicable data and configuration details",
            }),
            cite(GUIDELINES_AI_PROCUREMENT, {
              role: "supporting",
              section: "End-of-life",
              snippet:
                "Consider what the end-of-life processes for your AI system and the data should look like. Ensure the contract includes such considerations.",
              textStart: "end-of-life processes for your AI system and the data",
              textEnd: "Ensure the contract includes such considerations",
            }),
          ],
        },

        {
          id: "model-drift",
          question:
            "What happens if the model drifts or starts performing worse over time?",
          answer:
            "Monitor for drift. Environments change over time and may require retraining or a new model; catch this early to reduce disruption.",
          snippet:
            "As systems and environments evolve, the current process may diverge sufficiently from the training period of the AI system. This is known as model drift and may require retraining or implementation of a new model within the AI system. Close monitoring is essential so that you can catch this as early as possible and reduce possible disruption to the AI system.",
          section: "Operational monitoring",
          textStart: "This is known as model drift",
          textEnd: "reduce possible disruption to the AI system",
        },
        {
          id: "ai-inventory",
          question:
            "How do I keep an inventory of AI systems in my organisation?",
          answer:
            "Maintain a live AI/ML systems inventory covering purpose, risks, data, ownership and key dates, in addition to ATRS transparency records where required.",
          snippet:
            "To provide a comprehensive view of all deployed AI systems within an organisation or programme, organisations should set up an AI and machine learning (ML) systems inventory. This is in addition to the Algorithmic Transparency Recording Standard (ATRS) that all government departments and certain arm’s length bodies must use",
          section: "Creating an AI systems inventory",
          textStart:
            "organisations should set up an AI and machine learning (ML) systems inventory",
          textEnd: "Algorithmic Transparency Recording Standard (ATRS)",
        },
        {
          id: "accountability",
          question:
            "Who is accountable if an AI system causes harm or makes a bad decision?",
          answer:
            "Your organisation needs clear ownership of risk and responsibility for mitigations and compliance. Connect with assurance teams early and document review and escalation routes.",
          snippet:
            "Accountability is a key principle that establishes ownership of risk, responsibility for mitigations, compliance with legislation, the ability to demonstrate compliance, and high standards for privacy.",
          section: "Accountability",
          textStart:
            "Accountability is a key principle that establishes ownership of risk",
          textEnd: "high standards for privacy",
        },
        {
          id: "contestability",
          question:
            "How do people challenge or seek redress for an AI-influenced decision?",
          answer:
            "Build contestability and redress into design so people can challenge outcomes and seek remedy. This sits alongside transparency, explainability and meaningful human oversight.",
          snippet:
            "You should have systems in place that allow users to report issues and prompt a human review.",
          section: "Principle 4: You have meaningful human control at the right stages",
          textStart:
            "allow users to report issues and prompt a human review",
        },
      ],
    },
    {
      id: "collaboration",
      title: "Collaboration and reuse",
      questions: [
        {
          id: "other-departments",
          question:
            "How do I find out what other departments are already doing with AI?",
          answer:
            "Join cross-government communities such as the AI community of practice, engage departments tackling similar problems, and review ATRS records and published case studies.",
          snippet:
            "You should make use of existing cross-government communities where there is a space to solve problems collaboratively, such as the AI community of practice. You should also engage with other government departments that are trying to address similar issues and reuse ideas, code and infrastructure.",
          section: "Principle 7: You are open and collaborative",
          textStart: "AI community of practice",
          textEnd: "reuse ideas, code and infrastructure",
        },
        {
          id: "reuse",
          question:
            "Can I reuse AI code, models, or approaches from elsewhere in government?",
          answer:
            "Yes — the playbook encourages reusing ideas, code and infrastructure, and sharing inventories/case studies through the AI community of practice.",
          snippet:
            "You should also engage with other government departments that are trying to address similar issues and reuse ideas, code and infrastructure.",
          section: "Principle 7: You are open and collaborative",
          textStart: "reuse ideas, code and infrastructure",
        },
        {
          id: "civil-society",
          question:
            "Should I engage civil society, academia, or industry on my AI project?",
          answer:
            "Yes where possible. Engaging wider civil society, academia and industry helps ensure AI delivers public benefit and reflects people’s values and concerns.",
          snippet:
            "Where possible, you should engage with the wider civil society including groups, communities, and non-governmental, academic and public representative organisations that have an interest in your project.",
          section: "Principle 7: You are open and collaborative",
          textStart:
            "engage with the wider civil society including groups, communities",
          textEnd: "that have an interest in your project",
        },
      ],
    },
  ];

/**
 * Entire question → kebab-case slug with punctuation stripped.
 * Example: "Can I use Microsoft Copilot…?" → "can-i-use-microsoft-copilot-or-similar-embedded-ai-features-at-work"
 */
function slugifyQuestion(question) {
  return String(question)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeQuestion(question, category) {
  const citations =
    question.citations && question.citations.length
      ? question.citations
      : [
          cite(PLAYBOOK, {
            role: "primary",
            section: question.section,
            snippet: question.snippet,
            textStart: question.textStart,
            textEnd: question.textEnd,
          }),
        ];

  const primary = citations[0];
  const slug = slugifyQuestion(question.question);

  return {
    id: question.id,
    question: question.question,
    answer: question.answer,
    slug,
    url: `/faq/${slug}/`,
    category_id: category.id,
    category_title: category.title,
    status:
      question.status ||
      (question.conflict ? "conflicted" : "answered"),
    last_reviewed: question.last_reviewed || null,
    conflict_id: question.conflict_id || null,
    conflict: question.conflict || null,
    citations,
    snippet: question.snippet || primary.snippet,
    section: question.section || primary.section,
    textStart: question.textStart || primary.textStart,
    textEnd: question.textEnd || primary.textEnd,
  };
}

const normalizedCategories = categories.map((category) => ({
  ...category,
  questions: category.questions.map((question) =>
    normalizeQuestion(question, category)
  ),
}));

const items = normalizedCategories.flatMap((category) => category.questions);

const slugCounts = items.reduce((counts, item) => {
  counts[item.slug] = (counts[item.slug] || 0) + 1;
  return counts;
}, {});
const duplicateSlugs = Object.entries(slugCounts)
  .filter(([, count]) => count > 1)
  .map(([slug]) => slug);
if (duplicateSlugs.length) {
  throw new Error(
    `Duplicate FAQ slugs (adjust question wording): ${duplicateSlugs.join(", ")}`
  );
}

module.exports = {
  source: {
    title: PLAYBOOK.title,
    organisation: PLAYBOOK.organisation,
    url: PLAYBOOK.url,
  },
  sources: [
    PLAYBOOK,
    INSIGHTS_GENERATIVE_AI,
    INSIGHTS_PROMPT_RISKS,
    INSIGHTS_LLM_BIAS,
    HOW_TO_PRINCIPLES,
    HOW_TO_USE_AT_WORK,
    HOW_TO_PROMPTS,
    HOW_TO_ETHICS,
    HOW_TO_BUILD_SUSTAINABLY,
    HOW_TO_DATA_READY,
    HOW_TO_PROCUREMENT,
    HOW_TO_MEASURE_IMPACT,
    GUIDELINES_AI_PROCUREMENT,
    SERVICE_MANUAL_AI,
    SERVICE_MANUAL_POINT_9,
    TCOP,
    AI_CYBER_COP,
  ],
  categories: normalizedCategories,
  items,
  slugifyQuestion,
};
