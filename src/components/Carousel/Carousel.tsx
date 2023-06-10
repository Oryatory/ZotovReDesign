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

    const activeBullet = document.querySelector(
      ".swiper-pagination-bullet-active"
    ) as HTMLElement;
    const activeBulletIndex = parseInt(activeBullet?.dataset?.index || "1");
    // console.log(activeBullet?.dataset.index);

    paginationBullets.forEach((bullet) => {
      const bulletElement = bullet as HTMLElement;
      const bulletElementIndex = parseInt(bulletElement.dataset.index || "1");

      const indexDifference = Math.abs(activeBulletIndex - bulletElementIndex);
      // const multiplyIndex = Math.abs(slides.length - indexDifference);
      // console.log(multiplyIndex);

      // bulletElement.style.width = `${multiplyIndex * 7.5}px`;

      if (indexDifference < 2) {
        bulletElement.style.width = "60px";
      } else if (indexDifference < 3) {
        bulletElement.style.width = "30px";
      } else if (indexDifference < 4) {
        bulletElement.style.width = "20px";
      } else if (indexDifference < 5) {
        bulletElement.style.width = "15px";
      } else if (indexDifference < 6) {
        bulletElement.style.width = "12px";
      } else {
        bulletElement.style.width = "10px";
      }
    });
  };

  const paginationBulletRender = (index: number) => {
    return `
      <span class="swiper-pagination-bullet" data-index="${index + 1}"></span>
    `;
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
        loop
        onSlideChangeTransitionStart={handleBullets}
        loopedSlides={Math.ceil(slides.length / 2) - 2}
        pagination={{
          clickable: true,
          renderBullet: paginationBulletRender,
        }}
        onAutoplay={handlePrevSibling}
        autoplay
      >
        {slides.map((slide, index) => {
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
    </div>
  );
};

export default Carousel;
