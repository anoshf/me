export type Experience = {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
  stack?: string[];
};

export type Project = {
  title: string;
  summary: string;
  impact: string[];
  stack: string[];
  theme: "platform" | "data" | "ai" | "frontend" | "security";
};

export const profile = {
  name: "Anosh Fallah",
  title: "Staff Full-Stack Engineer & Architect",
  location: "San Diego, CA",
  email: "anosh7@gmail.com",
  phone: "323.329.5156",
  linkedin: "https://linkedin.com/in/anoshf",
  tagline:
    "I build secure, scalable, high-availability systems — from platform APIs to polished UIs — and I measure impact in latency, reliability, and developer velocity.",
  heroBadges: ["AWS", "GenAI", "GraphQL", "React", "Python", "Node.js", "Kubernetes", "Kafka"],
  stats: [
    { label: "Years building production systems", value: "15+" },
    { label: "Load time reduction (healthcare platform)", value: "93%" },
    { label: "GraphQL query performance uplift", value: "35%" },
    { label: "High-availability systems delivered", value: "99.99%" }
  ],
  story: [
    {
      heading: "Late 2000s: curiosity became a habit",
      body:
        "I got hooked on coding in the late 2000s by building small tools to automate the annoying parts of school and work — scripts, utilities, and tiny apps that made systems feel less mysterious. That habit stuck: pick a real problem, make it measurable, and ship a clean solution."
    },
    {
      heading: "2010+: production lessons at scale",
      body:
        "From Disney Parks to Ticketmaster/Live Nation, I learned what 'production-grade' actually means: performance under load, safe rollouts, resilience, and clear observability. Those lessons carried into distributed systems and platform work at Disney ABC and ADP."
    },
    {
      heading: "Today: full-stack platform engineering with GenAI",
      body:
        "Most recently, I’ve been leading full-stack work where GraphQL, serverless infrastructure, and GenAI workflows meet compliance and security requirements. I enjoy the intersection of product, platform, and engineering excellence — the place where systems get both safer and faster."
    }
  ],
  values: [
    { title: "Engineering with intent", desc: "Ship the simplest thing that’s safe, observable, and extensible." },
    { title: "Measurable impact", desc: "Latency, reliability, cost, and team velocity are first-class outcomes." },
    { title: "Strong systems hygiene", desc: "Threat modeling, least privilege, CI/CD discipline, IaC and audits." }
  ],
  interests: [
    { title: "Training", desc: "Strength work with consistency and progressive overload." },
    { title: "Running", desc: "Easy miles, tempo sessions, and long-run mindset." },
    { title: "Yoga", desc: "Mobility, recovery, and staying durable." },
    { title: "Tennis", desc: "Footwork, patience, and strategy." },
    { title: "Pickleball", desc: "Fast reps, fast feedback, and a lot of fun." }
  ]
};

export const achievements: Project[] = [
  {
    title: "AI-driven Slack automation for real-time engineering events",
    summary:
      "Built secure, event-driven Slack workflows that turn operational signals into actionable insights — reducing triage time and improving visibility.",
    impact: ["Event-based operational insights", "Security-first integrations", "Designed for reliability and clear ownership"],
    stack: ["Node.js", "GenAI", "Slack APIs", "AWS", "Observability"],
    theme: "ai"
  },
  {
    title: "Clinical analytics dashboard for high-fidelity biometric visualization",
    summary:
      "Delivered a physician-facing analytics dashboard to improve clinical decision-making with clear, high-fidelity views of patient biometrics.",
    impact: ["93% load time reduction", "Stakeholder-ready visualization", "Privacy-aware design for sensitive data"],
    stack: ["React", "TypeScript", "Python", "API design", "Caching"],
    theme: "frontend"
  },
  {
    title: "Production-grade Kafka platform for decoupled microservice communication",
    summary:
      "Designed and deployed a fault-tolerant Kafka platform enabling high-throughput, decoupled communication across enterprise systems.",
    impact: ["High-throughput eventing", "Fault-tolerant architecture", "Operational playbooks and monitoring"],
    stack: ["Kafka", "AWS", "Terraform", "Kubernetes", "Monitoring"],
    theme: "data"
  },
  {
    title: "Multi-region AWS collaboration platform with sub-100ms global search",
    summary:
      "Architected a highly available, multi-region collaboration platform delivering real-time content via CDNs for global newsrooms.",
    impact: ["Sub-100ms search latency", "Multi-region active-active design", "CDN-aware performance strategy"],
    stack: ["AWS", "Node.js", "CDNs", "Search", "Distributed systems"],
    theme: "platform"
  },
  {
    title: "Apple Wallet ticketing platform for mobile venue entry at massive scale",
    summary:
      "Built a globally scalable platform converting physical tickets into secure Apple Wallet passes for mobile entry at major venues.",
    impact: ["Secure mobile entry", "Scalable issuance and validation", "Designed for high-traffic events"],
    stack: ["AWS", "Python", "APIs", "Security", "Observability"],
    theme: "security"
  }
];

