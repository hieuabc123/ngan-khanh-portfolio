"use client";

import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "scale" | "none";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  direction?: RevealDirection;
  duration?: number;
  threshold?: number;
  sx?: SxProps<Theme>;
};

const hiddenTransforms: Record<RevealDirection, string> = {
  up: "translate3d(0, 28px, 0)",
  down: "translate3d(0, -18px, 0)",
  left: "translate3d(-28px, 0, 0)",
  right: "translate3d(28px, 0, 0)",
  scale: "scale(0.97)",
  none: "none",
};

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  duration = 680,
  threshold = 0.18,
  sx,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!element || prefersReducedMotion || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  const sxArray = Array.isArray(sx) ? sx : [sx];

  return (
    <Box
      ref={ref}
      sx={[
        {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "none" : hiddenTransforms[direction],
          transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
          willChange: isVisible ? "auto" : "opacity, transform",
          "@media (prefers-reduced-motion: reduce)": {
            opacity: 1,
            transform: "none",
            transition: "none",
          },
        },
        ...sxArray,
      ]}
    >
      {children}
    </Box>
  );
}
