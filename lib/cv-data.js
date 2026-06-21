// Plain-text CV data — extracted from portfolio constants.
// Kept separate so the PDF generator never needs to import react-icons / JSX.

export const cvData = {
  name: 'Naveen Dudhyal',
  role: 'Senior Full-Stack Engineer · Cloud & DevOps',
  tagline:
    'I help startups and enterprises ship secure, lightning-fast, production-grade web platforms — end to end.',
  summary:
    'Senior Full-Stack Engineer with 5+ years architecting and delivering 30+ complex web platforms using React, Next.js, TypeScript and Node.js — deployed on AWS and Azure with battle-tested CI/CD pipelines. Led cross-functional teams, designed headless CMS-driven marketing sites, built multi-tenant SaaS dashboards, and automated infrastructure with Docker, Terraform and GitHub Actions. Focus: pixel-perfect UI, sub-2s performance, 99.9% uptime, and code your future engineers will thank you for.',
  contact: {
    email: 'dinaveen4018@gmail.com',
    phone: '+91-8050927428',
    location: 'Bangalore, India · Open to worldwide remote',
    linkedin: 'linkedin.com/in/naveen-dudhyal-ba122a22a',
    website: 'naveen-dudhyal.vercel.app',
  },
  availability: 'Open to new projects — June 2026 onwards',
  stats: [
    { value: '5+', label: 'Years experience' },
    { value: '30+', label: 'Projects shipped' },
    { value: '15+', label: 'Happy clients' },
    { value: '99.9%', label: 'Uptime delivered' },
  ],
  highlights: [
    'Architected and shipped 30+ production apps in React, Next.js, Node.js and Flutter — serving 1M+ monthly users.',
    'Designed multi-region deployments on AWS (ECS, Lambda, S3, CloudFront) and Azure (App Service, Functions, Blob, Front Door) with 99.9% uptime SLAs.',
    'Built CI/CD pipelines with GitHub Actions, Azure DevOps and Jenkins — cut release cycles from weekly to multiple times per day.',
    'Delivered headless CMS platforms (Strapi, Sanity, Contentful) — reduced content-to-publish time by 40%.',
    'Led teams of 4–8 engineers across 3 time zones; owned architecture, code review and stakeholder communication.',
    'Tuned Core Web Vitals to 95+ Lighthouse scores; reduced TTI under 2s via SSR/ISR, edge caching and image optimization.',
  ],
  skills: [
    {
      title: 'Next.js & React Ecosystem',
      des: 'Production Next.js (App Router) and React 18 apps with TypeScript, SSR/ISR, RSC, Redux Toolkit, Zustand, React Query, Tailwind, MUI, Radix, Shadcn.',
    },
    {
      title: 'Node.js, APIs & Databases',
      des: 'REST, GraphQL and tRPC APIs with Node.js / NestJS / Express. PostgreSQL, MongoDB, Redis, MySQL — Prisma & Mongoose. Auth via JWT, OAuth, NextAuth, Azure AD B2C.',
    },
    {
      title: 'AWS Cloud — Production at Scale',
      des: 'ECS Fargate, EC2, Lambda, API Gateway, RDS, DynamoDB, S3, CloudFront, Route 53. CloudWatch / X-Ray observability. Cost optimization saving up to 30%/mo.',
    },
    {
      title: 'Microsoft Azure',
      des: 'App Service, Functions, AKS, Container Apps. Blob, Cosmos DB, Azure SQL, Front Door CDN. Entra ID SSO, Bicep/Terraform IaC, Azure DevOps release gates.',
    },
    {
      title: 'CI/CD & DevOps',
      des: 'GitHub Actions, Azure DevOps, Jenkins, GitLab CI, CircleCI. Docker, Kubernetes, Helm. Preview environments, blue-green and canary releases. SonarQube, Snyk, Lighthouse CI.',
    },
    {
      title: 'Headless CMS Platforms',
      des: 'Strapi, Sanity, Contentful, Hygraph, Sitecore. ISR + on-demand revalidation. Live previews, role-based access, localization, custom plugins & migration scripts.',
    },
    {
      title: 'Tech Leadership & Mentoring',
      des: 'Led 4–8 engineer squads across 3 time zones. RFCs/ADRs, 100+ code reviews, mentoring 10+ developers, stakeholder demos, roadmaps, sprint planning.',
    },
    {
      title: 'Security & Observability',
      des: 'OWASP Top-10 hardening, dependency scanning, secret rotation. Sentry, Datadog, New Relic, OpenTelemetry. WAF, rate limiting, CSP, SSO via OAuth/OIDC.',
    },
  ],
  experience: [
    {
      title: 'Pankhtech Pvt Ltd',
      role: 'Senior Full-Stack Engineer & Team Lead',
      period: 'Jan 2024 — Jun 2025',
      achievements: [
        'Led a team of 4 engineers delivering 2 high-traffic Next.js platforms; +25% user engagement quarter over quarter.',
        'Introduced micro-frontends and a shared design system, cutting feature delivery time by 20%.',
        'Migrated workloads to AWS ECS + CloudFront with GitHub Actions CI/CD — 99.9% uptime and zero-downtime deploys.',
        'Owned architecture decisions (RFCs/ADRs), code reviews and stakeholder demos.',
      ],
    },
    {
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
  ],
};
