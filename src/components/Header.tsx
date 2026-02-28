import { Moon, SunMedium } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "../hooks/useTheme";

const Header = () => {
  const { theme, toggleTheme, palette, setPalette } = useTheme();

  return (
    <header className="sticky top-0 z-20 border-b border-border-subtle bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Georgi Georgiev
        </span>

        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#about-me" className="transition hover:text-primary">
              About
            </a>
            <a href="#experience" className="transition hover:text-primary">
              Experience
            </a>
            <a href="#work" className="transition hover:text-primary">
              Work
            </a>
            <a href="#projects" className="transition hover:text-primary">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2 ">
            <Select
              value={palette}
              onValueChange={(value) =>
                setPalette(value as "professional" | "cyberpunk" | "playful")
              }
            >
              <SelectTrigger
                aria-label="Color palette"
                size="sm"
                className="hidden bg-surface text-xs text-muted-foreground sm:inline-flex"
              >
                <SelectValue
                  placeholder="Palette"
                  aria-label={`Current palette: ${palette}`}
                />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="cyberpunk">Cyberpunk</SelectItem>
                <SelectItem value="playful">Playful</SelectItem>
              </SelectContent>
            </Select>

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
