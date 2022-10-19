import styles from "./DvgBrojke.module.scss";
import React from "react";

const DvgBrojke = () => {

  React.useEffect(() => {
    const counters = document.querySelectorAll('.value');
    const speed = 200;

    counters.forEach(counter => {
      const animate = () => {
        const value = +counter.getAttribute('number');
        const data = +counter.innerText;

        const time = value / speed;
        if (data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        } else {
          counter.innerText = value;
        }

      }

      animate();
    });
  }, [])



  return (
    <div className={styles.dvgBrojke}>
      <div className={styles.dvgBrojkeTitle}>
        <h2>DVG Company</h2>
        <h3>u brojkama</h3>
        <div className={styles.line}></div>
      </div>

      <div className={styles.dvgBrojkeNumbers}>
        <div className={styles.dvgBrojkeNumberContainer}>
          <div className={styles.dvgBorder}>
            <div className={styles.firstBox}>
              <h3 className="value" number="3000">
                0
              </h3><p>m²</p>
            </div>
            <p>Magacinskog prostora</p>
          </div>
        </div>
        <div className={styles.dvgBrojkeNumberContainer}>
          <div className={styles.dvgBorder}>
            <h3 className="value" number="20">
              0</h3>
            <p>Vozila</p>
          </div>
        </div>
        <div className={styles.dvgBrojkeNumberContainer}>
          <div className={styles.dvgBorder}>
            <h3 className="value" number="8">
              0</h3>
            <p>Komercijalista</p>
          </div>
        </div>
        <div className={styles.dvgBrojkeNumberContainer}>
          <div className={styles.dvgBorder}>
            <h3 className="value" number="170">
              0</h3>
            <p>Brendova</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DvgBrojke;
