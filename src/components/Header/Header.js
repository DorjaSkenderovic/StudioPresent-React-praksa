import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.up}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.language}>
          <ul>
            <li>
              <a href="#" className={styles.active}>
                {" "}
                Srpski
              </a>
            </li>
            <li>
              <a href="#"> English</a>
            </li>
            <li>
              <a href="#"> Magyar</a>
            </li>
          </ul>
        </div>
      </div>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <h3>O NAMA</h3>
            <p>vizija za uspeh</p>
          </li>
          <li>
            <h3>DVG PROIZVODI</h3>
            <p>naši proizvodi</p>
          </li>
          <li>
            <h3>BRENDOVI</h3>
            <p>koje zasupamo</p>
          </li>
          <li>
            <h3>DISTRIBUCIJA</h3>
            <p>logistika i operativa</p>
          </li>
          <li>
            <h3>SARADNJA</h3>
            <p>proširenje ponude</p>
          </li>
          <li>
            <h3>NOVOSTI</h3>
            <p>aktuelnosti</p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
