/**
 * Conteúdo do portfólio.
 * Para adicionar um novo vídeo, basta incluir um objeto na lista `works`.
 * Preencha: id, title, description, date (opcional), thumbnail e videoUrl.
 * O `videoUrl` deve ser o link original do YouTube (vídeo normal ou Shorts).
 */
import thumb2d from "@/assets/thumb-2d.jpg";
import edit1pessoal from "@/assets/edit1pessoal.png";
import Aguarde from "@/assets/Aguarde.png";
import thumbApresentacao from "@/assets/thumb-apresentacao.jpg";
import thumbCollab1 from "@/assets/colab1.png";
import thumbCollab2 from "@/assets/colab2.png";
import thumbCollab3 from "@/assets/colab3.png";

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
    id: "A preencher",
    title: "A preencher",
    description:
      "Edit curta com elementos 3D, utilizando a musica: Perdoa por tudo vida do Veigh.",
    date: "12 de março, 2023",
    thumbnail: edit1pessoal,
    videoUrl: "https://youtube.com/shorts/klJJRlsRW8c",
  },
  {
    id: "A preencher",
    title: "A preencher",
    description:
      "Estudo de transições suaves e masking, testando estilos diferentes no mesmo vídeo.",
    date: "2026",
    thumbnail: Aguarde,
    videoUrl: "#",
  },
  {
    id: "A preencher",
    title: "A preencher",
    description:
      "Aquele vídeo feito só pela diversão: memes, efeitos exagerados e muito corte rápido.",
    date: "2025",
    thumbnail: Aguarde,
    videoUrl: "#",
  },
  {
    id: "A preencher",
    title: "A preencher",
    description:
      "Edição mais limpa e organizada, pensada pra apresentar uma ideia de forma clara.",
    date: "2025",
    thumbnail: Aguarde,
    videoUrl: "#",
  },
  {
    id: "A preencher",
    title: "A preencher",
    description:
      "Minha parte em uma collab de edição feita junto com outras pessoas da comunidade.",
    date: "2025",
    thumbnail: Aguarde,
    videoUrl: "#",
  },
  {
    id: "A preencher",
    title: "A preencher",
    description:
      "Experimento de edição no ritmo da música, com tipografia animada e transições rápidas.",
    date: "2024",
    thumbnail: Aguarde,
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
    id: "Collab 1 - Team Extreme",
    name: "Collab 1 - Team Extreme",
    participants: "Eu + 1 Amigo",
    myRole: "Fiz a primeira parte da collab, introduzindo na edit, com elementos 3D, tipografia, etc, tudo no ritmo da musica.",
    thumbnail: thumbCollab1,
    videoUrl: "https://www.youtube.com/watch?v=vlry_WccJYM&list=RDvlry_WccJYM&start_radio=1",
  },
  {
    id: "Collab 2 - Team Extreme",
    name: "Collab 2 - Team Extreme",
    participants: "Eu + 1 Amigo",
    myRole: "Fiz a primeira parte do Vídeo, com uma edição suave, introduzindo, com elementos 3D e transições cleans.",
    thumbnail: thumbCollab2,
    videoUrl: "https://www.youtube.com/watch?v=96SBOvbeS20",
  },
  {
    id: "Collab 3 - Com amigo",
    name: "Eu + 1 Amigo",
    participants: "Eu + 1 Amigo",
    myRole: "Fiz as segunda parte do Vídeo, com uma edição suave, 3D e transições cleans.",
    thumbnail: thumbCollab3,
    videoUrl: "https://www.youtube.com/watch?v=CeIAcAhAaHQ",
  },
];

export const socials = [
  { label: "Instagram", handle: "@guuszz.editor", url: "https://www.instagram.com/guuszz.editor?igsh=MTdqZjFvMWlhNTR5Yg%3D%3D&utm_source=qr" },
  { label: "YouTube", handle: "@guuszzz", url: "https://www.youtube.com/@guuszzz/videos" },
  { label: "TikTok", handle: "@guuszz.editor", url: "https://www.tiktok.com/@guuszz.editor?_r=1&_t=ZS-98dzpF60CXd" },
  { label: "Discord", handle: "guuszz."},
  { label: "E-mail", handle: "guuszz.editor@gmail.com"},
];
