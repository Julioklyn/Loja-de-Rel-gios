import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Topo from "@/components/Topo";
import Capa from "@/components/Capa";
import Produtos from "@/Produtos";
import Sobre from "@/components/Sobre";
import Contato from "@/components/Contato";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="loja de Relógios" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Topo />
      <section>
        <Capa />
      </section>
      <section>
        <Produtos />
      </section>

      <section>
        <Sobre />
      </section>

      <section>
        <Contato />
      </section>
    </>
  );
}
