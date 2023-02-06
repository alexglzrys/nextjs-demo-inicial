import Head from 'next/head'
import styles from '../styles/Home.module.css'

/**
 * - El nombre de los componentes de página (nombre de la función) no tiene relación con el nombre del archivo que los contiene
 * - Los componentes de página se deben exportar por defecto
 * - El archivo de componente de página, debe estar en minúsculas
 * - El nombre del archivo del componente de página, se relaciona con el nombre de ruta - about.js -> /about
 */

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Bienvenidos a NextJS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
         <h2 className={styles.title}>Página <span className={styles.page}>Home</span></h2>
         <p className={styles.description}>Visitar la página de <a href="/about" className={styles.link}>About</a></p>
      </main>
    </>
  )
}
