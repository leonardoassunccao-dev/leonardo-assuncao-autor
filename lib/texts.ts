import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type TextEntry = {
  slug: string; title: string; description: string; date: string;
  readingTime: string; cover?: string; content: string;
};

const folder = path.join(process.cwd(), "content", "textos");

export function getTexts(): TextEntry[] {
  return fs.readdirSync(folder).filter((file) => file.endsWith(".mdx")).map((file) => {
    const raw = fs.readFileSync(path.join(folder, file), "utf8");
    const { data, content } = matter(raw);
    return { slug: data.slug, title: data.title, description: data.description, date: data.date, readingTime: data.readingTime, cover: data.cover, content };
  }).sort((a, b) => b.date.localeCompare(a.date));
}

export function getText(slug: string) { return getTexts().find((text) => text.slug === slug); }
export function renderMarkdown(content: string) { return marked.parse(content) as string; }
export function formatDate(date: string) { return new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(date)); }
