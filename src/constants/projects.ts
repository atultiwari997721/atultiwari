export interface Project {
  category: string;
  title: string;
  image: string;
  description: string;
  tags: string[];
  accent: string;
}

export const PROJECTS: Project[] = [
  {
    category: "Web Dev",
    title: "Front-End",
    image: "/assets/thumb_front_end_cottage.png",
    description: "Building responsive, pixel-perfect web experiences using modern frameworks.",
    tags: ["HTML/CSS", "React", "Next.js"],
    accent: "from-orange-400 to-pink-500",
  },
  {
    category: "Artificial Intelligence",
    title: "Machine Learning",
    image: "/assets/thumb_ai_ml_abstract.png",
    description: "Developing intelligent models and data-driven solutions for complex problems.",
    tags: ["Python", "TensorFlow", "PyTorch"],
    accent: "from-violet-500 to-purple-600",
  },
  {
    category: "Python",
    title: "Algorithms",
    image: "/assets/thumb_python_3d.png",
    description: "Optimizing code efficiency and solving algorithmic challenges.",
    tags: ["Data Structures", "Optimization", "Scripting"],
    accent: "from-blue-400 to-cyan-500",
  },
  {
    category: "Data Science",
    title: "Visualization",
    image: "/assets/thumb_visualization.jpg",
    description: "Transforming raw data into meaningful insights and visual stories.",
    tags: ["Pandas", "Matplotlib", "Tableau"],
    accent: "from-emerald-400 to-teal-500",
  },
];
