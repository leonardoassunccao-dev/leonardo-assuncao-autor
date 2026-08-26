import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
export const metadata: Metadata = { title: "Contato", description: "Contato oficial de Leonardo Assunção de Oliveira." };
const contacts=[{label:"E-mail",value:siteConfig.social.email},{label:"Instagram",value:siteConfig.social.instagram},{label:"TikTok",value:siteConfig.social.tiktok}];
export default function ContactPage(){return <div className="contact-page"><header className="page-intro"><p className="eyebrow">Contato</p><h1>Para leitores, imprensa, projetos e outras conversas.</h1><p>Os canais oficiais serão disponibilizados aqui.</p></header><div className="contact-list">{contacts.map(item=><div key={item.label}><span>{item.label}</span>{item.value?<a href={item.label==="E-mail"?`mailto:${item.value}`:item.value}>{item.value}</a>:<p>A configurar</p>}</div>)}</div><p className="demo-note">Contatos não publicados: configure-os em <code>lib/site.ts</code>.</p></div>}
