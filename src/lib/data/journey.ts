export interface JourneyStage {
  id: string;
  year: string;
  title: string;
  description: string;
  milestone: string;
  highlights: string[];
}

export const journeyStages: JourneyStage[] = [
  {
    id: "journey-2022-frontend",
    year: "2022",
    title: "Frontend Foundations",
    description:
      "The professional journey began with frontend development — learning to craft responsive, user-focused interfaces and deliver real client work.",
    milestone: "Engineering journey starts",
    highlights: [
      "Started frontend development",
      "Learned HTML, CSS, Bootstrap, and Tailwind CSS",
      "Built responsive interfaces",
      "Worked on WordPress websites using Elementor",
      "Learned JavaScript and jQuery",
      "Converted designs into responsive pages",
    ],
  },
  {
    id: "journey-2022-2023-frontend-php",
    year: "2022 → 2023",
    title: "Professional Frontend & Core PHP",
    description:
      "Moved from learning to professional delivery — building dynamic WordPress sites while deepening backend fundamentals with Core PHP.",
    milestone: "First professional projects",
    highlights: [
      "Worked on frontend projects professionally",
      "Built WordPress dynamic websites",
      "Worked with Core PHP for backend functionality",
      "Improved UI/UX implementation skills",
    ],
  },
  {
    id: "journey-2023-laravel",
    year: "2023",
    title: "Laravel & CodeIgniter Backend",
    description:
      "A defining shift into backend engineering — frameworks, APIs, databases, and the discipline of building scalable web applications.",
    milestone: "Backend engineering focus",
    highlights: [
      "Transitioned into Laravel backend development",
      "Started working with CodeIgniter",
      "Built scalable web applications",
      "Learned API integrations",
      "Worked with databases and query optimization",
    ],
  },
  {
    id: "journey-2023-2024-ecommerce",
    year: "2023 → 2024",
    title: "Ecommerce & Multi-Store Systems",
    description:
      "Architected interconnected business systems — custom admin panels, multi-store management, and REST APIs powering real operations.",
    milestone: "Systems that scale",
    highlights: [
      "Worked on ecommerce systems",
      "Built custom admin panels",
      "Worked on multi-store management systems",
      "Implemented rider and branch management systems",
      "Worked with REST APIs and interconnected systems",
    ],
  },
  {
    id: "journey-2024-legacy",
    year: "2024",
    title: "Legacy Migration & Enterprise Architecture",
    description:
      "Took on high-stakes modernization — migrating legacy POS systems and designing enterprise-grade architecture with performance at the core.",
    milestone: "Legacy modernization",
    highlights: [
      "Migrated legacy systems from PHP 5.4 + CodeIgniter 3 to PHP 8 + CodeIgniter 4",
      "Improved application performance and maintainability",
      "Worked on enterprise architecture systems",
    ],
  },
  {
    id: "journey-2024-2025-vpc",
    year: "2024 → 2025",
    title: "VPC Enterprise Applications",
    description:
      "Built interconnected enterprise systems across retail verticals — pizza stores, cake stores, inventory, and school management at scale.",
    milestone: "Enterprise-grade delivery",
    highlights: [
      "Built VPC-based applications",
      "Worked on pizza store systems",
      "Worked on cake store systems",
      "Built inventory management solutions",
      "Built school management systems",
      "Improved scalability and infrastructure thinking",
    ],
  },
  {
    id: "journey-2025-2026-devops",
    year: "2025 → 2026",
    title: "DevOps & Cloud Engineering",
    description:
      "Evolved from application builder to infrastructure engineer — containers, orchestration, CI/CD, cloud, and observability.",
    milestone: "DevOps transformation",
    highlights: [
      "Entered DevOps & Cloud Engineering",
      "Worked with Docker",
      "Built CI/CD pipelines with GitHub Actions",
      "Worked with AWS infrastructure",
      "Used Terraform and Ansible",
      "Implemented monitoring with Prometheus and Grafana",
    ],
  },
  {
    id: "journey-2026-ai",
    year: "2026",
    title: "AI-Powered Analytics Systems",
    description:
      "Building the future — modern AI-integrated analytics dashboards with enterprise architecture, intelligent insights, and scalable engineering.",
    milestone: "Future-ready engineering",
    highlights: [
      "Building modern AI-powered analytics dashboards",
      "Using Laravel, Livewire, Tailwind, Flowbite, Flux, and Filament",
      "Integrating AI features into analytics systems",
      "Building modern enterprise-grade dashboards",
      "Focusing on scalability, architecture, and intelligent systems",
    ],
  },
];
