import AboutMe from "./about-me/AboutMe";
import Experience from "./Experience";
import Work from "./work/Work";
import Stack from "./stack/Stack";
import ContactMe from "./ContactMe";
import Hero from "./Hero";

const LandingPage = () => {
  return (
    <div className="mx-auto flex flex-col pb-16">
      <Hero />
      <AboutMe />
      <Experience />
      <Work />
      <Stack />
      <ContactMe />
    </div>
  );
};

export default LandingPage;
