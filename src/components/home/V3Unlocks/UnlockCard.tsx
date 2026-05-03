import { Column } from "@/lib/ui/Layout";
import { UnlockCardContent } from "@/types/interfaces/home";
import { cn } from "@/utils/core/cn";

interface UnlockCardProps extends UnlockCardContent {
  size: "mobile" | "desktop";
}

const sizeMap = {
  mobile: {
    card: "w-full",
    tealHeight: "min-h-[171px]",
    darkHeight: "min-h-[168px]",
    elevatedOffset: "",
    title: "text-[20px]",
    desc: "text-[14px]",
  },
  desktop: {
    card: "w-full",
    tealHeight: "min-h-[171px] lg:h-[333px]",
    darkHeight: "min-h-[168px] lg:h-[335px]",
    elevatedOffset: "lg:mt-[84px]",
    title: "text-[20px] lg:text-[26px]",
    desc: "text-[14px] lg:text-[16px]",
  },
} as const;

export function UnlockCard({ title, description, variant, elevated, size }: UnlockCardProps) {
  const isTeal = variant === "teal";
  const s = sizeMap[size];
  return (
    <Column
      data-ui="UnlockCard"
      data-variant={variant}
      className={cn(
        "rounded-[15px] p-6",
        s.card,
        isTeal ? s.tealHeight : s.darkHeight,
        elevated && size === "desktop" ? s.elevatedOffset : "",
        isTeal ? "bg-ts-primary shadow-ts-card" : "bg-ts-dark-green shadow-ts-green"
      )}
    >
      <h3
        className={cn(
          "font-medium leading-[1.3] mb-3",
          s.title,
          isTeal ? "text-ts-card-dark" : "text-white"
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "font-medium leading-[1.5]",
          s.desc,
          isTeal ? "text-ts-card-dark" : "text-white"
        )}
      >
        {description}
      </p>
    </Column>
  );
}
