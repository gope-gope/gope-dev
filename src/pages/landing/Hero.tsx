import { useEffect, useState } from "react";
import MyFace from "/hero-me.png";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden -mt-[40px]">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-500/20 to-cyan-400/20 blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-16 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE - TEXT */}
        <div
          className={`transition-all duration-1000 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              George
            </span>
          </h1>

          <h2 className="mt-4 text-xl md:text-2xl text-gray-300">
            I build high-performance, visually stunning web experiences.
          </h2>

          <p className="mt-6 text-gray-400 max-w-lg">
            Frontend-focused Web Developer specializing in modern React
            applications, responsive design, and conversion-driven user
            experiences. I turn ideas into scalable digital products.
          </p>

          <div className="mt-8 flex gap-4">
            <a className="px-6 py-3" href="#work">
              View My Work{" "}
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-gray-600 hover:border-purple-400 hover:text-purple-400 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div
          className={`flex justify-center transition-all duration-1000 delay-300 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative group">
            {/* Glowing Background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 blur-2xl opacity-50 group-hover:opacity-75 transition duration-500 animate-pulse" />

            {/* Profile Image */}
            <img
              src={MyFace}
              alt="Developer Portrait"
              className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-white/10 shadow-2xl animate-[float_6s_ease-in-out_infinite]"
            />
          </div>
        </div>
      </div>

      {/* Custom Floating Animation */}
      <style>
        {`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        `}
      </style>
    </section>
  );
}
