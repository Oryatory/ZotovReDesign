import { useSwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

const SlideDate = ({ date }: { date: string }) => {
  const swiperSlide = useSwiperSlide();

  return (
    <>
      <motion.svg
        className="date__line"
        width="4px"
        height="34px"
        viewBox="-2 0 4 34"
      >
        <motion.line
          x1="0"
          y1="0"
          x2="0"
          y2="34"
          stroke="black"
          strokeWidth="2"
          animate={{
            pathLength: swiperSlide.isActive ? 1 : 0,
          }}
          transition={{ duration: 0.5, delay: swiperSlide.isActive ? 0.7 : 0 }}
        />
      </motion.svg>
      <motion.p
        animate={{ opacity: swiperSlide.isActive ? 1 : 0 }}
        transition={{ duration: 0.5, delay: swiperSlide.isActive ? 1 : 0 }}
        className="slide__date"
      >
        {date}
      </motion.p>
    </>
  );
};
export default SlideDate;
