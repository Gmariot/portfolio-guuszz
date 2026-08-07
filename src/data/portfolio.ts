/**
 * Conteúdo do portfólio.
 * Para adicionar um novo vídeo, basta incluir um objeto na lista `works`.
 * Preencha: id, title, description, date (opcional), thumbnail e videoUrl.
 * O `videoUrl` deve ser o link original do YouTube (vídeo normal ou Shorts).
 */
import edit1 from "@/assets/edit1.png";
import edit2 from "@/assets/edit2.png";
import edit3 from "@/assets/edit3.png";
import edit4 from "@/assets/edit4.png";
import edit5 from "@/assets/edit5.png";
import edit6 from "@/assets/edit6.png";
import Aguarde from "@/assets/Aguarde.png";
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
    id: "1",
    title: "1º - Edit 3D - Pessoal",
    description:
      "Edit curta com elementos 3D, utilizando a musica: Perdoa por tudo vida do Veigh.",
    date: "12 de março, 2023",
    thumbnail: edit1,
    videoUrl: "https://youtube.com/shorts/klJJRlsRW8c",
  },
  {
    id: "2",
    title: "Trabalho da Faculdade",
    description:
      "Trabalho da faculdade onde necessitava apresentar um software, onde usei minhas técnicas de edição",
    date: "2023",
    thumbnail: edit2,
    videoUrl: "/videos/trabalho ediçao.mp4",
  },
  {
    id: "3",
    title: "Minha parte para uma Collab - Edit",
    description:
      "Edição com transições cleans, no meu estilo, para uma collab",
    date: "Dez, 2023",
    thumbnail: edit3,
    videoUrl: "/videos/guuszz part.mp4",
  },
  {
    id: "4",
    title: "Edit não finalizada",
    description:
      "Uma edit que não foi para o ar, mas gostei dos efeitos que coloquei",
    date: "Fev, 2025",
    thumbnail: edit4,
    videoUrl: "/videos/papapazi neee.mp4",
  },
  {
    id: "5",
    title: "2º - Edit 3D - Pessoal",
    description:
      "Uma edit pessoal com elementos 3D, com transições avançadas, e efeitos bem trabalhados, uma das minhas melhores edições",
    date: "Março, 2025",
    thumbnail: edit5,
    videoUrl: "/videos/se enrosca.mp4",
  },
  {
    id: "6",
    title: "3º - Edit 3D - Pessoal",
    description:
      "Outra edit pessoal minha, quando estava iniciando a mexer com elementos 3D",
    date: "2022",
    thumbnail: edit6,
    videoUrl: "/videos/è o pose.mp4",
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
