import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-border-subtle bg-background/80">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-muted-foreground sm:flex-row">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Georgi Georgiev. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/gope-gope"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition hover:text-foreground"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/georgi-georgiev-1b3554162/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:georgigeorgiew97@gmail.com"
            className="inline-flex items-center gap-1.5 transition hover:text-foreground"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
