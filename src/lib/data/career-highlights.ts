export interface MomentImage {
  src: string;
  alt: string;
  /** Original filename for matching milestones */
  filename: string;
}

export type CareerHighlightIcon =
  | "award"
  | "certificate"
  | "users"
  | "rocket";

export type CareerHighlightVariant = "moment" | "roadmap";

export interface LearningTopicCategory {
  title: string;
  items: string[];
}

export interface CareerHighlightMeta {
  id: string;
  badge: string;
  title: string;
  /** Short 1–2 line text shown on the card */
  summary: string;
  /** Longer copy shown in the info modal */
  description: string;
  date?: string;
  /** Optional in-progress label (omit for completed milestones) */
  status?: string;
  icon: CareerHighlightIcon;
  variant?: CareerHighlightVariant;
  /** Chips shown on roadmap cards */
  topics?: string[];
  /** Categorized topics for the roadmap info modal */
  topicCategories?: LearningTopicCategory[];
  /** Case-insensitive substring matched against filenames in public/moments */
  imageMatch?: string;
  /** Used when no matching file exists yet */
  fallbackImage?: MomentImage;
}

export interface CareerHighlight extends CareerHighlightMeta {
  image?: MomentImage;
}

function humanizeMomentFilename(filename: string): string {
  return filename
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export const careerHighlightMetas: CareerHighlightMeta[] = [
  {
    id: "employee-of-the-year",
    badge: "Recognition",
    title: "Employee of the Year",
    summary:
      "Recognized for exceptional performance and technical excellence.",
    description:
      "Recognized for outstanding performance, technical excellence, and contributions toward delivering high-impact software solutions.",
    icon: "award",
    imageMatch: "Dedicated Employee",
  },
  {
    id: "devops-certified",
    badge: "Certification",
    title: "DevOps Certified",
    summary: "Successfully completed professional DevOps training.",
    description:
      "Successfully completed professional DevOps training covering deployment automation, CI/CD, infrastructure management, and modern development practices.",
    icon: "certificate",
    imageMatch: "Devop",
  },
  {
    id: "leadership-collaboration",
    badge: "Team",
    title: "Leadership & Collaboration",
    summary: "Celebrating milestones alongside company leadership.",
    description:
      "Memorable moments with company leadership including the CEO, CTO, Product Manager, and engineering teams while celebrating milestones and successful project deliveries.",
    icon: "users",
    imageMatch: "CEO",
  },
  {
    id: "enterprise-solutions",
    badge: "Achievement",
    title: "Enterprise Delivery",
    summary:
      "Delivering enterprise software that drives business transformation.",
    description:
      "Successfully designed and delivered enterprise-grade applications that transformed traditional business operations into modern digital workflows.",
    icon: "rocket",
    imageMatch: "Appreciation",
  },
  {
    id: "agentic-ai-learning",
    badge: "Currently Learning",
    title: "Agentic AI & LLM Engineering",
    summary:
      "Currently completing an intensive 8-week program focused on building production-ready AI agents and modern Generative AI applications.",
    description:
      "I recently started an intensive 8-week program focused on building production-ready AI applications and intelligent agents — covering foundations through fine-tuning, alignment, and multi-agent systems.",
    status: "In Progress",
    icon: "rocket",
    variant: "roadmap",
    topics: [
      "Python for AI",
      "Deep Learning",
      "PyTorch",
      "Generative AI",
      "Large Language Models",
      "RAG",
      "ChromaDB",
      "Pinecone",
      "FAISS",
      "LangChain",
      "LangGraph",
      "AutoGen",
      "CrewAI",
      "FastAPI",
      "Flask",
      "Docker",
      "LoRA",
      "QLoRA",
      "PEFT",
      "RLHF",
      "DPO",
      "AI Agents",
    ],
    topicCategories: [
      {
        title: "AI Foundations",
        items: ["Python for AI & Data Science", "Deep Learning", "PyTorch"],
      },
      {
        title: "Generative AI",
        items: ["Large Language Models", "Prompt Engineering", "RAG"],
      },
      {
        title: "Vector Databases",
        items: ["ChromaDB", "Pinecone", "FAISS"],
      },
      {
        title: "AI Agents",
        items: ["LangChain", "LangGraph", "AutoGen", "CrewAI"],
      },
      {
        title: "Backend Development",
        items: ["FastAPI", "Flask"],
      },
      {
        title: "Deployment",
        items: ["Docker"],
      },
      {
        title: "Fine-Tuning",
        items: ["LoRA", "QLoRA", "PEFT"],
      },
      {
        title: "LLM Alignment",
        items: ["RLHF", "DPO"],
      },
    ],
  },
];

export function resolveCareerHighlights(
  images: MomentImage[]
): CareerHighlight[] {
  const unused = [...images];
  const resolved: CareerHighlight[] = [];

  for (const meta of careerHighlightMetas) {
    if (meta.variant === "roadmap") {
      resolved.push({ ...meta });
      continue;
    }

    const matchIndex = meta.imageMatch
      ? unused.findIndex((img) =>
          img.filename.toLowerCase().includes(meta.imageMatch!.toLowerCase())
        )
      : -1;

    if (matchIndex !== -1) {
      const [image] = unused.splice(matchIndex, 1);
      if (image) {
        resolved.push({ ...meta, image });
        continue;
      }
    }

    if (meta.fallbackImage) {
      resolved.push({ ...meta, image: meta.fallbackImage });
    }
  }

  for (const image of unused) {
    if (image.filename.toLowerCase().includes("placeholder")) continue;

    resolved.push({
      id: `moment-${image.filename}`,
      badge: "Moment",
      title: humanizeMomentFilename(image.filename),
      summary: "A memorable moment from the professional journey.",
      description:
        "A memorable moment from my professional journey — recognition, collaboration, and growth along the way.",
      icon: "award",
      variant: "moment",
      imageMatch: "",
      image,
    });
  }

  return resolved;
}

export function isRoadmapHighlight(highlight: CareerHighlight): boolean {
  return highlight.variant === "roadmap";
}
