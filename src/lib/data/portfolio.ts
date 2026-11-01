// Content source: Talha_Resume.pdf. Keep claims and project scope grounded in it.
export type ProjectCategory = "E-commerce" | "Corporate" | "POS";

export interface PortfolioProject {
  slug: string;
  name: string;
  category: ProjectCategory;
  number: string;
  summary: string;
  tech: string[];
  url: string;
  visual: string;
  highlights: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "fme-extensions",
    name: "FME Extensions",
    category: "E-commerce",
    number: "01",
    summary: "A dynamic storefront connecting a responsive Next.js frontend with Magento 2, with a focus on performance and Core Web Vitals.",
    tech: ["React.js", "Next.js", "REST APIs", "GraphQL", "Magento 2"],
    url: "https://www.fmeextensions.com",
    visual: "fme",
    highlights: [
      "Developed the frontend for a fully dynamic e-commerce website integrated with a Magento 2 backend.",
      "Implemented a responsive interface, dynamic content management, and product catalog handling.",
      "Optimized Core Web Vitals including LCP, CLS, and TBT through code refactoring, caching, and image compression.",
      "Provided ongoing maintenance, bug fixes, feature enhancements, and technical support.",
    ],
  },
  {
    slug: "extendons",
    name: "Extendons",
    category: "E-commerce",
    number: "02",
    summary: "A Next.js commerce experience with Magento 2 integration, cart functionality, and support for multiple currencies and languages.",
    tech: ["React.js", "Next.js", "REST APIs", "GraphQL", "Magento 2"],
    url: "https://www.extendons.com",
    visual: "extendons",
    highlights: [
      "Developed a fast, responsive Next.js frontend integrated with a Magento 2 backend.",
      "Built cart functionality and implemented multi-currency and multi-language support for international users.",
      "Improved site speed and Core Web Vitals through code optimization and caching strategies.",
      "Reviewed junior developers’ code, resolved technical issues, and contributed to team development discussions.",
    ],
  },
  {
    slug: "juice-station",
    name: "Juice Station",
    category: "Corporate",
    number: "03",
    summary: "A corporate website built from scratch with Next.js and TypeScript, with reusable components and content managed through Strapi.",
    tech: ["React.js", "Next.js", "TypeScript", "Strapi"],
    url: "https://juicestation.com.pk",
    visual: "juice",
    highlights: [
      "Built the website from scratch using Next.js and TypeScript with a fully responsive design.",
      "Integrated Strapi CMS for dynamic content management.",
      "Created reusable React components to support scalable development.",
      "Handled development, deployment, and ongoing support.",
    ],
  },
  {
    slug: "baseer-pos",
    name: "Baseer POS",
    category: "POS",
    number: "04",
    summary: "A desktop POS and admin system with offline support, inventory workflows, and real-time order and product synchronization.",
    tech: ["React.js", "Next.js", "Electron.js", "Magento 2", "REST APIs", "GraphQL", "WebSockets"],
    url: "",
    visual: "baseer",
    highlights: [
      "Developing a Next.js POS frontend integrated with a Magento 2 backend and an Electron.js desktop application.",
      "Implemented supply chain workflows for stock, inventory, and suppliers.",
      "Added offline support from login through checkout, including product listings, cart, discounts, and custom product options.",
      "Implemented real-time order and product synchronization with WebSockets.",
      "Focused on secure transactions, order management, speed, and scalability.",
      "Providing ongoing support to around 15 POS systems.",
    ],
  },
];

export const skillGroups = [
  { title: "Frontend development", number: "01", skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "JSX / TSX", "Redux", "React Query"] },
  { title: "Backend & APIs", number: "02", skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "JWT authentication", "MongoDB", "WebSockets", "Webhooks"] },
  { title: "UI & styling", number: "03", skills: ["Tailwind CSS", "Material UI", "Bootstrap", "Responsive design", "Mobile UI / UX", "Figma"] },
  { title: "Development tools", number: "04", skills: ["Git", "GitHub", "VS Code", "Vite", "Postman"] },
  { title: "AI & productivity", number: "05", skills: ["Cursor", "Claude Code", "GitHub Copilot", "AI-powered code review", "Automated testing", "Code generation"] },
  { title: "How I work", number: "06", skills: ["Agile / Scrum", "Code review", "Technical leadership", "Mentoring", "Best practices", "Clean architecture"] },
];

export const workHighlights = [
  "Build React.js and Next.js applications with reusable components and maintainable frontend architecture.",
  "Implement responsive, accessible interfaces across devices and screen sizes.",
  "Collaborate with backend teams to integrate application features and Next.js API routes.",
  "Test and debug frontend code, contribute to design discussions, and improve usability.",
  "Lead junior developers and conduct code reviews.",
];

export const certifications = [
  { year: "2021", title: "React — The Complete Guide", detail: "Hooks, React Router & Redux" },
  { year: "2023", title: "Understanding TypeScript", detail: "2022 Edition" },
  { year: "2024", title: "Next.js & React — The Complete Guide", detail: "Including Two Paths" },
];
