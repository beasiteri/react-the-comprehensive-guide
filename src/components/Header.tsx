import { useContext } from 'react';
import WebshopContext from '../WebshopContext';
import { ShoppingCart } from 'lucide-react';

function Header() {
  const { counter, openModal } = useContext(WebshopContext);

  return (
    <header
      className="sticky top-0 z-40 flex items-center justify-between
             py-4 mb-8 border-b border-gray-200
             bg-white/95 backdrop-blur-sm px-4 sm:px-6 lg:px-8"
    >
      <div>
        <h1 className="text-[24px] tracking-wide">Mini Shop</h1>
        <p className="text-sm text-gray-500 tracking-[2px] -mt-1">Discover our collection</p>
      </div>
      <div className="relative">
        <button
          type="button"
          onClick={openModal}
          disabled={counter === 0}
          aria-label="Open cart"
          className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ShoppingCart />
        </button>

        {counter > 0 && (
          <small className="absolute -top-3 -right-3 bg-[#b44f4f] text-white rounded-full px-2 py-1 text-xs">
            {counter}
          </small>
        )}
      </div>
    </header>
  );
}
export default Header;
