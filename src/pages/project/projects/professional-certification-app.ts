import type { Project } from "@/types/project";

import dashboardImg from "@/assets/images/professional-certification-app/dashboard.png";
import coursesImg from "@/assets/images/professional-certification-app/courses.png";
import course1Img from "@/assets/images/professional-certification-app/course1.png";
import course2Img from "@/assets/images/professional-certification-app/course2.png";
import walletConnectImg from "@/assets/images/professional-certification-app/wallet-connect.png";
import certificatesImg from "@/assets/images/professional-certification-app/certificates.png";
import templateImg from "@/assets/images/professional-certification-app/template.png";
import emptyImg from "@/assets/images/professional-certification-app/empty.png";
import logoDarkImg from "@/assets/images/professional-certification-app/logo-dark.svg";

const project: Project = {
  id: "professional-certification-app",
  title: "Professional Certification App",
  logo: logoDarkImg,
  overviewImage: dashboardImg,
  description:
    "I contributed to an educational platform for managing in-person courses at a dental university, where students can enroll, complete courses, and receive NFT-based diplomas. The platform supports multiple roles—including students, lecturers, course managers, and admins—with role-based permissions to manage enrollments, exams, and certificate issuance. Course managers can customize diplomas and mint NFTs after course completion, enabling a secure, verifiable, and modern certification workflow.",
  bullets: [
    "Developed core modules and UI logic for student and course workflows.",
    "Collaborated with designers to refine Web3 and course creation flows.",
    "Built the admin panel with roles and permissions for students, lecturers, course managers, and admins.",
    "Implemented all Web3 functionality, including course creation and NFT diploma minting.",
    "Optimized performance for large tables and image-heavy views using virtualization techniques.",
    "Implemented authentication and registration flows for multiple user types.",
  ],
  techStack: ["Web3", "NFT", "React", "Admin panel", "Authentication"],
  year: "Jan 2023 – Nov 2023",
  links: [{ label: "Visit opusnft.io", url: "https://opusnft.io/" }],
  gallery: [
    dashboardImg,
    coursesImg,
    course1Img,
    course2Img,
    walletConnectImg,
    certificatesImg,
    templateImg,
    emptyImg,
  ],
};

export default project;
