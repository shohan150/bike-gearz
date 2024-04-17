import allProducts from "../../data/productsData";
import SingleJackets from "./SingleJackets";

export default function PopularJackets() {
  return (
    <div className="px-7 lg:px-10 py-6 bg-white dark:bg-gray-900">
      <div className="text-center mb-28 space-y-2">
        <h1 className="text-3xl font-bold lg:text-4xl dark:text-white">
          Most Popular Jackets
        </h1>
        <p className="text-xs text-gray-400">
          Get a vibrant rider look wearing stylish jackets matching with your
          mechanical beast.
        </p>
      </div>
      <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  place-items-center">
        {allProducts.jackets.map((jacket) => (
          <SingleJackets key={jacket.id} data={jacket} />
        ))}
      </div>
    </div>
  );
}
