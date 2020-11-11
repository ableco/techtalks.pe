import { GetStaticProps } from "next";
import { Main } from "../components/main";
import { Nav } from "../components/nav";
import marked from "marked";
import fs from "fs";
import { promisify } from "util";
import { resolve } from "path";

type CoCPageProps = { html: string };

const readFile = promisify(fs.readFile);

export default function CoCPage({ html }: CoCPageProps) {
  return (
    <Main className="pb-12">
      <Nav links={[{ href: "/", content: "Inicio" }]} />
      <section className="container max-w-screen-md mx-auto px-4">
        <article className="prose md:prose-lg lg:prose-xl" dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    </Main>
  );
}

export const getStaticProps: GetStaticProps<CoCPageProps> = async () => {
  const md = await readFile(resolve("src/content/coc.md"), "utf-8");
  const html = marked(md);
  return { props: { html } };
};
