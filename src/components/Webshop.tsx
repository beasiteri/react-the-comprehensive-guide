import { useEffect, useState } from 'react';
import axios from 'axios';
import WebshopContext from '../WebshopContext';
import Header from './Header';
import Products from './Products';
import ProductModal from './ProductModal';
import type { CartItem, ProductProps } from '../types';
import { baseUrl } from '../config/api';

const MAX_QUANTITY = 5;

function Webshop() {
  const [counter, setCounter] = useState(0);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [addedProduct, setAddedProduct] = useState<ProductProps | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<CartItem[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isModalVisible);

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isModalVisible]);

  useEffect(() => {
    (async () => {
      try {
        const { data: products } = await axios.get<ProductProps[]>(`${baseUrl}api/products`);
        setProducts(products);
      } catch (error) {
        setError(error instanceof Error ? error : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (!addedProduct) return;

    const timeout = setTimeout(() => {
      setAddedProduct(null);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [addedProduct]);

  const addToCart = (product: ProductProps) => {
    const existingProduct = selectedProducts.find(
      (item) => item.product.refNumber === product.refNumber
    );

    if (existingProduct && existingProduct.quantity >= MAX_QUANTITY) {
      return;
    }

    setCounter((prev) => prev + 1);

    setSelectedProducts((prevProducts) => {
      const existingProduct = prevProducts.find(
        (item) => item.product.refNumber === product.refNumber
      );

      if (existingProduct) {
        return prevProducts.map((item) =>
          item.product.refNumber === product.refNumber
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...prevProducts,
        {
          product,
          quantity: 1,
        },
      ];
    });

    setAddedProduct(product);
  };

  const removeFromCart = (selectedProduct: CartItem) => {
    setSelectedProducts((prevProducts) =>
      prevProducts.filter((item) => item.product.refNumber !== selectedProduct.product.refNumber)
    );

    setCounter((prevState) => {
      return prevState - selectedProduct.quantity;
    });
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const increaseQuantity = (selectedProduct: CartItem) => {
    if (selectedProduct.quantity >= MAX_QUANTITY) {
      return;
    }

    setSelectedProducts((prevProducts) =>
      prevProducts.map((item) =>
        item.product.refNumber === selectedProduct.product.refNumber
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );

    setCounter((prev) => prev + 1);
  };

  const decreaseQuantity = (selectedProduct: CartItem) => {
    setSelectedProducts((prevProducts) =>
      prevProducts.map((item) =>
        item.product.refNumber === selectedProduct.product.refNumber
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );

    setCounter((prev) => prev - 1);
  };

  const clearCart = () => {
    setSelectedProducts([]);
    setCounter(0);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <WebshopContext.Provider
        value={{
          counter,
          selectedProducts,
          isModalVisible,
          addToCart,
          removeFromCart,
          openModal,
          closeModal,
          increaseQuantity,
          decreaseQuantity,
          clearCart,
          addedProduct,
        }}
      >
        <Header />
        <main>
          <Products products={products} error={error} loading={loading} />
        </main>

        {selectedProducts.length > 0 && <ProductModal />}
        {addedProduct && (
          <div
            className="fixed top-5 right-5 z-50 flex items-center gap-3
             w-80 rounded-xl bg-white p-4 shadow-lg border border-gray-100"
          >
            <img
              src={addedProduct.imageUrl}
              alt={addedProduct.productName}
              className="h-16 w-16 rounded-lg object-cover"
            />

            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-gray-900">Added to cart!</p>
              <p className="truncate text-sm text-gray-600">{addedProduct.productName}</p>
              <p className="text-sm font-medium text-[#b44f4f]">${addedProduct.price.toFixed(2)}</p>
            </div>

            <button
              type="button"
              onClick={() => setAddedProduct(null)}
              aria-label="Close notification"
              className="self-start text-gray-400 hover:text-gray-700 cursor-pointer"
            >
              ✕
            </button>
          </div>
        )}
      </WebshopContext.Provider>
    </div>
  );
}

export default Webshop;
