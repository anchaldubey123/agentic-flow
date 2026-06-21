import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SlideLayoutProps {
  children: ReactNode;
  className?: string;
  pageNumber?: number;
  totalPages?: number;
  pageLabel?: string;
  showFooter?: boolean;
  footerLeft?: ReactNode;
  variant?: "default" | "hero" | "section";
}

export function SlideLayout({
  children,
  className,
  pageNumber,
  totalPages,
  pageLabel,
  showFooter = true,
  footerLeft,
  variant = "default",
}: SlideLayoutProps) {
  return (
    <div
      className={cn(
        "slide-content",
        variant === "hero" && "slide-gradient-hero",
        variant === "section" && "slide-gradient-hero",
        className,
      )}
    >
      {/* faint grid only on default slides */}
      {variant === "default" && (
        <div className="absolute inset-0 slide-grid-bg opacity-[0.18] pointer-events-none" />
      )}

      {/* top chrome */}
      {showFooter && (
        <div className="absolute top-[56px] left-[88px] right-[88px] flex items-center justify-between z-20 pointer-events-none">
          <div className="flex items-center gap-4">
            <div className="slide-dot" />
            <span className="slide-chrome">EdgeFabric / Agentic SDLC</span>
          </div>
          {pageNumber && totalPages && (
            <span className="slide-page">
              {pageLabel ?? `${String(pageNumber).padStart(2, "0")} / ${String(totalPages).padStart(2, "0")}`}
            </span>
          )}
        </div>
      )}

      <div className="relative z-10 h-full w-full">{children}</div>

      {/* bottom chrome */}
      {showFooter && (
        <div className="absolute bottom-[48px] left-[88px] right-[88px] flex items-center justify-between z-20 pointer-events-none">
          <span className="slide-footer">{footerLeft ?? "Reimagining Software Delivery with AI Agents"}</span>
          <span className="slide-footer">© EdgeFabric</span>
        </div>
      )}
    </div>
  );
}
