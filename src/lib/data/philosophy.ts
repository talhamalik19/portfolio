export interface PhilosophyItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const philosophyItems: PhilosophyItem[] = [
  {
    id: "philosophy-discipline",
    title: "Discipline Over Motivation",
    description:
      "Motivation fades. Discipline is what separates engineers who ship from those who stall. I show up every day and build.",
    icon: "shield",
  },
  {
    id: "philosophy-engineering",
    title: "Engineering Mindset",
    description:
      "Every problem is a system design challenge. I think in architectures, patterns, and scalable solutions — not quick fixes.",
    icon: "cpu",
  },
  {
    id: "philosophy-warrior",
    title: "Warrior Mentality",
    description:
      "I fight through complexity. Difficult problems don't intimidate me — they energize me. I never back down from a challenge.",
    icon: "swords",
  },
  {
    id: "philosophy-learning",
    title: "Continuous Learning",
    description:
      "Technology evolves daily. I invest in learning new tools, patterns, and paradigms to stay at the cutting edge.",
    icon: "book-open",
  },
  {
    id: "philosophy-scale",
    title: "Build Systems That Scale",
    description:
      "I don't build for today — I architect for tomorrow. Every system I design considers growth, load, and maintainability.",
    icon: "trending-up",
  },
  {
    id: "philosophy-excellence",
    title: "Never Settle for Average",
    description:
      "Good enough isn't good enough. I push for excellence in code quality, architecture decisions, and delivery standards.",
    icon: "target",
  },
];
