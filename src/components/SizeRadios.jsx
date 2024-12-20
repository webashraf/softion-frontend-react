/* eslint-disable react/prop-types */

const SizeRadios = ({selectedSize, setSelectedSize}) => {

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  return (
    <div className="mt-[20px] mb-[10px]">
      <h4 className="text-[#364A63] text-[18px] font-bold mb-[10px]">
        Wrist Size
      </h4>
      <div id="wristSize" className="flex gap-2">
        {["S", "M", "L", "XL"].map((size, index) => (
          <div key={index}>
            <input
              className="peer sr-only"
              value={size}
              name="size"
              id={`size-${size}`}
              type="radio"
              checked={selectedSize === size}
              onChange={handleSizeChange}
            />
            <div
              className={`flex h-[36px] w-[73px] cursor-pointer overflow-hidden flex-col items-center justify-center rounded-[3px] order-2 border ${
                selectedSize === size
                  ? "border-[#816BFF] bg-gray-50"
                  : "border-gray-300 bg-gray-50"
              } transition-transform duration-150 hover:border-blue-400 active:scale-95`}
            >
              <label
                className={`flex cursor-pointer size-full items-center justify-center text-[13px] uppercase ${
                  selectedSize === size ? "text-[#816BFF]" : "text-[#364A63]"
                }`}
                htmlFor={`size-${size}`}
              >
                <span
                  className={`sizeText text-[18px] font-bold mr-1 ${
                    selectedSize === size ? "text-[#816BFF]" : "text-[#364A63]"
                  }`}
                >
                  {size}
                </span>
                <span className="text-[#8091A7]">${69 + index * 10}</span>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SizeRadios;
