export interface DevOpsTool {
  name: string;
  description: string;
  icon: string;
}

export const devopsTools: DevOpsTool[] = [
  {
    name: "Docker",
    description: "Containerized deployments with multi-stage builds and orchestrated environments.",
    icon: "container",
  },
  {
    name: "Terraform",
    description: "Infrastructure as Code for reproducible cloud environments.",
    icon: "blocks",
  },
  {
    name: "Ansible",
    description: "Configuration management and automated server provisioning.",
    icon: "settings",
  },
  {
    name: "GitHub Actions",
    description: "CI/CD pipelines for automated testing, building, and deployment.",
    icon: "git-branch",
  },
  {
    name: "Prometheus",
    description: "Metrics collection and alerting for system observability.",
    icon: "activity",
  },
  {
    name: "Grafana",
    description: "Visualization dashboards for real-time infrastructure monitoring.",
    icon: "bar-chart",
  },
  {
    name: "AWS",
    description: "Cloud infrastructure with EC2, S3, RDS, and VPC architecture.",
    icon: "cloud",
  },
];

export const awsServices = [
  { name: "EC2", description: "Compute instances for application hosting" },
  { name: "S3", description: "Object storage for assets and backups" },
  { name: "RDS", description: "Managed relational database service" },
  { name: "VPC", description: "Isolated network architecture design" },
];

export const cicdSteps = [
  "Code Push",
  "Automated Tests",
  "Docker Build",
  "Security Scan",
  "Deploy Staging",
  "Deploy Production",
];
