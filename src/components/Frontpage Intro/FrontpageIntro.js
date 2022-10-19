import React from "react";
import styles from "./FrontpageIntro.module.scss";

const FrontpageIntro = () => {

    return (
        <div className={styles.intro}>
            <div className={styles.videoIntro}>
                <img src={require("../../assets/Video.png")} alt="Dvg Company Video" className={styles.video} />
                {/* <img src={require("../../assets/arrow-down-circle.png")} alt="Arrow down circle" className={styles.circleImg} /> */}
                <button>
                    <svg className={styles.circleSvg} width="58" height="57" viewBox="0 0 58 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29 52.25C42.1168 52.25 52.75 41.6168 52.75 28.5C52.75 15.3832 42.1168 4.75 29 4.75C15.8832 4.75 5.25 15.3832 5.25 28.5C5.25 41.6168 15.8832 52.25 29 52.25Z" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path className={styles.arrow} d="M19.5 28.5L29 38L38.5 28.5" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path className={styles.arrow} d="M29 19V38" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            <div className={styles.aboutDVG} id="aboutDVG">
                <img src={require("../../assets/DvgBuilding.png")} alt="Dvg building" className={styles.aboutIMG} />
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
                            DVG Company d.o.o. je trgovinsko preduzeće osnovano 2008. godine
                            u Subotici. Prvenstvena delatnost kompanije je veleprodaja
                            kozmetike i kućne hemije. U potpunosti je u privatnom
                            vlasništvu, sa sedištem u Subotici. Tu se nalazi distrubutivni
                            centar i poslovne prostorije, sa ukupno 3000m2 magacinskog
                            prostora koji zadovoljava sve segmente u pogledu smeštaja,
                            čuvanja i plasiranja robe.
                        </p>
                        <button className={styles.aboutUsBtn}>Saznajte više o nama</button>
                    </div>
                </div>
            </div>
            <img src={require("../../assets/Distribucija.png")} alt="Pouzdana distribucija" className={styles.banner} />

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

                        <img src={require("../../assets//Proizvodi.png")} alt="Naši proizvodi" />
                        <p>Naši proizvodi</p>
                        <div className={styles.line}></div>
                    </div>
                </a>
                <a href="#">
                    <div className={styles.card}>
                        <img src={require("../../assets/Uvoz.png")} alt="Uvoz iz Mađarske" />
                        <p>Uvoz iz Mađarske</p>
                        <div className={styles.line}></div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default FrontpageIntro;