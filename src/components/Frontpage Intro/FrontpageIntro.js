import React from "react";
import styles from "./FrontpageIntro.module.scss";

const FrontpageIntro = () => {
    return (
        <div className={styles.intro}>
            <div className={styles.videoIntro}>
                <img src={require("../../assets/Video.png")} alt="Dvg Company Video" className={styles.video} />
                <img src={require("../../assets/arrow-down-circle.png")} alt="Arrow down circle" className={styles.circleImg} />
            </div>
            <div className={styles.aboutDVG}>
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
                        <button className={styles.aboutUsBtn}>Saznajte vise o nama</button>
                    </div>
                </div>
            </div>
            <img src={require("../../assets/Distribucija.png")} alt="Pouzdana distribucija" className={styles.banner} />

            <div className={styles.usSection}>
                <div>
                    <img src={require("../../assets/Partner.png")} alt="Nas partner" />
                    <h4>Postanite naš partner</h4>
                    <div className={styles.line}></div>
                </div>
                <div>
                    <img src={require("../../assets//Proizvodi.png")} alt="Nasi proizvodi" />
                    <h4>Naši proizvodi</h4>
                    <div className={styles.line}></div>
                </div>
                <div>
                    <img src={require("../../assets/Uvoz.png")} alt="Uvoz iz madjarske" />
                    <h4>Uvoz iz mađarske</h4>
                    <div className={styles.line}></div>
                </div>
            </div>
        </div>
    );
};

export default FrontpageIntro;