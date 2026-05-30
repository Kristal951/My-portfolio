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
import Figma_Image from "../assets/images/Figma.png";
import GitHub_Image from "../assets/images/Github.png";
import Git_Image from "../assets/images/Git.png";
import NextJs_Image from "../assets/images/Next_js_logo.png";
import TypeScript_Image from "../assets/images/typescript_logo.svg";
import SocketIo_Image from "../assets/images/socket_io_logo.svg";
import Supabase_Image from "../assets/images/Supabase_logo.svg";
import Appwrite_Image from "../assets/images/appwrite_logo.svg";
import Vercel_Image from "../assets/images/Vercel_logo.svg";
import { AiFillHome } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { FiFolder } from "react-icons/fi";
import { BiCodeAlt } from "react-icons/bi";
import { MdContactMail } from "react-icons/md";
import { FaCalculator, FaHeart, FaTasks } from "react-icons/fa";

import CalcexSR from "../assets/Videos/Calcex_screen_record.mp4";
import TodoAppSR from "../assets/Videos/TodoMobile_screen_record.mp4";
import LKD_SCRD from "../assets/Videos/LKD_SCRD.mp4";

export const Navlinks = [
  {
    id: "home",
    label: "Home",
    path: "Home",
    icon: <AiFillHome />,
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
    id: "arsenal",
    label: "Arsenal",
    path: "Arsenal",
    icon: <BiCodeAlt />,
  },
  {
    id: "contact",
    label: "Contact",
    path: "Contact",
    icon: <MdContactMail />,
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
  // Frontend
  {
    id: "html",
    label: "HTML5",
    barWidth: 95,
    category: "frontend",
    image: Html_Image,
  },
  {
    id: "css",
    label: "CSS3",
    barWidth: 90,
    category: "frontend",
    image: Css_Image,
  },
  {
    id: "javascript",
    label: "JavaScript",
    barWidth: 90,
    category: "frontend",
    image: Js_image,
  },
  {
    id: "typescript",
    label: "TypeScript",
    barWidth: 85,
    category: "frontend",
    image: TypeScript_Image,
  },
  {
    id: "scss",
    label: "SCSS",
    barWidth: 80,
    category: "frontend",
    image: Scss_Image,
  },
  {
    id: "react",
    label: "React",
    barWidth: 92,
    category: "frontend",
    image: React_Image,
  },
  {
    id: "nextjs",
    label: "Next.js",
    barWidth: 90,
    category: "frontend",
    image: NextJs_Image,
  },
  {
    id: "react-native",
    label: "React Native",
    barWidth: 85,
    category: "frontend",
    image: ReactNative_Image,
  },
  {
    id: "tailwindcss",
    label: "Tailwind CSS",
    barWidth: 90,
    category: "frontend",
    image: Tailwind_Image,
  },
  {
    id: "vercel",
    label: "Vercel",
    barWidth: 90,
    category: "tools",
    image: Vercel_Image,
  },
  {
    id: "railway",
    label: "Railway",
    barWidth: 90,
    category: "tools",
    image: "https://cdn.simpleicons.org/railway/000000",
  },
  {
    id: "nodejs",
    label: "Node.js",
    barWidth: 88,
    category: "backend",
    image: NodeJs_image,
  },
  {
    id: "express",
    label: "Express.js",
    barWidth: 85,
    category: "backend",
    image: Express_Image,
  },
  {
    id: "socketio",
    label: "Socket.IO",
    barWidth: 85,
    category: "backend",
    image: SocketIo_Image,
  },
  {
    id: "mongodb",
    label: "MongoDB",
    barWidth: 85,
    category: "database",
    image: MongoDB_Image,
  },
  {
    id: "supabase",
    label: "Supabase",
    barWidth: 85,
    category: "database",
    image: Supabase_Image,
  },
  {
    id: "appwrite",
    label: "Appwrite",
    barWidth: 80,
    category: "database",
    image: Appwrite_Image,
  },
  {
    id: "git",
    label: "Git",
    barWidth: 90,
    category: "tools",
    image: Git_Image,
  },
  {
    id: "github",
    label: "GitHub",
    barWidth: 90,
    category: "tools",
    image: GitHub_Image,
  },
  {
    id: "figma",
    label: "Figma",
    barWidth: 80,
    category: "tools",
    image: Figma_Image,
  },
];

export const projects = [
  {
    title: "Calcex Calculator",
    description:
      "A fullstack scientific calculator with history, memory, and theme support. Includes a real-time all-currency converter. Built with React Native and Node.js. ",
    icon: <FaCalculator className="text-yellow-500 text-4xl sm:text-5xl" />,
    media: CalcexSR,
    isVideo: true,
    link: "/downloads/calcex.apk",
    isDownload: true,
    status: "production",
    github: "https://github.com/Kristal951/Calcex.git",
    features: [
      "Real-time result preview while typing expressions",
      "Persistent calculation history tracking",
      "Memory storage & recall system",
      "Dynamic theme switching (light/dark modes)",
      "Integrated real-time currency converter",
      "Offline-first functionality",
      "Mobile-optimized responsive calculator layout",
    ],
    stack: [
      {
        name: "React Native",
        badge:
          "https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB",
      },
      {
        name: "Expo",
        badge:
          "https://img.shields.io/badge/Expo-000020?style=flat&logo=expo&logoColor=white",
      },
      {
        name: "Node.js",
        badge:
          "https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white",
      },
    ],
  },

  {
    title: "Todo Mobile",
    description:
      "A simple and intuitive task management mobile app that helps users create, edit, and track daily tasks efficiently. Built with React Native and AsyncStorage for offline support. ",
    icon: <FaTasks className="text-blue-500 text-4xl sm:text-5xl" />,
    media: TodoAppSR,
    isVideo: true,
    link: "/downloads/TodoApp.apk",
    isDownload: true,
    status: "production",
    github: "https://github.com/Kristal951/TodoMobileApp.git",
    features: [
      "Create, edit, and delete daily tasks",
      "Task completion tracking",
      "Persistent offline storage with AsyncStorage",
      "Lightweight and fast mobile performance",
      "Minimal, distraction-free UI design",
      "Real-time task state updates",
      "Local device data persistence",
      "Mobile-first UX optimization",
      "Simple productivity workflow",
      "Cross-platform support via React Native",
    ],

    stack: [
      {
        name: "React Native",
        badge:
          "https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB",
      },
      {
        name: "Expo",
        badge:
          "https://img.shields.io/badge/Expo-000020?style=flat&logo=expo&logoColor=white",
      },
      {
        name: "AsyncStorage",
        badge:
          "https://img.shields.io/badge/AsyncStorage-FFCA28?style=flat&logo=react&logoColor=black",
      },
    ],
  },

  {
    title: "Lakadel",
    description:
      "A full-stack, production-ready e-commerce platform built for a fashion brand named LAKADEL. It delivers a seamless shopping experience and a powerful admin dashboard for managing products, orders, payments, and analytics in real time. ",
    icon: <FaHeart className="text-pink-500 text-4xl sm:text-5xl" />,
    media: LKD_SCRD,
    isVideo: true,
    link: "https://lakadel.vercel.app",
    isDownload: false,
    status: "production",
    github: "https://github.com/Kristal951/Lakadel.git",
    features: [
      "Dynamic product catalog with filtering & search",
      "Product variants (sizes, colors, stock states)",
      "High-resolution image galleries",
      "Secure Stripe checkout integration",
      "Paystack payment gateway support",
      "Order creation & payment verification",
      "PDF receipt generation system",
      "Real-time order status tracking",
      "Admin product management dashboard",
      "Inventory & stock control tools",
      "Revenue analytics & reporting charts",
      "Customer order monitoring",
      "Cloudinary-powered media uploads",
      "Role-based admin access control",
    ],

    stack: [
      {
        name: "Next.js",
        badge:
          "https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white",
      },
      {
        name: "TypeScript",
        badge:
          "https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white",
      },
      {
        name: "PostgreSQL",
        badge:
          "https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white",
      },
    ],
  },

  {
    title: "SkillCirqle",
    description:
      "A social learning and networking platform that connects users based on skills they can teach and want to learn, enabling them be able to perform skills exchanges, and grow their knowledge. featuring real-time chat and intelligent matching.",

    icon: <FaHeart className="text-pink-500 text-4xl sm:text-5xl" />,

    media: null,
    isVideo: false,
    link: "#",
    isDownload: false,
    status: "development",

    features: [
      "AI-assisted compatibility and interest-based matching",
      "Skill and interest-driven user discovery system",
      "Real-time messaging with Socket.IO",
      "Typing indicators and live message updates",
      "Online and offline user presence tracking",
      "Secure authentication and user session handling",
      "Detailed user profiles with skills and preferences",
      "Smart recommendation and matching logic",
      "Scalable Node.js and Express backend architecture",
      "MongoDB-based real-time data handling",
      "Mobile-first and responsive social experience",
    ],

    stack: [
      {
        name: "React Native",
        badge:
          "https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB",
      },
      {
        name: "Node.js",
        badge:
          "https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white",
      },
      {
        name: "Express.js",
        badge:
          "https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white",
      },
      {
        name: "Socket.IO",
        badge:
          "https://img.shields.io/badge/Socket.IO-010101?style=flat&logo=socketdotio&logoColor=white",
      },
      {
        name: "MongoDB",
        badge:
          "https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white",
      },
    ],
  },
];
