import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBook, getAllBookSlugs } from "@/content/books";
import { BookDetail } from "@/components/book/BookDetail";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return getAllBookSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const book = getBook(params.slug);
  if (!book) return pageMetadata({ title: "Buch nicht gefunden" });
  return pageMetadata({
    title: book.titel,
    description: book.kurzbeschreibung,
    path: `/buecher/${book.slug}`,
    ogImage: book.cover,
  });
}

export default function BuchDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const book = getBook(params.slug);
  if (!book) notFound();
  return <BookDetail book={book} />;
}
