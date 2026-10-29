export type ProductProps = {
  id: number;
  productName: string;
  color: string;
  refNumber: string;
  price: number;
  imageUrl: string;
};

export type CartItem = {
  product: ProductProps;
  quantity: number;
};