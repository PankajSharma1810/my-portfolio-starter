import { FaPaintBrush } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FaCodeCompare } from "react-icons/fa6";
import { GiIdea } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import {
  project1,
  project2,
  project3,
  project4,
  figma,
  sketch,
  xd,
  restapi,
  css,
  html,
  javascript,
  tailwind,
  typescript,
  express,
  redux,
  chakraui,
  node,
  github,
  mongodb,
  vscode,
  git,
  bootstrap,
  react,
  reactnative,
  emailicon,
  messengericon,
  whatsappicon,
} from "./assets";

export const menu = [
  { name: "About" },
  { name: "Skill" },
  { name: "Statistics" },
  { name: "Projects" },
  { name: "Contact" },
];


export const projects = [
  {
    title: "Smart Home Manager",
    image: project1,
    category: "Full Stack Project",
    description: "This platform brings all smart devices under one roof...",
    demoLink: "https://vsmarthomes.netlify.app/",
    githubLink: "https://github.com/PankajSharma1810/SmartHomeManager",
    stacks: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
    ],
  },
  {
    title: "Snack & Steer",
    image: project2,
    category: "Full Stack Project",
    description: "A real-time dashboard designed to help users stuck in traffic...",
    demoLink: "https://snack-steer.onrender.com/",
    githubLink: "https://github.com/PankajSharma1810/Snack-and-Steer",
    stacks: [
      { name: "ReactJs" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "Google API" },
    ],
  },
  {
    title: "Movie Zone",
    image: project3,
    category: "Frontend Project",
    description: "A web-based platform for managing a personalized movie collection...",
    demoLink: "https://movie-zone-8879.vercel.app/",
    githubLink: "https://github.com/PankajSharma1810/movie-zone",
    stacks: [
      { name: "React" },
      { name: "CSS" },
      { name: "Firebase" },
      { name: "Axios" },
    ],
  },
  {
    title: "Puma Clone",
    image: project4,
    category: "Clone App",
    description: "A static web-based clone of the official Puma website...",
    demoLink: "https://prismatic-kleicha-e75940.netlify.app/",
    githubLink: "https://github.com/PankajSharma1810/puma-clone",
    stacks: [
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
];



export const skills = [
  {
    title1: "Frontend Development",
    data1: [
      {
        skill: "HTML",

        logo: html,
      },
      {
        skill: "CSS",

        logo: css,
      },
      {
        skill: "JavaScript",

        logo: javascript,
      },

      {
        skill: "Typescript",
        logo: typescript,
      },

      {
        skill: "React",

        logo: react,
      },
      {
        skill: "Redux",
        logo: redux,
      },
      {
        skill: "Chakra UI",
        logo: chakraui,
      },

      {
        skill: "Git",
        logo: git,
      },
      {
        skill: "Github",
        logo: github,
      },
    ],
    title: "Backend Development",
    data: [
      {
        skill: "HTML",
        logo: html,
      },
      {
        skill: "CSS",
        logo: css,
      },
      {
        skill: "JavaScript",
        logo: javascript,
      },

      {
        skill: "Typescript",
        logo: typescript,
      },

      {
        skill: "React",

        logo: react,
      },
      {
        skill: "Redux",
        logo: redux,
      },
      {
        skill: "Chakra UI",
        logo: chakraui,
      },

      {
        skill: "Github",
        logo: github,
      },
      {
        skill: "Express.js",
        logo: express,
      },

      {
        skill: "Node.js",
        logo: node,
      },
      {
        skill: "MongoDB",
        logo: mongodb,
      },
      {
        skill: "Rest API",
        logo: restapi,
      },
    ],
  },
];
export const contactInfo = [
  {
    name: "Email",
    value: "pankaj.sharma181098@gmail.com",
    link: "https://mail.google.com",
    icon: emailicon,
    btnIcon: <MdOutlineEmail />,
    color: "rgb(56,115,205)",
  },

  {
    name: "WhatsApp",
    value: "+917018278879",
    link: "https://api.whatsapp.com/send?phone=+917018278879",
    icon: whatsappicon,
    btnIcon: <BsWhatsapp />,
    color: "rgb(38,234,112)",
  },
];
export const socialHandles = [
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/PankajSharma1810",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/sharmapankaj1810/",
  },
];


