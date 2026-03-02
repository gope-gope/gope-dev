import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TypewriterParagraph from "./components/TypewriterParagraph";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-gray-900 text-white py-36 px-6 md:px-12"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <h2 className="text-5xl font-bold text-center">About Me</h2>

        {/* Content */}
        <div className="items-center">
          {/* Text */}
          <div className="space-y-6">
            <TypewriterParagraph
              className="text-lg md:text-xl leading-relaxed"
              scrollTriggerTarget={sectionRef}
            >
              I’m a frontend developer passionate about building engaging and
              intuitive digital experiences. Over the past few years, I’ve
              helped bring a variety of projects to life — from innovative DeFi
              platforms and NFT marketplaces to e-commerce experiences for
              leading brands.
            </TypewriterParagraph>

            <TypewriterParagraph
              className="text-lg md:text-xl leading-relaxed"
              startDelay={1.5}
              scrollTriggerTarget={sectionRef}
            >
              I specialize in translating complex ideas into user-friendly
              interfaces, guiding teams, and delivering polished, high-quality
              products that delight users. My work spans the full lifecycle of
              web applications, and I take pride in mentoring others,
              maintaining clean code standards, and presenting solutions that
              make an impact.
            </TypewriterParagraph>

            <TypewriterParagraph
              className="text-lg md:text-xl leading-relaxed"
              startDelay={3}
              scrollTriggerTarget={sectionRef}
            >
              Beyond coding, I’m deeply curious about the intersection of web3
              and mainstream applications, exploring ways to make
              blockchain-based platforms approachable for everyone. I believe
              great interfaces don’t just look good — they solve problems and
              elevate the user’s experience.
            </TypewriterParagraph>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
