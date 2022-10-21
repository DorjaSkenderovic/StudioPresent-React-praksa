import React,{ useEffect, useMemo, useRef, useState } from "react";
import styles from "./FrontpageIntro.module.scss";
import AOS from "aos";

import "aos/dist/aos.css";
const FrontpageIntro = () => {
  const scrollToSection = () => {
    document.querySelector("#aboutDVG").scrollIntoView({ behavior: "smooth" });
  };
  const parallax = useRef(null);
  const useIsInViewport = (ref) => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting)
        ),
      []
    );
   
    
    useEffect(() => {
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);

    return isIntersecting;
  };
  const isVisible = useIsInViewport(parallax);
  const [inViewPort, setInViewPort] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setInViewPort(true);
      return;
    }
  }, [isVisible]);

  useEffect(() => {
    if (inViewPort) {
      AOS.init({
        duration: 2000
      });
    }
  }, [inViewPort]);

  return (
    <div className={styles.intro}>
      <div className={styles.videoIntro}>
        <img
          src={require("../../assets/Video.png")}
          alt="Dvg Company Video"
          className={styles.video}
        />
        <button onClick={scrollToSection}>
          <svg
            className={styles.circleSvg}
            width="58"
            height="57"
            viewBox="0 0 58 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M29 52.25C42.1168 52.25 52.75 41.6168 52.75 28.5C52.75 15.3832 42.1168 4.75 29 4.75C15.8832 4.75 5.25 15.3832 5.25 28.5C5.25 41.6168 15.8832 52.25 29 52.25Z"
              stroke="#F2F2F2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className={styles.arrow}
              d="M19.5 28.5L29 38L38.5 28.5"
              stroke="#F2F2F2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className={styles.arrow}
              d="M29 19V38"
              stroke="#F2F2F2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className={styles.aboutDVG} id="aboutDVG">
        <img
          src={require("../../assets/DvgBuilding.png")}
          alt="Dvg building"
          className={styles.aboutIMG}
        />
        <div className={styles.about}>
          <div className={styles.aboutTitle}>
            <div className={styles.title}>DVG Company</div>
            <div className={styles.line}> </div>

            <div className={styles.subTitle}>
              <h3> Veleprodaja i maloprodaja kozmetike i kućne hemije </h3>
            </div>
            <hr />
          </div>
          <div className={styles.description}>
            <p>
              DVG Company d.o.o. je trgovinsko preduzeće osnovano 2008. godine u
              Subotici. Prvenstvena delatnost kompanije je veleprodaja kozmetike
              i kućne hemije. U potpunosti je u privatnom vlasništvu, sa
              sedištem u Subotici. Tu se nalazi distrubutivni centar i poslovne
              prostorije, sa ukupno 3000m2 magacinskog prostora koji zadovoljava
              sve segmente u pogledu smeštaja, čuvanja i plasiranja robe.
            </p>
            <button className={styles.aboutUsBtn}>Saznajte više o nama</button>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in-up" data-aos-anchor-placement="center" ref={parallax}>
        <img
          src={require("../../assets/Distribucija.png")}
          alt="Pouzdana distribucija"
          className={styles.banner}
        />
      </div>
      <div className={styles.usSection}>
        <a href="#">
          <div className={styles.card}>
            <img src={require("../../assets/Partner.png")} alt="Naš partner" />
            <p>Postanite naš partner</p>
            <div className={styles.line}></div>
          </div>
        </a>
        <a href="#">
          <div className={styles.card}>
            <img
              src={require("../../assets//Proizvodi.png")}
              alt="Naši proizvodi"
            />
            <p>Naši proizvodi</p>
            <div className={styles.line}></div>
          </div>
        </a>
        <a href="#">
          <div className={styles.card}>
            <img
              src={require("../../assets/Uvoz.png")}
              alt="Uvoz iz Mađarske"
            />
            <p>Uvoz iz Mađarske</p>
            <div className={styles.line}></div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default FrontpageIntro;
