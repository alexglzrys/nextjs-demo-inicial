import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";

// Los componentes tradicionales de React, pueden o no ser exportarse por defecto
// NextJS ofrece trabajar con estilos CSS en JS (JSX) - o lo recomendado hacer uso de módulos de CSS
// Impportar estilos globales solo se puede hacer directamente dentro del archivo _app.js

export const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <div className={styles["Navbar-container"]}>
        <ActiveLink href="/" text="Home" />
        <ActiveLink href="/about" text="About" />
        <ActiveLink href="/contact" text="Contact" />
      </div>
    </nav>
  );
};
