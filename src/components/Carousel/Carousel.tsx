import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { handlePrevSibling } from "../../helpers/handlePrevSibling";
import { handleSlideChange } from "../../helpers/handleSlideChange";
import { slides } from "../../data/slides";
import SlideTitle from "./SlideTitle";
import SlideDate from "./SlideDate";

const Carousel = () => {
  SwiperCore.use([Navigation, Autoplay, Pagination]);

  useEffect(() => {
    handlePrevSibling();
  }, []);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  const handleBullets = () => {
    const paginationBullets = [
      ...document.querySelectorAll(".swiper-pagination-bullet"),
    ];
    paginationBullets.forEach((bullet, index) => {
      const bulletElement = bullet as HTMLElement;
      if (
        bulletElement.classList.contains("swiper-pagination-bullet-active-main")
      ) {
        bulletElement.style.width = "160px";
      } else if (
        bulletElement.classList.contains(
          "swiper-pagination-bullet-active-next"
        ) ||
        bulletElement.classList.contains("swiper-pagination-bullet-active-prev")
      ) {
        bulletElement.style.width = "60px";
      } else if (
        bulletElement.classList.contains(
          "swiper-pagination-bullet-active-next-next"
        ) ||
        bulletElement.classList.contains(
          "swiper-pagination-bullet-active-prev-prev"
        )
      ) {
        bulletElement.style.width = "30px";
      } else {
        bulletElement.style.width = "20px";
      }
    });
  };

  return (
    <div className="swiper__container">
      <Swiper
        slidesPerView={windowWidth > 992 ? 7 : 1}
        style={{ transform: "scale(0.8)" }}
        centeredSlides
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        allowTouchMove={false}
        loop={true}
        onAutoplay={handlePrevSibling}
        onSlideChange={handleBullets}
        autoplay
        // pagination={{
        //   dynamicBullets: true,
        // }}
      >
        {slides.concat(slides).map((slide, index) => {
          const { image, title, date } = slide;
          return (
            <SwiperSlide key={index}>
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
      {/* <div className="swiper-pagination"></div> */}
    </div>
  );
};

export default Carousel;
