import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const Header = () => {
  const { theme, toggleTheme, palette, setPalette } = useTheme();

  return (
    <header className="sticky top-0 z-20 border-b border-border-subtle bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Georgi Georgiev
        </span>

        <div className="flex items-center gap-4 sm:gap-6">
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

          <div className="flex items-center gap-2">
            <select
              aria-label="Color palette"
              value={palette}
              onChange={(e) =>
                setPalette(e.target.value as "professional" | "cyberpunk" | "playful")
              }
              className="hidden rounded-md border border-border-subtle bg-surface px-2 py-1 text-xs text-muted-foreground shadow-sm outline-none ring-primary/20 transition hover:text-foreground focus-visible:ring-2 sm:inline-block"
            >
              <option value="professional">Professional</option>
              <option value="cyberpunk">Cyberpunk</option>
              <option value="playful">Playful</option>
            </select>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              aria-pressed={theme === "dark"}
              className="inline-flex items-center justify-center rounded-lg border border-border-subtle bg-surface px-3 py-2 text-muted-foreground transition hover:text-foreground focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
            >
              {theme === "dark" ? (
                <SunMedium className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
