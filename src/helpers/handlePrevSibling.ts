export const handlePrevSibling = () => {
  const prevSlide = document.querySelector(".swiper-slide-prev");
  const prevSiblingImage = prevSlide?.previousElementSibling
    ?.querySelector(".slide__image")
    ?.querySelector("img") as HTMLElement;
  const prevPrevSiblingImage =
    prevSlide?.previousElementSibling?.previousElementSibling
      ?.querySelector(".slide__image")
      ?.querySelector("img") as HTMLElement;
  prevSiblingImage
    ? prevSiblingImage.classList.add("swiper-slide-prev-90")
    : null;
  prevPrevSiblingImage
    ? prevPrevSiblingImage.classList.remove("swiper-slide-prev-90")
    : null;
};
