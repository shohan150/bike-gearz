import { getImgUrl } from "../../utils/getImgUrl";
export default function SingleSlide({ data }) {
  return (
    <div className="px-7 py-4 lg:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center gap-5 text-center sm:text-left order-2 sm:order-1">
          <h1 className="text-3xl lg:text-5xl font-bold">{data.title}</h1>
          <p className="text-md text-justify">{data.description}</p>
          <button className="bg-gradient-to-r from-primary to-bikeBlue hover-scale-105  duration-200 text-white py-2 px-4 rounded-full text-center">
            Order Now
          </button>
        </div>

        <div className="order-1 sm:order-2">
          <div className="z-10">
            <img
              src={getImgUrl(data.image, "../assets/hero slider")}
              alt=""
              className="sm:h-[600px] h-[350px] mb-6 object-contain mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
