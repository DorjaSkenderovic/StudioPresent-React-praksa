import React, { useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.png";

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.up}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.language}>
          <ul>
            <li>
              <a href="#" className={styles.active} data-abbr="SR">
                <span> Srpski</span>
                <span className={styles.short}>sr</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span> English</span>
                <span className={styles.short}>en</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span> Magyar </span>
                <span className={styles.short}>hu</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.toggleButton} onClick={() => setActive(!active)}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
      <nav className={active ? styles.navbarMobile : styles.navbar}>
        <ul>
          <li>
            <h3>o nama</h3>
            <p>vizija za uspeh</p>
          </li>
          <li>
            <h3>dvg proizvodi</h3>
            <p>naši proizvodi</p>
          </li>
          <li>
            <h3>brendovi</h3>
            <p>koje zasupamo</p>
          </li>
          <li>
            <h3>distribucija</h3>
            <p>logistika i operativa</p>
          </li>
          <li>
            <h3>saradnja</h3>
            <p>proširenje ponude</p>
          </li>
          <li>
            <h3>novosti</h3>
            <p>aktuelnosti</p>
          </li>
          <li>
            <h3>kontakt</h3>
            <p>naši proizvodi</p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
