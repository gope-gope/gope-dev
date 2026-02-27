import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

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
                Node.js, NestJS, REST APIs, authentication, testing, and tooling
                that keeps DX fast and reliable.
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

        <section id="contact" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">Contact me</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Have a project in mind or just want to say hi? Drop me a message and
            I&apos;ll get back to you.
          </p>

          <form
            onSubmit={handleContactSubmit}
            className="mt-6 space-y-4 rounded-2xl border border-border-subtle bg-surface p-5"
          >
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground"
              >
                Name
              </label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Your name"
                autoComplete="name"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Tell me a little about what you’d like to build."
                rows={4}
              />
            </div>

            <div className="flex items-center justify-between gap-4 pt-1">
              <Button type="submit" size="sm">
                Send message
              </Button>

              {submitted ? (
                <p className="text-xs text-muted-foreground">
                  Thanks for reaching out — I&apos;ll respond soon.
                </p>
              ) : null}
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
