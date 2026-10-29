import { useContext } from 'react';
import WebshopContext from '../WebshopContext';
import { Minus, Plus, ShoppingCart, Trash, X } from 'lucide-react';
import { MAX_QUANTITY } from '../constants';

function ProductModal() {
  const {
    counter,
    selectedProducts,
    isModalVisible,
    removeFromCart,
    closeModal,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useContext(WebshopContext);

  const totalPrice = selectedProducts.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <div
      onClick={closeModal}
      className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-500 ${
        isModalVisible
          ? 'opacity-100 pointer-events-auto cursor-pointer'
          : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={`absolute top-0 right-0 w-full sm:w-125 h-full flex flex-col cursor-default bg-white transition-transform duration-500 ${
          isModalVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="shrink-0">
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-1 p-4 font-bold text-lg">
              <ShoppingCart size={18} />
              Cart ({counter})
            </span>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={clearCart}
                className="flex items-center gap-1 mt-1 cursor-pointer text-[12px] font-semibold text-[#b44f4f] transition-colors"
              >
                <Trash size={15} className="-mt-1" />
                Clear All
              </button>

              <button
                onClick={closeModal}
                type="button"
                aria-label="Close cart"
                className="cursor-pointer flex items-center justify-center p-4"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          <hr className="text-gray-200" />
        </div>

        <div className="overflow-y-auto cart-scrollbar">
          {selectedProducts.map((selectedProduct) => {
            const color = selectedProduct.product.color;
            const textColor = color === 'yellow' || color === 'white' ? '#6b7280' : color;

            return (
              <div key={selectedProduct.product.refNumber}>
                <div className="flex p-4 sm:p-4  ">
                  <div className="w-30 h-48 sm:w-30 sm:h-50 shrink-0">
                    <img
                      src={selectedProduct.product.imageUrl}
                      alt={selectedProduct.product.productName}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>

                  <div className="productInfo flex flex-col flex-1 pl-3 sm:pl-4 min-w-0">
                    <div className="flex justify-between items-center mb-1  w-full gap-3">
                      <h2 className="font-bold">{selectedProduct.product.productName}</h2>
                      <button
                        onClick={() => removeFromCart(selectedProduct)}
                        type="button"
                        aria-label="Remove from cart"
                        className="cursor-pointer"
                      >
                        <X size="18" className="text-gray-400" />
                      </button>
                    </div>

                    <p
                      style={{
                        backgroundColor: `color-mix(in srgb, ${selectedProduct.product.color} 20%, white)`,
                        color: textColor,
                      }}
                      className="px-3 py-1 w-fit rounded-2xl text-[10px] font-medium capitalize mb-2"
                    >
                      {selectedProduct.product.color}
                    </p>

                    <small className="text-gray-500 text-[10px] mb-3">
                      REF. {selectedProduct.product.refNumber}
                    </small>

                    <strong className="text-[#b44f4f] text-xl mb-3">
                      ${(selectedProduct.product.price * selectedProduct.quantity).toFixed(2)}
                    </strong>

                    <div className="flex gap-3 items-center">
                      <div className="flex gap-3 border border-gray-200 rounded-2xl px-2">
                        <button
                          onClick={() => decreaseQuantity(selectedProduct)}
                          type="button"
                          disabled={selectedProduct.quantity <= 1}
                          aria-label="Decrease quantity"
                          title="Minimum quantity is 1"
                          className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 font-bold"
                        >
                          <Minus size="15" />
                        </button>

                        <span className="bg-gray-100 px-3 py-1 text-gray-600 text-sm">
                          {selectedProduct.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(selectedProduct)}
                          type="button"
                          disabled={selectedProduct.quantity >= MAX_QUANTITY}
                          aria-label="Increase quantity"
                          className="cursor-pointer  disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          <Plus size="15" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="text-gray-200 mb-2" />
              </div>
            );
          })}
        </div>

        <div className="shrink-0 p-6 text-xl">
          <div className="flex justify-between mb-4">
            <span className="font-bold">Total</span>

            <strong className="text-[#b44f4f]">${totalPrice.toFixed(2)}</strong>
          </div>

          <button
            type="button"
            aria-label="Add to basket"
            className="mt-3 w-full inline-flex items-center justify-center gap-2 font-semibold transition duration-200 shadow-xs bg-black/80 text-white text-xs py-3 rounded-lg cursor-pointer hover:bg-black/90"
          >
            <ShoppingCart className="mr-2" size={18} />
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
