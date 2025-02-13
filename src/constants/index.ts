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
  Technologies: [
    { id: 1, label: "HTML", image: "/html5.png", color: "bg-orange-600" },
    { id: 2, label: "CSS", image: "/css3.png", color: "bg-blue-500" },
    { id: 3, label: "JavaScript", image: "/js.png", color: "bg-yellow-400" },
    { id: 4, label: "React", image: "/reactjs.png", color: "bg-cyan-400" },
    { id: 5, label: "Next.js", image: "/nextjs.png", color: "bg-white" },
    {
      id: 6,
      label: "TypeScript",
      image: "/typescript.png",
      color: "bg-blue-700",
    },
    {
      id: 7,
      label: "Tailwind CSS",
      image: "/tailwindcss.png",
      color: "bg-cyan-500",
    },
    { id: 8, label: "Node.js", image: "/nodejs.png", color: "bg-green-600" },
    { id: 9, label: "Express", image: "/express.png", color: "bg-white" },
    { id: 10, label: "MongoDB", image: "/MongoDB.svg", color: "bg-green-500" },
    {
      id: 11,
      label: "Firebase",
      image: "/firebase.png",
      color: "bg-yellow-500",
    },
    { id: 12, label: "Appwrite", image: "/appwrite.png", color: "bg-pink-500" },
    {
      id: 13,
      label: "Clerk",
      image: "/clerk.svg",
      color: "bg-indigo-600",
    },
    {
      id: 14,
      label: "Authjs",
      image: "/Authjs.webp",
      color: "bg-cyan-600",
    },
    { id: 15, label: "Git", image: "/git.png", color: "bg-orange-600" },
    {
      id: 16,
      label: "GitHub",
      image: "/github-mark.svg",
      color: "bg-white",
    },
    {
      id: 17,
      label: "Motion",
      image: "/framer-motion.svg",
      color: "bg-purple-600",
    },
    { id: 18, label: "Vite", image: "/vitejs.png", color: "bg-purple-500" },
    { id: 19, label: "Figma", image: "/figma.png", color: "bg-pink-500" },
    { id: 20, label: "npm", image: "/npm.png", color: "bg-red-600" },
    { id: 21, label: "VS Code", image: "/vscode.png", color: "bg-blue-500" },
    {
      id: 22,
      label: "PostgreSQL",
      image: "/elephant.png",
      color: "bg-blue-500",
    },
    {
      id: 23,
      label: "Prisma",
      image: "/prisma.png",
      color: "bg-indigo-500",
    },
    {
      id: 24,
      label: "JWT",
      image: "/jwt.svg",
      color: "bg-purple-500",
    },
  ],
};
