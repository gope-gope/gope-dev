import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactMe = () => {
  const [result, setResult] = useState<"Success!" | "Error!" | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "80b16fc3-6f91-4871-a26a-450ad4e61a44");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error!");
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 max-w-5xl w-full mx-auto pt-36 px-6 md:px-12"
    >
      <h2 className="text-2xl font-semibold tracking-tight">Contact me</h2>
      <p className="mt-3 text-sm text-muted-foreground">
        Have a project in mind or just want to say hi? Drop me a message and
        I&apos;ll get back to you.
      </p>

      <form
        onSubmit={onSubmit}
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

          {result === "Success!" ? (
            <p className="text-xs text-muted-foreground">
              Thanks for reaching out — I&apos;ll respond soon.
            </p>
          ) : result === "Error!" ? (
            <p className="text-xs text-muted-foreground">
              Something went wrong. Please try again.
            </p>
          ) : null}
        </div>
      </form>
    </section>
  );
};

export default ContactMe;
