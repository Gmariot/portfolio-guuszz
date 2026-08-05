import { useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { works, type Work } from "@/data/portfolio";
import { VideoModal } from "@/components/site/VideoModal";

export function Works() {
  const [selected, setSelected] = useState<Work | null>(null);

  return (
    <section id="trabalhos" className="relative mx-auto max-w-6xl px-5 py-24">
      <p className="text-sm uppercase tracking-[0.2em] text-accent">Portfólio</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
        Projetos / <span className="text-gradient">Vídeos que Editei</span>
      </h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((w) => (
          <article
            key={w.id}
            className="surface-card group overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:glow-ring"
          >
            <button
              type="button"
              onClick={() => setSelected(w)}
              aria-label={`Assistir ${w.title}`}
              className="relative block w-full aspect-video overflow-hidden"
            >
              <img
                src={w.thumbnail}
                alt={`Capa do vídeo ${w.title}`}
                loading="lazy"
                width={1280}
                height={720}
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                  <Play className="size-6 fill-current" />
                </span>
              </div>
            </button>
            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold">{w.title}</h3>
                {w.date ? (
                  <span className="shrink-0 text-xs text-muted-foreground">{w.date}</span>
                ) : null}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.description}</p>
              <Button
                size="sm"
                variant="secondary"
                className="mt-4 rounded-full"
                onClick={() => setSelected(w)}
              >
                <Play className="size-4 fill-current" />
                Assistir vídeo
              </Button>
            </div>
          </article>
        ))}
      </div>

      <VideoModal
        open={selected !== null}
        onOpenChange={(open) => !open && setSelected(null)}
        title={selected?.title ?? ""}
        videoUrl={selected?.videoUrl ?? "#"}
      />
    </section>
  );
}
