export interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Backend Development",
    skills: [
      { name: "Laravel", level: 95 },
      { name: "CodeIgniter", level: 90 },
      { name: "PHP", level: 95 },
      { name: "Livewire", level: 85 },
    ],
  },
  {
    name: "Frontend Development",
    skills: [
      { name: "React", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Alpine.js", level: 75 },
      { name: "jQuery", level: 80 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    name: "DevOps & Cloud",
    skills: [
      { name: "Docker", level: 85 },
      { name: "Terraform", level: 80 },
      { name: "Ansible", level: 75 },
      { name: "AWS", level: 85 },
      { name: "Linux", level: 90 },
      { name: "Nginx", level: 85 },
      { name: "Apache", level: 80 },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "Redis", level: 80 },
    ],
  },
  {
    name: "Architecture",
    skills: [
      { name: "VPC Design", level: 90 },
      { name: "REST APIs", level: 95 },
      { name: "Microservices", level: 80 },
      { name: "Multi-Tenant", level: 85 },
    ],
  },
  {
    name: "Monitoring",
    skills: [
      { name: "Prometheus", level: 80 },
      { name: "Grafana", level: 80 },
    ],
  },
  {
    name: "Version Control",
    skills: [
      { name: "Git", level: 95 },
      { name: "GitHub", level: 95 },
      { name: "Bitbucket", level: 85 },
    ],
  },
  {
    name: "CI/CD",
    skills: [
      { name: "GitHub Actions", level: 85 },
      { name: "Docker Compose", level: 85 },
    ],
  },
  {
    name: "Project Management",
    skills: [
      { name: "Agile", level: 85 },
      { name: "System Design", level: 90 },
      { name: "Legacy Migration", level: 90 },
    ],
  },
];

export const techIcons = [
  "Laravel",
  "React",
  "Docker",
  "AWS",
  "PHP",
  "Terraform",
  "Livewire",
];
