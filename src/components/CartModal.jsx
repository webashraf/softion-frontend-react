
const CartModal = () => {
    return (
        <section
        id="cartSection"
        className="bg-[#11121B8C]  justify-center items-center min-h-screen fixed top-0 left-0 right-0 z-20  hidden"
      >
        <div
          id="cartBodyModal"
          className="bg-white rounded-[20px] shadow-lg p-[44px] w-full max-w-[651px]"
        >
          <h2 className="text-[22px] font-bold mb-6 text-[#364A63]">Your Cart</h2>
          <table
            className="w-full text-left border-collapse text-[#364A63] text-[14px]"
          >
            <thead>
              <tr className="border-b text-[#8091A7]">
                <th className="pb-4 font-normal">Item</th>
                <th className="pb-4 font-normal">Color</th>
                <th className="pb-4 font-normal">Size</th>
                <th className="pb-4 font-normal">Qnt</th>
                <th className="pb-4 font-normal text-right">Price</th>
              </tr>
            </thead>
            <tbody
              id="cartBody"
              style="max-height: 250px; overflow-y: auto"
            ></tbody>

            <tfoot>
              <tr className="border-t">
                <td colSpan="3" className="py-4 font-bold text-[16px]">Total</td>
                <td
                  id="totalQty"
                  className="py-4 font-bold text-center pr-5 text-[14px]"
                >
                  4
                </td>
                <td className="py-4 font-bold text-right text-[18px]">
                  $<span id="totalPrice">356</span>.00
                </td>
              </tr>
            </tfoot>
          </table>
          <div className="flex justify-end gap-[24px] mt-6">
            <button
              id="continueShopping"
              className="px-4 py-2 text-[#364A63] font-semibold hover:bg-gray-300 border rounded-[3px] transition-transform duration-150 active:scale-95"
            >
              Continue Shopping
            </button>
            <button
              className="px-4 py-2 bg-[#6576FF] text-white rounded-[3px] hover:bg-[#6576FF]/95 font-semibold transition-transform duration-150 active:scale-95"
            >
              Checkout
            </button>
          </div>
        </div>
      </section>
    );
};

export default CartModal;