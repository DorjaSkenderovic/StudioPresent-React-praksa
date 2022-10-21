import React from "react";
import styles from "./Products.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import { Pagination, Navigation } from "swiper";

const ProductsDesktop = () => {
  return (
    <div className={styles.products}>
      <svg
        width="58"
        height="59"
        viewBox="0 0 58 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="prev">
        <path
          d="M5.25 29.5C5.25 42.6168 15.8832 53.25 29 53.25C42.1168 53.25 52.75 42.6168 52.75 29.5C52.75 16.3832 42.1168 5.75 29 5.75C15.8832 5.75 5.25 16.3832 5.25 29.5Z"
          stroke="#BF0F0F"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M29 20L19.5 29.5L29 39"
          stroke="#bf0f0f"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M38.5 29.5H19.5"
          stroke="#bf0f0f"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
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
      <svg
        width="58"
        height="59"
        viewBox="0 0 58 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="next">
        <path
          d="M52.75 29.5C52.75 16.3832 42.1168 5.75 29 5.75C15.8832 5.75 5.25 16.3832 5.25 29.5C5.25 42.6168 15.8832 53.25 29 53.25C42.1168 53.25 52.75 42.6168 52.75 29.5Z"
          stroke="#BF0F0F"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M29 39L38.5 29.5L29 20"
          stroke="#BF0F0F"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.5 29.5H38.5"
          stroke="#BF0F0F"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default ProductsDesktop;
