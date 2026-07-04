/** Preis in Euro nach deutschem Format: 24.9 → "24,90 €". */
export function formatEuro(value: number): string {
  return value.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  });
}
