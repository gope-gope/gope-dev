import { sectionLinks } from "./sectionLinks";

const HeaderNav = () => (
  <nav
    className="flex items-center gap-6 text-sm font-medium text-muted-foreground"
    aria-label="Main navigation"
  >
    {sectionLinks.map((item) => (
      <a
        key={item.link}
        href={item.link}
        className="transition hover:text-primary"
      >
        {item.name}
      </a>
    ))}
  </nav>
);

export default HeaderNav;
