import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  inverse?: boolean;
};

export function BrandMark({ className, inverse = false }: BrandMarkProps) {
  return (
    <a
      href="/"
      aria-label="BWEL Limited home"
      className={cn(
        "inline-flex items-center gap-3",
        inverse && "rounded-sm bg-background px-2 py-1.5",
        className,
      )}
    >
      <span className="grid size-10 place-items-center rounded-sm bg-primary font-display text-2xl font-black text-primary-foreground shadow-brand">
        B
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-extrabold text-foreground">
          <span className="text-primary">B</span>WEL
        </span>
        <span className="mt-1 text-[0.58rem] font-bold tracking-[0.26em] text-muted-foreground">
          LIMITED
        </span>
      </span>
    </a>
  );
}
