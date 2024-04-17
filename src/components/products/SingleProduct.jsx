import { getImgUrl } from "../../utils/getImgUrl.js";
export default function SingleProduct({ data }) {
  return (
    <div className="group pb-2">
      <div className="relative">
        <img
          src={getImgUrl(data.image, "../assets/products")}
          alt={data.title}
          className="h-[180px] w-[260px] object-cover rounded-md"
        />
        <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200">
          <button className="bg-primary py-2 px-3 rounded-full font-semibold text-white">
            Add to cart
          </button>
        </div>
      </div>
      <div className="leading-7 py-2 px-1">
        <h2 className="font-semibold text-gray-900 dark:text-white">
          {data.title}
        </h2>
        <h4 className="font-bold text-gray-900 dark:text-white">
          Tk. {data.price}
        </h4>
      </div>
    </div>
  );
}
