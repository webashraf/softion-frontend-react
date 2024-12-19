import purpleWatch from '../assets/watch-purple.png';
const SingleProduct = () => {
    return (
        <div className="relative pt-5 pb-20">
      <section className="lg:w-[1280px] w-full mx-auto lg:px-0 px-5">
        <div
          className="flex items-center lg:flex-row flex-col justify-center gap-[60px] lg:h-screen"
        >
          <div className="max-w-[630px] h-[721px]">
            <img
              id="productImage"
              src={purpleWatch}
              alt=""
              className="h-full w-full rounded-[4px] object-cover object-center"
            />
          </div>

          
          <div className="lg:w-[50%]">
           
            <h2 id="title" className="text-[40px] text-[#364A63] font-bold">
              Classy Modern Smart watch
            </h2>
            
            <div className="flex items-center gap-2 mt-[10px]">
              <div className="text-[#FFD200]">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <div className="text-[#8091A7] font-light">(2 Reviews)</div>
            </div>
            <div>
              <h3 className="mt-[20px] text-[20px]">
                <span className="line-through text-[#8091A7] font-light mr-1"
                  >$999.00</span
                ><span id="price" className="text-[#6576FF] font-bold">$79.00</span>
              </h3>
              <p className="text-[18px] text-[#8091A7] leading-loose">
                I must explain to you how all this mistaken idea of denoun cing
                ple praising pain was born and I will give you a complete
                account of the system, and expound the actual teaching.
              </p>
            </div>
            <div className="flex items-center gap-5 mt-[20px]">
              <span className="text-[#8091A7] font-light">
                <p className="text-[14px]">Type</p>
                <p className="text-[16px] font-bold">Watch</p>
              </span>
              <span className="text-[14px] text-[#8091A7] font-light">
                <p className="text-[14px]">Model Number</p>
                <p className="text-[16px] font-bold">Forerunner 290XT</p>
              </span>
            </div>
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
                      checked
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
            <div className="mt-[20px] mb-[10px]">
              <h4 className="text-[#364A63] text-[18px] font-bold mb-[10px]">
                Wrist Size
              </h4>
              <div id="wristSize" className="flex gap-2">
                <div>
                  <input
                    className="peer sr-only"
                    value="S"
                    name="size"
                    id="s69"
                    type="radio"
                    checked
                  />
                  <div
                    className="flex h-[36px] w-[73px] cursor-pointer overflow-hidden flex-col items-center justify-center rounded-[3px] order-2 border border-gray-300 bg-gray-50 transition-transform duration-150 hover:border-blue-400 active:scale-95 peer-checked:border-[#816BFF]"
                  >
                    <label
                      className="flex cursor-pointer size-full items-center justify-center text-[#8091A7] text-[13px] uppercase peer-checked:text-[#816BFF]"
                      htmlFor="s69"
                    >
                      <span
                        className="sizeText text-[#6576FF] text-[18px] font-bold mr-1"
                        >S</span
                      >$69
                    </label>
                  </div>
                </div>

                <div>
                  <input
                    className="peer sr-only"
                    value="M"
                    name="size"
                    id="m79"
                    type="radio"
                  />
                  <div
                    className="flex h-[36px] w-[73px] cursor-pointer overflow-hidden flex-col items-center justify-center rounded-[3px] order-2 border border-gray-300 bg-gray-50 transition-transform duration-150 hover:border-blue-400 active:scale-95 peer-checked:border-[#816BFF]"
                  >
                    <label
                      className="flex cursor-pointer size-full items-center justify-center text-[13px] uppercase text-[#364A63] peer-checked:text-[#816BFF]"
                      htmlFor="m79"
                    >
                      <span
                        className="sizeText text-[#364A63] text-[18px] font-bold mr-1 peer-checked:text-[#816BFF]"
                        >M</span
                      >$79
                    </label>
                  </div>
                </div>

                <div>
                  <input
                    className="peer sr-only"
                    value="L"
                    name="size"
                    id="l89"
                    type="radio"
                  />
                  <div
                    className="flex h-[36px] w-[73px] cursor-pointer overflow-hidden flex-col items-center justify-center rounded-[3px] order-2 border border-gray-300 bg-gray-50 transition-transform duration-150 hover:border-blue-400 active:scale-95 peer-checked:border-[#816BFF]"
                  >
                    <label
                      className="flex cursor-pointer size-full items-center justify-center text-[13px] uppercase text-[#364A63] peer-checked:text-[#816BFF]"
                      htmlFor="l89"
                    >
                      <span
                        className="sizeText text-[#364A63] text-[18px] font-bold mr-1 peer-checked:text-[#816BFF]"
                        >L</span
                      >$89
                    </label>
                  </div>
                </div>

                <div>
                  <input
                    className="peer sr-only"
                    value="XL"
                    name="size"
                    id="xl99"
                    type="radio"
                  />
                  <div
                    className="flex h-[36px] w-[73px] cursor-pointer overflow-hidden flex-col items-center justify-center rounded-[3px] order-2 border border-gray-300 bg-gray-50 transition-transform duration-150 hover:border-blue-400 active:scale-95 peer-checked:border-[#816BFF]"
                  >
                    <label
                      className="flex cursor-pointer size-full items-center justify-center text-[#8091A7] text-[13px] uppercase peer-checked:text-[#816BFF]"
                      htmlFor="xl99"
                    >
                      <span
                        className="sizeText text-[#364A63] text-[18px] font-bold mr-1 peer-checked:text-[#816BFF]"
                        >XL</span
                      >$99
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-[20px]">
              <div className="flex items-center justify-center bg-gray-50">
                <button
                  id="qtyMinus"
                  className="border flex items-center justify-center w-[40px] h-[40px] text-4xl text-[#8091A7] transition-transform duration-150 active:scale-95 rounded-l-[4px]"
                >
                  <img src="./assets/minus.png" alt="" />
                </button>
                <span
                  id="itemQty"
                  className="border flex items-center justify-center w-[40px] h-[40px] text-xl"
                >
                  1
                </span>
                <button
                  id="qtyPlus"
                  className="border flex items-center justify-center w-[40px] h-[40px] text-4xl text-[#8091A7] transition-transform duration-150 active:scale-95 rounded-r-[4px]"
                >
                  <img src="./assets/plus.png" alt="" />
                </button>
              </div>

              <button
                id="addToCart"
                className="bg-[#6576FF] hover:bg-[#6576FF]/95 py-[8px] px-[18px] flex items-center justify-center font-semibold text-white transition-transform duration-150 active:scale-95 rounded-[3px]"
                type="submit"
              >
                Add To Cart
              </button>
              <button>
                <i
                  className="fa-regular fa-heart text-[#6576FF] size-[20px] text-[18px] transition-transform duration-150 active:scale-95"
                ></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      
      <button
        id="checkOutBtn"
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#FFBB5A] hover:bg-[#FFBB5A]/90 text-gray-800 font-semibold px-[24px] py-[8px] rounded-[20px] items-center shadow-lg shadow-[#0000001A] z-10 hidden min-h-[42px] min-w-[139px]"
      >
        <span className="text-[#364A63]">Checkout</span>
        <span
          id="checkoutCount"
          className="ml-2 bg-white text-[14px] font-bold rounded-lg px-2 py-0.5 leading-none"
        >
          0
        </span>
      </button>
    </div>
    );
};

export default SingleProduct;