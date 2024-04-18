import allProducts from "../../data/productsData";
import SingleProduct from "./SingleProduct";

export default function AllProducts() {
  return (
    <div
      id="products"
      className="px-7 lg:px-10 py-14 bg-white dark:bg-gray-900"
    >
      <div className="text-center mb-10 space-y-2">
        <h1 className="text-3xl font-bold lg:text-4xl dark:text-white">
          Our Products
        </h1>
        <p className="text-xs text-gray-400">
          Explore through our rich collection of bike accessories of various
          global brands.
        </p>
      </div>
      <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 place-items-center">
        {allProducts.products.map((product) => (
          <SingleProduct key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}
