import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
// @ts-expect-error accept that it's imported correctly
import "swiper/css";

import Project1 from "/project1.jpg";
import Project2 from "/project2.jpg";
import Project3 from "/project3.jpg";
import Project4 from "/project4.jpg";
import ProjectCard from "./components/ProjectCard";
import NavArrow from "./components/NavArrow";

const projects = [
  { title: "E-Commerce Platform", image: Project1 },
  { title: "SaaS Dashboard", image: Project2 },
  { title: "Creative Agency", image: Project3 },
  { title: "AI Startup", image: Project4 },
];

const Work = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      id="work"
      className="relative w-full text-white py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative">
        <h2 className="text-5xl font-bold mb-16 text-primary text-right">
          Work
        </h2>

        <Swiper
          className="rounded-[16px]"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={32}
          slidesPerView={2.5}
          loop={true}
          speed={800}
          grabCursor={true}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>

        <NavArrow
          direction="left"
          onClick={() => swiperRef.current?.slidePrev()}
        />
        <NavArrow
          direction="right"
          onClick={() => swiperRef.current?.slideNext()}
        />
      </div>
    </section>
  );
};
export default Work;
