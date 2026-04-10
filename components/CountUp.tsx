"use client";
import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  to: number;
  duration?: number;          // ms
  prefix?: string;
  suffix?: string;
  separator?: string;         // thousands separator
  className?: string;
  style?: React.CSSProperties;
}

function format(n: number, sep?: string) {
  if (!sep) return String(Math.round(n));
  return Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, sep);
}

export default function CountUp({
  to,
  duration = 1800,
  prefix = "",
  suffix = "",
  separator,
  className,
  style,
}: CountUpProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            // ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(eased * to);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}{format(value, separator)}{suffix}
    </span>
  );
}
