import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Works } from "@/components/site/Works";
import { Collabs } from "@/components/site/Collabs";
import { Contact } from "@/components/site/Contact";

const title = "Portfólio | guuszz.editor";
const description =
  "Portfólio pessoal do Gustavo, mais conhecido com guuszz.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Works />
        <Collabs />
        <Contact />
      </main>
    </div>
  );
}
