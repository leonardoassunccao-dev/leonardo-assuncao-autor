import type { Metadata } from "next";
import { TextList } from "@/components/text-list";
import { getTexts } from "@/lib/texts";
export const metadata: Metadata = { title: "Textos", description: "Textos de Leonardo Assunção de Oliveira." };
export default function TextsPage() { return <div className="inner-page"><header className="page-intro"><p className="eyebrow">Textos</p><h1>Algumas coisas precisam de mais espaço para serem ditas.</h1><p>Reflexões sobre o tempo, as ausências, as escolhas e aquilo que só entendemos depois.</p></header><TextList texts={getTexts()} /><p className="demo-note">Os textos exibidos são conteúdos demonstrativos, preparados para substituição editorial.</p></div>; }
