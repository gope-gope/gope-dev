import { useRef } from "react";
import gsap from "gsap";

function ProjectCard({ project }: any) {
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const image = imageRef.current;
    if (!image) return;

    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Subtle parallax movement
    gsap.to(image, {
      x: x * 0.03,
      y: y * 0.03,
      duration: 0.4,
      ease: "power3.out",
    });
  };

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
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative h-[480px] rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Slightly zoomed image by default */}
      <img
        ref={imageRef}
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover scale-110"
      />

      {/* Dark overlay */}
      <div ref={overlayRef} className="absolute inset-0 bg-black opacity-40" />

      {/* Hover Content */}
      <div
        ref={contentRef}
        className="absolute bottom-10 left-8 translate-y-8 opacity-0"
      >
        <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-300">View Project →</p>
      </div>
    </div>
  );
}

export default ProjectCard;
