import { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import type { Project } from "@/types/project";

function ProjectCard({ project }: { project: Project }) {
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power3.out",
    });

    gsap.to(contentRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    gsap.to(imageRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    });

    gsap.to(overlayRef.current, {
      opacity: 0.4,
      duration: 0.4,
    });

    gsap.to(contentRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.4,
    });
  };

  return (
    <Link to={`/project/${project.id}`} className="block">
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="flex items-center justify-center relative h-[480px] overflow-hidden cursor-pointer border-r"
      >
        {/* Slightly zoomed image by default */}
        {project.logo ? (
          <img
            ref={imageRef}
            src={project.logo}
            alt={project.title}
            className="w-[100%] h-[100%] max-w-[75%] max-h-[50%] object-contain"
          />
        ) : (
          <div className="text-[100px] font-bold"> {`{ ... }`}</div>
        )}

        {/* Dark overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-black opacity-40"
        />

        {/* Hover Content */}
        <div
          ref={contentRef}
          className="absolute bottom-10 left-8 translate-y-8 opacity-0"
        >
          <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-300">View Project →</p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
