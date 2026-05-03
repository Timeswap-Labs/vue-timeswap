import { ViewportShell } from "@/lib/ui/ViewportShell";
import { OurTeamMobile } from "./OurTeamMobile";
import { OurTeamDesktop } from "./OurTeamDesktop";

export function OurTeam() {
  return <ViewportShell mobile={<OurTeamMobile />} desktop={<OurTeamDesktop />} />;
}
