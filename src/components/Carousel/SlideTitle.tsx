import { useSwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

const SlideTitle = ({ title }: { title: string }) => {
  const swiperSlide = useSwiperSlide();
  return (
    <>
      <motion.p
        animate={{ opacity: swiperSlide.isActive ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="slide__title"
      >
        {title}
      </motion.p>
      <motion.svg
        className="title__line"
        width="4px"
        height="34px"
        viewBox="-2 0 4 34"
      >
        <motion.line
          x1="0"
          y1="-2"
          x2="0"
          y2="34"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="square"
          animate={{
            pathLength: swiperSlide.isActive ? 1 : 0,
          }}
          transition={{ duration: 0.5, delay: swiperSlide.isActive ? 0.3 : 0 }}
        />
      </motion.svg>
    </>
  );
};

export default SlideTitle;
