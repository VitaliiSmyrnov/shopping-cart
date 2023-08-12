import React, { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";

import { Api } from "src/services/api";
import { Loader } from "src/components/Loader";
import { CurrencyFormatter } from "src/components/CurrencyFormatter";

import css from "./Products.module.scss";

import { Product } from "src/modules/IProduct";

export interface CartProps {
  [productId: string]: Product;
}

export const Products: React.FC = () => {
  const [status, setStatus] = useState("idle");
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [cart, setCart] = useLocalStorageState<CartProps>("cart", {});

  useEffect(() => {
    (async () => {
      setStatus("pending");

      try {
        const data = await Api.fetchData();

        console.log("data", data);

        setProducts(data);
        setStatus("fulfilled");
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
          setStatus("rejected");
        }
      }
    })();
  }, []);

  const addToCart = (product: Product): void => {
    product.quantity = 1;

    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: product,
    }));
  };

  const isInCart = (productId: number): boolean =>
    Object.keys(cart || {}).includes(productId.toString());

  return (
    <section className={css.productPage}>
      {status === "pending" && <Loader />}

      {status === "fulfilled" && (
        <>
          <h1>Products</h1>

          <div className={css.container}>
            {products.map((product) => (
              <div className={css.product} key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <h3>{product.title}</h3>
                <p>
                  Price: <CurrencyFormatter amount={product.price} />
                </p>
                <button
                  disabled={isInCart(product.id)}
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {status === "rejected" && error !== null && <div>{error}</div>}
    </section>
  );
};
