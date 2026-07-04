import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BookCard } from "@/components/book/BookCard";
import { books } from "@/content/books";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Bücher",
  description:
    "Das Programm des Vedana Verlags – sorgfältig gemachte, liebevoll illustrierte Bücher.",
  path: "/buecher",
});

export default function BuecherPage() {
  return (
    <Container className="py-16 md:py-24">
      <SectionHeader
        eyebrow="Programm"
        title="Unsere Bücher"
        intro="Sorgfältig gemacht, liebevoll illustriert – Bücher, die berühren."
      />
      <ul className="mt-14 flex flex-wrap gap-x-10 gap-y-14">
        {books.map((book) => (
          <li key={book.slug} className="w-full max-w-[17rem] sm:w-64">
            <BookCard book={book} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
