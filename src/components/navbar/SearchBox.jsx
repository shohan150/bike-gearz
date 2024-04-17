import { IoMdSearch } from "react-icons/io";
export default function SearchBox() {
  return (
    <div className="relative group hidden sm:block">
      <input
        type="text"
        placeholder="Search"
        className="w-0 group-hover:w-[300px] transition-all duration-300 rounded-full group-hover:border group-hover:border-gray-500 px-3 py-1 focus:outline-none dark:border-gray-500 dark:bg-gray-900 group-hover:dark:bg-gray-800 opacity-0 group-hover:opacity-100"
      />
      <IoMdSearch className="text-xl text-gray-600 absolute top-1/2 -translate-y-1/2 right-3 dark:text-gray-400 group-hover:text-primary duration-200" />
    </div>
  );
}
