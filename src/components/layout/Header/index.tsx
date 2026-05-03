import { ViewportShell } from "@/lib/ui/ViewportShell";
import { HeaderMobile } from "./HeaderMobile";
import { HeaderDesktop } from "./HeaderDesktop";

export function Header() {
  return (
    <header
      data-component="Header"
      className="absolute top-0 left-0 w-screen z-50 bg-background transition-colors duration-300"
    >
      <ViewportShell mobile={<HeaderMobile />} desktop={<HeaderDesktop />} />
    </header>
  );
}
