import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "PaySync",
    title: "PaySync - npm package",
    description:
      "PaySync is a TypeScript library that provides a unified interface for integrating multiple payment providers, such as Stripe, LemonSqueezy, and RozerPay. It allows developers to easily switch between different payment gateways without changing existing payment logic, simplifying the management of various payment systems.",
    icon: "/skills/npm.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/swarnendu19/PaySync",
    url: "https://npmjs.com/package/paysync/",
    tags: ["Node.js", "Stripe", "NPM"],
  },
   
  
  {
    id: "e-commerce-app-mern",
    title: "E-commerce App",
    description:
      "Built a comprehensive e-commerce platform with product cart, order features, and Stripe payment integration. Developed a full-featured admin dashboard with dynamic Pie, Bar, and Line Charts for analytics. Improved application speed by 70% through Redis data caching. Reduced loading times by 20% using Lazy loading technique. Processed over 10,000 transactions with Node.js API, maintaining 99.9% uptime.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/swarnendu19/Ecommerce",
    url: "https://ecommerce-by-dip.vercel.app/",
    tags: ["React.js", "Redux", "SASS", "Stripe", "NodeJS", "MongoDB", "Express", "Redis", "Docker"],
  },

  {
    id: "code-spy",
    title: "Real Time Code Editor",
    description:
      "Developed a real-time collaborative code editor visible to all members via unique IDs, with live code execution. Enabled code uploads from local machines and download of written code, enhancing user convenience.Implemented a chat feature for seamless group communication , Added drawing capabilities using tldraw, allowing users to create",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/swarnendu19/Code-Editor",
    url: "https://code-editor-dip.vercel.app/",
    tags: ["ReactJS", "Node.js", "Express.js", "WebSocket", "TailwindCSS"],
  },
  {
    id: "Eraser-Clone",
    title: "Eraser Clone - Crafy",
    description:
      "Created a clone of the Eraser app with both document and drawing functionalities. Integrated an authentication system using Kinde for secure user management. Reduced server response time by 40% with optimized database queries. Supported concurrent editing for up to 50 users.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    url: "https://crafy-eraser-clone.vercel.app/",
    githubUrl:
      "https://github.com/swarnendu19/Crafy-Eraser-Clone",
    tags: ["React", "NextJS", "ShadCN", "TypeScript", "Convex Database"],
  },
  {
    id: "e-commerce-api-nodejs",
    title: "E-commerce API",
    description:
      "An RESTful API developed using Node.js, Express.js, MongoDB, and Stripe to integrate e-commerce backend.",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/swarnendu19/MERN-Backend-ecommerce",
    tags: ["Node.js", "Express.js", "MongoDB", "Stripe"],
  },
];

export default projects;

export function getProjectName(id: string) {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item.title;
}

export function getProjectDetails(id: string): IProjectItem | null {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item;
}
