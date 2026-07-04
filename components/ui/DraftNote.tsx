/** Deutlicher Hinweis: Rechtsseite ist Entwurf und muss geprüft werden. */
export function DraftNote() {
  return (
    <div className="mb-10 rounded-lg border border-gold/40 bg-gold/10 p-4 text-sm leading-relaxed text-ink/80">
      <strong className="font-semibold">Entwurf / Platzhalter.</strong> Diese
      Seite ist ein strukturierter Platzhalter und noch nicht rechtsverbindlich.
      Vor der Veröffentlichung bitte alle markierten Angaben ergänzen und die
      Texte juristisch prüfen lassen.
    </div>
  );
}
