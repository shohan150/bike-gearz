import { FaCartShopping } from "react-icons/fa6";

import DarkMode from "./DarkMode";
import Menu from "./Menu";
import SearchBox from "./SearchBox";
const Navbar = () => {
  return (
    <div
      className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40"
      id="home"
    >
      <div>
        <div className="lg:px-10 px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-16">
            {/* logo */}
            <a
              href="#"
              className="text-primary font-semibold tracking-wides text-2xl sm:text-3xl"
            >
              Bike Gearz
            </a>
            {/* menu */}
            <Menu />
          </div>
          <div className="flex justify-between items-center gap-4">
            {/* search box */}
            <SearchBox />

            {/* Cart Icon */}
            <button className="relative p-3 mr-3">
              <FaCartShopping className="text-2xl text-gray-500" />
              <div className="w-4 h-4 bg-red-500 text-white text-sm rounded-full absolute top-0 right-0 flex items-center justify-center p-2">
                3
              </div>
            </button>
            {/* Theme Controller */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
