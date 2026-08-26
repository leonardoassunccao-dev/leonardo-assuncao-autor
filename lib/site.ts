export const siteConfig = {
  name: "Leonardo Assunção de Oliveira",
  shortName: "Leonardo Assunção",
  role: "Autor",
  description: "Site oficial do escritor Leonardo Assunção de Oliveira, autor de As Coisas que Aprendi em Silêncio.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "",
  social: { instagram: "", tiktok: "", email: "" }, // TODO: inserir contatos oficiais.
};

export const book = {
  slug: "as-coisas-que-aprendi-em-silencio",
  title: "As Coisas que Aprendi em Silêncio",
  subtitle: "Reflexões para quem precisa de abrigo e de coragem para sair dele.",
  year: "", // TODO: inserir o ano oficial de publicação.
  formats: ["Impresso", "Digital"],
  cover: "/images/book/capa-frontal.webp",
  purchaseUrl: "", // TODO: inserir a URL oficial de compra.
  description: [
    "Este livro não foi escrito para dizer que tudo ficará bem.",
    "Algumas perdas não serão substituídas. Algumas perguntas permanecerão sem resposta. E certas escolhas continuarão doendo, mesmo depois de descobrirmos que eram necessárias.",
    "As Coisas que Aprendi em Silêncio reúne pequenas narrativas, diálogos e reflexões sobre o tempo, o medo, as ausências, o amor e as decisões que adiamos.",
  ],
};

export const navItems = [
  ["Início", "/"], ["Livros", "/livros"], ["Textos", "/textos"], ["Sobre", "/sobre"], ["Contato", "/contato"],
] as const;

export const absoluteUrl = (path = "") => siteConfig.url ? `${siteConfig.url}${path}` : undefined;
