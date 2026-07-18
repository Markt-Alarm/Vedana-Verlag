"use client";

import { useEffect, useState } from "react";

/**
 * Blendet eine Telefonnummer erst nach dem Laden im Browser ein (clientseitig).
 * Im ausgelieferten HTML – das die meisten automatisierten Spam-/Adress-Sammler
 * durchsuchen, ohne JavaScript auszuführen – taucht die Nummer dadurch nicht als
 * Klartext oder als `tel:`-Link auf. Für echte Besucher erscheint sie sofort
 * nach dem Laden ganz normal.
 */
export function PhoneNumber({
  number,
  href,
  className,
}: {
  number: string;
  href?: string;
  className?: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  if (!visible) {
    return (
      <span className={className} aria-hidden="true">
        · · · · ·
      </span>
    );
  }

  if (href) {
    return (
      <a href={href} className={className}>
        {number}
      </a>
    );
  }

  return <span className={className}>{number}</span>;
}
