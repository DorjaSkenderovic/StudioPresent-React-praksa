import styles from "./Footer.module.scss";
import facebook from "../../assets/Vector.svg";
import twitter from "../../assets/Vector2.svg";
import youtube from "../../assets/Vector3.svg";
import messenger from "../../assets/Vector4.svg";
import location from "../../assets/Lokacija.svg";
import telephone from "../../assets/Telefon.svg";
import mail from "../../assets/Mail.svg";

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
            <a
              href="https://goo.gl/maps/CmmmaytiKwTsBj1r7"
              target={"_blank"}
              rel={"noreferrer"}>
              <div className={styles.address}>
                <img src={location} alt="addresssvg" />
                <div className={styles.addressText}>
                  <p>Čantavirski put bb </p> <p>24000 Subotica, Srbija</p>
                </div>
              </div>
            </a>
            <a href="tel:+381-24-568-555">
              <div className={styles.telephone}>
                <img src={telephone} alt="telephone svg" />
                <div className={styles.telephoneText}>
                  <p> +381 24 568 555</p>
                </div>
              </div>
            </a>
            <a href="mailto:office@dvgcompany.com">
              <div className={styles.mail}>
                <img src={mail} alt="mailSvg" />
                <div className={styles.mailText}>
                  <p> office@dvgcompany.com</p>
                </div>
              </div>
            </a>
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
              <img src={facebook} alt="facebook logo" />
              <img src={twitter} alt="twitter logo" />
              <img src={youtube} alt="youtube logo" />
              <img src={messenger} alt="messenger logo" />
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
