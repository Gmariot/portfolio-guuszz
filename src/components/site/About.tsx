import { Boxes, Clapperboard, Laugh, Presentation, TestTube, Users } from "lucide-react";

const skills = [
  { icon: Clapperboard, title: "Edição 2D", text: "Cortes no ritmo, tipografia e efeitos 2D." },
  { icon: Boxes, title: "Elementos 3D", text: "Cenas e objetos em 3D misturados na edição." },
  { icon: Laugh, title: "Edições engraçadas", text: "Vídeos descontraídos, memes e zoeira." },
  { icon: Presentation, title: "Vídeos de apresentação", text: "Edições limpas pra explicar ideias." },
  { icon: TestTube, title: "Experimentos", text: "Testes de estilo e projetos pessoais." },
  { icon: Users, title: "Collabs", text: "Participações em collabs de edição." },
];

export function About() {
  return (
    <section id="sobre" className="relative mx-auto max-w-6xl px-5 py-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Sobre mim</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Edito vídeos <span className="text-gradient">por diversão</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Faço edição de vídeo como hobby. Gosto de abrir o editor sem pressa, testar
            estilos diferentes e ver até onde uma ideia pode ir. Cada projeto aqui nasceu
            de curiosidade, de um meme na cabeça ou de um convite pra participar de algo
            junto com outras pessoas.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Todos os trabalhos mostrados no site são projetos pessoais, experimentos e
            colaborações feitas por hobby — nada de trabalho para clientes.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {skills.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="surface-card group p-5 transition-all duration-500 hover:-translate-y-1 hover:glow-ring"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-secondary text-accent transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
