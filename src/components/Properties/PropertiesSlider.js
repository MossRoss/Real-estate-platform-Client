import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import Property from "../Property/Property";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PropertiesSlider = ({ properties }) => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={8}
      loop={true}
      loopFillGroupWithBlank={true}
      centerSlides={true}
      autoplay={{ delay: 2000, disableOnInteraction: true }}
      pagination={{ dynamicBullets: true }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {properties.map((property) => (
        <SwiperSlide key={property.id}>
          <Property {...property} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default PropertiesSlider;
