import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { slidesData } from "../../data/slidesData";
import SingleSlide from "./SingleSlide";

export default function HeroSection() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className="relative overflow-hidden  bg-gray-100 dark:bg-gray-900 dark:text-white duration-200 h-[620px]">
      <div className="h-[650px] w-[650px] bg-primary/70 absolute -top-52 right-12 rounded-3xl rotate-45 -z-9"></div>
      <div className="z-10">
        <Slider {...settings}>
          {slidesData.map((slide) => (
            <SingleSlide key={slide.id} data={slide} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
