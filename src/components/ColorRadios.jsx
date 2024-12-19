import { useState } from "react";
import blackWatch from '../assets/watch-black.png';
import blueWatch from '../assets/watch-blue.png';
import cyanWatch from '../assets/watch-cyan.png';
import purpleWatch from '../assets/watch-purple.png';
const ColorRadios = ({setCurrentImage}) => {
  const [selectedColor, setSelectedColor] = useState("purple"); 

  const handleColorChange = (e) => {
    const selectedColor = e.target.value;
    setSelectedColor(selectedColor);

    // Update the image based on the selected color
    switch (selectedColor) {
      case "cyan":
        setCurrentImage(cyanWatch);
        break;
      case "black":
        setCurrentImage(blackWatch);
        break;
      case "blue":
        setCurrentImage(blueWatch);
        break;
      default:
        setCurrentImage(purpleWatch);
    }
  };
  return (
    <div className="mt-[20px]">
      <h4 className="text-[#364A63] text-[18px] font-bold mb-[10px]">
        Band Color
      </h4>
      <div className="flex gap-[20px]">
        <div className="inline-flex items-center">
          <label
            className="relative flex items-center cursor-pointer"
            htmlFor="color-1"
          >
            <input
              name="color"
              type="radio"
              value="purple"
              className="peer size-4 cursor-pointer bg-[#816BFF] appearance-none rounded-full border-slate-300 checked:border-red-400 transition-all"
              id="color-1"
              checked={selectedColor === "purple"}
              onChange={handleColorChange}
            />
            <span
              className="absolute bg-[#816BFF] size-5 rounded-full opacity-0 peer-checked:opacity-100 peer-checked:bg-[#816BFF] peer-checked:size-[24px] transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            >
              <div
                className="size-5 rounded-full border-2 border-white"
              ></div>
            </span>
          </label>
        </div>

        <div className="inline-flex items-center">
          <label
            className="relative flex items-center cursor-pointer"
            htmlFor="color-2"
          >
            <input
              name="color"
              type="radio"
              value="cyan"
              className="peer size-4 cursor-pointer bg-[#1FCEC9] appearance-none rounded-full border-slate-300 checked:border-red-400 transition-all"
              id="color-2"
              checked={selectedColor === "cyan"}
              onChange={handleColorChange}
            />
            <span
              className="absolute bg-[#1FCEC9] size-5 rounded-full opacity-0 peer-checked:opacity-100 peer-checked:bg-[#1FCEC9] peer-checked:size-[24px] transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            >
              <div
                className="size-5 rounded-full border-2 border-white"
              ></div>
            </span>
          </label>
        </div>

        <div className="inline-flex items-center">
          <label
            className="relative flex items-center cursor-pointer"
            htmlFor="color-3"
          >
            <input
              name="color"
              type="radio"
              value="blue"
              className="peer size-4 cursor-pointer bg-[#4B97D3] appearance-none rounded-full border-slate-300 checked:border-red-400 transition-all"
              id="color-3"
              checked={selectedColor === "blue"}
              onChange={handleColorChange}
            />
            <span
              className="absolute bg-[#4B97D3] size-5 rounded-full opacity-0 peer-checked:opacity-100 peer-checked:bg-[#4B97D3] peer-checked:size-[24px] transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            >
              <div
                className="size-5 rounded-full border-2 border-white"
              ></div>
            </span>
          </label>
        </div>

        <div className="inline-flex items-center">
          <label
            className="relative flex items-center cursor-pointer"
            htmlFor="color-4"
          >
            <input
              name="color"
              type="radio"
              value="black"
              className="peer size-4 cursor-pointer bg-[#3B4747] appearance-none rounded-full border-slate-300 checked:border-red-400 transition-all"
              id="color-4"
              checked={selectedColor === "black"}
              onChange={handleColorChange}
            />
            <span
              className="absolute bg-[#3B4747] size-5 rounded-full opacity-0 peer-checked:opacity-100 peer-checked:bg-[#3B4747] peer-checked:size-[24px] transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
            >
              <div
                className="size-5 rounded-full border-2 border-white"
              ></div>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ColorRadios;
