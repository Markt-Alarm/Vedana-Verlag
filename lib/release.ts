export type SettledReleaseState = "before" | "released";

export const BUDDHA_BOOK_RELEASE_AT = "2026-10-15T00:00:00+02:00";

export function getReleaseState(
  releaseAt: string | undefined,
  now = Date.now(),
): SettledReleaseState {
  if (!releaseAt) return "before";

  const releaseTime = Date.parse(releaseAt);
  if (Number.isNaN(releaseTime)) return "before";

  return now >= releaseTime ? "released" : "before";
}
