import React from 'react';
import styles from './Products.module.scss'

const Products = () => {
    return (
        <div className={styles.ourProducts}>
            <div className="dvgFiveTitle">
                <h2>Naši proizvodi</h2>
            </div>
            <div className="dvgFiveDescription">
                Naše proizvode DVG Cosmetics odlikuje visok kvalitet kojim se dobija
                kompletna nega lica I tela. Uspeli smo da uskladimo kvalitet i cenu,
                što su prepoznali i našI kupci.
            </div>
            <div className="dvgFiveProducts">
                <div className="product">
                    <div className="productImage">
                        <img src={require("../../assets/Kesa.png")} alt="Kesa za smece" />
                    </div>
                    <div className="productTitle">Kese i folije</div>
                </div>
                <div className="product">
                    <div className="productImage">
                        <img src={require("../../assets/ZaKuhinju.png")} alt="Zica za kuhinju" />
                    </div>
                    <div className="productTitle">Za kuhinju</div>
                </div>
                <div className="product">
                    <div className="productImage">
                        <img src={require("../../assets/Ubrus.png")} alt="Ubrus" />
                    </div>
                    <div className="productTitle">Ubrusi i toalet papiri</div>
                </div>
                <div className="product">
                    <div className="productImage">
                        <img src={require("../../assets/Kozmetika.png")} alt="Kozmetika" />
                    </div>
                    <div className="productTitle">Kozmetika</div>
                </div>
                <div className="product">
                    <div className="productImage">
                        <img src={require("../../assets/Kanta.png")} alt="Plasticna kanta" />
                    </div>
                    <div className="productTitle">Plastične Kante</div>
                </div>
            </div>
        </div>


    );
};

export default Products;