import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./HomeSlider.css";

import banner1 from "../../../Assets/Banner/banner_1.jpg";
import banner2 from "../../../Assets/Banner/banner_2.jpg";
import limited1 from "../../../Assets/LimitedEdition/limited-1.jpg";

const slides = [
  {
    id: 1,
    title: "Yeni Sezon Minimal Koleksiyon",
    subtitle: "Günlük kombinlerde sade ama iddialı parçalara odaklan.",
    cta: "Şimdi Keşfet",
    image: banner1,
  },
  {
    id: 2,
    title: "Sınırlı Sayıda Capsule Ürünler",
    subtitle: "Yalnızca online mağazada bulunan özel tasarımlar.",
    cta: "Koleksiyona Git",
    image: banner2,
  },
  {
    id: 3,
    title: "Urban Street Essentials",
    subtitle: "Konforlu kumaşlar, kusursuz kalıplar.",
    cta: "Mağazayı Gör",
    image: limited1,
  },
];

const HomeSlider = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="homeSlider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="homeSlider__swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="homeSlider__slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="homeSlider__content">
                <p>Qrp Store</p>
                <h1>{slide.title}</h1>
                <span>{slide.subtitle}</span>
                <Link to="/shop" onClick={scrollToTop}>
                  <button>{slide.cta}</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeSlider;

