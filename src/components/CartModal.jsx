/* eslint-disable react/prop-types */
const CartModal = ({ setIsModalOpen, products }) => {
  const totalQty = products.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = products.reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <section
      id="cartSection"
      className="bg-[#11121B8C] flex justify-center items-center min-h-screen fixed top-0 left-0 right-0 z-20"
    >
      <div
        id="cartBodyModal"
        className="bg-white rounded-[20px] shadow-lg p-[44px] w-full max-w-[651px]"
      >
        <h2 className="text-[22px] font-bold mb-6 text-[#364A63]">Your Cart</h2>
        <table className="w-full text-left border-collapse text-[#364A63] text-[14px]">
          <thead>
            <tr className="border-b text-[#8091A7]">
              <th className="pb-4 font-normal">Item</th>
              <th className="pb-4 font-normal">Color</th>
              <th className="pb-4 font-normal">Size</th>
              <th className="pb-4 font-normal">Qnt</th>
              <th className="pb-4 font-normal text-right">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, i) => (
              <tr key={i}>
                <td className="py-4 flex items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 mr-4 rounded-md"
                  />
                  <span>{item.title}</span>
                </td>
                <td className="py-4 capitalize">{item.color}</td>
                <td className="py-4 font-bold">{item.size}</td>
                <td className="py-4">{item.qty}</td>
                <td className="py-4 text-right font-bold">
                  ${item.qty * item.price}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t">
              <td colSpan="3" className="py-4 font-bold text-[16px]">
                Total
              </td>
              <td className="py-4 font-bold text-center pr-5 text-[14px]">
                {totalQty}
              </td>
              <td className="py-4 font-bold text-right text-[18px]">
                ${totalPrice.toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
        <div className="flex justify-end gap-[24px] mt-6">
          <button
            onClick={() => setIsModalOpen(false)}
            className="px-4 py-2 text-[#364A63] font-semibold hover:bg-gray-300 border rounded-[3px] transition-transform duration-150 active:scale-95"
          >
            Continue Shopping
          </button>
          <button className="px-4 py-2 bg-[#6576FF] text-white rounded-[3px] hover:bg-[#6576FF]/95 font-semibold transition-transform duration-150 active:scale-95">
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartModal;
