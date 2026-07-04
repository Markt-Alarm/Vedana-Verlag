import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Sektion mit dezentem Foto-Hintergrund. Ein warmes Overlay hält den Text
 * ruhig und lesbar – das Foto schmückt, dominiert aber nicht.
 */
export function BackgroundSection({
  image,
  children,
  className,
  overlayClassName,
  priority = false,
}: {
  image: string;
  children: ReactNode;
  className?: string;
  overlayClassName?: string;
  priority?: boolean;
}) {
  return (
    <section className={cn("relative isolate overflow-hidden", className)}>
      <Image
        src={image}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        priority={priority}
        className="-z-10 object-cover"
      />
      <div
        aria-hidden="true"
        className={cn("absolute inset-0 -z-10", overlayClassName ?? "bg-paper/85")}
      />
      {children}
    </section>
  );
}
