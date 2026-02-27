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
            className="transition hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/georgi-georgiev-1b3554162/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="mailto:georgigeorgiew97@gmail.com"
            className="transition hover:text-foreground"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
