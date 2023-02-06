import Link from "next/link";
import Head from "next/head";
import styles from "@/styles/About.module.css";
import { MainLayout } from "@/components/layouts/MainLayout";

export default function ContactPage() {
  return (
    <MainLayout>
      {/* Componente para colocar metainformación en la cabecera de la página HTML */}
      <Head>
        <title>Contáctanos</title>
        <meta name="description" content="Muestra información de contacto" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Contenido publico y estático (sin procesar) se coloca dentro de la carpeta public - su acceso es a través de / */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className={styles.title}>
        Página de <span className={styles.page}>Contacto</span>
      </h2>
      <p className={styles.description}>
        Visitar la página de{" "}
        <Link href="/" className={styles.link}>
          Home
        </Link>
      </p>
    </MainLayout>
  );
}
