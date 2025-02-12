type Technology = {
  id: number;
  label: string;
  image: string;
  color: string;
};

type TechStackCategory = {
  [key: string]: Technology[];
};

export const techStacks: TechStackCategory = {
  frontendTechnologies: [
    { id: 1, label: "HTML", image: "/html5.png", color: "bg-orange-600" },
    { id: 2, label: "CSS", image: "/css3.png", color: "bg-blue-500" },
    { id: 3, label: "JavaScript", image: "/js.png", color: "bg-yellow-400" },
    {
      id: 4,
      label: "TypeScript",
      image: "/typescript.png",
      color: "bg-blue-700",
    },
    { id: 5, label: "React", image: "/reactjs.png", color: "bg-cyan-400" },
    { id: 6, label: "Next.js", image: "/nextjs.png", color: "bg-black" },
    {
      id: 7,
      label: "Tailwind CSS",
      image: "/tailwindcss.png",
      color: "bg-cyan-500",
    },
  ],
  backendTechnologies: [
    { id: 1, label: "Node.js", image: "/nodejs.png", color: "bg-green-600" },
    { id: 2, label: "Express", image: "/express.svg", color: "bg-gray-800" },
    { id: 3, label: "Appwrite", image: "/appwrite.png", color: "bg-pink-500" },
    {
      id: 4,
      label: "Firebase",
      image: "/firebase.png",
      color: "bg-yellow-500",
    },
  ],
  toolsPlatforms: [
    { id: 1, label: "GitHub", image: "/github.png", color: "bg-gray-900" },
    {
      id: 2,
      label: "Version Control",
      image: "/git.png",
      color: "bg-orange-600",
    },
    { id: 3, label: "Vercel", image: "/vercel.svg", color: "bg-black" },
  ],
  uiUxAnimation: [
    {
      id: 1,
      label: "Framer Motion",
      image: "/framer-motion.svg",
      color: "bg-purple-600",
    },
    { id: 2, label: "Figma", image: "/figma.png", color: "bg-purple-500" },
  ],
  databaseAuthentication: [
    { id: 1, label: "MongoDB", image: "/mongodb.png", color: "bg-green-500" },
    {
      id: 2,
      label: "Authentication",
      image: "/clerk-logo-dark-accent.png",
      color: "bg-indigo-600",
    },
  ],
};
