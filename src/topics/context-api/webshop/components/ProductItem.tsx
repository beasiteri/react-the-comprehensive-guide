import { useContext } from 'react';
import WebshopContext from '../WebshopContext';
import type { ProductProps } from '../types';

function ProductItem({ product }: { product: ProductProps }) {
  const { addToCart } = useContext(WebshopContext);

  return (
    <div className="flex flex-col">
      <div className="gallery group relative flex w-full h-80 aspect-3/4 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.productName}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => addToCart(product)}
          type="button"
          aria-label="Add to basket"
          className="absolute bottom-3 inset-x-3 bg-white text-black py-2 rounded-md cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Add to Basket
        </button>
      </div>
      <div className="productInfo flex flex-col p-2">
        <h2 className="font-bold text-sm">{product.productName}</h2>
        <strong className="text-[#b44f4f] text-sm">${product.price.toFixed(2)}</strong>
      </div>
    </div>
  );
}

export default ProductItem;
