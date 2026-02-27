import { useTheme } from "../hooks/useTheme";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-20 border-b border-border-subtle bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Georgi Georgiev
        </span>

        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#hero" className="transition hover:text-primary">
              Hero
            </a>
            <a href="#stack" className="transition hover:text-primary">
              Dev stack
            </a>
            <a href="#projects" className="transition hover:text-primary">
              Past projects
            </a>
          </nav>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            aria-pressed={theme === "dark"}
            className="inline-flex items-center justify-center rounded-lg border border-border-subtle bg-surface px-3 py-2 text-muted-foreground transition hover:text-foreground focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
          >
            {theme === "dark" ? (
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                aria-hidden="true"
                className="fill-current"
              >
                <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM1 13h3v-2H1v2zm10 10h2v-3h-2v3zm9-10v-2h-3v2h3zm-2.34 7.16 1.79 1.8 1.41-1.42-1.8-1.79-1.4 1.41zM17.24 4.84l1.42 1.42 1.79-1.8-1.41-1.41-1.8 1.79zM12 6a6 6 0 100 12 6 6 0 000-12zM4.22 20.78l1.41 1.41 1.8-1.79-1.42-1.42-1.79 1.8z" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                aria-hidden="true"
                className="fill-current"
              >
                <path d="M21.64 13.65A9 9 0 0110.35 2.36a1 1 0 00-1.3 1.3 7 7 0 108.99 8.99 1 1 0 00-1.4-1.4 5 5 0 11-6.49-6.49 1 1 0 00-1.4-1.4A9 9 0 0021.64 13.65z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
