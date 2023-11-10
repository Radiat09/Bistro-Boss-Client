import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Categories = () => {
  return (
    <section className="my-40">
      <SectionTitle
        heading={"ORDER ONLINE"}
        subHeading={"From 11:00am to 10:00pm"}
      ></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-20 max-w-7xl mx-auto"
      >
        <SwiperSlide>
          <div className="">
            <img src={slide1} className="w-full h-full" alt="" />
            <h4 className="md:text-4xl uppercase text-white text-center">
              Salad
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img src={slide2} className="w-full h-full" alt="" />
            <h4 className="md:text-4xl uppercase text-white -mt-36 text-center">
              Pizza
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img src={slide3} className="w-full h-full" alt="" />
            <h4 className="md:text-4xl uppercase text-white -mt-36 text-center">
              Soup
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img src={slide4} className="w-full h-full" alt="" />
            <h4 className="md:text-4xl uppercase text-white -mt-36 text-center">
              Dessert
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img src={slide5} className="w-full h-full" alt="" />
            <h4 className="md:text-4xl uppercase text-white -mt-36 text-center">
              Salad
            </h4>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Categories;
