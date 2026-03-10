import { Loader2 } from "lucide-react";

export function SuspenseFallback() {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm"
      aria-live="polite"
      aria-busy="true"
      aria-label="Loading"
    >
      <Loader2
        className="h-10 w-10 animate-spin text-foreground"
        aria-hidden
      />
    </div>
  );
}
