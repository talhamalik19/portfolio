export const tehzeebErpMeta = {
  caseStudySlug: "tehzeeb-bakers-erp",
  caseStudyHref: "/case-studies/tehzeeb-bakers-erp",
  badge: "Flagship Project",
  title: "Building an Enterprise ERP Ecosystem",
  description:
    "Designed and engineered a complete enterprise ERP ecosystem for one of Pakistan's leading bakery brands, connecting POS, Pizza Operations, Custom Order Management, Reporting, and Branch Operations into a unified service-oriented platform with offline-first architecture and centralized business intelligence.",
};

export const tehzeebHighlights = [
  { value: "15+", label: "Branches" },
  { value: "Offline", label: "First" },
  { value: "Service-Oriented", label: "Architecture" },
  { value: "Barcode", label: "Automation" },
  { value: "10+", label: "Business Reports" },
  { value: "Centralized", label: "Analytics" },
  { value: "CI3 → CI4", label: "Migration" },
  { value: "PHP 5.4 → 8.4+", label: "Modernization" },
];

export interface ErpModule {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  overview: string;
  features: string[];
  tech: string[];
  modalTech: string[];
  images: string[];
}

export const productPreviews: ErpModule[] = [
  {
    id: "pos",
    title: "POS Platform",
    subtitle: "Point of Sale & Payment Hub",
    description:
      "Integrated point-of-sale with barcode scanning, automated checkout, payment processing, and ERP synchronization.",
    overview:
      "The modernized POS serves as the central payment hub for the entire ERP ecosystem. Every connected application routes orders through barcode scanning — eliminating manual entry and ensuring pricing accuracy across all branch operations.",
    features: [
      "Barcode-based order retrieval",
      "Automatic cart loading",
      "Payment processing",
      "Advance payment support",
      "ERP integration",
      "Real-time synchronization",
    ],
    tech: ["CodeIgniter 4", "PHP 8.4+", "Barcode"],
    modalTech: [
      "CodeIgniter 4",
      "PHP 8.4+",
      "MySQL",
      "Redis",
      "Barcode Integration",
      "REST APIs",
    ],
    images: [
      "/tehzeeb/pos/home.png",
      "/tehzeeb/pos/sales-taking.png",
      "/tehzeeb/pos/sales.png",
      "/tehzeeb/pos/items.png",
      "/tehzeeb/pos/reports.png",
    ],
  },
  {
    id: "pizza",
    title: "Pizza ERP",
    subtitle: "Kitchen Production & Order Lifecycle",
    description:
      "Digital kitchen workflow with real-time production tracking and barcode-driven order lifecycle.",
    overview:
      "A dedicated operational system that replaced paper workflows, connected the kitchen to the counter, and tied payment back to orders without manual re-entry across four synchronized display screens.",
    features: [
      "Digital kitchen display",
      "Order lifecycle tracking",
      "Chef workflow",
      "Barcode integration",
      "Automated production updates",
      "POS synchronization",
    ],
    tech: ["Kitchen Display", "Real-time Sync", "REST APIs"],
    modalTech: [
      "CodeIgniter 4",
      "JavaScript",
      "Bootstrap",
      "REST APIs",
      "Barcode Integration",
    ],
    images: [
      "/tehzeeb/pizza/order.png",
      "/tehzeeb/pizza/status.png",
      "/tehzeeb/pizza/checkout.png",
      "/tehzeeb/pizza/custmize.png",
      "/tehzeeb/pizza/fillings.png",
      "/tehzeeb/pizza/reports.png",
    ],
  },
  {
    id: "custom-orders",
    title: "Custom Order Management",
    subtitle: "Special Orders & Branch Fulfillment",
    description:
      "Enterprise workflow for scheduled orders, custom products, gift boxes, branch fulfillment, partial payments, and cross-branch coordination.",
    overview:
      "Handles complex, long-running, multi-branch orders with partial payments and cross-department dependencies — including future-dated scheduling, gift box customization, and inter-branch order routing.",
    features: [
      "Future order scheduling",
      "Custom product orders",
      "Gift box management",
      "Cross-branch fulfillment",
      "Partial payment tracking",
      "Status tracking",
      "Pizza integration",
      "Customer order history",
    ],
    tech: ["Future Orders", "Branch Routing", "Partial Payments"],
    modalTech: [
      "Laravel",
      "React",
      "Tailwind CSS",
      "MySQL",
      "REST APIs",
      "Barcode Integration",
    ],
    images: [
      "/tehzeeb/cake/home.png",
      "/tehzeeb/cake/order-create.png",
      "/tehzeeb/cake/customize-box.png",
      "/tehzeeb/cake/invoice.png",
      "/tehzeeb/cake/item-list.png",
    ],
  },
  {
    id: "stock",
    title: "Stock Management",
    subtitle: "Inventory & Raw Material Management",
    description:
      "Centralized inventory with raw material tracking, production-linked consumption, and branch-level stock visibility across all counters.",
    overview:
      "The inventory service extends the ERP beyond pizza and cake — covering snack, biscuit, grilled, and production counters. It tracks inbound raw materials, production-linked consumption, remaining stock, and cross-counter visibility so every branch position is known without guesswork.",
    features: [
      "Raw material inbound tracking",
      "Production-linked consumption",
      "Remaining stock visibility",
      "Multi-counter inventory coverage",
      "Cross-counter sales visibility",
      "Branch-level stock position",
      "Reorder visibility",
    ],
    tech: ["Raw Materials", "Branch Inventory", "Offline Sync"],
    modalTech: [
      "Windows Server",
      "Offline Synchronization",
      "MySQL",
      "REST APIs",
    ],
    images: [
      "/tehzeeb/stock/01%20Tehzeeb%20Stock%20App%20Login.png",
      "/tehzeeb/stock/02%20Tehzeeb%20Admin%20Dashboard%20Modules.png",
      "/tehzeeb/stock/03%20Tehzeeb%20Items%20Inventory%20Management.png",
      "/tehzeeb/stock/04%20Tehzeeb%20Items%20User%20Assignment.png",
      "/tehzeeb/stock/05%20Tehzeeb%20Items%20Excel%20Import.png",
      "/tehzeeb/stock/06%20Tehzeeb%20Items%20User%20Creation.png",
      "/tehzeeb/stock/07%20Tehzeeb%20Raw%20Material%20Management.png",
      "/tehzeeb/stock/08%20Tehzeeb%20Items%20and%20Raw%20Items%20Ingredient%20Bindings.png",
      "/tehzeeb/stock/09%20Tehzeeb%20Stock%20App%20User%20Dashboard.png",
      "/tehzeeb/stock/10%20Tehzeeb%20Stock%20App%20Order%20Management.png",
      "/tehzeeb/stock/12%20Tehzeeb%20Stock%20App%20Order%20Processing.png",
    ],
  },
];

