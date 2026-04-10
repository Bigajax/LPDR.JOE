"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // ── Stagger: assign delay to sibling .reveal inside [data-stagger]
    document.querySelectorAll("[data-stagger]").forEach((parent) => {
      const children = parent.querySelectorAll(".reveal");
      children.forEach((el, i) => {
        (el as HTMLElement).style.transitionDelay = `${i * 90}ms`;
      });
    });

    // ── Observe all .reveal elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.10, rootMargin: "0px 0px -32px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
