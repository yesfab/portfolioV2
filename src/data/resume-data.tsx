import { ConsultlyLogo, JarockiMeLogo, MonitoLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Fabien Arnal",
  initials: "FA",
  location: "Eaubonne, Ile-de-France, France",
  locationLink: "https://www.google.com/maps/place/Eaubonne",
  about1: "Student full-stack web developer",
  about2: "Co-founder & UI/UX Designer & Community Manager of EzHost",
  summary1:
    "Hello world ! My name is Fabien and I'm a student full-stack web developer based near Paris.",
  summary2:
    "I'm also developing a project with my 2 colleagues/partners, EzHost, where I'm in charge of community management and UI/UX design.",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/99664607?s=400&u=826fd4d93d88ae0c76cd6e76bc7bf44fd4e33672&v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "fab.arnal@free.fr",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/yesfab",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fabien-arnal-developpeur-web-fullstack/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/fablab_dev",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Coding Factory by ESIEE-IT (Paris)",
      degree: "Bachelor's Degree in FullStack Web Development",
      start: "2022",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Conseil Départemental de la Seine-Saint-Denis",
      link: "https://seinesaintdenis.fr/",
      badges: ["Now"],
      title: "Apprentice Full Stack Web Developer",
      start: "2023",
      end: "present",
      description:
        "Implementing new features, correcting existing ones and updating the department's websites. Technologies : Vue.js, JQuery, PHP, Tailwind, SPIP, WordPress",
    },
    {
      company: "Camondo Consulting",
      link: "https://camondoconsulting.fr/",
      badges: "",
      title: "Intern Front End Developer",
      start: "2 months",
      end: "2023",
      description:
        "Design and development of their new website. Technologies : Figma, React",
    },
  ],
  skills: ["JavaScript", "TypeScript", "React", "Vue", "Figma", "Tailwind"],
  projects: [
    {
      title: "EzHost",
      techStack: ["Side Project"],
      description:
        "The fastest and easiest way to deploy your projects online.",
      link: {
        label: "ezhost.dev",
        href: "https://ezhost.dev/",
      },
    },
    {
      title: "Bienvenue in Seine-Saint-Denis",
      techStack: [
        "Apprenticeship Project",
        "Vuejs",
        "JQuery",
        "Vectuel's Mappr API",
        "WordPress",
      ],
      description:
        "Map showing places to see and visit in the Seine-Saint-Denis departement.",
      link: {
        label: "bienvenueinseinesaintdenis.mappr.fr",
        href: "https://bienvenueinseinesaintdenis.mappr.fr/fr#basemap=%22background-55%22&map=11%2F48.9159%2F2.4209",
      },
    },
    {
      title: "Camondo Consulting",
      techStack: ["Internship Project", "React", "Figma"],
      description:
        "Design and development of their website to highlight their offers.",
      link: {
        label: "camondoconsulting.fr",
        href: "https://camondoconsulting.fr/",
      },
    },
  ],
} as const;
