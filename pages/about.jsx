import Head from "next/head";
import styles from "../styles/About.module.css";

export default function AboutPage() {
  return (
    <>
      {/* Componente para colocar metainformación en la cabecera de la página HTML */}
      <Head>
        <title>Acerca de</title>
      </Head>
      {/* Contenido principal de la página About */}
      <main className={styles.main}>
        <h2 className={styles.title}>
          Página <span className={styles.page}>About</span>
        </h2>
        <p className={styles.description}>
          Visitar la página de{" "}
          <a href="/" className={styles.link}>
            Home
          </a>
        </p>
      </main>
    </>
  );
}