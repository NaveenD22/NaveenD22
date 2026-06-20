import {
  FaHome,
  FaSketch,
  FaWrench,
  FaPenNib,
  FaHandshake,
  FaArrowRight,
  FaLinkedinIn,
  FaTwitter,
  FaTelegramPlane,
  FaInstagram,
  FaReact,
  FaNodeJs,
  FaEnvelope,
  FaGithub,
  FaAws,
  FaDocker,
  FaUsers,
  FaRocket,
  FaCogs,
  FaLaptopCode,
  FaShieldAlt,
  FaCloud,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiKubernetes,
  SiTerraform,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiStrapi,
  SiContentful,
  SiSanity,
  SiVercel,
  SiGithubactions,
  SiJenkins,
  SiPrisma,
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { IoMdArrowDropleftCircle, IoMdTrain } from 'react-icons/io';
import { GoPerson } from 'react-icons/go';

// Public-path assets (served from /public)
const ASSETS = {
  avatar1: '/assets/my-avatar-1.webp',
  avatar2: '/assets/my-avatar-2.webp',
  spotify: '/assets/spotify-clone.webp',
  netflix: '/assets/netflix-clone.webp',
  javaScript: '/assets/JavaScript-Games.webp',
  propertyBuilder: '/assets/Property.webp',
  analytics: '/assets/analytics.webp',
  wearable: '/assets/wearable.webp',
  shoppingCart: '/assets/shoppingCart.webp',
  multiTheme: '/assets/multiTheme.webp',
  azure: '/assets/Azure.webp',
};

export const RESUME_URL = '/Naveen-Dudhyal-CV.pdf';
export const HERO_AVATAR = ASSETS.avatar1;

export const NavLinks = [
  { Links: '#Home', title: 'Home', icons: <FaHome />, description: 'Start here — meet your next full-stack partner' },
  { Links: '#About', title: 'About', icons: <GoPerson />, description: 'The story, the stack, the standards' },
  { Links: '#Services', title: 'Services', icons: <FaCogs />, description: 'What I build, ship and scale for clients' },
  { Links: '#Skills', title: 'Skills', icons: <FaSketch />, description: 'Full-stack, cloud and DevOps capabilities' },
  { Links: '#Projects', title: 'Projects', icons: <FaPenNib />, description: 'Production-grade work that shipped real revenue' },
  { Links: '#Experience', title: 'Experience', icons: <FaWrench />, description: 'Where I have led teams and delivered impact' },
  { Links: '#Hire', title: 'Hire Me', icons: <FaHandshake />, description: 'Let us build something the world will use' },
];

export const HomeContents = [
  { title: 'LinkedIn', icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/naveen-dudhyal-ba122a22a', name: 'LinkedIn Profile' },
  { title: 'GitHub', icon: <FaGithub />, link: 'https://github.com/NaveenD22', name: 'GitHub Portfolio' },
  { title: 'Email', icon: <FaEnvelope />, link: 'mailto:dinaveen4018@gmail.com?subject=Project%20Inquiry%20%E2%80%94%20Full-Stack%20Engagement', name: 'Email Me' },
  { title: 'Twitter', icon: <FaTwitter />, link: 'https://twitter.com/NaveenDudhyal', name: 'Twitter Updates' },
  { title: 'Telegram', icon: <FaTelegramPlane />, link: 'https://t.me/NaveenDudhyal', name: 'Telegram Contact' },
  { title: 'Instagram', icon: <FaInstagram />, link: 'https://www.instagram.com/navin_d22', name: 'Instagram Insights' },
];

export const RotatingRoles = [
  'Full-Stack Engineer — React, Next.js, Node.js, TypeScript',
  'Cloud Builder — AWS and Azure architectures that scale',
  'DevOps-minded — CI/CD pipelines that ship 10x faster',
  'Headless CMS expert — Strapi, Sanity, Contentful, Hygraph',
  'Performance specialist — 95+ Lighthouse, sub-2s TTI',
  'Trusted by global teams — clean code, on-time delivery',
];

export const HeroStats = [
  { value: '5+', label: 'Years Experience' },
  { value: '30+', label: 'Projects Shipped' },
  { value: '15+', label: 'Happy Clients' },
  { value: '99.9%', label: 'Uptime Delivered' },
];

export const TrustBadges = [
  'Available for Freelance and Contract',
  'Worldwide remote — IST / EST / GMT friendly',
  'NDA friendly — Source code on delivery',
  'Avg. response under 6 hours',
];

export const AboutMeContents = {
  icon: ASSETS.avatar2,
  name: 'Naveen Dudhyal',
  role: 'Senior Full-Stack Engineer · Cloud & DevOps',
  tagline:
    'I help startups and enterprises ship secure, lightning-fast, production-grade web platforms — end to end.',
  des:
    'I am a Senior Full-Stack Engineer with 5+ years of experience architecting and delivering 30+ complex web platforms using React, Next.js, TypeScript and Node.js — deployed on AWS and Azure with battle-tested CI/CD pipelines. I have led cross-functional teams, designed headless CMS-driven marketing sites, built multi-tenant SaaS dashboards, and automated infrastructure with Docker, Terraform and GitHub Actions. My focus: pixel-perfect UI, sub-2s performance, 99.9% uptime, and code your future engineers will thank you for.',
  age: 26,
  phone: '+91-8050927428',
  email: 'dinaveen4018@gmail.com',
  place: 'Bangalore, India · Open to worldwide remote',
  availability: 'Open to new projects — June 2026 onwards',
  achievements: [
    'Architected and shipped 30+ production apps in React, Next.js, Node.js and Flutter — serving 1M+ monthly users.',
    'Designed multi-region deployments on AWS (ECS, Lambda, S3, CloudFront) and Azure (App Service, Functions, Blob, Front Door) with 99.9% uptime SLAs.',
    'Built CI/CD pipelines with GitHub Actions, Azure DevOps and Jenkins — cut release cycles from weekly to multiple times per day.',
    'Delivered headless CMS platforms (Strapi, Sanity, Contentful) — reduced content-to-publish time by 40% for marketing teams.',
    'Led teams of 4–8 engineers across 3 time zones; owned architecture, code review and stakeholder communication.',
    'Tuned Core Web Vitals to 95+ Lighthouse scores; reduced TTI under 2s via SSR/ISR, edge caching and image optimization.',
  ],
};

export const ServicesContent = [
  {
    icon: <FaLaptopCode />,
    title: 'Full-Stack Web Apps',
    des: 'End-to-end SaaS dashboards, marketplaces and portals built with Next.js, React, TypeScript, Node.js and PostgreSQL.',
    bullets: [
      'App Router, Server Actions, SSR/ISR',
      'Auth, RBAC and multi-tenant architecture',
      'Stripe, Razorpay and Salesforce integrations',
    ],
  },
  {
    icon: <FaCloud />,
    title: 'Cloud Architecture — AWS & Azure',
    des: 'Production-ready, cost-optimized cloud infrastructure on AWS and Microsoft Azure for global workloads.',
    bullets: [
      'AWS: ECS, Lambda, S3, RDS, CloudFront, Route 53',
      'Azure: App Service, Functions, Blob, Front Door, AKS',
      'IaC with Terraform and Bicep, secrets via KMS / Key Vault',
    ],
  },
  {
    icon: <SiGithubactions />,
    title: 'CI/CD & DevOps Automation',
    des: 'Reliable pipelines that ship code safely — many times a day — with automated tests, previews and rollbacks.',
    bullets: [
      'GitHub Actions, Azure DevOps, Jenkins, GitLab CI',
      'Docker, Kubernetes, blue-green and canary deploys',
      'SonarQube, Snyk and Lighthouse CI quality gates',
    ],
  },
  {
    icon: <SiStrapi />,
    title: 'Headless CMS Platforms',
    des: 'Marketing sites and content platforms with editor-friendly workflows using modern headless CMS tools.',
    bullets: [
      'Strapi, Sanity, Contentful, Hygraph and Sitecore',
      'Webhook-driven ISR for instant publishing',
      'Localization, preview modes and role-based editing',
    ],
  },
  {
    icon: <FaRocket />,
    title: 'Performance & SEO',
    des: 'Existing app feels slow? I audit, refactor and tune to hit 95+ Lighthouse with sub-2s TTI.',
    bullets: [
      'Core Web Vitals (LCP / INP / CLS) tuning',
      'Edge caching, image and font optimization',
      'Structured data, OG tags, sitemap and analytics',
    ],
  },
  {
    icon: <FaShieldAlt />,
    title: 'Tech Leadership & Code Audits',
    des: 'Fractional tech-lead support — code reviews, hiring, roadmaps and architecture for growing teams.',
    bullets: [
      'Architecture reviews and migration plans',
      'Mentoring, code reviews and best practices',
      'Hiring assistance and technical interviews',
    ],
  },
];

export const SkillsContent = [
  {
    icon: <SiNextdotjs />,
    title: 'Next.js & React Ecosystem',
    des: 'Production-grade Next.js (App Router) and React 18 apps with TypeScript, SSR/ISR and edge runtimes.',
    arrow: <FaArrowRight />,
    des2: [
      'Built 15+ Next.js apps with App Router, Server Actions, RSC and edge middleware.',
      'Type-safe state with Redux Toolkit, Zustand and React Query.',
      'Tailwind CSS, MUI, Radix and Shadcn for accessible, pixel-perfect UI.',
      'Lighthouse 95+, INP under 200ms, LCP under 2s on real-world apps.',
    ],
  },
  {
    icon: <FaNodeJs />,
    title: 'Node.js, APIs & Databases',
    des: 'Scalable REST and GraphQL APIs with Node.js, Express, NestJS and Prisma — battle-tested at 100K+ daily requests.',
    arrow: <FaArrowRight />,
    des2: [
      'REST, GraphQL and tRPC APIs with Node.js / NestJS / Express.',
      'PostgreSQL, MongoDB, Redis and MySQL — Prisma and Mongoose ORMs.',
      'Auth flows with JWT, OAuth, NextAuth and Azure AD B2C.',
      'Event-driven microservices via SQS and Azure Service Bus.',
    ],
  },
  {
    icon: <FaAws />,
    title: 'AWS Cloud — Production at Scale',
    des: 'Deployed 20+ workloads on AWS with auto-scaling, observability and tight cost controls.',
    arrow: <FaArrowRight />,
    des2: [
      'Compute: ECS Fargate, EC2, Lambda and API Gateway.',
      'Data and edge: RDS, DynamoDB, S3, CloudFront and Route 53.',
      'Observability: CloudWatch, X-Ray and structured logging.',
      'Cost optimization saving clients up to 30% per month.',
    ],
  },
  {
    icon: <VscAzure />,
    title: 'Microsoft Azure — Enterprise Workloads',
    des: 'Enterprise-grade deployments on Azure for regulated and large-scale clients.',
    arrow: <FaArrowRight />,
    des2: [
      'Azure App Service, Functions, AKS and Container Apps.',
      'Blob Storage, Cosmos DB, Azure SQL and Front Door CDN.',
      'Azure AD / Entra ID for SSO and enterprise identity.',
      'Bicep / Terraform IaC and Azure DevOps release gates.',
    ],
  },
  {
    icon: <SiGithubactions />,
    title: 'CI/CD & DevOps Pipelines',
    des: 'Strong hands-on experience designing pipelines that ship safely many times a day.',
    arrow: <FaArrowRight />,
    des2: [
      'GitHub Actions, Azure DevOps, Jenkins, GitLab CI and CircleCI.',
      'Docker images, Kubernetes manifests and Helm charts.',
      'Preview environments, blue-green and canary releases.',
      'Quality gates: SonarQube, Snyk, Lighthouse CI, ESLint and Jest.',
    ],
  },
  {
    icon: <SiStrapi />,
    title: 'Headless CMS Expertise',
    des: 'Designed editor-friendly CMS workflows that cut publish times from days to minutes.',
    arrow: <FaArrowRight />,
    des2: [
      'Strapi, Sanity, Contentful, Hygraph and Sitecore.',
      'ISR plus on-demand revalidation for instant publishing.',
      'Live previews, role-based access and localization.',
      'Custom plugins, webhooks and migration scripts.',
    ],
  },
  {
    icon: <FaUsers />,
    title: 'Tech Leadership & Mentoring',
    des: 'Led 4–8 engineer squads across 3 time zones with on-time, high-quality delivery.',
    arrow: <FaArrowRight />,
    des2: [
      'Architecture reviews, RFCs and ADRs for major decisions.',
      '100+ code reviews ensuring readability and test coverage.',
      'Mentored 10+ developers — junior to mid-level promotions.',
      'Stakeholder demos, roadmaps and sprint planning.',
    ],
  },
  {
    icon: <FaShieldAlt />,
    title: 'Security & Observability',
    des: 'OWASP-aware engineering with monitoring, alerting and audit trails baked in.',
    arrow: <FaArrowRight />,
    des2: [
      'OWASP Top-10 hardening, dependency scanning, secret rotation.',
      'Sentry, Datadog, New Relic and OpenTelemetry tracing.',
      'WAF, rate limiting, CSP and SSO via OAuth/OIDC.',
      'Disaster recovery: RPO/RTO planning and backup strategy.',
    ],
  },
];

export const TechStack = [
  { icon: <FaReact />, name: 'React' },
  { icon: <SiNextdotjs />, name: 'Next.js' },
  { icon: <SiTypescript />, name: 'TypeScript' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <SiTailwindcss />, name: 'Tailwind' },
  { icon: <SiPostgresql />, name: 'PostgreSQL' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <SiGraphql />, name: 'GraphQL' },
  { icon: <FaAws />, name: 'AWS' },
  { icon: <VscAzure />, name: 'Azure' },
  { icon: <FaDocker />, name: 'Docker' },
  { icon: <SiKubernetes />, name: 'Kubernetes' },
  { icon: <SiTerraform />, name: 'Terraform' },
  { icon: <SiGithubactions />, name: 'GH Actions' },
  { icon: <SiJenkins />, name: 'Jenkins' },
  { icon: <SiStrapi />, name: 'Strapi' },
  { icon: <SiSanity />, name: 'Sanity' },
  { icon: <SiContentful />, name: 'Contentful' },
  { icon: <SiVercel />, name: 'Vercel' },
  { icon: <SiPrisma />, name: 'Prisma' },
];

export const ProjectsContent = [
  {
    icon: ASSETS.azure,
    title: 'Enterprise CMS Platform',
    des: 'Headless CMS built with Next.js App Router, Prisma and PostgreSQL on Vercel — editor workflows cut content-to-publish time by 40%.',
    link: 'https://vercel-postgress-example-two.vercel.app/',
    code: 'https://github.com/NaveenD22/vercel-postgress-example',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Vercel', 'ISR'],
  },
  {
    icon: ASSETS.shoppingCart,
    title: 'E-Commerce Platform',
    des: 'Full-stack shopping experience with React, Next.js, Zustand and Stripe-style flows — 20% lift in checkout conversion.',
    link: 'https://shopping-cart-assignment-six.vercel.app/',
    code: 'https://github.com/NaveenD22/Shopping-Cart-Assignment',
    tags: ['Next.js', 'React', 'Zustand', 'Tailwind'],
  },
  {
    icon: ASSETS.multiTheme,
    title: 'Multi-Theme SaaS Portal',
    des: 'Next.js + TypeScript + Tailwind dashboard with a theme engine, GSAP micro-interactions and 30% higher engagement.',
    link: 'https://multi-theme-switcher-app-indol.vercel.app/',
    code: 'https://github.com/NaveenD22/Multi-Theme-Switcher-App',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'GSAP'],
  },
  {
    icon: ASSETS.javaScript,
    title: 'Interactive JavaScript Suite',
    des: 'A suite of vanilla JS games and tools — 50K+ user interactions; taught core DOM, perf and event-loop mastery.',
    link: 'https://naveend22.github.io/Core-JavaScript-projects/',
    code: 'https://github.com/NaveenD22/Core-JavaScript-projects',
    tags: ['JavaScript', 'HTML5', 'CSS3'],
  },
  {
    icon: ASSETS.spotify,
    title: 'Spotify Clone — Music Streaming',
    des: 'React + Redux app integrated with the Spotify Web API; lazy-loaded routes and memoized players cut load times by 25%.',
    link: 'https://spotify-clone-naveen-d4018.netlify.app/',
    code: '#',
    tags: ['React', 'Redux', 'Spotify API', 'Netlify'],
  },
  {
    icon: ASSETS.netflix,
    title: 'Netflix Clone — Video Streaming',
    des: 'React + Firebase streaming app with auth, profiles and trending rows — clean UX and 15% higher retention.',
    link: 'https://netflix-clone-28fe9.web.app/',
    code: '#',
    tags: ['React', 'Firebase', 'Auth', 'TMDB'],
  },
  {
    icon: ASSETS.propertyBuilder,
    title: 'Property Management SaaS',
    des: 'Multi-tenant tenant/lease management built with React, Node.js and Firebase — 35% faster lookups, role-based access.',
    link: '#',
    code: '#',
    tags: ['React', 'Node.js', 'Firebase', 'RBAC'],
    confidential: true,
  },
  {
    icon: ASSETS.analytics,
    title: 'Real-Time Analytics Dashboard',
    des: 'React + Node.js dashboard on AWS (ECS, Lambda, CloudFront) — websocket streams and 20% faster refresh cycles.',
    link: '#',
    code: '#',
    tags: ['React', 'Node.js', 'AWS', 'WebSockets'],
    confidential: true,
  },
  {
    icon: ASSETS.wearable,
    title: 'Wearable Health Companion',
    des: 'Cross-platform Flutter app syncing wearable data — 95% accurate metrics, deployed via Azure App Center and CI/CD.',
    link: '#',
    code: '#',
    tags: ['Flutter', 'Azure', 'CI/CD', 'BLE'],
    confidential: true,
  },
];

export const ExperienceContent = [
  {
    bag: <IoMdTrain />,
    arrow: <IoMdArrowDropleftCircle />,
    title: 'Pankhtech Pvt Ltd',
    role: 'Senior Full-Stack Engineer & Team Lead',
    period: 'Jan 2024 — Jun 2025',
    achievements: [
      'Led a team of 4 engineers delivering 2 high-traffic Next.js platforms; +25% user engagement quarter over quarter.',
      'Introduced micro-frontends and a shared design system, cutting feature delivery time by 20%.',
      'Migrated workloads to AWS ECS + CloudFront with GitHub Actions CI/CD — hit 99.9% uptime and zero-downtime deploys.',
      'Owned architecture decisions (RFCs/ADRs), code reviews and stakeholder demos.',
    ],
  },
  {
    bag: <IoMdTrain />,
    arrow: <IoMdArrowDropleftCircle />,
    title: 'Writ Labs',
    role: 'Full-Stack Developer (SDE II)',
    period: 'Jan 2023 — Dec 2023',
    achievements: [
      'Shipped 2 production React/Next.js apps; reduced JS bundle size by 35% and load times by 30%.',
      'Built Node.js APIs and integrated AWS Lambda + S3 pipelines, lowering infra cost by 20%.',
      'Mentored 3 junior developers — two promoted to mid-level within the year.',
      'Set up GitHub Actions CI/CD with Lighthouse and SonarQube quality gates.',
    ],
  },
  {
    bag: <IoMdTrain />,
    arrow: <IoMdArrowDropleftCircle />,
    title: 'Socialpubli',
    role: 'React Developer (SDE I)',
    period: 'Jan 2021 — Dec 2022',
    achievements: [
      'Delivered 3 responsive React UIs powering creator-marketing campaigns; +15% user retention.',
      'Optimized API integrations across REST and GraphQL — 25% faster response times.',
      'Contributed to Agile ceremonies and delivered features 10% ahead of plan.',
      'Authored a reusable component library used across product teams.',
    ],
  },
  {
    bag: <IoMdTrain />,
    arrow: <IoMdArrowDropleftCircle />,
    title: 'Freelance — Worldwide Clients',
    role: 'Full-Stack Engineer & Consultant',
    period: '2022 — Present',
    achievements: [
      'Delivered 10+ client projects across US, EU and APAC — 100% on-time delivery and 5-star reviews.',
      'Built headless CMS-driven marketing sites (Sanity + Next.js) — 40% faster publish workflows.',
      'Architected serverless backends on AWS Lambda and Azure Functions for SaaS startups.',
      'Set up CI/CD pipelines and DevOps automation for early-stage teams shipping daily.',
    ],
  },
];

export const TestimonialsContent = [
  {
    quote:
      'Naveen rebuilt our marketing platform on Next.js and Sanity — page speed jumped from 60 to 98 on Lighthouse and the editor experience finally lets our content team move fast.',
    author: 'Bhavya Madan',
    role: 'CTO, Pankhtech',
    rating: 5,
  },
  {
    quote:
      'He owned everything end-to-end: React frontend, Node APIs, AWS deployment and the CI/CD pipeline. We shipped twice a week with zero downtime. Exactly the kind of senior engineer remote teams want.',
    author: 'Mehar Jain',
    role: 'CEO, Writ Labs',
    rating: 5,
  },
  {
    quote:
      'Hired Naveen for an urgent Next.js + Azure migration. He hit every milestone, wrote clean TypeScript, and left us with documentation and pipelines we still use today.',
    author: 'Daniel R.',
    role: 'Engineering Manager, US-based SaaS',
    rating: 5,
  },
  {
    quote:
      'Working with Naveen is like adding a senior architect, frontend lead and DevOps engineer in one person. Clear communication, on-time delivery and real care for quality.',
    author: 'Priya Nair',
    role: 'Product Lead, EU Fintech',
    rating: 5,
  },
  {
    quote:
      'His mentorship in TypeScript, Redux and CI/CD made me a far better engineer. I would work on any project he leads.',
    author: 'Arpit',
    role: 'Junior Developer',
    rating: 5,
  },
];

export const FAQContent = [
  {
    q: 'Do you work with clients outside India?',
    a: 'Yes — I work with teams across the US, EU, UK, APAC and Middle East. I overlap with EST mornings and full GMT/CET working hours.',
  },
  {
    q: 'What engagement models do you offer?',
    a: 'Hourly, weekly retainer, milestone-based fixed-bid or full-time contract. Happy to start with a paid 1-week trial sprint.',
  },
  {
    q: 'Can you sign an NDA?',
    a: 'Absolutely. I am NDA-friendly and hand over full source code, documentation and CI/CD pipelines on delivery.',
  },
  {
    q: 'How fast can you start?',
    a: 'Typically within 3–7 days for new engagements. For urgent work I can often spin up a discovery call within 24 hours.',
  },
];
