export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  architecture: string;
  challenges: string[];
  achievements: string[];
  gradient: string;
  featured?: boolean;
  images?: string[];
  subtitle?: string;
  liveUrl?: string;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    id: "ai-analytics",
    title: "AI Analytics Dashboard",
    description:
      "Modern analytics dashboard with AI-powered insights, advanced reporting, visualizations, performance metrics, and enterprise-level architecture.",
    tech: [
      "Laravel",
      "Livewire",
      "Tailwind",
      "Flowbite",
      "Flux",
      "Filament",
      "AI Integration",
    ],
    architecture:
      "Event-driven analytics pipeline with real-time data aggregation, AI inference layer, and modular dashboard components.",
    challenges: [
      "Processing high-volume analytics data in real-time",
      "Integrating AI models for intelligent insights",
      "Building responsive enterprise dashboards",
    ],
    achievements: [
      "Reduced reporting time by 70%",
      "AI-powered anomaly detection",
      "Enterprise-grade role-based access",
    ],
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    featured: true,
    images: [
      "/analytics/main.png",
      "/analytics/branch-report.png",
      "/analytics/product-report.png",
      "/analytics/one-to-one-comparison.png",
      "/analytics/light-mode.png",
    ],
  },
  {
    id: "nha",
    title: "National Highway Authority (NHA)",
    subtitle: "Government Content Management & CRM Platform",
    description:
      "Developed a custom Content Management & CRM platform that powers content for the National Highway Authority (NHA) website. Administrators can manage pages, publications, announcements, notices, media, and public information through a secure backend—without developer involvement—built with Laravel and Bootstrap for a scalable government web platform.",
    tech: ["Laravel", "Bootstrap"],
    architecture:
      "Custom Laravel CMS/CRM with an administrative backend that dynamically manages public website content, publications, media, and announcements.",
    challenges: [
      "Enabling non-technical staff to publish government content without deployments",
      "Structuring role-based administration for secure content workflows",
      "Supporting media, notices, and publications across a public government portal",
    ],
    achievements: [
      "Streamlined content publishing for NHA administrators",
      "Reduced dependency on developers for routine website updates",
      "Delivered a maintainable Laravel-based CMS/CRM foundation",
    ],
    highlights: [
      "Dynamic Content Management",
      "Custom CRM",
      "Website Administration",
      "Media & Document Management",
      "Announcement & News Publishing",
      "Responsive Government Portal",
      "Role-Based Administration",
      "Scalable Laravel Architecture",
    ],
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    featured: true,
    liveUrl: "https://www.nha.gov.pk/",
    images: [
      "/NHA/NHA%20Landing%20Page.png",
      "/NHA/NHA%20Custom%20CMS%20Dashboard.png",
      "/NHA/NHA%20Custom%20CMS%20Navigation.png",
      "/NHA/NHA%202FA%20Login.png",
    ],
  },
  {
    id: "school",
    title: "School Management System",
    description:
      "Comprehensive school management platform covering admissions, attendance, grades, fees, and parent communication.",
    tech: ["Laravel", "Blade", "MySQL", "Bootstrap"],
    architecture:
      "Role-based multi-module system with admin, teacher, student, and parent portals.",
    challenges: [
      "Multi-role access control design",
      "Fee management and reporting",
      "Parent-teacher communication portal",
    ],
    achievements: [
      "Complete school lifecycle management",
      "Automated fee reminders",
      "Digital attendance tracking",
    ],
    gradient: "from-sky-500/20 via-blue-500/10 to-transparent",
  },
  {
    id: "ecommerce",
    title: "Ecommerce Platform",
    description:
      "Custom ecommerce platform with bespoke admin panel, product management, order processing, and customer frontend.",
    tech: ["Laravel", "JavaScript", "MySQL", "Tailwind CSS"],
    architecture:
      "Custom-built ecommerce engine with modular product catalog, cart system, payment integration, and admin CMS.",
    challenges: [
      "Custom admin panel from scratch",
      "Payment gateway integration",
      "Product catalog scalability",
    ],
    achievements: [
      "Fully custom admin experience",
      "Multi-payment gateway support",
      "Scalable product architecture",
    ],
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
  },
];
