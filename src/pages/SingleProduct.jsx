/* eslint-disable no-unused-vars */
import { useState } from 'react';
import minus from '../assets/minus.png';
import plus from '../assets/plus.png';
import purpleWatch from '../assets/watch-purple.png';
import CartModal from '../components/CartModal';
import ColorRadios from '../components/ColorRadios';
import SizeRadios from '../components/SizeRadios';

const SingleProduct = () => {
  const [cart, setCart] = useState([])
  const [title, setTitle] = useState("Classy Modern Smart Watch");
  const [price, setPrice] = useState(79.00)
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(purpleWatch);
  const [color, setColor] = useState('purple');
  const [size, setSize] = useState('S');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleQuantityChange = (type) => {
    setQuantity((prev) => {
      if (type === 'increment') return prev + 1;
      if (type === 'decrement') return prev > 1 ? prev - 1 : 1;
      return prev;
    });
  };
  
  const handleAddToCart = () => {
    const item ={title, price, qty: quantity, image: currentImage, color, size};
    setCart([...cart, item]);
    setQuantity(1);
  }
console.log(cart);
  return (
    <div className="relative pt-5 pb-20">
      <div className="lg:w-[1280px] w-full mx-auto lg:px-0 px-5">
        <div className="flex items-center lg:flex-row flex-col justify-center gap-[60px] lg:h-screen">
          {/* Product Image */}
          <div className="max-w-[630px] h-[721px]">
            <img
              id="productImage"
              src={currentImage}
              alt="Modern Smart Watch"
              className="h-full w-full rounded-[4px] object-cover object-center"
            />
          </div>

          {/* Product Details */}
          <div className="lg:w-[50%]">
            <h2 id="title" className="text-[40px] text-[#364A63] font-bold">
              {title}
            </h2>

            {/* Reviews */}
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

            {/* Price */}
            <div>
              <h3 className="mt-[20px] text-[20px]">
                <span className="line-through text-[#8091A7] font-light mr-1">
                  $999.00
                </span>
                <span id="price" className="text-[#6576FF] font-bold">
                  ${price.toFixed(2)}
                </span>
              </h3>
              <p className="text-[18px] text-[#8091A7] leading-loose">
                I must explain to you how all this mistaken idea of denouncing
                praising pain was born and I will give you a complete account of
                the system, and expound the actual teaching.
              </p>
            </div>

            {/* Product Type and Model */}
            <div className="flex items-center gap-5 mt-[20px]">
              <span className="text-[#8091A7] font-light">
                <p className="text-[14px]">Type</p>
                <p className="text-[16px] font-bold">Watch</p>
              </span>
              <span className="text-[#8091A7] font-light">
                <p className="text-[14px]">Model Number</p>
                <p className="text-[16px] font-bold">Forerunner 290XT</p>
              </span>
            </div>

            <ColorRadios setCurrentImage={setCurrentImage} selectedColor={color} setSelectedColor={setColor}  />
            <SizeRadios selectedSize={size} setSelectedSize={setSize} />

            {/* Quantity and Actions */}
            <div className="flex items-center gap-3 mt-[20px]">
              <div className="flex items-center justify-center bg-gray-50">
                <button
                  id="qtyMinus"
                  onClick={() => handleQuantityChange('decrement')}
                  className="border flex items-center justify-center w-[40px] h-[40px] text-4xl text-[#8091A7] transition-transform duration-150 active:scale-95 rounded-l-[4px]"
                >
                  <img src={minus} alt="Decrease Quantity" />
                </button>
                <span
                  id="itemQty"
                  className="border flex items-center justify-center w-[40px] h-[40px] text-xl"
                >
                  {quantity}
                </span>
                <button
                  id="qtyPlus"
                  onClick={() => handleQuantityChange('increment')}
                  className="border flex items-center justify-center w-[40px] h-[40px] text-4xl text-[#8091A7] transition-transform duration-150 active:scale-95 rounded-r-[4px]"
                >
                  <img src={plus} alt="Increase Quantity" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="bg-[#6576FF] hover:bg-[#6576FF]/95 py-[8px] px-[18px] flex items-center justify-center font-semibold text-white transition-transform duration-150 active:scale-95 rounded-[3px]"
                type="submit"
              >
                Add To Cart
              </button>
              <button>
                <i className="fa-regular fa-heart text-[#6576FF] text-[18px] transition-transform duration-150 active:scale-95"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Button */}
      {cart.length ? <button
        onClick={() =>setIsModalOpen(true)}
        className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#FFBB5A] hover:bg-[#FFBB5A]/90 text-gray-800 font-semibold px-[24px] py-[8px] rounded-[20px] shadow-lg shadow-[#0000001A] z-10  min-h-[42px] min-w-[139px] ${isModalOpen && "hidden"}`}
      >
        <span className="text-[#364A63]">Checkout</span>
        <span
          id="checkoutCount"
          className="ml-2 bg-white text-[14px] font-bold rounded-lg px-2 py-0.5 leading-none"
        >
          {cart.length}
        </span>
      </button> : ""}
      {isModalOpen && <CartModal setIsModalOpen={setIsModalOpen} products={cart} />}
    </div>
  );
};

export default SingleProduct;
