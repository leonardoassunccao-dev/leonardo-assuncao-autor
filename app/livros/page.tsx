import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { book } from "@/lib/site";
export const metadata: Metadata = { title: "Livros", description: "Livros publicados por Leonardo Assunção de Oliveira." };
export default function BooksPage() { return <div className="inner-page"><header className="page-intro"><p className="eyebrow">Obras</p><h1>Livros</h1><p>Histórias e reflexões para aquilo que permanece.</p></header><section className="books-grid"><article><Link href={`/livros/${book.slug}`} className="book-cover-link"><Image src={book.cover} alt={`Capa de ${book.title}`} width={900} height={1350} priority /></Link><div><p className="eyebrow">Livro</p><h2><Link href={`/livros/${book.slug}`}>{book.title}</Link></h2><p>{book.subtitle}</p><p className="formats">{book.formats.join(" · ")}</p><Link href={`/livros/${book.slug}`} className="text-link">Conhecer o livro</Link></div></article></section></div>; }
