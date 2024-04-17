import { useState } from "react";
import { IoMoonSharp, IoSunny } from "react-icons/io5";

export default function DarkMode() {
  const [isLight, setIsLight] = useState(true);
  const rootBody = document.documentElement;

  if (isLight) {
    rootBody.classList.add("light");
    rootBody.classList.remove("dark");
  } else {
    rootBody.classList.add("dark");
    rootBody.classList.remove("light");
  }

  return (
    <div>
      <button
        className="text-2xl text-gray-500"
        onClick={() => {
          setIsLight(!isLight);
        }}
      >
        {isLight ? <IoSunny /> : <IoMoonSharp />}
      </button>
    </div>
  );
}
