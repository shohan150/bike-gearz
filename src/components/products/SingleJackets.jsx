import { FaStar } from "react-icons/fa";
import { getImgUrl } from "../../utils/getImgUrl.js";

export default function SingleProduct({ data }) {
  return (
    <div className="group pb-2 rounded-2xl shadow-xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-[#dee561] hover:text-white">
      <div className="relative">
        <img
          src={getImgUrl(data.image, "../assets/jackets")}
          alt={data.title}
          className="object-cover max-auto  -translate-y-20 group-hover:scale-110 duration-500 drop-shadow-md"
        />
      </div>
      <div className="p-4 text-center space-y-2">
        <div className="flex items-center justify-center gap-1 -mt-14 mb-2">
          {Array(data.rating)
            .fill(1)
            .map((_, index) => (
              <FaStar key={index} className="text-yellow-500" />
            ))}
        </div>
        <h1 className="text-xl font-bold dark:text-white">{data.title}</h1>
        <p className="text-gray-500 group-hover:text-white text-sm line-clamp-2">
          {data.description}
        </p>
        <h3 className="text-md dark:font-medium dark:text-gray-400 group-hover:dark:text-white">
          Tk. {data.price}
        </h3>
        <button className="bg-primary py-2 px-3 rounded-full font-semibold text-white  mt-3 ">
          Add to cart
        </button>
      </div>
    </div>
  );
}
