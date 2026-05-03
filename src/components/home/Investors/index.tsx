import { ViewportShell } from "@/lib/ui/ViewportShell";
import { InvestorsMobile } from "./InvestorsMobile";
import { InvestorsDesktop } from "./InvestorsDesktop";

export function Investors() {
  return <ViewportShell mobile={<InvestorsMobile />} desktop={<InvestorsDesktop />} />;
}
