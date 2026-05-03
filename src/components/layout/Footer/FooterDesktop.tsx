import { Row } from "@/lib/ui/Layout";
import { Container } from "@/lib/ui/Layout";
import { SOCIAL_LINKS } from "@/utils/constants/social";
import { FOOTER_LINKS, FOOTER_AUDIT_LOGOS } from "@/utils/constants/navigation";
import { SocialIcon } from "@/lib/ui/SocialIcon";
import Image from "next/image";
import Link from "next/link";

function FooterStar() {
  return (
    <Image
      src="/smoothcorner.svg"
      alt=""
      width={13}
      height={13}
      className="w-[13px] h-[13px]"
      unoptimized
    />
  );
}

export function FooterDesktop() {
  return (
    <Container>
      <Row align="center" justify="between" className="h-[88px] gap-4">
        {/* Left: social icons + audit label */}
        <Row align="center" gap={10} className="!w-auto">
          <Row align="center" gap={4} className="!w-auto">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-ts-primary/10 hover:bg-ts-primary/20 transition-colors"
              >
                <SocialIcon name={s.iconName} className="w-[18px] h-[18px]" />
              </a>
            ))}
          </Row>

          <span className="font-medium text-[14px] leading-none text-white/50">Audited by :</span>
        </Row>

        {/* Right: nav links + separators + copyright */}
        <Row align="center" gap={4} className="!w-auto">
          {FOOTER_LINKS.map((link) => (
            <Row key={link.label} align="center" gap={4} className="!w-auto">
              <Link
                href={link.href}
                className="font-medium text-[13px] leading-none text-white hover:text-ts-primary transition-colors"
              >
                {link.label}
              </Link>
              <FooterStar />
            </Row>
          ))}
          <span className="font-medium text-[13px] leading-none text-white">
            Copyright 2026 Timeswap
          </span>
        </Row>
      </Row>
    </Container>
  );
}