export const experience: Experience[] = [
  {
    company: "Intuit",
    role: "Lead Full-Stack Software Engineer (GenAI / GraphQL)",
    dates: "Oct 2024 – Present",
    bullets: [
      "Migrated transactional REST APIs to GraphQL, increasing query performance and data consistency.",
      "Built secure monitoring systems with Node.js + GenAI + Slack integrations.",
      "Architected serverless AWS solutions (Lambda + API Gateway) with high-availability targets.",
      "Delivered SOX/PCI-aligned infrastructure audits and hardening across IaC."
    ],
    stack: ["GenAI", "GraphQL", "TypeScript", "Node.js", "Python", "FastAPI", "AWS Lambda", "Terraform", "Kubernetes", "Kafka"]
  },
  {
    company: "Medtronic",
    role: "Lead Full-Stack Developer (Azure / AWS)",
    dates: "Jan 2021 – Sep 2024",
    bullets: [
      "Architected a patient data platform with distributed caching and major performance improvements.",
      "Designed HIPAA-compliant governance, multi-cloud SSO, and secure data pipelines.",
      "Led frontend standardization with Next.js/React/TypeScript across patient-facing applications."
    ],
    stack: ["Python", "FastAPI", "React", "TypeScript", "Kubernetes", "Terraform", "Azure", "AWS", "Kafka", "GraphQL", "GenAI"]
  },
  {
    company: "ADP",
    role: "Lead Full-Stack Developer / Architect (Kafka / AWS)",
    dates: "Dec 2017 – Dec 2020",
    bullets: [
      "Designed a high-throughput financial data platform using Kafka with disaster recovery.",
      "Modernized monoliths into microservices to reduce latency and increase throughput.",
      "Improved reliability with observability, faster incident resolution, and uptime targets."
    ],
    stack: ["Kafka", "AWS EKS", "Terraform", "TypeScript", "React", "Java", "Spring Boot", "Aurora", "DynamoDB"]
  },
  {
    company: "Disney ABC",
    role: "Senior Full-Stack Developer / Architect (AWS, React, Distributed Systems)",
    dates: "Jul 2016 – Dec 2017",
    bullets: [
      "Designed active-active, multi-region microservices with sub-100ms global latency goals.",
      "Built resilient event/data pipelines and automated infrastructure with Terraform/CloudFormation.",
      "Implemented enterprise authentication (SAML2, OAuth2) and secure token lifecycles."
    ],
    stack: ["AWS", "Node.js", "Python", "React", "Kafka", "Cassandra", "Terraform", "CloudFormation"]
  },
  {
    company: "Live Nation / Ticketmaster",
    role: "Senior Full-Stack Developer / Architect (AWS, Python)",
    dates: "Sep 2014 – Apr 2016",
    bullets: [
      "Improved presale/on-sale performance by 10x and reduced processing time from hours to minutes.",
      "Designed dockerized EC2 microservices with centralized logging and monitoring.",
      "Automated deployments and infrastructure across environments with strong observability."
    ],
    stack: ["AWS", "Python", "Java", "Docker", "Terraform", "React", "Monitoring"]
  }
];

export const community = {
  ticketmaster: {
    heading: "Live Nation / Ticketmaster: sharing systems knowledge",
    body:
      "I enjoy working in cultures that share what they learn. In past roles, that meant brown-bag sessions, architecture reviews, and documenting hard-earned production lessons so teams can move faster with fewer surprises."
  },
  sandiego: {
    heading: "San Diego: building local connections",
    body:
      "I like connecting with engineers in the San Diego area — whether that’s informal coffee chats, local tech talks, or community events. If you’re hosting an event and want a hands-on talk (GraphQL performance, cloud architecture, incident hygiene, or GenAI in regulated environments), I’m open to it."
  },
  groups: [
    "San Diego JavaScript / TypeScript meetups",
    "San Diego React community events",
    "AWS User Group meetups",
    "Local running clubs that overlap with tech events"
  ]
};
