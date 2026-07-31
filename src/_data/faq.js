const PLAYBOOK_URL =
  "https://www.gov.uk/government/publications/ai-playbook-for-the-uk-government/artificial-intelligence-playbook-for-the-uk-government-html";

/**
 * FAQ entries derived from the AI Playbook for the UK Government.
 * `snippet` should be close to the playbook wording; `textStart`/`textEnd`
 * are used for Chrome text-fragment deep links (:~:text=...).
 */
module.exports = {
  source: {
    title: "AI Playbook for the UK Government",
    organisation: "Department for Science, Innovation and Technology (DSIT)",
    url: PLAYBOOK_URL,
  },
  categories: [
    {
      id: "getting-started",
      title: "Getting started",
      questions: [
        {
          id: "what-is-ai-limitations",
          question:
            "What is AI, and what are its main limitations in a government context?",
          answer:
            "You should learn what AI can and cannot do before using it. AI systems currently lack reasoning and contextual awareness, are not guaranteed to be accurate, and have limitations that vary by tool and context.",
          snippet:
            "AI systems currently lack reasoning and contextual awareness and their limitations vary depending on the tools you use and the context in which they operate. AI systems are also not guaranteed to be accurate.",
          section: "Principle 1: You know what AI is and what its limitations are",
          textStart:
            "AI systems currently lack reasoning and contextual awareness",
          textEnd: "AI systems are also not guaranteed to be accurate",
        },
        {
          id: "right-tool-for-the-job",
          question:
            "When is AI the right tool for the job, and when should I use something else?",
          answer:
            "Choose the most appropriate technology for the need. Be open to AI where it helps, but also open to concluding that established technologies are a better fit.",
          snippet:
            "However, you should also be open to the conclusion that, sometimes, AI is not the best solution for your problem: it may be more easily solved with more established technologies.",
          section: "Principle 6: You use the right tool for the job",
          textStart:
            "sometimes, AI is not the best solution for your problem",
          textEnd: "more easily solved with more established technologies",
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
          answer:
            "AI can reproduce bias from training data and produce unfair outputs. Consider all potential sources of bias across the life cycle, including unrepresentative datasets and unfair deployment impacts.",
          snippet:
            "AI models are trained on data which may include biased or harmful materials. As a result, AI systems may display biases and produce harmful outputs, such as unfair, prejudicial or derogatory representations of groups or individuals. You should consider all potential sources of bias throughout the development life cycle, including unrepresentative data sets and deployment scenarios that have unfair or undesirable impacts.",
          section: "Principle 2: You use AI lawfully, ethically and responsibly",
          textStart:
            "AI models are trained on data which may include biased or harmful materials",
          textEnd: "unfair or undesirable impacts",
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
          answer:
            "No. When using public AI applications you must not enter official information unless it has been published or is cleared for publication.",
          snippet:
            "When using public AI applications, you must not enter official information unless it has been published or is cleared for publication.",
          section: "Public AI applications and web services",
          textStart:
            "you must not enter official information unless it has been published",
          textEnd: "cleared for publication",
        },
        {
          id: "embedded-ai",
          question:
            "Can I use Microsoft Copilot, Slack GPT, or similar embedded AI features at work?",
          answer:
            "Only after understanding the product architecture and vendor mitigations, and after speaking with your security team. Embedded AI features bring their own security concerns.",
          snippet:
            "Before adopting any of these products it’s important to understand the underlying architecture of the solution, and what mitigations the vendor has put in place for the inherent risks associated with AI.",
          section: "Embedded AI applications",
          textStart:
            "Before adopting any of these products it’s important to understand the underlying architecture",
          textEnd: "inherent risks associated with AI",
        },
        {
          id: "transcription-tools",
          question: "Are AI meeting transcription tools allowed?",
          answer:
            "Treat them as a serious data-leakage risk. Meeting organisers should verify attendees and state that third-party transcription tools are not allowed.",
          snippet:
            "There has also been a proliferation of AI transcription tools that are capable of joining virtual meetings and transcribing meeting notes. These present a serious risk of data leakage as they silently upload meeting recordings to an AI service for transcription and analysis. When hosting virtual meetings, organisers should verify the identity of all attendees and state up front that the use of third-party meeting transcription tools is not allowed.",
          section: "Embedded AI applications",
          textStart:
            "These present a serious risk of data leakage",
          textEnd:
            "third-party meeting transcription tools is not allowed",
        },
        {
          id: "hosting-choices",
          question:
            "Should I use a public AI API, a privately hosted model, or a managed platform?",
          answer:
            "It depends on control and risk. Public APIs still send data to a provider; private hosting keeps data in your environment but you own security and ops; managed platforms can offer private instances with stronger retention controls.",
          snippet:
            "By running a model in your own private cloud infrastructure, you ensure that data never leaves an environment that you own.",
          section: "Privately hosted AI models",
          textStart:
            "By running a model in your own private cloud infrastructure",
          textEnd: "data never leaves an environment that you own",
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
          answer:
            "Assume prompts can subvert system instructions. Use filtering, logging and audit, and keep a human in the loop before automated actions are carried out.",
          snippet:
            "Fundamentally, a generative AI model cannot distinguish between the user prompt and these system instructions because both are just seen as input to the model. A hacker can exploit this flaw by crafting special prompts that circumvent the system instructions, causing the model to respond in an unintended way.",
          section: "Prompt injection",
          textStart:
            "a generative AI model cannot distinguish between the user prompt and these system instructions",
          textEnd: "respond in an unintended way",
        },
        {
          id: "hallucinations",
          question:
            "Can I trust generative AI outputs, or do they hallucinate?",
          answer:
            "Do not trust generative AI to produce factual content uncritically. Models can generate plausible but false information; train users not to rely exclusively on these outputs.",
          snippet:
            "Fundamentally, generative AI models cannot be trusted to produce factual content. Any generative AI services that output generated content directly to the public – for example, an LLM-powered chatbot giving advice on a government website – would be prone to hallucination and could lead to someone being misled about a government service, policy or point of law.",
          section: "Hallucinations",
          textStart:
            "generative AI models cannot be trusted to produce factual content",
          textEnd: "misled about a government service, policy or point of law",
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
          answer:
            "Decide based on the problem and commercial advice. Options include off-the-shelf products, AI bolted onto existing technology, outsourced builds, or co-creating with suppliers.",
          snippet:
            "This might be an off-the-shelf product, an existing technology with bolt-on AI elements (paid or free), outsourcing AI builds (if applicable), or co-creating AI with suppliers.",
          section: "Specifying your requirements",
          textStart: "off-the-shelf product, an existing technology with bolt-on AI elements",
          textEnd: "co-creating AI with suppliers",
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
          answer:
            "Digital and technology spend above £100,000 for public-facing services and £1 million otherwise must be assured through your assurance boards. Follow GDS spend approval guidance.",
          snippet:
            "When working on your business case, note that it’s mandatory to assure all digital and technology spend above £100,000 for anything public facing and £1 million for anything else, through your assurance boards.",
          section: "AI business cases",
          textStart:
            "mandatory to assure all digital and technology spend above £100,000",
          textEnd: "through your assurance boards",
        },
        {
          id: "specify-requirements",
          question: "How do I specify requirements when buying AI?",
          answer:
            "Start from the problem statement, cover data strategy/quality/bias, demand transparency about the supplier’s AI approach, plan for maintenance, IP, liabilities and avoiding vendor lock-in.",
          snippet:
            "When drafting requirements for AI, you should: start with your problem statement; highlight your data strategy and requirements; focus on data quality, bias (mitigation) and limitations; underline the need for you to understand the supplier’s AI approach; consider strategies to avoid vendor lock-in",
          section: "Specifying your requirements",
          textStart: "start with your problem statement",
          textEnd: "strategies to avoid vendor lock-in",
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
          answer:
            "Build exit and portability into requirements and contracts from the start, including understanding the supplier’s approach and planning for transfer to successor suppliers.",
          snippet:
            "consider strategies to avoid vendor lock-in",
          section: "Specifying your requirements",
          textStart: "consider strategies to avoid vendor lock-in",
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
          answer:
            "Yes. If you develop a service, you must use the government Service Standard, alongside wider technology and cloud security guidance.",
          snippet:
            "If you develop a service, you must use the government Service Standard.",
          section: "Principle 5: You understand how to manage the full AI life cycle",
          textStart:
            "If you develop a service, you must use the government Service Standard",
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
  ],
};
