export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-retail-enterprise",
    quote:
      "Muhammad transformed our legacy POS system into a modern, scalable platform. The migration was flawless — zero downtime, zero data loss. His engineering discipline is exceptional.",
    author: "Project Stakeholder",
    role: "Operations Director",
    company: "Retail Enterprise",
  },
  {
    id: "testimonial-food-beverage",
    quote:
      "The multi-store order management system he architected handles 15+ branches seamlessly. Real-time tracking, rider dispatch, and centralized control — exactly what we needed.",
    author: "Technical Lead",
    role: "CTO",
    company: "Food & Beverage Chain",
  },
  {
    id: "testimonial-saas-startup",
    quote:
      "His DevOps mindset brought our deployment process from manual chaos to automated excellence. Docker, CI/CD, and AWS infrastructure — all production-ready.",
    author: "Engineering Manager",
    role: "Head of Engineering",
    company: "SaaS Startup",
  },
  {
    id: "testimonial-analytics-platform",
    quote:
      "The AI analytics dashboard exceeded expectations. Intelligent insights, beautiful visualizations, and enterprise-grade architecture. A developer who builds serious systems.",
    author: "Product Owner",
    role: "VP Product",
    company: "Analytics Platform",
  },
];
