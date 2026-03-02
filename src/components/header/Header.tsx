import { useState } from "react";
import { Moon, SunMedium } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "@/hooks/useTheme";
import HeaderNav from "./Navigation";
import MobileMenuButton from "./mobile/MobileMenuButton";
import MobileMenu from "./mobile/MobileMenu";
import Backdrop from "./mobile/Backdrop";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, palette, setPalette } = useTheme();

  return (
    <header className="sticky top-0 z-20 border-b border-border-subtle bg-background/80 backdrop-blur">
      <div className="relative mx-auto max-w-7xl h-[80px]">
        <div className="relative z-50 flex items-center justify-between bg-background/80 px-6 py-4 backdrop-blur h-full">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Georgi Georgiev
          </span>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden md:block">
              <HeaderNav />
            </div>

            <div className="flex items-center gap-2">
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
            <MobileMenuButton
              open={mobileMenuOpen}
              onOpenChange={setMobileMenuOpen}
            />
          </div>
        </div>

        <Backdrop isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
        <MobileMenu isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
      </div>
    </header>
  );
};

export default Header;
