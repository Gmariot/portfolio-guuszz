import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      <div
        className="animate-float absolute -left-24 top-1/4 size-72 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-primary)" }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-28">
        <span className="animate-rise inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
          <Sparkles className="size-3.5 text-accent" />
          Edição de vídeo
        </span>

        <h1
          className="animate-rise mt-6 max-w-3xl text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          Olá, eu sou <span className="text-gradient">Gustavo.</span>
        </h1>

        <p
          className="animate-rise mt-4 max-w-2xl text-xl text-foreground/90 sm:text-2xl"
          style={{ animationDelay: "160ms" }}
        >
          Editor de vídeos
        </p>

        <p
          className="animate-rise mt-5 max-w-xl text-base leading-relaxed text-muted-foreground"
          style={{ animationDelay: "240ms" }}
        >
          Gosto de criar e editar vídeos no meu tempo livre, explorando estilos e técnicas
          diferentes — do 2D ao 3D, de edições sérias às mais zoadas. Aqui eu reúno meus
          experimentos, projetos pessoais e collabs.
        </p>

        <div
          className="animate-rise mt-9 flex flex-wrap gap-3"
          style={{ animationDelay: "320ms" }}
        >
          <Button size="lg" asChild className="rounded-full glow-ring">
            <a href="#trabalhos">
              Ver meus trabalhos
              <ArrowDown className="size-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="rounded-full bg-transparent">
            <a href="#sobre">Sobre mim</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
