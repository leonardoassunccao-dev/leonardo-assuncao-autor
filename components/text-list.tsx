import Link from "next/link";
import { formatDate, type TextEntry } from "@/lib/texts";

export function TextList({ texts }: { texts: TextEntry[] }) { return <div className="text-index">{texts.map((text, index) => <article key={text.slug} className="text-row"><span className="text-number">{String(index + 1).padStart(2, "0")}</span><div><p className="text-meta"><time dateTime={text.date}>{formatDate(text.date)}</time><span>{text.readingTime}</span></p><h3><Link href={`/textos/${text.slug}`}>{text.title}</Link></h3><p>{text.description}</p></div><Link href={`/textos/${text.slug}`} className="arrow-link" aria-label={`Ler ${text.title}`}>↗</Link></article>)}</div>; }
