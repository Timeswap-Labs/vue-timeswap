import React from "react";
import { SocialLink } from "@/types/interfaces/social";
import { cn } from "@/utils/core/cn";

interface SocialIconProps {
  name: SocialLink["iconName"];
  className?: string;
}

export function SocialIcon({ name, className }: SocialIconProps) {
  const iconPath = `/icons/social/${name}.svg`;

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={iconPath} alt={name} className={cn("w-6 h-6", className)} />
    </>
  );
}
