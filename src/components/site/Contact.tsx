import { ArrowUpRight } from "lucide-react";
import { socials } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-6xl px-5 py-24">
      <div className="surface-card p-8 sm:p-12">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">Contato</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Vamos <span className="text-gradient">trocar ideia</span>?
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Se quiser falar sobre edição, chamar pra uma collab ou só dar um oi, é só me achar
          por aí. (Links ainda são placeholders — é só substituir.)
        </p>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.url}
                className="group flex items-center justify-between rounded-2xl border border-border bg-secondary/40 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:glow-ring"
              >
                <span>
                  <span className="block text-sm font-semibold">{s.label}</span>
                  <span className="block text-xs text-muted-foreground">{s.handle}</span>
                </span>
                <ArrowUpRight className="size-4 text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Gustavo · Portfólio pessoal de edição feita por hobby.
      </p>
    </section>
  );
}
