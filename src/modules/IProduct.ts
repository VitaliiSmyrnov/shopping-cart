export type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  image: string;
  quantity: number;
};

export interface CartProps {
  [productId: string]: Product;
}

export type Operation = "increase" | "decrease";
