import React from 'react';
import styles from './Manufacturers.module.scss'

const Manufacturers = () => {
    return (
        <div className={styles.manufacturers}>
                <p className={styles.title}>Istaknuti brendovi za koje radimo distribuciju</p>
            <div className={styles.brands}>
                <div className={styles.brand}>
                    <img src={require("../../assets/dove.png")} alt="brand logo" className="brandImage" />
                    <p className="brandTitle">Dove</p>
                </div>
                <div className={styles.brand}>
                    <img src={require("../../assets/nivea.png")} alt="brand logo" className="brandImage" />
                    <p className="brandTitle">Nivea</p>
                </div>
                <div className={styles.brand}>
                    <img src={require("../../assets/palmolive.png")} alt="brand logo" className="brandImage" />
                    <p className="brandTitle">Palmolive</p>
                </div>
                <div className={styles.brand}>
                    <img src={require("../../assets/vanish.png")} alt="brand logo" className="brandImage" />
                    <p className="brandTitle">Vanish</p>
                </div>
                <div className={styles.brand}>
                    <img src={require("../../assets/ajax.png")} alt="brand logo" className="brandImage" />
                    <p className="brandTitle">Ajax</p>
                </div>
                <div className={styles.brand}>
                    <img src={require("../../assets/cif.png")} alt="brand logo" className="brandImage" />
                    <p className="brandTitle">Cif</p>
                </div>
            </div>
                <button className={styles.brandBtn}>Svi brendovi u našem portfoliju</button>
        </div>
    );
};

export default Manufacturers;