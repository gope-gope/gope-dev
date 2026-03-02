type BackdropProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const Backdrop = ({ isOpen, setIsOpen }: BackdropProps) => {
  return (
    <div
      role="presentation"
      aria-hidden
      className={`fixed inset-0 z-30 bg-black/40 transition-opacity md:hidden h-screen ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      onClick={() => setIsOpen(false)}
    />
  );
};

export default Backdrop;
