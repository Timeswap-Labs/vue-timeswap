import { ViewportShell } from "@/lib/ui/ViewportShell";
import { AdvisorsMobile } from "./AdvisorsMobile";
import { AdvisorsDesktop } from "./AdvisorsDesktop";

export function Advisors() {
  return <ViewportShell mobile={<AdvisorsMobile />} desktop={<AdvisorsDesktop />} />;
}
