import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScaledSlideProps {
  children: ReactNode;
  className?: string;
}

export function ScaledSlide({ children, className }: ScaledSlideProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      const { width, height } = el.getBoundingClientRect();
      const s = Math.min(width / 1920, height / 1080);
      setScale(s);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className ?? ""}`}
    >
      <div className="slide-wrapper" style={{ ["--scale" as never]: scale }}>
        {children}
      </div>
    </div>
  );
}
