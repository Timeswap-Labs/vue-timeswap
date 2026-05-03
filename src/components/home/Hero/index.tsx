import { ViewportShell } from "@/lib/ui/ViewportShell";
import { HeroMobile } from "./HeroMobile";
import { HeroDesktop } from "./HeroDesktop";

export function Hero() {
  return <ViewportShell mobile={<HeroMobile />} desktop={<HeroDesktop />} />;
}
