import { ProfileCardProps } from "@/types/interfaces/ui";
import { Box, Column } from "./Layout";
import { cn } from "@/utils/core/cn";
import Image from "next/image";

/* ─── Size tokens ────────────────────────────────────────────────────────── */

const portraitSize = {
  mobile: {
    card: "w-[156px] h-[210px] flex-shrink-0",
    textPosition: "bottom-[19.6px] left-[13.3px]",
    name: "text-[11.2px] leading-[1.3]",
    role: "text-[11.2px] leading-[1.5] opacity-80",
  },
  desktop: {
    card: "w-[223px] h-[300px]",
    textPosition: "bottom-[28px] left-[18px]",
    name: "text-[16px]",
    role: "text-[14px]",
  },
} as const;

const landscapeSize = {
  mobile: { card: "w-full h-[140px]" },
  desktop: { card: "w-[250px] h-[140px]" },
} as const;

/* ─── Component ─────────────────────────────────────────────────────────── */

export function ProfileCard({
  name,
  role,
  image,
  variant = "landscape",
  background = "team",
  size = "desktop",
  className,
  ...props
}: ProfileCardProps) {
  const isPortrait = variant === "portrait";
  const roles = Array.isArray(role) ? role : [role];

  const sizeTokens = isPortrait ? portraitSize[size] : null;
  const cardSizeClass = isPortrait ? portraitSize[size].card : landscapeSize[size].card;

  const backgroundClass = isPortrait
    ? "bg-portrait-gradient"
    : background === "core"
      ? "bg-core-gradient"
      : background === "advisor"
        ? "bg-ts-advisor"
        : "bg-team-gradient";

  return (
    <Box
      data-ui="ProfileCard"
      data-variant={variant}
      data-size={size}
      className={cn("relative rounded-lg overflow-hidden", cardSizeClass, className)}
      {...props}
    >
      {/* Background */}
      <Box className={cn("absolute inset-0 rounded-lg", backgroundClass)} />

      {/* Photo */}
      <Image
        src={image}
        alt={name}
        fill
        className={cn(
          "absolute pointer-events-none",
          isPortrait
            ? "inset-0 w-full h-full object-contain object-bottom"
            : "right-0 top-0 h-full w-[55%] object-contain object-right-bottom"
        )}
        unoptimized
      />

      {/* Teal color overlay */}
      <Box
        className="absolute inset-0 bg-[#78FFE9] mix-blend-color opacity-15 rounded-lg z-[1]"
        aria-hidden="true"
      />

      {/* Portrait gradient fade at bottom */}
      {isPortrait && (
        <Box
          className="absolute left-0 right-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/40 to-transparent z-[2]"
          aria-hidden="true"
        />
      )}

      {/* Text */}
      <Column
        className={cn(
          "absolute z-[10]",
          isPortrait ? sizeTokens!.textPosition : "left-6 top-1/2 -translate-y-1/2 max-w-[50%]"
        )}
        gap={0}
      >
        <p className={cn("text-white font-medium", isPortrait ? sizeTokens!.name : "text-[16px]")}>
          {name}
        </p>
        <Box className={isPortrait ? "mt-[1.4px]" : "mt-[10px]"}>
          {roles.map((r) => (
            <p
              key={r}
              className={cn(
                "text-white/80 font-medium leading-[1.5]",
                isPortrait ? sizeTokens!.role : "text-[14px]"
              )}
            >
              {r}
            </p>
          ))}
        </Box>
      </Column>
    </Box>
  );
}
