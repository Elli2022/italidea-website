"use client";

import type { Ref } from "react";
import { useRevealOnIntersect } from "@/hooks/useRevealOnIntersect";

type RevealSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div" | "header" | "footer";
};

export default function RevealSection({
  children,
  className = "",
  id,
  as: Tag = "section",
}: RevealSectionProps) {
  const ref = useRevealOnIntersect<HTMLElement>();

  return (
    <Tag
      ref={ref as Ref<HTMLDivElement>}
      id={id}
      className={className}
    >
      {children}
    </Tag>
  );
}
