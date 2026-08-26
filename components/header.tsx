"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 32); onScroll(); addEventListener("scroll", onScroll, { passive: true }); return () => removeEventListener("scroll", onScroll); }, []);
  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
    <Link href="/" className="brand" aria-label="Página inicial de Leonardo Assunção">Leonardo <span>Assunção</span></Link>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-nav"><span>{open ? "Fechar" : "Menu"}</span><i aria-hidden="true" /></button>
    <nav id="main-nav" className={open ? "open" : ""} aria-label="Navegação principal">
      {navItems.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
    </nav>
  </header>;
}
