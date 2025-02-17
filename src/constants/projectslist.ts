export interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
  githubRepo: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "Learning Resource Platform",
    description:
      "A platform for students to access learning materials, animations, and study resources.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://your-live-link.com",
    githubRepo: "https://github.com/your-repo",
    image: "/project1.png",
  },
  {
    title: "Research Guidance Website",
    description:
      "A website offering research consultancy, study materials, and publication support for students and professors.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Firebase"],
    liveLink: "https://your-live-link.com",
    githubRepo: "https://github.com/your-repo",
    image: "/project1.png",
  },
  {
    title: "School Notice Board CMS",
    description:
      "A backend CMS for managing school notices using Appwrite and React.",
    technologies: ["React", "Appwrite", "Tailwind CSS"],
    liveLink: "https://your-live-link.com",
    githubRepo: "https://github.com/your-repo",
    image: "/project1.png",
  },
  {
    title: "Agency Portfolio Website",
    description:
      "A sleek agency website showcasing services in web development, UI/UX, and AI applications.",
    technologies: ["Next.js", "Tailwind CSS", "GSAP"],
    liveLink: "https://your-live-link.com",
    githubRepo: "https://github.com/your-repo",
    image: "/project1.png",
  },
];
