import ProductItem from './ProductItem';
import type { ProductProps } from '../types';

type ProductsProps = {
  products: ProductProps[];
  error: Error | null;
  loading: boolean;
};

function Products({ products, error, loading }: ProductsProps) {
  if (loading) {
    return <div className="min-w-60 sm:min-w-126 md:min-w-3xl">Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (products.length === 0) {
    return <div>No products found.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </div>
  );
}

export default Products;
