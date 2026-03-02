import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type HeaderMobileProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const MobileMenuButton = ({ open, onOpenChange }: HeaderMobileProps) => (
  <Button
    type="button"
    variant="ghost"
    size="icon"
    onClick={() => onOpenChange(!open)}
    aria-label={open ? "Close menu" : "Open menu"}
    aria-expanded={open}
    className="md:hidden"
  >
    {open ? (
      <X className="h-5 w-5" aria-hidden />
    ) : (
      <Menu className="h-5 w-5" aria-hidden />
    )}
  </Button>
);

export default MobileMenuButton;
