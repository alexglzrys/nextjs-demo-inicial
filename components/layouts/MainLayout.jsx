import { Navbar } from "../Navbar";
import styles from './MainLayout.module.css'

// Layout ptincipal de la aplicación
// Se colocan todos los elementos que se repiten en todas las páginas que extienden de este Layout

export const MainLayout = ({ children }) => {
  return (
    <>
      {/* Invocar un componente personalizado de React */}
      <Navbar />
      {/* Contenido principal de la página */}
      <main className={styles.Main}>{children}</main>
    </>
  );
};
