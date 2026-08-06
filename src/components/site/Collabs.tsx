import { useState } from "react";
import { Play, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { collabs, type Collab } from "@/data/portfolio";
import { VideoModal } from "@/components/site/VideoModal";

export function Collabs() {
  const [selected, setSelected] = useState<Collab | null>(null);
  return (
    <section id="collabs" className="relative py-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-1/3 mx-auto h-64 max-w-3xl opacity-20 blur-3xl"
        style={{ background: "var(--gradient-primary)" }}
      />
      <div className="relative mx-auto max-w-6xl px-5">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">Collabs</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Vídeos editados que fiz <span className="text-gradient">junto com outras pessoas</span>
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Collabs que fiz com amigos editores, com objetivo de aprimorar habilidades de edição e dividir conhecimentos.
        </p>

        <div className="mt-10 space-y-5">
          {collabs.map((c) => (
            <article
              key={c.id}
              className="surface-card group grid gap-5 overflow-hidden p-4 transition-all duration-500 hover:glow-ring sm:grid-cols-[240px_1fr] sm:items-center"
            >
              <button
                type="button"
                onClick={() => setSelected(c)}
                aria-label={`Assistir ${c.name}`}
                className="relative overflow-hidden rounded-xl"
              >
                <img
                  src={c.thumbnail}
                  alt={`Capa da collab ${c.name}`}
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="aspect-video size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </button>
              <div className="sm:pr-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs text-accent">
                  <Users className="size-3.5" /> Collab
                </span>
                <h3 className="mt-3 text-lg font-semibold">{c.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  <span className="text-foreground/80">Participantes:</span> {c.participants}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  <span className="text-foreground/80">Minha parte:</span> {c.myRole}
                </p>
                <Button size="sm" className="mt-4 rounded-full" onClick={() => setSelected(c)}>
                  <Play className="size-4 fill-current" />
                  Assistir collab
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <VideoModal
        open={selected !== null}
        onOpenChange={(open) => !open && setSelected(null)}
        title={selected?.name ?? ""}
        videoUrl={selected?.videoUrl ?? "#"}
      />
    </section>
  );
}
