import Link from "next/link";
import Head from "next/head";
import { MainLayout } from "@/components/layouts/MainLayout";
import styles from "@/styles/About.module.css";

export default function PricingPage() {
  return (
    <MainLayout>
      <Head>
        <title>Pricing</title>
      </Head>
      <h2 className={styles.title}>
        Página de <span className={styles.page}>Precios</span>
      </h2>
      {/* 
          NextJS hace uso de static side rendering en la mayoría de los escenarios
          para ello es importante hacer uso de su componente Link, para que cargue en memoria el contenido de las páginas asociadas con el enlace
          Se puede seguir usando <a>, pero esto hace un full refresh (request) de la página - (esto es recomendado para pàginas externas)
         */}
      <p className={styles.description}>
        Visitar la página de{" "}
        <Link href="/" className={styles.link}>
          Home
        </Link>
      </p>
    </MainLayout>
  );
}
