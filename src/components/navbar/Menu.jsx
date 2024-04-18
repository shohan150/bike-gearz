import { GoTriangleDown } from "react-icons/go";
export default function Menu() {
  return (
    <div className="hidden lg:block">
      <ul className="flex gap-7 font-semibold">
        <li className="text-gray-500 hover:text-black dark:hover:text-white duration-200 hover:scale-105 hover:drop-shadow-sm">
          <a href="#">Home</a>
        </li>
        <li className="text-gray-500 hover:text-black dark:hover:text-white duration-200 hover:scale-105 hover:drop-shadow-sm">
          <a href="#">About</a>
        </li>
        <li className="text-gray-500 hover:text-black dark:hover:text-white duration-200 hover:scale-105 hover:drop-shadow-sm">
          <a href="#">Shop</a>
        </li>
        <li className="text-gray-500 hover:text-black dark:hover:text-white duration-200 hover:scale-105 hover:drop-shadow-sm">
          <a href="#">Contacts</a>
        </li>
        <li className="relative group cursor-pointer">
          <a
            href="#"
            className="flex items-center gap-1 font-semibold text-gray-500 hover:text-black dark:hover:text-white"
          >
            Categories
            <span>
              <GoTriangleDown className="group-hover:rotate-180 duration-300" />
            </span>
          </a>
          <div className="absolute z-50 hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 text-black dark:text-white py-2">
            <ul>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:bg-primary/20 dark:hover:bg-primary/60 py-2 px-3 rounded-md hover:text-black dark:hover:text-white duration-200 inline-block w-full"
                >
                  Helmets
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:bg-primary/20 dark:hover:bg-primary/60 py-2 px-3 rounded-md hover:text-black dark:hover:text-white duration-200 inline-block w-full"
                >
                  Gloves
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:bg-primary/20 dark:hover:bg-primary/60 py-2 px-3 rounded-md hover:text-black dark:hover:text-white duration-200 inline-block w-full"
                >
                  Jackets
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:bg-primary/20 dark:hover:bg-primary/60 py-2 px-3 rounded-md hover:text-black dark:hover:text-white duration-200 inline-block w-full"
                >
                  Accessories
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}
