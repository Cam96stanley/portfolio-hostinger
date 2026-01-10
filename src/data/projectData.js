import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandThreejs } from "react-icons/tb";
import skilledImage from "../assets/skilled.png";
import bookClubImage from "../assets/book-club.png";
import appleImage from "../assets/apple.png";

export const projects = [
  {
    id: 1,
    title: "Skilled",
    tech: [FaHtml5, FaCss3Alt],
    description:
      "A modern landing page demo designed to showcase an online learning platform. Focused on clear hierarchy, approachable visuals, and conversion-driven layout to highlight course offerings and guide users toward action.",
    image: skilledImage,
    href: "https://skilled-elearn.netlify.app/",
    github: "https://github.com/Cam96stanley/skilled-elearning-page",
  },
  {
    id: 2,
    title: "Tech Book Club",
    tech: [FaHtml5, FaCss3Alt],
    description:
      "A responsive landing page demo for a tech-focused book club, designed to highlight community, membership value, and clear user flow. Emphasizes strong typography, structured content sections, and conversion-driven calls to action.",
    image: bookClubImage,
    href: "https://ultimate-tech-book-club.netlify.app/",
    github: "https://github.com/Cam96stanley/tech-book-club",
  },
  {
    id: 3,
    title: "MacBook Demo",
    tech: [FaReact, FaJs, TbBrandThreejs],
    description:
      "An interactive product demo page showcasing a MacBook through 3D models and GSAP-driven animations. Designed to explore motion, depth, and timing while maintaining a clean, product-focused layout.",
    image: appleImage,
    href: "#",
    github: "https://github.com/Cam96stanley/gsap-macbook-landing",
  },
];
