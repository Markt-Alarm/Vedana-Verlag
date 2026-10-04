"use client";

import { useEffect, useState } from "react";
import { getReleaseState } from "@/lib/release";

export type ReleaseState = "pending" | "before" | "released";

const maxTimeoutMs = 2_147_483_647;

/**
 * Schaltet sichtbare Vorbestell-Hinweise exakt am hinterlegten Zeitpunkt um.
 * `pending` hält das vorgerenderte HTML neutral, damit nach dem Release kein
 * veralteter Hinweis kurz aufblitzt, bevor React im Browser geladen ist.
 */
export function useReleaseState(releaseAt?: string): ReleaseState {
  const [state, setState] = useState<ReleaseState>("pending");

  useEffect(() => {
    if (!releaseAt) {
      setState("before");
      return;
    }

    const releaseTime = Date.parse(releaseAt);
    if (Number.isNaN(releaseTime)) {
      setState("before");
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    function updateState() {
      const remaining = releaseTime - Date.now();
      const currentState = getReleaseState(releaseAt);
      setState(currentState);
      if (currentState === "released") {
        return;
      }

      timeoutId = setTimeout(updateState, Math.min(remaining, maxTimeoutMs));
    }

    updateState();
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [releaseAt]);

  return state;
}
