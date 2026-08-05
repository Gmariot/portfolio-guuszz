/**
 * Conteúdo do portfólio.
 * Para adicionar um novo vídeo, basta incluir um objeto na lista `works`.
 * Preencha: id, title, description, date (opcional), thumbnail e videoUrl.
 * O `videoUrl` deve ser o link original do YouTube (vídeo normal ou Shorts).
 */
import thumb2d from "@/assets/thumb-2d.jpg";
import thumb3d from "@/assets/thumb-3d.jpg";
import thumbFun from "@/assets/thumb-fun.jpg";
import thumbApresentacao from "@/assets/thumb-apresentacao.jpg";
import thumbCollab from "@/assets/thumb-collab.jpg";

export type Work = {
  id: string;
  title: string;
  description: string;
  date?: string;
  thumbnail: string;
  videoUrl: string;
};

/**
 * Lista de projetos/vídeos.
 * Ordene do mais recente para o mais antigo — a seção exibe exatamente nessa ordem.
 */
export const works: Work[] = [
  {
    id: "edit-3d-01",
    title: "Intro com Elementos 3D",
    description:
      "Teste misturando cenas em 3D com composição 2D pra criar uma abertura mais chamativa.",
    date: "2026",
    thumbnail: thumb3d,
    videoUrl: "https://youtube.com/shorts/klJJRlsRW8c",
  },
  {
    id: "edit-2d-02",
    title: "Experimento de Transições",
    description:
      "Estudo de transições suaves e masking, testando estilos diferentes no mesmo vídeo.",
    date: "2026",
    thumbnail: thumb2d,
    videoUrl: "#",
  },
  {
    id: "fun-01",
    title: "Edit Zoeira #1",
    description:
      "Aquele vídeo feito só pela diversão: memes, efeitos exagerados e muito corte rápido.",
    date: "2025",
    thumbnail: thumbFun,
    videoUrl: "#",
  },
  {
    id: "apresentacao-01",
    title: "Vídeo de Apresentação",
    description:
      "Edição mais limpa e organizada, pensada pra apresentar uma ideia de forma clara.",
    date: "2025",
    thumbnail: thumbApresentacao,
    videoUrl: "#",
  },
  {
    id: "collab-01",
    title: "Collab — Parte 03",
    description:
      "Minha parte em uma collab de edição feita junto com outras pessoas da comunidade.",
    date: "2025",
    thumbnail: thumbCollab,
    videoUrl: "#",
  },
  {
    id: "edit-2d-01",
    title: "Edit 2D — Ritmo e Tipografia",
    description:
      "Experimento de edição no ritmo da música, com tipografia animada e transições rápidas.",
    date: "2024",
    thumbnail: thumb2d,
    videoUrl: "#",
  },
];

export type Collab = {
  id: string;
  name: string;
  participants: string;
  myRole: string;
  thumbnail: string;
  videoUrl: string;
};

export const collabs: Collab[] = [
  {
    id: "collab-comunidade",
    name: "Collab da Comunidade",
    participants: "Eu + 5 editores (adicione os @ aqui)",
    myRole: "Fiz a parte 03: edição 2D no ritmo da música e transição de saída.",
    thumbnail: thumbCollab,
    videoUrl: "#",
  },
  {
    id: "collab-amigos",
    name: "Collab com Amigos",
    participants: "Eu + 2 amigos (adicione os nomes aqui)",
    myRole: "Cuidei da abertura e dos elementos 3D usados no meio do vídeo.",
    thumbnail: thumb3d,
    videoUrl: "#",
  },
  {
    id: "collab-tema",
    name: "Collab Temática",
    participants: "Grupo de editores online (placeholder)",
    myRole: "Editei um trecho curto no estilo engraçado, com memes e efeitos.",
    thumbnail: thumbFun,
    videoUrl: "#",
  },
];

export const socials = [
  { label: "Instagram", handle: "@seu_usuario", url: "#" },
  { label: "YouTube", handle: "seu canal", url: "#" },
  { label: "TikTok", handle: "@seu_usuario", url: "#" },
  { label: "Discord", handle: "seu_usuario", url: "#" },
  { label: "E-mail", handle: "seuemail@exemplo.com", url: "#" },
];
