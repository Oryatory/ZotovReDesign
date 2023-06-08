import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import SlideTitle from "./SlideTitle";
import SlideDate from "./SlideDate";

const slides = [
  {
    image:
      "https://centrezotov.ru/wp-content/uploads/2023/04/logos-vystavka-1-884x650.jpg",
    title: "Логос: голос конструктивизма",
    date: "25.05 - 06.08",
  },
  {
    image:
      "https://centrezotov.ru/wp-content/uploads/2023/05/rannyaya-multiplikacziya-konki-884x650.jpg",

    title: "Киноклавиши. Ранняя мультипликация",
    date: "06.06",
  },
  {
    image:
      "https://centrezotov.ru/wp-content/uploads/2023/05/1920h650_lekcziya_-7-iyunya-884x650.png",

    title: "Дмитрий Никишов. Коллаж. Фотомонтаж",
    date: "07.06",
  },
  {
    image:
      "https://centrezotov.ru/wp-content/uploads/2022/12/mk-14.01-art-meditacziya-884x650.jpg",

    title: "Антонина Бородина. Арт-медитация",
    date: "10.06",
  },
  {
    image:
      "https://centrezotov.ru/wp-content/uploads/2023/05/beat-film-festival-884x650.jpg",

    title: "Beat Film Festival",
    date: "10.06 - 18.06",
  },
  {
    image:
      "https://centrezotov.ru/wp-content/uploads/2023/05/les_olympiades_dsc07529_r©shannabesson-884x650.jpg",

    title: "Специальный показ. Париж, 13-й округ / Les Olympiades",
    date: "11.06",
  },
  {
    image:
      "https://centrezotov.ru/wp-content/uploads/2023/05/funkczionalno-o_-hamovniki-884x650.png",

    title: "Функционально о: Хамовники",
    date: "11.06",
  },
  {
    image:
      "https://centrezotov.ru/wp-content/uploads/2023/04/44209-884x650.jpg",

    title: "Кино крохам: выбор «Мела»",
    date: "13.05 - 24.06",
  },
  {
    image:
      "https://centrezotov.ru/wp-content/uploads/2023/05/devushka-s-korobkoj-884x650.jpg",

    title: "Фильм-концерт. Круглый Бенд х Девушка с коробкой",
    date: "04.08",
  },
];

const Carousel = () => {
  SwiperCore.use([Navigation, Autoplay]);

  const resetSlides = () => {
    const allSlides = document.querySelectorAll(".swiper-slide");
    allSlides.forEach((slide) => {
      const slideImage = slide
        ?.querySelector(".slide__image")
        ?.querySelector("img") as HTMLElement;
      slideImage ? slideImage.classList.remove("swiper-slide-prev-90") : null;
    });
  };

  const handleSlideChange = () => {
    const prevSlide = document.querySelector(".swiper-slide-prev");

    const prevSiblingImage = prevSlide?.previousElementSibling
      ?.querySelector(".slide__image")
      ?.querySelector("img") as HTMLElement;

    prevSiblingImage
      ? prevSiblingImage.classList.add("swiper-slide-prev-90")
      : null;

    // const prevSibling =
    //   prevSlide?.previousElementSibling?.previousElementSibling;
    // const prevPrevSibling = prevSibling
    //   ?.querySelector(".slide__image")
    //   ?.querySelector("img") as HTMLElement;
    // prevPrevSibling
    //   ? prevPrevSibling.classList.remove("swiper-slide-prev-90")
    //   : null;
  };

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
        onSlideChange={resetSlides}
        onSlideChangeTransitionEnd={handleSlideChange}
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
        <div className="swiper-button-prev">{/* <BsChevronLeft /> */}</div>
        <div className="swiper-button-next">{/* <BsChevronRight /> */}</div>
      </div>
    </div>
  );
};

export default Carousel;
