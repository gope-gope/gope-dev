import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="mx-auto flex max-w-4xl flex-col gap-24 px-6 pb-16 pt-10">
        <section id="hero" className="scroll-mt-24">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Software Developer
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Building clean, modern web experiences.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            I’m a developer focused on crafting fast, accessible interfaces and
            solid backend foundations. This page highlights my tech stack and a
            few projects I’ve worked on.
          </p>
        </section>

        <section id="stack" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">Dev stack</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Technologies I enjoy working with to design, build, and ship
            products:
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border-subtle bg-surface p-5">
              <h3 className="text-sm font-medium text-foreground">
                Frontend & UI
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                React, TypeScript, Vite, Tailwind CSS, modern component-driven
                architecture, and accessible, responsive design patterns.
              </p>
            </div>

            <div className="rounded-2xl border border-border-subtle bg-surface p-5">
              <h3 className="text-sm font-medium text-foreground">
                Backend & tooling
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Node.js, NestJS, REST APIs, authentication, testing, and
                tooling that keeps DX fast and reliable.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">
            Past projects
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            A small selection of projects that reflect how I like to work.
          </p>

          <div className="mt-6 space-y-4">
            <article className="rounded-2xl border border-border-subtle bg-surface p-5">
              <h3 className="text-sm font-medium text-foreground">
                Project One
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                A modern web app focused on performance and UX, built with
                React, TypeScript, and a clean component architecture.
              </p>
            </article>

            <article className="rounded-2xl border border-border-subtle bg-surface p-5">
              <h3 className="text-sm font-medium text-foreground">
                Project Two
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                API-driven application using NestJS and PostgreSQL, with robust
                error handling and a clear separation of concerns.
              </p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
