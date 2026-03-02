import { useEffect, useState } from "react";

const bootLines = [
  "Initializing portfolio...",
  "Loading frontend modules...",
  "Compiling components...",
  "Optimizing performance...",
  "Frontend Systems Online.",
];

interface BootSequenceProps {
  onComplete: () => void;
}

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    if (currentLineIndex >= bootLines.length) {
      setTimeout(onComplete, 800);
      return;
    }

    const currentFullLine = bootLines[currentLineIndex];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      setCurrentText(currentFullLine.slice(0, charIndex + 1));
      charIndex++;

      if (charIndex === currentFullLine.length) {
        clearInterval(typingInterval);

        setTimeout(() => {
          setDisplayedLines((prev) => [...prev, currentFullLine]);
          setCurrentText("");
          setCurrentLineIndex((prev) => prev + 1);
        }, 300);
      }
    }, 25); // typing speed

    return () => clearInterval(typingInterval);
  }, [currentLineIndex, onComplete]);

  return (
    <div className="fixed inset-0 bg-black text-green-400 font-mono flex items-center justify-center z-50">
      <div className="w-full max-w-2xl px-6 text-primary">
        {displayedLines.map((line, index) => (
          <div key={index} className="mb-2">
            &gt; {line}
          </div>
        ))}

        {currentLineIndex < bootLines.length && (
          <div>
            &gt; {currentText}
            <span className="animate-pulse">█</span>
          </div>
        )}
      </div>
    </div>
  );
}
