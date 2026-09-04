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
        {/* Header */}
        <div className="shrink-0">
          <div className="flex justify-between">
            <span className="flex p-4">
              <ShoppingCart className="mr-1" /> Cart ({counter})
            </span>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={clearCart}
                className="cursor-pointer text-[14px] text-gray-500 hover:text-red-500 transition-colors"
              >
                Clear All
              </button>

              <button
                onClick={closeModal}
                type="button"
                aria-label="Close cart"
                className="cursor-pointer flex justify-end p-4"
              >
                <X />
              </button>
            </div>
          </div>

          <hr className="text-gray-200" />
        </div>

        <div className="flex-1 overflow-y-auto cart-scrollbar">
          {selectedProducts.map((selectedProduct) => (
            <div key={selectedProduct.product.refNumber} className="flex p-4 sm:p-6">
              <div className="w-24 h-48 sm:w-40 sm:h-80 shrink-0">
                <img
                  src={selectedProduct.product.imageUrl}
                  alt={selectedProduct.product.productName}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="productInfo flex flex-col px-3 sm:px-4 min-w-0">
                <h2 className="font-bold">{selectedProduct.product.productName}</h2>

                <p className="bg-gray-100 px-2 py-1 w-fit rounded-2xl text-[10px] mb-2">
                  {selectedProduct.product.color}
                </p>

                <small className="text-gray-500 text-[10px] mb-3">
                  REF. {selectedProduct.product.refNumber}
                </small>

                <strong className="text-[#b44f4f] text-sm mb-3">
                  ${(selectedProduct.product.price * selectedProduct.quantity).toFixed(2)}
                </strong>

                <div className="flex gap-3 items-center">
                  <div className="flex gap-3 border border-gray-200 rounded-2xl px-1">
                    <button
                      onClick={() => decreaseQuantity(selectedProduct)}
                      type="button"
                      disabled={selectedProduct.quantity <= 1}
                      aria-label="Decrease quantity"
                      title="Minimum quantity is 1"
                      className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <Minus size="15" />
                    </button>

                    <span className="text-gray-600 text-sm">{selectedProduct.quantity}</span>

                    <button
                      onClick={() => increaseQuantity(selectedProduct)}
                      type="button"
                      disabled={selectedProduct.quantity >= MAX_QUANTITY}
                      aria-label="Increase quantity"
                      className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <Plus size="15" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(selectedProduct)}
                    type="button"
                    aria-label="Remove from cart"
                    className="cursor-pointer"
                  >
                    <Trash size="15" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="shrink-0 border-t border-gray-200 p-6">
          <div className="flex justify-between mb-4">
            <span className="font-bold">Total</span>

            <strong className="text-[#b44f4f]">${totalPrice.toFixed(2)}</strong>
          </div>

          <button
            type="button"
            className="flex w-full justify-center bg-black text-white rounded-md py-2 cursor-pointer"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
