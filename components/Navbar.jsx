import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";

// Los componentes tradicionales de React, pueden o no ser exportarse por defecto
// NextJS ofrece trabajar con estilos CSS en JS (JSX) - o lo recomendado hacer uso de módulos de CSS
// Impportar estilos globales solo se puede hacer directamente dentro del archivo _app.js

// Arreglo con opciones de menú
const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <div className={styles["Navbar-container"]}>
        {menuItems.map((item, index) => (
          <ActiveLink href={item.href} text={item.text} key={index} />
        ))}
      </div>
    </nav>
  );
};
