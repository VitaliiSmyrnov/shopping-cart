import React from "react";
import useLocalStorageState from "use-local-storage-state";

import { Quantifier } from "src/components/Quantifier";
import { TotalPrice } from "src/components/TotalPrice";

import { CartProps, Operation } from "src/modules/IProduct";

import css from "./Cart.module.scss";

export const Cart: React.FC = () => {
  const [cart, setCart] = useLocalStorageState<CartProps>("cart", {});

  const handleRemoveProduct = (productId: number): void => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[productId];
      return updatedCart;
    });
  };

  const handleUpdateQuantity = (productId: number, operation: Operation) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId]) {
        if (operation === "increase") {
          updatedCart[productId] = {
            ...updatedCart[productId],
            quantity: updatedCart[productId].quantity + 1,
          };
        } else {
          updatedCart[productId] = {
            ...updatedCart[productId],
            quantity: updatedCart[productId].quantity - 1,
          };
        }
      }
      return updatedCart;
    });
  };

  const getProducts = () => Object.values(cart || {});

  const totalPrice = getProducts().reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <section className={css.cart}>
      <h1>Cart</h1>

      <div className={css.container}>
        {getProducts().map((product) => (
          <div className={css.product} key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <Quantifier
              remove={() => handleRemoveProduct(product.id)}
              productId={product.id}
              update={handleUpdateQuantity}
            />
          </div>
        ))}
      </div>

      <TotalPrice amount={totalPrice} />
    </section>
  );
};
