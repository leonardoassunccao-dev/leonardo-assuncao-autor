import Image from "next/image";
import Link from "next/link";
import { AnimatedReveal } from "@/components/animated-reveal";
import { SectionHeading } from "@/components/section-heading";
import { TextList } from "@/components/text-list";
import { book } from "@/lib/site";
import { getTexts } from "@/lib/texts";

export default function Home() {
  const texts = getTexts();
  return <>
    <section className="hero" aria-labelledby="hero-title">
      <Image src="/images/book/paisagem.webp" alt="Lago e montanhas ao pôr do sol" fill priority sizes="100vw" className="hero-image" />
      <div className="hero-person" aria-hidden="true"><Image src="/images/book/capa-frontal.webp" alt="" fill priority sizes="55vw" /></div>
      <div className="hero-shade" />
      <div className="hero-copy">
        <p className="hero-author">Leonardo Assunção de Oliveira</p>
        <h1 id="hero-title">As coisas<br />que aprendi<br /><em>em silêncio</em></h1>
        <p className="hero-subtitle">{book.subtitle}</p>
        <div className="hero-actions"><Link href={`/livros/${book.slug}`} className="button">Conheça o livro</Link><Link href="/textos" className="text-link light">Ler textos</Link></div>
      </div>
      <a href="#manifesto" className="scroll-cue"><span>Continue</span><i /></a>
    </section>

    <section id="manifesto" className="manifesto"><AnimatedReveal><p className="eyebrow">O que permanece quando o barulho termina</p><blockquote>“Palavras que não fazem barulho, mas ficam.”</blockquote><p>Este é um espaço para aquilo que a vida ensina quando ninguém está olhando.</p></AnimatedReveal></section>

    <section className="book-feature section-shell">
      <div className="book-visual"><div className="sun-disc" /><AnimatedReveal><Image src="/images/book/mockup-impresso.webp" alt="Livro As Coisas que Aprendi em Silêncio sobre tecido, ao lado de uma xícara" width={1400} height={2100} sizes="(max-width: 800px) 100vw, 50vw" /></AnimatedReveal></div>
      <AnimatedReveal className="book-copy"><SectionHeading eyebrow="Livro em destaque" title={book.title} />{book.description.map((p) => <p key={p}>{p}</p>)}<p className="availability">Disponível em versão impressa e digital</p><Link href={`/livros/${book.slug}`} className="button outline">Conhecer o livro</Link></AnimatedReveal>
    </section>

    <section className="texts-home section-shell"><SectionHeading eyebrow="Textos" title="Algumas coisas precisam de mais espaço para serem ditas." /><TextList texts={texts} /><Link href="/textos" className="text-link">Ver todos os textos</Link></section>

    <section className="author-feature section-shell"><div className="author-image"><Image src="/images/autor.webp" alt="Retrato oficial de Leonardo Assunção de Oliveira" fill sizes="(max-width: 800px) 100vw, 50vw" /></div><AnimatedReveal className="author-copy"><SectionHeading eyebrow="Sobre o autor" title="Escrever também é aprender a conviver com as perguntas." /><p>Leonardo não escreveu este livro porque encontrou todas as respostas. Escreveu porque aprendeu a conviver com as perguntas.</p><p>Entre erros, despedidas, recomeços e silêncios, percebeu que algumas das maiores lições da vida chegam quando ninguém está olhando.</p><p>Leonardo não pretende ensinar ninguém a viver. Apenas decidiu transformar em palavras aquilo que a vida lhe ensinou em silêncio.</p><Link href="/sobre" className="text-link light">Conheça o autor</Link></AnimatedReveal></section>
  </>;
}
