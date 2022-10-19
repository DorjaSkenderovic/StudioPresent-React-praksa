import styles from "./DvgBrojke.module.scss";
import React from "react";

const DvgBrojke = () => {

  const increment = (n, counter, length = 4000) => {
    let start = Date.now()
    let end = start + length
    let interval = length / n;
    setInterval(() => {
      let time = Date.now()
      if (time < end) {
        let count = Math.floor((time - start) / interval)
        counter.textContent = count;
      } else {
        counter.textContent = n;
        clearInterval(this)
      };
    }, interval / 2);

  };

  React.useEffect(() => {
    const counters = document.querySelectorAll('.value');
    counters.forEach(counter => {
      increment(counter.getAttribute('number'), counter)
    })
  },[])

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
