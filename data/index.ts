import { CiHome } from "react-icons/ci";
import React from "react";

//Icons




export const navItems = [
  {name:"Home ",link: "./",icon: CiHome},
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Certification", link: "#certification" },
  { name: "Contact", link: "#contact" },
  { name: "Resume", link: "#resume" },
];



export const projects = [
  {
    id: 1,
    title: "Sinhala OCR System",
    des: "Sinhala OCR is a project that takes images containing Sinhala font and converts them into \n" +
        "editable text",
    img: "https://placehold.co/600x400",
    iconLists: ["/react.png","/css.png",'/fastapi.svg','/firebase.png'],
    link: "https://github.com/DeathwingIN/capstone_project_sinhalaOCR",
  },
{
    id: 2,
    title: "Surasa ",
    des: "The Surasa Restaurant Management Website is designed for the Faculty of Agricultural\n" +
        "Sciences at Sabaragamuwa University of Sri Lanka.",
    img: "https://placehold.co/600x400",
    iconLists: ["/react.png","/figma.png","/tailwind.png","/php.png","/framermotion.svg","/laravel.svg","/mysql.png",],
    link: "https://github.com/DeathwingIN/Surasa-Dev",
  },
{
    id: 3,
    title: "Portfolio ",
    des: "My portfolio website serves as a digital showcase of my skills, achievements, and projects,\n" +
        "providing a comprehensive overview of my professional journey",
    img: "/portfolio.png",
    iconLists: ["/react.png","/nextjs.svg","/js.svg","/acertinity.png","/framermotion.svg","/tailwind.png",],
    link: "https://imeshnirmal.me/",
  },


];
