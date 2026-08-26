"use client";
export function ShareLinks({ title }: { title: string }) { const share = async () => { if (navigator.share) await navigator.share({ title, url: location.href }); else await navigator.clipboard.writeText(location.href); }; return <button className="text-link" onClick={share}>Compartilhar texto</button>; }
