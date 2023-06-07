import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { useSwiper } from "swiper/react";

const images = [
  "https://centrezotov.ru/wp-content/uploads/2023/04/logos-vystavka-1-884x650.jpg",
  "https://centrezotov.ru/wp-content/uploads/2023/05/rannyaya-multiplikacziya-konki-884x650.jpg",
  "https://centrezotov.ru/wp-content/uploads/2023/05/1920h650_lekcziya_-7-iyunya-884x650.png",
  "https://centrezotov.ru/wp-content/uploads/2022/12/mk-14.01-art-meditacziya-884x650.jpg",
  "https://centrezotov.ru/wp-content/uploads/2023/05/beat-film-festival-884x650.jpg",
  "https://centrezotov.ru/wp-content/uploads/2023/05/les_olympiades_dsc07529_r©shannabesson-884x650.jpg",
  "https://centrezotov.ru/wp-content/uploads/2023/05/funkczionalno-o_-hamovniki-884x650.png",
  "https://centrezotov.ru/wp-content/uploads/2023/04/44209-884x650.jpg",
  "https://centrezotov.ru/wp-content/uploads/2023/05/devushka-s-korobkoj-884x650.jpg",
];

const Carousel = () => {
  const swiper = useSwiper();
  return (
    <div className="swiper__container">
      <Swiper slidesPerView={9} slidesPerGroup={1} centeredSlides navigation>
        {images.map((image) => {
          return (
            <SwiperSlide key={image} style={{ width: "33.33%" }}>
              <div className="slide__image">
                <img src={image} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
