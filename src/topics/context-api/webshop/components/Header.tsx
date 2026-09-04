import { useContext } from 'react';
import WebshopContext from '../WebshopContext';
import { ShoppingCart } from 'lucide-react';

function Header() {
  const { counter, openModal } = useContext(WebshopContext);

  return (
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
        <small className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1.5 text-xs">
          {counter}
        </small>
      )}
    </div>
  );
}
export default Header;
