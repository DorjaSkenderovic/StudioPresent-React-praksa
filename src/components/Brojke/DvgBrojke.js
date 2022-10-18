import styles from "./DvgBrojke.module.scss";

const DvgBrojke = () => {
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
            <h3>
              3000<span>m²</span>
            </h3>
            <p>Magacinskog prostora</p>
          </div>
        </div>
        <div className={styles.dvgBrojkeNumberContainer}>
          <div className={styles.dvgBorder}>
            <h3>20</h3>
            <p>Vozila</p>
          </div>
        </div>
        <div className={styles.dvgBrojkeNumberContainer}>
          <div className={styles.dvgBorder}>
            <h3>8</h3>
            <p>Komercijalista</p>
          </div>
        </div>
        <div className={styles.dvgBrojkeNumberContainer}>
          <div className={styles.dvgBorder}>
            <h3>170</h3>
            <p>Brendova</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DvgBrojke;
