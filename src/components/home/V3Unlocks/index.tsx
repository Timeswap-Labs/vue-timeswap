import { ViewportShell } from "@/lib/ui/ViewportShell";
import { V3UnlocksMobile } from "./V3UnlocksMobile";
import { V3UnlocksDesktop } from "./V3UnlocksDesktop";

export function V3Unlocks() {
  return <ViewportShell mobile={<V3UnlocksMobile />} desktop={<V3UnlocksDesktop />} />;
}
