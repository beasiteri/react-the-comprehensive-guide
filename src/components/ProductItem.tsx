import { useContext, useState } from 'react';
import WebshopContext from '../WebshopContext';
import { Heart, ShoppingCart } from 'lucide-react';
import type { ProductProps } from '../types';

function ProductItem({ product }: { product: ProductProps }) {
  const [like, setLike] = useState(false);
  const { addToCart } = useContext(WebshopContext);
  const color = product.color;
  const textColor = color === 'yellow' || color === 'white' ? '#6b7280' : color;

  return (
    <div className="flex flex-col bg-gray-50">
      <div className="gallery group relative w-full aspect-3/4 overflow-hidden">
        <button
          type="button"
          aria-label="Add to favorites"
          onClick={() => setLike(!like)}
          className="absolute top-2 right-2 flex items-center justify-center
           w-8 h-8 rounded-full bg-white/60 shadow-sm
           hover:bg-white/80 transition-colors cursor-pointer"
        >
          <Heart
            size={18}
            fill={like ? 'currentColor' : 'none'}
            className={like ? 'text-[#b44f4f]' : 'text-gray-700'}
            strokeWidth={1.8}
          />
        </button>
        <img
          src={product.imageUrl}
          alt={product.productName}
          className="w-full h-full object-cover rounded-t-md"
        />
      </div>

      <div className="productInfo flex flex-col p-2 gap-1">
        <h2 className="font-bold text-sm">{product.productName}</h2>
        <p
          style={{
            backgroundColor: `color-mix(in srgb, ${product.color} 20%, white)`,
            color: textColor,
          }}
          className="bg-gray-200 px-3 py-1 w-fit rounded-2xl text-[10px] font-medium capitalize mb-2"
        >
          {product.color}
        </p>
        <small className="text-gray-500 text-[10px] mb-3">REF. {product.refNumber}</small>
        <strong className="text-[#b44f4f] text-lg">${product.price.toFixed(2)}</strong>
        <button
          onClick={() => addToCart(product)}
          type="button"
          aria-label="Add to basket"
          className="mt-3 w-full inline-flex items-center justify-center gap-2 font-semibold transition duration-200 shadow-xs bg-black/80 text-white text-xs py-3 rounded-lg cursor-pointer hover:bg-black/90"
        >
          <ShoppingCart className="mr-2" size={18} />
          Add to Basket
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
