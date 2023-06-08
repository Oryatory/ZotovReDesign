import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import { useEffect } from "react";
import { handlePrevSibling } from "../../helpers/handlePrevSibling";
import { handleSlideChange } from "../../helpers/handleSlideChange";
import { slides } from "../../data/slides";
import SlideTitle from "./SlideTitle";
import SlideDate from "./SlideDate";

const Carousel = () => {
  SwiperCore.use([Navigation, Autoplay]);

  useEffect(() => {
    handlePrevSibling();
  }, []);

  return (
    <div className="swiper__container">
      <Swiper
        slidesPerView={7}
        style={{ transform: "scale(0.8)" }}
        centeredSlides
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        loop={true}
        onAutoplay={handlePrevSibling}
        autoplay
      >
        {slides.map((slide) => {
          const { image, title, date } = slide;
          return (
            <SwiperSlide key={image}>
              <SlideTitle title={title} />

              <div className="slide__image">
                <img src={image} alt="" />
              </div>
              <SlideDate date={date} />
            </SwiperSlide>
          );
        })}
        {slides.map((slide) => {
          const { image, title, date } = slide;
          return (
            <SwiperSlide key={image}>
              <SlideTitle title={title} />
              <div className="slide__image">
                <img src={image} alt="" />
              </div>
              <SlideDate date={date} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="buttons__container">
        <button
          className="swiper-button-prev"
          onClick={handleSlideChange}
        ></button>
        <button
          className="swiper-button-next"
          onClick={handleSlideChange}
        ></button>
      </div>
    </div>
  );
};

export default Carousel;
