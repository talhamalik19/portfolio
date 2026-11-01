export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "exp-2025-2026-analytics",
    period: "2025 — 2026",
    role: "Backend Developer",
    company: "Analytics & Enterprise Solutions",
    description:
      "Building AI-powered analytics dashboards and enterprise-grade systems with Laravel, Livewire, and modern cloud-ready architecture.",
    highlights: [
      "Developing AI-integrated analytics dashboards",
      "Architecting scalable enterprise reporting systems",
      "Integrating intelligent insights into data platforms",
    ],
  },
  {
    id: "exp-2024-2025-enterprise",
    period: "2024 — 2025",
    role: "Backend Developer",
    company: "Enterprise Systems",
    description:
      "Delivered VPC-based enterprise applications, legacy migrations, and high-performance backend systems across multiple business verticals.",
    highlights: [
      "Migrated PHP 5.4 + CodeIgniter 3 to PHP 8 + CodeIgniter 4",
      "Built VPC-based pizza and cake store systems",
      "Developed inventory and school management platforms",
    ],
  },
  {
    id: "exp-2023-2024-multistore",
    period: "2023 — 2024",
    role: "Backend Developer",
    company: "Multi-Store & Ecommerce",
    description:
      "Built ecommerce platforms, custom admin panels, and multi-store order management with branches, riders, and REST APIs.",
    highlights: [
      "Implemented multi-store branch and rider management",
      "Built custom ecommerce admin panels",
      "Designed REST APIs for interconnected systems",
    ],
  },
  {
    id: "exp-2022-2023-web",
    period: "2022 — 2023",
    role: "Backend Developer",
    company: "Web Solutions",
    description:
      "Professional frontend and WordPress delivery, transitioning into Laravel, CodeIgniter, and Core PHP backend development.",
    highlights: [
      "Delivered WordPress and frontend projects professionally",
      "Transitioned into Laravel and CodeIgniter development",
      "Built scalable web applications with API integrations",
    ],
  },
];
