import React, {useState, useEffect} from "react";
import styles from "./Products.module.scss";
import logoVector from "../../assets/VectorLogo.png";
import ProductsDesktop from "./ProductsDesktop";

const Products = () => {

  console.log(window.innerWidth);

  return (
    <div className={styles.ourProducts}>
      <p className={styles.title}>Naši proizvodi</p>
      <hr />
      <p className={styles.description}>
        Naše proizvode DVG Cosmetics odlikuje visok kvalitet kojim se dobija
        kompletna nega lica I tela. Uspeli smo da uskladimo kvalitet i cenu, što
        su prepoznali i naši kupci.
      </p>
      <ProductsDesktop />
      <div className={styles.wrapper}>
        <img src={logoVector} alt="logo" className={styles.logo} />
      </div>
    </div>
  );
};

export default Products;
