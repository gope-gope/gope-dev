import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Typescript from "@/assets/icons/typescript.svg?react";
import Javascript from "@/assets/icons/javascript.svg?react";
import React from "@/assets/icons/react.svg?react";
import Nextjs from "@/assets/icons/next.svg?react";
import Vite from "@/assets/icons/vite.svg?react";
import Redux from "@/assets/icons/redux.svg?react";
import Sass from "@/assets/icons/sass.svg?react";
import Tailwind from "@/assets/icons/tailwind.svg?react";
import Nodejs from "@/assets/icons/node.svg?react";
import Express from "@/assets/icons/express.svg?react";
import Nest from "@/assets/icons/nest.svg?react";
import Mongo from "@/assets/icons/mongo.svg?react";
import Docker from "@/assets/icons/docker.svg?react";
import Postman from "@/assets/icons/postman.svg?react";
import EVM from "@/assets/icons/evm.svg?react";
import Solidity from "@/assets/icons/solidity.svg?react";
import SmartContract from "@/assets/icons/smart-contract.svg?react";
import Shadcn from "@/assets/images/shadcn.png";
import Tanstack from "@/assets/images/tanstack.png";
import ReactHookForm from "@/assets/images/react-hook-form.png";
import Zod from "@/assets/images/zod.webp";
import Gcloud from "@/assets/icons/gcloud.svg?react";
import Bun from "@/assets/icons/bun.svg?react";

const STACK_DATA = [
  {
    title: "Frontend",
    bgColor: "bg-blue-500", // blue
    skills: [
      { title: "Javascript", Icon: Javascript, isSvg: true },
      { title: "Typescript", Icon: Typescript, isSvg: true },
      { title: "React", Icon: React, isSvg: true },
      { title: "Nextjs", Icon: Nextjs, isSvg: true },
      { title: "Vite", Icon: Vite, isSvg: true },
      { title: "Bun", Icon: Bun, isSvg: true },
      { title: "Redux", Icon: Redux, isSvg: true },
      { title: "Sass", Icon: Sass, isSvg: true },
      { title: "Tailwind", Icon: Tailwind, isSvg: true },
      { title: "Shadcn", Icon: Shadcn, isSvg: false },
      { title: "Tanstack", Icon: Tanstack, isSvg: false },
      { title: "React Hook Form", Icon: ReactHookForm, isSvg: false },
      { title: "Zod", Icon: Zod, isSvg: false },
    ],
  },
  {
    title: "Backend",
    bgColor: "bg-yellow-500", // green
    skills: [
      { title: "Nodejs", Icon: Nodejs, isSvg: true },
      { title: "Express", Icon: Express, isSvg: true },
      { title: "Nest", Icon: Nest, isSvg: true },
      { title: "Mongo", Icon: Mongo, isSvg: true },
      { title: "Docker", Icon: Docker, isSvg: true },
      { title: "Postman", Icon: Postman, isSvg: true },
      { title: "GCloud", Icon: Gcloud, isSvg: true },
    ],
  },
  {
    title: "Blockchain",
    bgColor: "bg-orange-500", // orange
    skills: [
      { title: "EVM", Icon: EVM, isSvg: true },
      { title: "Solidity", Icon: Solidity, isSvg: true },
      { title: "Smart Contracts", Icon: SmartContract, isSvg: true },
    ],
  },
];

const Stack = () => {
  const [active, setActive] = useState<null | number>(null);
  const contentRefs = useRef({});

  // Animate open/close on active change
  useEffect(() => {
    Object.entries(contentRefs.current).forEach(([key, el]) => {
      if (!el) return;

      if (+key === active) {
        // Animate open: from height 0 → auto
        gsap.to(el, {
          height: "auto",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          clearProps: "height",
        });
      } else {
        // Animate close: height → 0 and hide padding
        gsap.to(el, {
          height: 0,
          opacity: 0,
          paddingTop: 0,
          paddingBottom: 0,
          duration: 0.4,
          ease: "power2.in",
        });
      }
    });
  }, [active]);

  return (
    <section id="stack" className="mx-auto py-18 pb-36 px-6 md:px-12  w-full">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center text-primary">
          {`{ Stack }`}
        </h2>
        <div className="space-y-4 w-full">
          {STACK_DATA.map(({ title, bgColor, skills }, index) => {
            const isActive = active === index;
            return (
              <div
                key={title}
                className={`rounded-xl shadow-lg cursor-pointer select-none p-4
                border-2 transition-colors duration-300
                ${isActive ? "border-transparent" : "border-gray-300"}
                ${isActive ? bgColor : "bg-white"}
                ${isActive ? "text-white" : "text-black"}
                 `}
                onClick={() => setActive(index === active ? null : index)}
              >
                {/* Header */}
                <div className="font-semibold text-xl">{title}</div>

                {/* Expandable content */}
                <div
                  /* @ts-expect-error index can be used to access object projerty */
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="overflow-hidden text-sm opacity-0"
                  style={{ height: 0, paddingTop: 0, paddingBottom: 0 }}
                >
                  <div className="flex flex-wrap gap-8 py-8">
                    {skills.map((skill) => (
                      <div
                        key={skill.title}
                        className="flex flex-col gap-2 items-center"
                      >
                        {skill.isSvg ? (
                          <skill.Icon width={64} height={64} />
                        ) : (
                          <img
                            className="w-[64px] h-[64px]"
                            src={skill.Icon as string}
                          />
                        )}
                        <div className="text-center">{skill.title}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stack;
