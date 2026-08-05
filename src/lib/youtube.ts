/**
 * Converte qualquer link do YouTube (normal, curto ou Shorts) para o formato embed.
 * Retorna null quando o link não é um vídeo válido do YouTube (ex.: "#").
 */
export function getYouTubeId(url: string): string | null {
  if (!url || url === "#") return null;
  try {
    const u = new URL(url, "https://www.youtube.com");
    const host = u.hostname.replace(/^www\./, "");

    if (host === "youtu.be") return u.pathname.split("/").filter(Boolean)[0] ?? null;

    if (host.endsWith("youtube.com")) {
      const v = u.searchParams.get("v");
      if (v) return v;
      const parts = u.pathname.split("/").filter(Boolean);
      // /shorts/ID, /embed/ID, /live/ID, /v/ID
      if (parts.length >= 2 && ["shorts", "embed", "live", "v"].includes(parts[0] ?? "")) {
        return parts[1] ?? null;
      }
    }
    return null;
  } catch {
    return null;
  }
}

export function getYouTubeEmbedUrl(url: string): string | null {
  const id = getYouTubeId(url);
  if (!id) return null;
  return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
}
