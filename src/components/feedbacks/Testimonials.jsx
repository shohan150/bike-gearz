import Slider from "react-slick";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 5000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-8 lg:py-14 dark:bg-gray-900">
      <div className="px-3 lg:px-10">
        <div className="text-center mb-10 space-y-2">
          <h1 className="text-3xl font-bold lg:text-4xl dark:text-white">
            Testimonials
          </h1>
          <p className="text-xs text-gray-400">
            Have a look on what our customers are saying.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {testimonials.map((data) => (
              <div key={data.id} className="slide-gap">
                <div className="shadow-lg py-8 px-6 rounded-xl min-h-[225px] bg-primary/10 dark:bg-gray-800 relative">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex items-center gap-r flex-col">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xs font-bold text-black/80 dark:text-white">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl absolute top-0 right-0 font-serif">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
