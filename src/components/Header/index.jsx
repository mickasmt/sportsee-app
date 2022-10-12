import React from "react";
import logo from "assets/logo.svg";
import { Link } from "react-router-dom";
import styles from "styles/components/header.module.scss";

const links = [
  { name: "Accueil", url: "/" },
  { name: "Profil", url: "/" },
  { name: "Réglage", url: "/" },
  { name: "Communauté", url: "/" },
];

function Header() {
  return (
    <header>
      <Link to="/">
        <img className="header-logo" src={logo} alt="sportsee-logo" />
      </Link>

      <nav>
        {links.map((link) => (
          <Link className={styles.links} to={link.url} key={link.name}>
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
