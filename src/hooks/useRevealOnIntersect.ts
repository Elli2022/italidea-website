import { useEffect, useRef } from "react";

export function useRevealOnIntersect<T extends HTMLElement>() {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const rootNode = containerRef.current;
    if (!rootNode) {
      return;
    }

    const revealNodes = Array.from(
      rootNode.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    revealNodes.forEach((node, index) => {
      node.style.setProperty("--reveal-delay", `${index * 55}ms`);
      node.classList.add("reveal-prep");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.remove("reveal-prep", "reveal-in");
            void target.offsetWidth;
            target.classList.add("reveal-in");
            return;
          }
          target.classList.remove("reveal-in");
          target.classList.add("reveal-prep");
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.12 },
    );

    revealNodes.forEach((node) => observer.observe(node));

    return () => {
      revealNodes.forEach((node) => observer.unobserve(node));
      observer.disconnect();
    };
  }, []);

  return containerRef;
}
