import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerUpContainer}>
        <div className={styles.footerUp}>
          <div className={styles.footerLogo}>
            <img src={require("../../assets/FooterLogo.png")} alt="DVG Logo" />
          </div>
          <div className={styles.footerMidLeft}>
            <div className={styles.title}>
              <h2>d.v.g company</h2>
            </div>
            <div className={styles.address}>
              <img src={require("../../assets/Frame1.png")} alt="addresssvg" />
              <div className={styles.addressText}>
                <p>Čantavirski put bb </p> <p>24000 Subotica, Srbija</p>
              </div>
            </div>
            <div className={styles.telephone}>
              <img
                src={require("../../assets/Vector2.png")}
                alt="telephone svg"
              />
              <div className={styles.telephoneText}>
                <a href="#"> +381 24 568 555</a>
              </div>
            </div>
            <div className={styles.mail}>
              <img src={require("../../assets/Frame2.png")} alt="mailSvg" />
              <div className={styles.mailText}>
                <a href="#"> office@dvgcompany.com</a>
              </div>
            </div>
          </div>
          <div className={styles.footerMidRight}>
            <ul>
              <li>
                <a href="#"> o nama</a>
              </li>
              <li>
                <a href="#">dvg </a>
              </li>
              <li>
                <a href="#"> proizvodi</a>
              </li>
              <li>
                <a href="#">brendovi</a>
              </li>
              <li>
                <a href="#">distribucija </a>
              </li>
              <li>
                <a href="#"> saradnja</a>
              </li>
              <li>
                <a href="#"> novosti</a>
              </li>
              <li>
                <a href="#"> kontakt</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerRight}>
            <div className={styles.title}>
              <p>Pratite nas:</p>
            </div>
            <div className={styles.icons}>
              <img src={require("../../assets/Vector4.png")} alt="" />
              <img src={require("../../assets/Vector5.png")} alt="" />
              <img src={require("../../assets/Frame3.png")} alt="" />
              <img src={require("../../assets/Frame4.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerDown}>
        <div className={styles.copyText}>
          <p>
            Copyright © 2021 DVG Company, Subotica d.o.o. Sva prava zadržana.
          </p>
        </div>
        <div className={styles.footerUslovi}>
          <a href="#">Privatnost podatka </a>
          <a href="#">Uslovi korišćenja</a>
        </div>
        <div className={styles.poweredBy}>
          <p>
            Powered by:<a href="#">StudioPresent</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
