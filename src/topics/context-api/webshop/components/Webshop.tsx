import { useEffect, useState } from 'react';
import axios from 'axios';
import WebshopContext from '../WebshopContext';
import Header from './Header';
import Products from './Products';
import ProductModal from './ProductModal';
import type { CartItem, ProductProps } from '../types';

const MAX_QUANTITY = 5;

function Webshop() {
  const [counter, setCounter] = useState(0);
  const [products, setProducts] = useState<ProductProps[]>([]);
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
        const { data: products } = await axios.get<ProductProps[]>('/products');
        setProducts(products);
      } catch (error) {
        setError(error instanceof Error ? error : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    })();
  }, []);

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

    setIsModalVisible(true);
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
    <div className="relative w-fit mx-auto">
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
        }}
      >
        <header className="flex items-center justify-between py-4 mb-8 border-b border-gray-200">
          <div>
            <h1 className="text-xl font-bold">Mini Shop</h1>
            <p className="text-sm text-gray-500">Discover our collection</p>
          </div>
          <Header />
        </header>

        <main>
          <Products products={products} error={error} loading={loading} />
        </main>

        {selectedProducts.length > 0 && <ProductModal />}
      </WebshopContext.Provider>
    </div>
  );
}

export default Webshop;
