import mailIcon from "../assets/icons/icons8-mail.svg";
import gitHubIcon from "../assets/icons/icons8-github.svg";
import linkedInIcon from "../assets/icons/icons8-linkedin-48.png";
import phoneIcon from "../assets/icons/icons8-phone.svg";

import Html_Image from "../assets/images/html-5.png";
import Css_Image from "../assets/images/css-3.png";
import Js_image from "../assets/images/js.png";
import React_Image from "../assets/images/physics.png";
import NodeJs_image from "../assets/images/programing.png";
import Scss_Image from "../assets/images/Sass.png";
import ReactNative_Image from "../assets/images/React_native.png";
import Tailwind_Image from "../assets/images/Tailwind.png";
import MongoDB_Image from "../assets/images/MongoDB.png";
import Express_Image from "../assets/images/Express.png";
import Sql_Image from "../assets/images/Sql.png";
import Figma_Image from "../assets/images/Figma.png";
import GitHub_Image from "../assets/images/Github.png";
import Git_Image from "../assets/images/Git.png";
import VSCode_Image from "../assets/images/VS_code.png";
import { AiFillHome } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { FiFolder } from "react-icons/fi";
import { BiCodeAlt } from "react-icons/bi";
import { MdContactMail } from "react-icons/md";

export const Navlinks = [
  {
    id: "home",
    label: "Home",
    path: "Home",
    icon: <AiFillHome /> ,
  },
  {
    id: "about",
    label: "About",
    path: "About",
    icon: <BsPersonCircle />,
  },
  {
    id: "project",
    label: "Project",
    path: "Projects",
    icon: <FiFolder />,
  },
  {
    id: "skills",
    label: "Skills",
    path: "Skills",
    icon: <BiCodeAlt />,
  },
  {
    id: "contact",
    label: "Contact",
    path: "Contact",
    icon: <MdContactMail /> ,
  },
];

export const links = [
  {
    icon: phoneIcon,
    href: "tel:+2349024316064",
    text: "tel:+2349024316064",
    alt: "Telephone",
  },
  {
    icon: mailIcon,
    href: "mailto:KristalDev001@gmail.com",
    text: "KristalDev001@gmail.com",
    alt: "Mail",
  },
  {
    icon: gitHubIcon,
    href: "https://github.com/Kristal951",
    text: "https://github.com/Kristal951",
    alt: "Github",
  },
  {
    icon: linkedInIcon,
    href: "https://www.linkedin.com/in/kristal-dev-6b22212b9",
    text: "https://www.linkedin.com/in/kristal-dev-6b22212b9",
    alt: "LinkedIn",
  },
];


export const AllSkill = [
  {
    id: "html",
    label: "Html",
    barWidth: 95,
    category: 'frontend',
    image: Html_Image,
  },
  {
    id: "css",
    label: "Css",
    barWidth: 90,
    category: 'frontend',
    image: Css_Image,
  },
  {
    id: "javascript",
    label: "Javascript",
    barWidth: 80,
    category: 'frontend',
    image: Js_image,
  },
  {
    id: "scss",
    label: "Scss",
    barWidth: 80,
    category: 'frontend',
    image: Scss_Image,
  },
  {
    id: "react",
    label: "React",
    barWidth: 94,
    category: 'frontend',
    image: React_Image,
  },
  {
    id: "react-native",
    label: "React Native",
    barWidth: 80,
    category: 'frontend',
    image: ReactNative_Image,
  },
  {
    id: "tailwindcss",
    label: "TailwindCss",
    barWidth: 80,
    category: 'frontend',
    image: Tailwind_Image,
  },
  {
    id: "nodejs",
    label: "Nodejs",
    barWidth: 85,
    category: 'backend',
    image: NodeJs_image ,
  },
  {
    id: "mongodb",
    label: "MongoDB",
    barWidth: 90,
    category: 'backend',
    image: MongoDB_Image,
  },
  {
    id: "express",
    label: "Express",
    barWidth: 80,
    category: 'backend',
    image: Express_Image,
  },
  {
    id: "sql",
    label: "Sql",
    barWidth: 80,
    category: 'backend',
    image: Sql_Image,
  },
  {
    id: "figma",
    label: "Figma",
    barWidth: 85,
    category: 'tools',
    image: Figma_Image,
  },
  {
    id: "git",
    label: "Git",
    barWidth: 90,
    category: 'tools',
    image: Git_Image,
  },
  {
    id: "github",
    label: "Github",
    barWidth: 90,
    category: 'tools',
    image: GitHub_Image,
  },
  {
    id: "VS code",
    label: "VS code",
    barWidth: 80,
    category: 'tools',
    image: VSCode_Image,
  },
];
