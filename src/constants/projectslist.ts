export interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
  githubRepo: string;
  image: string;
  note?: string;
}

export const projects: Project[] = [
  {
    title: "DataNode",
    description:
      "DataNode is an all-in-one platform that provides academic resources, tech trends, and career guidance for students and learners. Initially built to assist students in the Bachelor of Computer Applications (BCA) program, the platform has grown to include additional courses and resources to help students solve common academic challenges.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Nextra",
      "Mdx",
      "Tailwind CSS",
      "Framer Motion",
    ],
    liveLink: "https://www.datanode.in/",
    githubRepo: "https://github.com/Ankit-2145/DataNode",
    image: "/DataNodeUI.png",
  },
  {
    title: "AAIIC",
    description:
      "AAIIC (2025 International Conference on Applied Artificial Intelligence and Innovation) - Developed the official website for the AAIIC, hosted by Shoolini University. The platform provides comprehensive information about the conference, including schedules, keynote sessions, workshops, and registration details. It serves as a central hub for researchers, industry experts, and students to access essential resources and updates related to the event.",
    technologies: ["HTML", "Tailwind CSS", "AOS", "Flowbite", "Vite"],
    liveLink: "https://aaiic.in/",
    githubRepo: "https://github.com/Ankit-2145",
    image: "/aaiicUI.png",
  },
  {
    title: "School Notice Board CMS",
    description:
      "Developed a robust content management system tailored for school environments, enabling efficient creation and management of notices and announcements. Utilizing Appwrite for backend services and React for the frontend, the system offers secure authentication, real-time updates, and a user-friendly interface.",
    note: "This project is actively used in a school environment and is not publicly accessible. A demo can be provided upon request.",
    technologies: [
      "React",
      "JavaScript",
      "Redux",
      "React-Router",
      "Tiny MCE",
      "Appwrite",
      "Tailwind CSS",
      "Vite",
    ],
    liveLink: "",
    githubRepo: "https://github.com/Ankit-2145",
    image: "/schoolDashboard.png",
  },
  // {
  //   title: "Agency Portfolio Website",
  //   description:
  //     "A sleek agency website showcasing services in web development, UI/UX, and AI applications.",
  //   technologies: [
  //     "React",
  //     "React-Router",
  //     "TypeScript",
  //     "Tailwind CSS",
  //     "Motion",
  //     "Lenis",
  //     "Vite",
  //   ],
  //   liveLink: "",
  //   githubRepo: "",
  //   image: "/project1.png",
  // },
];
