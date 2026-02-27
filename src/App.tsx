import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen px-6 py-12">
      <div className="mx-auto w-full max-w-2xl text-center">
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://vite.dev"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex"
          >
            <img
              src={viteLogo}
              alt="Vite logo"
              className="h-24 w-24 p-4 transition [will-change:filter] group-hover:drop-shadow-[0_0_2em_rgba(100,108,255,0.67)]"
            />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex"
          >
            <img
              src={reactLogo}
              alt="React logo"
              className="h-24 w-24 p-4 transition [will-change:filter] motion-safe:animate-[spin_20s_linear_infinite] group-hover:drop-shadow-[0_0_2em_rgba(97,218,251,0.67)]"
            />
          </a>
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-50">
          Vite + React
        </h1>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
          <div className="flex flex-col items-center gap-5">
            <button
              type="button"
              onClick={() => setCount((count) => count + 1)}
              className="rounded-lg border border-transparent bg-zinc-900 px-5 py-2.5 text-sm font-medium text-zinc-100 transition hover:border-indigo-400/70 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30"
            >
              count is {count}
            </button>

            <p className="text-sm text-zinc-300/80">
              Edit{" "}
              <code className="rounded bg-black/40 px-1.5 py-0.5">
                src/App.tsx
              </code>{" "}
              and save to test HMR
            </p>
          </div>
        </div>

        <p className="mt-6 text-sm text-zinc-400">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
