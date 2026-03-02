import type { Project } from "@/types/project";

import dashboardImg from "@/assets/images/online-learning-platform/dashboard.png";
import registerImg from "@/assets/images/online-learning-platform/register.png";
import connectWalletImg from "@/assets/images/online-learning-platform/connect-wallet.png";
import coursesImg from "@/assets/images/online-learning-platform/courses.png";
import courseImg from "@/assets/images/online-learning-platform/course.png";
import courseFormImg from "@/assets/images/online-learning-platform/course-form.png";
import searchImg from "@/assets/images/online-learning-platform/search.png";
import personaliseImg from "@/assets/images/online-learning-platform/personalise.png";
import templateCreatorImg from "@/assets/images/online-learning-platform/template-creator.png";
import reviewImg from "@/assets/images/online-learning-platform/review.png";
import logoImg from "@/assets/images/online-learning-platform/logo-dark.svg";

const project: Project = {
  id: "online-learning-platform",
  title: "Online Learning Platform",
  logo: logoImg,
  overviewImage: dashboardImg,
  description:
    "I led frontend development for a Web3-based online learning platform, enabling creators to upload courses, issue NFT certificates, and manage content, while users could purchase and complete courses with seamless Web3 interactions. The platform featured an admin dashboard for course moderation, role-based access control, third-party authentication, and a custom NPM library for certificate creation. I built the application from scratch to production, ensuring a scalable and maintainable frontend architecture while mentoring a small frontend team.",
  bullets: [
    "Led frontend development, onboarding and mentoring 2 developers, and defining coding standards and project structure.",
    "Developed core modules end-to-end, including video management, course creation, admin dashboard, roles and permissions, user profiles, and Web3 functionalities.",
    "Implemented third-party login and NFT certificate minting workflows.",
    "Ensured code quality, best practices, and maintainable architecture across the frontend stack.",
  ],
  techStack: ["Web3", "NFT", "React", "TypeScript", "Role-based access"],
  year: "Nov 2023 – Jul 2024",
  links: [{ label: "Visit opusedu.io", url: "https://opusedu.io/" }],
  gallery: [
    dashboardImg,
    registerImg,
    connectWalletImg,
    coursesImg,
    courseImg,
    courseFormImg,
    searchImg,
    personaliseImg,
    templateCreatorImg,
    reviewImg,
  ],
};

export default project;
