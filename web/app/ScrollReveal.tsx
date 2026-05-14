"use client";

import { CSSProperties, ReactNode, useEffect, useRef } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function ScrollReveal({
  children,
  delay = 0,
  className,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
      container.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        container.classList.add("is-visible");
        observer.unobserve(container);
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`scroll-reveal ${className ?? ""}`}
      ref={containerRef}
      style={{ ["--reveal-delay" as any]: `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
