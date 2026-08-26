import Link from "next/link";
export default function NotFound(){return <div className="not-found"><p className="eyebrow">404</p><h1>Esta página não permaneceu.</h1><p>O endereço pode ter mudado ou o conteúdo ainda não foi publicado.</p><Link href="/" className="button">Voltar ao início</Link></div>}
