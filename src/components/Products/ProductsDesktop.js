import React from 'react';
import styles from "./Products.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import { Pagination, Navigation } from "swiper";

const ProductsDesktop = () => {
    return (
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
          className="swiper">
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
              <p className={styles.productTitle}>Plastične kante</p>
              <div className={styles.line}> </div>
            </SwiperSlide>
            <SwiperSlide className={styles.product} key="5">
              <img
                src={require("../../assets/osvezivac.png")}
                alt="Plasticna kanta"
                className={styles.productImg}
              />
              <p className={styles.productTitle}>Osveživači</p>
              <div className={styles.line}> </div>
            </SwiperSlide>
          </a>
        </Swiper>
      </div>
    );
};

export default ProductsDesktop;