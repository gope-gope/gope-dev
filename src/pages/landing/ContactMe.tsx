import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactMe = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 max-w-5xl w-full mx-auto pt-16 px-4"
    >
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
  );
};

export default ContactMe;