export const architecturePreview = [
  "POS Platform",
  "Pizza ERP",
  "Custom Order Management",
  "Stock Management",
];

export const businessImpact = [
  {
    title: "Legacy Modernization",
    description:
      "Migrated a large production system from CodeIgniter 3 and PHP 5.4 to CodeIgniter 4 and PHP 8.4+, modernizing the codebase while maintaining business continuity.",
  },
  {
    title: "Operational Automation",
    description:
      "Replaced paper-based workflows with automated digital processes spanning order creation, kitchen operations, fulfillment, and payment processing.",
  },
  {
    title: "Offline-First Architecture",
    description:
      "Designed applications capable of running independently at each branch while automatically synchronizing with centralized management systems.",
  },
  {
    title: "Enterprise Reporting",
    description:
      "Delivered business intelligence tools that provide operational visibility across multiple branches through centralized reporting and analytics.",
  },
];

export const tehzeebTechStack = [
  "PHP",
  "CodeIgniter 4",
  "Laravel",
  "React",
  "Tailwind CSS",
  "MySQL",
  "MariaDB",
  "JavaScript",
  "jQuery",
  "Bootstrap",
  "Redis",
  "REST APIs",
  "Barcode Integration",
  "Offline Synchronization",
  "Git",
  "Docker",
  "CI/CD",
  "Windows Server",
  "Ubuntu Server",
];

export const caseStudyCta = {
  buttonLabel: "View Complete Case Study",
  supportingText:
    "This overview only highlights the platform. The complete case study explores the architecture, engineering decisions, offline synchronization, workflows, and business challenges behind the ERP ecosystem.",
};

export const erpModuleModalCta = {
  buttonLabel: "View Complete ERP Case Study",
  footerNote:
    "This module is part of the complete Enterprise ERP ecosystem.",
};
