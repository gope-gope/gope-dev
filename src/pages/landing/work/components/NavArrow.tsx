import { useRef } from "react";
import gsap from "gsap";

function NavArrow({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  const arrowRef = useRef<HTMLButtonElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const isLeft = direction === "left";

  const handleEnter = () => {
    gsap.to(arrowRef.current, { scale: 1.2, duration: 0.3 });
    gsap.to(bgRef.current, { opacity: 0.6, duration: 0.3 });
  };

  const handleLeave = () => {
    gsap.to(arrowRef.current, { scale: 1, duration: 0.3 });
    gsap.to(bgRef.current, { opacity: 0.3, duration: 0.3 });
  };

  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 z-20 hidden md:block ${
        isLeft ? "left-8" : "right-8"
      }`}
    >
      <div
        ref={bgRef}
        className="absolute inset-0 w-20 h-20 rounded-full bg-black opacity-30"
      />

      <button
        ref={arrowRef}
        onClick={onClick}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        aria-label={isLeft ? "Previous project" : "Next project"}
        className="relative w-20 h-20 flex items-center justify-center text-3xl font-bold rounded-full border border-white/20 backdrop-blur-md cursor-pointer"
      >
        {isLeft ? "←" : "→"}
      </button>
    </div>
  );
}
export default NavArrow;
