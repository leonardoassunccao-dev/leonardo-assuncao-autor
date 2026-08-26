import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { absoluteUrl, siteConfig } from "@/lib/site";
import "./globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-serif", weight: ["400", "500", "600", "700"], display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url || "http://localhost:3000"),
  title: { default: `${siteConfig.name} — Autor`, template: `%s — ${siteConfig.shortName}` },
  description: siteConfig.description,
  alternates: siteConfig.url ? { canonical: absoluteUrl("/") } : undefined,
  openGraph: { type: "website", locale: "pt_BR", title: siteConfig.name, description: siteConfig.description, images: ["/images/book/capa-frontal.webp"] },
  twitter: { card: "summary_large_image", title: siteConfig.name, description: siteConfig.description, images: ["/images/book/capa-frontal.webp"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR" className={`${serif.variable} ${sans.variable}`}><body><a href="#conteudo" className="skip-link">Pular para o conteúdo</a><Header /><main id="conteudo">{children}</main><Footer /></body></html>; }
