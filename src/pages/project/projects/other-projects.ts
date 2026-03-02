import type { Project } from "@/types/project";

import moodyLandingImg from "@/assets/images/other-projects/moody-landing.png";
import moodyShopImg from "@/assets/images/other-projects/moody-shop.png";
import moodyAssistantsImg from "@/assets/images/other-projects/moody-assistants.png";

const project: Project = {
  id: "other-projects",
  title: "Other Projects",
  logo: "",
  overviewImage: moodyLandingImg,
  description:
    "I have contributed as a frontend developer across a variety of projects, including NFT drop dApps, NFT marketplaces, Web3 freelance work for gaming platforms, an e-commerce MVP for a leading automotive brand, healthcare platforms, and personal side projects such as a travel agency app. These projects involved building responsive and performant user interfaces, integrating Web3 functionalities, working with APIs, and delivering scalable, maintainable code across multiple domains.",
  bullets: [
    "Developed responsive, user-friendly frontend interfaces for NFT platforms, e-commerce, healthcare, and other web applications.",
    "Implemented Web3 integrations including NFT minting, marketplace listings, and blockchain interactions.",
    "Collaborated with designers and backend developers to deliver complete, production-ready solutions.",
    "Built reusable components and UI libraries to maintain consistency and improve development efficiency.",
    "Participated in code reviews and enforced coding standards for high-quality, maintainable code.",
  ],
  techStack: ["React", "Web3", "NFT", "E-commerce", "Healthcare", "APIs"],
  year: "2021 – 2025",
  gallery: [moodyLandingImg, moodyShopImg, moodyAssistantsImg],
};

export default project;
