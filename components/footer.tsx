import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site";

export function Footer() { return <footer className="footer"><div><p className="footer-name">{siteConfig.name}</p><p className="eyebrow">Autor</p></div><nav aria-label="Navegação do rodapé">{navItems.slice(1).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav><p className="copyright">© {new Date().getFullYear()} Leonardo Assunção de Oliveira.</p></footer>; }
