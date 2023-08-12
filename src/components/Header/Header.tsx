import React from "react";
import { Link } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";

import { CartWidget } from "src/components/CartWidget";

import { CartProps } from "src/modules/IProduct";

import css from "./Header.module.scss";

import logo from "/logo.svg";

export const Header: React.FC = () => {
  const [cart] = useLocalStorageState<CartProps>("cart", {});

  const productsCount: number = Object.keys(cart || {}).length;

  return (
    <header className={css.header}>
      <div>
        <Link to="/">
          <img src={logo} alt="Shopping Cart App" className={css.logo} />
        </Link>
      </div>
      <div>
        <CartWidget productsCount={productsCount} />
      </div>
    </header>
  );
};
