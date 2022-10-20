import React, { useState, useEffect } from "react";
import styles from "./Products.module.scss";
import logoVector from "../../assets/VectorLogo.png";
import ProductsDesktop from "./ProductsDesktop";
import ProductsMobile from "./ProductsMobile";

const Products = () => {

  function getWindowDimensions() {
    const { innerWidth: width} = window;
    return {
      width
    };
  }
  
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }
  const { width } = useWindowDimensions();
    return (
      <div className={styles.ourProducts}>
        <p className={styles.title}>Naši proizvodi</p>
        <hr />
        <p className={styles.description}>
          Naše proizvode DVG Cosmetics odlikuje visok kvalitet kojim se dobija
          kompletna nega lica I tela. Uspeli smo da uskladimo kvalitet i cenu, što
          su prepoznali i naši kupci.
        </p>
        {width > 650 ?  <ProductsDesktop /> : <ProductsMobile />}
        <div className={styles.wrapper}>
          <img src={logoVector} alt="logo" className={styles.logo} />
        </div>
      </div>
    );
  };

  export default Products;
