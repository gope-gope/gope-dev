import { useState } from "react";

const DATA = [
  {
    title: "THE NOUN PROJECT",
    date: "October 2015 – Present",
    content: "Worked on icon systems and scalable design libraries.",
  },
  {
    title: "WONDERSAUCE",
    date: "June 2013 – September 2015",
    content: "Front-end development and UX implementation.",
  },
  {
    title: "SENSAI",
    date: "January 2012 – May 2013",
    content: "Led web builds and digital strategy.",
  },
  {
    title: "SOUTH MISSION",
    date: "October 2015 – Present",
    content:
      "South Mission is a small collection of freelance web developers, designers & digital marketers I founded with a partner. I run the web development for all projects handled through our team of 3-4 freelancers.",
    bullets: [
      "Web & Application Development",
      "Search Engine Optimization",
      "Pay-Per-Click (PPC)",
      "Social Media Advertising",
      "Lead Generation",
    ],
  },
  {
    title: "COALITION TECHNOLOGIES",
    date: "2010 – 2012",
    content: "SEO and digital marketing development.",
  },
];

const Experience = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      id="experience"
      className="min-h-screen p-16 max-w-7xl w-[100%] mx-auto"
    >
      <h1 className="text-4xl font-extrabold mb-10">Experience</h1>

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
        <div className="max-w-xl">
          <p className="italic mb-6">{DATA[active].date}</p>
          <p className="mb-6 leading-relaxed">{DATA[active].content}</p>

          {DATA[active].bullets && (
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
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
