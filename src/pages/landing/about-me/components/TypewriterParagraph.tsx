import { useEffect, useRef, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Seconds per character; lower = faster. e.g. 0.03 ≈ 33 chars/sec */
const TYPEWRITER_DELAY_PER_CHAR = 0.005;

type TypewriterParagraphProps = {
  children: string;
  className?: string;
  /** Seconds to wait before revealing each character. Lower = faster. */
  delayPerChar?: number;
  /** Seconds to wait before this paragraph starts typing. */
  startDelay?: number;
  /** When provided, typewriter starts when this element scrolls into view (uses GSAP ScrollTrigger). */
  scrollTriggerTarget?: RefObject<HTMLElement | null>;
};

const TypewriterParagraph = ({
  children,
  className,
  delayPerChar = TYPEWRITER_DELAY_PER_CHAR,
  startDelay = 0,
  scrollTriggerTarget,
}: TypewriterParagraphProps) => {
  const pRef = useRef<HTMLParagraphElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const el = pRef.current;
    const triggerEl = scrollTriggerTarget?.current;
    if (!el) return;

    const runAnimation = () => {
      if (hasAnimatedRef.current) return;
      const chars = el.querySelectorAll<HTMLElement>(".typewriter-char");
      if (chars.length === 0) return;
      hasAnimatedRef.current = true;
      gsap.set(chars, { opacity: 0 });
      gsap.to(chars, {
        opacity: 1,
        duration: 0.15,
        stagger: delayPerChar,
        delay: startDelay,
        ease: "none",
      });
    };

    if (triggerEl) {
      const st = ScrollTrigger.create({
        trigger: triggerEl,
        start: "top 80%",
        onEnter: runAnimation,
      });
      return () => {
        st.kill();
      };
    }

    runAnimation();
  }, [children, delayPerChar, startDelay, scrollTriggerTarget]);

  return (
    <p ref={pRef} className={`${className} flex flex-wrap`}>
      {children.split("").map((char, i) => (
        <span key={i} className="typewriter-char" style={{ opacity: 0 }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </p>
  );
};

export default TypewriterParagraph;
