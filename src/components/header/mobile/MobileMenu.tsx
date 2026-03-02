import { sectionLinks } from "../sectionLinks";

type MobileMenuProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  return (
    <div
      className={`absolute left-0 right-0 top-full z-40 overflow-hidden border-b border-border-subtle bg-background shadow-lg transition-[max-height,opacity] duration-200 ease-out md:hidden ${
        isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
      }`}
      aria-label="Mobile navigation"
      aria-hidden={!isOpen}
    >
      <nav className="flex flex-col gap-0.5 px-6 py-4 text-muted-foreground">
        {sectionLinks.map((item) => (
          <a
            key={item.link}
            href={item.link}
            className="rounded-lg px-4 py-3 text-sm font-medium transition hover:bg-surface hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;
