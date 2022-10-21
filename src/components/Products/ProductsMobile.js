import React from "react";
import styles from "./Products.module.scss";

const ProductsMobile = () => {
  return (
    <div className={styles.products}>
      <a href="#">
        <img
          src={require("../../assets/Kesa.png")}
          alt="Kesa za smece"
          className={styles.productImg}
        />
        <div className={styles.descriptionContainer}>
          <p className={styles.productTitle}>Kese i folije</p>
          <div className={styles.line}> </div>
        </div>
      </a>
      <a href="#">
        <img
          src={require("../../assets/ZaKuhinju.png")}
          alt="Zica za kuhinju"
          className={styles.productImg}
        />
        <div className={styles.descriptionContainer}>
          <p className={styles.productTitle}>Za kuhinju</p>
          <div className={styles.line}> </div>
        </div>
      </a>
      <a href="#">
        <img
          src={require("../../assets/Ubrus.png")}
          alt="Ubrus"
          className={styles.productImg}
        />
        <div className={styles.descriptionContainer}>
          <p className={styles.productTitle}>Ubrusi i toalet papiri</p>
          <div className={styles.line}> </div>
        </div>
      </a>
      <a href="#">
        <img
          src={require("../../assets/Kozmetika.png")}
          alt="Kozmetika"
          className={styles.productImg}
        />
        <div className={styles.descriptionContainer}>
          <p className={styles.productTitle}>Kozmetika</p>
          <div className={styles.line}> </div>
        </div>
      </a>
      <a href="#">
        <img
          src={require("../../assets/Kanta.png")}
          alt="Plasticna kanta"
          className={styles.productImg}
        />
        <div className={styles.descriptionContainer}>
          <p className={styles.productTitle}>Plastične kante</p>
          <div className={styles.line}> </div>
        </div>
      </a>
      <a href="#">
        <img
          src={require("../../assets/osvezivac.png")}
          alt="Plasticna kanta"
          className={styles.productImg}
        />
        <div className={styles.descriptionContainer}>
          <p className={styles.productTitle}>Osveživači</p>
          <div className={styles.line}> </div>
        </div>
      </a>
    </div>
  );
};

export default ProductsMobile;
