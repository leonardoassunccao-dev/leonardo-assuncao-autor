import type { MetadataRoute } from "next";
import { book, siteConfig } from "@/lib/site";
import { getTexts } from "@/lib/texts";
export default function sitemap():MetadataRoute.Sitemap { if(!siteConfig.url)return[]; const routes=["","/livros",`/livros/${book.slug}`,"/textos","/sobre","/contato"]; return [...routes.map(route=>({url:`${siteConfig.url}${route}`,lastModified:new Date()})),...getTexts().map(text=>({url:`${siteConfig.url}/textos/${text.slug}`,lastModified:new Date(text.date)}))]; }
