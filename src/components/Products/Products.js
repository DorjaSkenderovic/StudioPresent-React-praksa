import React from 'react';
import styles from './Products.module.scss'
import leftArrow from "../../assets/left-arrow.svg"
import rightArrow from "../../assets/right-arrow.svg"
import logoVector from "../../assets/VectorLogo.png"
const Products = () => {
    return (
        <div className={styles.ourProducts}>
            <p className={styles.title}>Naši proizvodi</p>
            <hr />
            <p className={styles.description}>
                Naše proizvode DVG Cosmetics odlikuje visok kvalitet kojim se dobija kompletna nega lica I tela. Uspeli smo da uskladimo kvalitet i cenu, što su prepoznali i naši kupci.
            </p>
            <div className={styles.products}>
                <button>
                    <svg width="58" height="59" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.25 29.5C5.25 42.6168 15.8832 53.25 29 53.25C42.1168 53.25 52.75 42.6168 52.75 29.5C52.75 16.3832 42.1168 5.75 29 5.75C15.8832 5.75 5.25 16.3832 5.25 29.5Z" stroke="#BF0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M29 20L19.5 29.5L29 39" stroke="#bf0f0f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M38.5 29.5H19.5" stroke="#bf0f0f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </button>
                <div className={styles.product}>
                    <img src={require("../../assets/Kesa.png")} alt="Kesa za smece" className={styles.productImg} />
                    <p className={styles.productTitle}>Kese i folije</p>
                    <div className={styles.line}> </div>
                </div>
                <div className={styles.product}>
                    <img src={require("../../assets/ZaKuhinju.png")} alt="Zica za kuhinju" className={styles.productImg} />
                    <p className={styles.productTitle}>Za kuhinju</p>
                    <div className={styles.line}> </div>
                </div>
                <div className={styles.product}>
                    <img src={require("../../assets/Ubrus.png")} alt="Ubrus" className={styles.productImg} />
                    <p className={styles.productTitle}>Ubrusi i toalet papiri</p>
                    <div className={styles.line}> </div>
                </div>
                <div className={styles.product}>
                    <img src={require("../../assets/Kozmetika.png")} alt="Kozmetika" className={styles.productImg} />
                    <p className={styles.productTitle}>Kozmetika</p>
                    <div className={styles.line}> </div>
                </div>
                <div className={styles.product}>
                    <img src={require("../../assets/Kanta.png")} alt="Plasticna kanta" className={styles.productImg} />
                    <p className={styles.productTitle}>Plastične Kante</p>
                    <div className={styles.line}> </div>
                </div>
                <button>
                    <svg width="58" height="59" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M52.75 29.5C52.75 16.3832 42.1168 5.75 29 5.75C15.8832 5.75 5.25 16.3832 5.25 29.5C5.25 42.6168 15.8832 53.25 29 53.25C42.1168 53.25 52.75 42.6168 52.75 29.5Z" stroke="#BF0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M29 39L38.5 29.5L29 20" stroke="#BF0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19.5 29.5H38.5" stroke="#BF0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            <div className={styles.wrapper}>
                <img src={logoVector} alt="logo" className={styles.logo} />
            </div>
        </div>
    );
};

export default Products;