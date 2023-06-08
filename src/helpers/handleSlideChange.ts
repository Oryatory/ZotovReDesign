type handleChange = (event: React.MouseEvent<HTMLButtonElement>) => void;

export const handleSlideChange: handleChange = (event) => {
  const btn = event.target as HTMLElement;
  const btnClass = btn.className;

  const prevSlide = document.querySelector(".swiper-slide-prev");
  const prevSlideImage = prevSlide
    ?.querySelector(".slide__image")
    ?.querySelector("img");
  const prevSiblingImage = prevSlide?.previousElementSibling
    ?.querySelector(".slide__image")
    ?.querySelector("img") as HTMLElement;
  const prevPrevSiblingImage =
    prevSlide?.previousElementSibling?.previousElementSibling
      ?.querySelector(".slide__image")
      ?.querySelector("img") as HTMLElement;

  if (btnClass === "swiper-button-next") {
    prevSiblingImage
      ? prevSiblingImage.classList.add("swiper-slide-prev-90")
      : null;

    prevPrevSiblingImage
      ? prevPrevSiblingImage.classList.remove("swiper-slide-prev-90")
      : null;
  } else {
    prevSiblingImage
      ? prevSiblingImage.classList.add("swiper-slide-prev-90")
      : null;

    prevSlideImage
      ? prevSlideImage.classList.remove("swiper-slide-prev-90")
      : null;
  }
};
