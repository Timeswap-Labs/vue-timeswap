import Image from "next/image";
import { Row, Column, Box } from "@/lib/ui/Layout";
import { cn } from "@/utils/core/cn";
import { NamedImage, ProfileContent } from "@/types/interfaces/home";

export function InvestorPersonCard({ name, role, image }: ProfileContent) {
  const roles = Array.isArray(role) ? role : [role];
  return (
    <Box data-ui="InvestorPersonCard" className="relative flex-shrink-0 w-[256px] h-[90px]">
      {/* Text box */}
      <Column
        justify="center"
        align="start"
        gap={1}
        className="absolute right-0 top-0 w-[226px] h-[90px] bg-ts-investor-bg rounded-[8px] pl-[46px] pr-[23px] py-[14px]"
      >
        <p className="font-bold text-white text-[14px] leading-[1.2] uppercase overflow-hidden text-ellipsis whitespace-nowrap w-full">
          {name}
        </p>
        <Column className="w-full text-white/50 text-[12px] font-medium leading-[150%] tracking-[0.24px]">
          {roles.map((r) => (
            <p key={r} className="overflow-hidden text-ellipsis line-clamp-2">
              {r}
            </p>
          ))}
        </Column>
      </Column>

      {/* Photo */}
      <Box className="absolute left-0 top-[10px] w-[60px] h-[70px] overflow-hidden rounded-[8px]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-center pointer-events-none"
          unoptimized
        />
      </Box>
    </Box>
  );
}

export function InvestorLogo({ name, image, className }: NamedImage & { className?: string }) {
  return (
    <Box
      data-ui="InvestorLogo"
      className={cn("h-[60px] w-auto flex items-center justify-center", className)}
    >
      <Image
        src={image}
        alt={name}
        width={200}
        height={60}
        className="h-full w-auto object-contain mix-blend-plus-lighter opacity-80 hover:opacity-100 transition-opacity"
        style={{ width: "auto" }}
        unoptimized
      />
    </Box>
  );
}
