import { useState } from "react";
import { ExternalLink } from "lucide-react";

const DATA = [
  {
    title: "FX-based stablecoin DEX ",
    date: "Feb 2024 – Oct 2025",
    content:
      "A decentralised exchange (DEX)that enables seamless trading between fiat-pegged digital assets such as USD, EUR, and GBP stablecoins. The platform leverages smart contracts and custom AMM logic to provide efficient, low-slippage swaps using real-time FX pricing. By bringing foreign exchange on-chain, it offers a unique and scalable solution for cross-border payments and digital asset trading.",
    bullets: [
      "Built an FX oracle aggregator to power accurate stablecoin exchange rates.",
      "Integrated third-party protocols and custom AMM logic for on-chain swaps.",
      "Led frontend development and delivered the approved PoC.",
      "Defined architecture and coding standards for the custom DEX.",
    ],
  },
  {
    title: "Liquid Restaking Protocol",
    date: "Aug 2024 – Feb 2025",
    content:
      "I contributed as the main smart contract developer for a Liquid Restaking Protocol built on Binance Smart Chain. The protocol enables users to restake assets while maintaining liquidity, combining yield optimization with composability across DeFi. I worked closely with the tech lead and architect to design and implement the smart contract architecture, proactively identifying and resolving logic loopholes to strengthen protocol security and reliability. In parallel, I oversaw frontend development, ensuring clean Web3 integrations and consistent engineering standards across the stack.",
    bullets: [
      "Led smart contract architecture and core protocol implementation.",
      "Identified and resolved architectural logic gaps to improve security and robustness.",
      "Collaborated closely with the tech lead and architect on system design decisions.",
      "Oversaw frontend development, approving PRs and refining Web3 UI logic and coding standards.",
    ],
  },
  {
    title: "Online Learning Platform",
    link: "https://opusedu.io/",
    date: "Nov 2023 – Jul 2024",
    content:
      "I led frontend development for a Web3-based online learning platform, enabling creators to upload courses, issue NFT certificates, and manage content, while users could purchase and complete courses with seamless Web3 interactions. The platform featured an admin dashboard for course moderation, role-based access control, third-party authentication, and a custom NPM library for certificate creation. I built the application from scratch to production, ensuring a scalable and maintainable frontend architecture while mentoring a small frontend team.",
    bullets: [
      "Led frontend development, onboarding and mentoring 2 developers, and defining coding standards and project structure.",
      "Developed core modules end-to-end, including video management, course creation, admin dashboard, roles and permissions, user profiles, and Web3 functionalities.",
      "Implemented third-party login and NFT certificate minting workflows.",
      "Ensured code quality, best practices, and maintainable architecture across the frontend stack.",
    ],
  },
  {
    title: "Professional Certification App",
    link: "https://opusnft.io/",
    date: "Jan 2023 – Nov 2023",
    content:
      "I contributed to an educational platform for managing in-person courses at a dental university, where students can enroll, complete courses, and receive NFT-based diplomas. The platform supports multiple roles—including students, lecturers, course managers, and admins—with role-based permissions to manage enrollments, exams, and certificate issuance. Course managers can customize diplomas and mint NFTs after course completion, enabling a secure, verifiable, and modern certification workflow.",
    bullets: [
      "Developed core modules and UI logic for student and course workflows.",
      "Collaborated with designers to refine Web3 and course creation flows.",
      "Built the admin panel with roles and permissions for students, lecturers, course managers, and admins.",
      "Implemented all Web3 functionality, including course creation and NFT diploma minting.",
      "Optimized performance for large tables and image-heavy views using virtualization techniques.",
      "Implemented authentication and registration flows for multiple user types.",
    ],
  },
  {
    title: "Miscellaneous Projects",
    date: "2021 – 2022",
    content:
      "I have contributed as a frontend developer across a variety of projects, including NFT drop dApps, NFT marketplaces, Web3 freelance work for gaming platforms, an e-commerce MVP for a leading automotive brand, healthcare platforms, and personal side projects such as a travel agency app. These projects involved building responsive and performant user interfaces, integrating Web3 functionalities, working with APIs, and delivering scalable, maintainable code across multiple domains.",
    bullets: [
      "Developed responsive, user-friendly frontend interfaces for NFT platforms, e-commerce, healthcare, and other web applications.",
      "Implemented Web3 integrations including NFT minting, marketplace listings, and blockchain interactions.",
      "Collaborated with designers and backend developers to deliver complete, production-ready solutions.",
      "Built reusable components and UI libraries to maintain consistency and improve development efficiency.",
      "Participated in code reviews and enforced coding standards for high-quality, maintainable code.",
    ],
  },
];

const Experience = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      id="experience"
      className="pt-36 max-w-7xl w-[100%] mx-auto px-6 md:px-12"
    >
      <h1 className="text-5xl font-extrabold mb-16 text-primary">Experience</h1>

      <div className="flex gap-20">
        {/* LEFT NAV */}
        <nav className="flex flex-col border-l-4 border-red-600 relative">
          {DATA.map((item, index) => (
            <button
              key={item.title}
              onClick={() => setActive(index)}
              className={`relative py-12 pl-8 text-left text-lg cursor-pointer focus:outline-none
                ${
                  active === index
                    ? "text-red-600 font-semibold"
                    : "text-primary"
                }`}
            >
              {item.title}
              {/* Underline */}
              <span
                className={`block absolute bottom-[0px] left-0 h-[2px] bg-red-600 transition-[width] duration-300 ease-in-out ${
                  active === index ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}
        </nav>

        {/* RIGHT CONTENT */}
        <div className="mx-auto max-w-xl">
          <p className="italic mb-6">{DATA[active].date}</p>
          {DATA[active].link ? (
            <a
              className="flex gap-2 items-center text-xl font-bold mb-6"
              href={DATA[active].link}
              target="_blank"
              rel="noreferrer"
            >
              {DATA[active].title} <ExternalLink height={20} width={20} />
            </a>
          ) : (
            <p className="flex gap-2 items-center text-xl font-bold mb-6 text-primary">
              {DATA[active].title}
            </p>
          )}
          <p className="mb-6 leading-relaxed">{DATA[active].content}</p>

          {DATA[active].bullets && (
            <div className="flex flex-col gap-2">
              <p>My Responsibilities:</p>
              <ul className="list-none p-0">
                {DATA[active].bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="relative mb-2 pl-5 before:absolute before:left-0 before:top-0 before:text-red-600 before:font-bold before:content-['+']"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
