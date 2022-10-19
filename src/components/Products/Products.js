import React from "react";
import styles from "./Products.module.scss";
import logoVector from "../../assets/VectorLogo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import { Pagination, Navigation } from "swiper";

const Products = () => {
  return (
    <div className={styles.ourProducts}>
      <p className={styles.title}>Naši proizvodi</p>
      <hr />
      <p className={styles.description}>
        Naše proizvode DVG Cosmetics odlikuje visok kvalitet kojim se dobija
        kompletna nega lica I tela. Uspeli smo da uskladimo kvalitet i cenu, što
        su prepoznali i naši kupci.
      </p>
      <div className={styles.products}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper">
          <a href="#">
            <SwiperSlide className={styles.product} key="0">
              <img
                src={require("../../assets/Kesa.png")}
                alt="Kesa za smece"
                className={styles.productImg}
              />
              <p className={styles.productTitle}>Kese i folije</p>
              <div className={styles.line}> </div>
            </SwiperSlide>
          </a>
          <a href="#">
            <SwiperSlide className={styles.product} key="1">
              <img
                src={require("../../assets/ZaKuhinju.png")}
                alt="Zica za kuhinju"
                className={styles.productImg}
              />
              <p className={styles.productTitle}>Za kuhinju</p>
              <div className={styles.line}> </div>
            </SwiperSlide>
          </a>
          <a href="#">
            <SwiperSlide className={styles.product} key="2">
              <img
                src={require("../../assets/Ubrus.png")}
                alt="Ubrus"
                className={styles.productImg}
              />
              <p className={styles.productTitle}>Ubrusi i toalet papiri</p>
              <div className={styles.line}> </div>
            </SwiperSlide>
          </a>
          <a href="#">
            <SwiperSlide className={styles.product} key="3">
              <img
                src={require("../../assets/Kozmetika.png")}
                alt="Kozmetika"
                className={styles.productImg}
              />
              <p className={styles.productTitle}>Kozmetika</p>
              <div className={styles.line}> </div>
            </SwiperSlide>
          </a>
          <a href="#">
            <SwiperSlide className={styles.product} key="4">
              <img
                src={require("../../assets/Kanta.png")}
                alt="Plasticna kanta"
                className={styles.productImg}
              />
              <p className={styles.productTitle}>Plastične Kante</p>
              <div className={styles.line}> </div>
            </SwiperSlide>
          </a>
        </Swiper>
      </div>
      <div className={styles.wrapper}>
        <img src={logoVector} alt="logo" className={styles.logo} />
      </div>
    </div>
  );
};

export default Products;
