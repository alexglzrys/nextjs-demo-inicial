import { Navbar } from "@/components/Navbar";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/About.module.css";

export default function AboutPage() {
  return (
    <>
      {/* Componente para colocar metainformación en la cabecera de la página HTML */}
      <Head>
        <title>Acerca de</title>
        <meta
          name="description"
          content="Muestra información acerca del contenido de este sitio Web"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="nextjs, react, javascript" />
        {/* Contenido publico y estático (sin procesar) se coloca dentro de la carpeta public - su acceso es a través de / */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {/* Contenido principal de la página About */}
      <main className={styles.main}>
        <h2 className={styles.title}>
          Página <span className={styles.page}>About</span>
        </h2>
        <p className={styles.description}>
          Visitar la página de{" "}
          <Link href="/" className={styles.link}>
            Home
          </Link>
        </p>
      </main>
    </>
  );
}