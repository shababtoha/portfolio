export const profile = {
  name: 'Shabab Hasnat Toha',
  shortName: 'Shabab Toha',
  headline:
    'Senior Backend Engineer | Distributed Systems | Event-Driven & Real-Time Data Pipelines',
  location: 'Bangkok, Thailand',
  email: 'shabab.toha@gmail.com',
  phoneDisplay: '+66 83 830 9145',
  phoneHref: 'tel:+66838309145',
  linkedin: 'https://www.linkedin.com/in/shababtoha',
  github: 'https://github.com/shababtoha',
  codeforces: 'https://codeforces.com/profile/_Lucifer',
  resumePath: '/Shabab_Hasnat_Toha_Resume.pdf',
  resumeFileName: 'Shabab_Hasnat_Toha_Resume.pdf',
  siteUrl: 'https://shababtoha.com',
} as const;

export const summary =
  'Senior backend engineer with 6+ years designing, building, and operating high-throughput distributed systems. I own Agoda’s analytics platform processing ~4 billion events per day — its Kafka pipelines, real-time anomaly detection, alerting infrastructure, and ingestion-time GDPR/PDPA compliance layer. Hands-on across Java/Spring Boot, Node.js/TypeScript, and .NET, with a focus on system correctness, reliability at scale, and architecture other engineers can build on.';

export const heroStats = [
  { value: '~4B', label: 'events per day' },
  { value: '40%', label: 'faster incident response' },
  { value: '20%', label: 'more accurate measurement' },
  { value: '15%', label: 'fewer post-release bugs' },
] as const;

export const highlights = [
  {
    index: '01',
    title: 'Event pipelines',
    text: 'Core ingestion on Kafka and Node.js for a platform that takes in **~4 billion events a day**, with p99 latency held within SLA during peak traffic.',
  },
  {
    index: '02',
    title: 'Anomaly detection',
    text: 'A distributed, event-driven detector on the live Kafka stream. It finds broken integrations and auto-files bugs to service owners, cutting time-to-detection **from hours to minutes**.',
  },
  {
    index: '03',
    title: 'Real-time alerting',
    text: 'Alerting with integrated dashboards. On-call moved from reactive firefighting to proactive monitoring, and critical incident response time fell **by 40%**.',
  },
  {
    index: '04',
    title: 'Privacy at ingestion',
    text: 'Real-time PII detection inside the pipeline, built with legal and compliance, so **GDPR and PDPA** are enforced at ingestion time.',
  },
] as const;

export interface Role {
  title: string;
  period: string;
  current?: boolean;
  bullets: string[];
}

export interface Company {
  company: string;
  location: string;
  roles: Role[];
}

export const experience: Company[] = [
  {
    company: 'Agoda',
    location: 'Bangkok, Thailand',
    roles: [
      {
        title: 'Senior Software Engineer',
        period: 'Jan 2023 – Present',
        current: true,
        bullets: [
          'Own the end-to-end analytics platform ingesting **~4 billion events per day** that powers product and marketing decisions globally. Built and maintain the core Kafka and Node.js ingestion pipelines, keeping p99 latency within SLA during peak traffic.',
          'Architected a distributed, event-driven anomaly detection system that consumes the Kafka stream in real time, identifies broken integrations, and auto-files bugs to service owners, cutting time-to-detection **from hours to minutes**.',
          'Designed and deployed a real-time alerting system with integrated dashboards, reducing critical incident response time **by 40%** and shifting on-call engineers from reactive firefighting to proactive monitoring.',
          'Redesigned event tracking across web and mobile, closing data gaps that were skewing funnel metrics. Improved measurement accuracy **by 20%**, which directly shaped how the growth team runs experiments.',
          'Implemented real-time PII detection inside the analytics pipeline, partnering with legal and compliance to enforce **GDPR and PDPA** at ingestion time.',
          'Built a reusable analytics testing library adopted across multiple backend services, standardizing event validation and driving a **15% reduction** in post-release bugs.',
          'Overhauled CI/CD pipelines by parallelizing builds, removing redundant steps, and streamlining deployment, cutting build times **by 25%** and enabling more frequent, lower-friction releases.',
        ],
      },
    ],
  },
  {
    company: 'Enosis Solutions',
    location: 'Dhaka, Bangladesh',
    roles: [
      {
        title: 'Senior Software Engineer',
        period: 'Jan 2022 – Dec 2022',
        bullets: [
          'Led the full rewrite of a legacy Perl work-order application into **.NET**, managing a 2-person team and owning architecture and delivery end to end while keeping the existing system live.',
          'Re-architected the system from the ground up in .NET, resolving long-standing reliability issues and improving application performance and uptime.',
          'Documented architectural decisions and coding standards, enabling a clean handover so the next team could own the codebase without tribal-knowledge dependencies.',
        ],
      },
      {
        title: 'Software Engineer',
        period: 'Mar 2019 – Dec 2021',
        bullets: [
          'Designed and built a queuing system that replaced a brittle, lag-prone polling mechanism, improving data synchronization speed and throughput **by 50%**.',
          'Led enterprise integrations with **Oracle, SAP, and Deltek**, enabling the platform to exchange data with systems clients already depended on.',
          'Built a background monitoring service that tracks data-sync health and alerts on failures, eliminating recurring manual intervention.',
        ],
      },
    ],
  },
];

export const skillGroups = [
  {
    name: 'Languages',
    items: ['Java', 'TypeScript', 'JavaScript', 'C#', 'Python', 'SQL', 'C/C++'],
  },
  {
    name: 'Backend & Frameworks',
    items: ['Node.js', 'Spring Boot', '.NET Core', 'Express.js', 'Backend APIs'],
  },
  {
    name: 'Streaming & Data',
    items: ['Apache Kafka', 'Redis', 'PostgreSQL', 'MySQL', 'Hadoop'],
  },
  {
    name: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'CI/CD'],
  },
  {
    name: 'Architecture',
    items: [
      'Distributed Systems',
      'Event-Driven Architecture',
      'Real-Time Data Pipelines',
      'System Design',
      'Alerting',
    ],
  },
] as const;

export const education = {
  school: 'Military Institute of Science and Technology (MIST)',
  degree: 'B.Sc. in Computer Science and Engineering',
  result: 'CGPA 3.45 / 4.00',
  period: '2015 – 2019',
} as const;

export const competitive = [
  {
    name: 'Codeforces',
    stat: 'Expert · 1658',
    detail: 'Top ~10% globally',
    href: profile.codeforces,
  },
  {
    name: 'LeetCode',
    stat: 'Rating 1763',
    detail: 'Top 9% globally',
    href: undefined,
  },
] as const;

export const navItems = [
  { name: 'Work', href: '#work' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Background', href: '#background' },
  { name: 'Contact', href: '#contact' },
] as const;
