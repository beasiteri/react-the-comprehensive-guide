import { createContext } from 'react';
import type { CartItem, ProductProps } from './types';

type WebshopContextType = {
  counter: number;
  selectedProducts: CartItem[];
  isModalVisible: boolean;

  addToCart: (product: ProductProps) => void;
  removeFromCart: (selectedProduct: CartItem) => void;
  openModal: () => void;
  closeModal: () => void;
  increaseQuantity: (selectedProduct: CartItem) => void;
  decreaseQuantity: (selectedProduct: CartItem) => void;
  clearCart: () => void;
  addedProduct: ProductProps | null;
};

const WebshopContext = createContext<WebshopContextType>({
  counter: 0,
  selectedProducts: [],
  isModalVisible: false,
  addedProduct: null,

  addToCart: () => {},
  removeFromCart: () => {},
  openModal: () => {},
  closeModal: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  clearCart: () => {},
});

export default WebshopContext;
