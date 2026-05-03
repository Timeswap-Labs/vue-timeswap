import type { AuditLogo, NavigationLink } from "@/types/interfaces/navigation";

export const HEADER_NAV_LINKS: readonly NavigationLink[] = [
  { label: "Docs", href: "https://docs.timeswap.io", isExternal: true },
  { label: "Whitepaper", href: "/whitepaper.pdf", isExternal: true },
];

export const FOOTER_LINKS: readonly NavigationLink[] = [
  { label: "Brand kit", href: "#" },
  { label: "Terms of service", href: "#" },
];

export const FOOTER_AUDIT_LOGOS: readonly AuditLogo[] = [
  { name: "PeckShield", image: "/images/partners/peckshield.svg" },
  { name: "Code4rena", image: "/images/partners/code4rena.svg" },
];
