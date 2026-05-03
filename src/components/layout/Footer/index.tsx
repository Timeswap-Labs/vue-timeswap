import { ViewportShell } from "@/lib/ui/ViewportShell";
import { FooterMobile } from "./FooterMobile";
import { FooterDesktop } from "./FooterDesktop";

export function Footer() {
  return (
    <footer
      data-component="Footer"
      className="relative w-full border-t border-[#263A34] bg-[#04100E]"
    >
      <ViewportShell mobile={<FooterMobile />} desktop={<FooterDesktop />} />
    </footer>
  );
}
