import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
// @ts-expect-error accept that it's imported correctly
import "swiper/css";

import { projects } from "@/pages/project/projects";
import ProjectCard from "./components/ProjectCard";
import NavArrow from "./components/NavArrow";

const Work = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      id="work"
      className="relative w-full text-white py-18 overflow-hidden border-t"
    >
      <div className="mx-auto relative ">
        <h2 className="text-5xl font-bold mb-16 text-primary text-right max-w-7xl mx-auto px-6">
          Work
        </h2>

        <Swiper
          className="border-b border-t"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={0}
          slidesPerView={2.5}
          loop={true}
          speed={800}
          grabCursor={true}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
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
