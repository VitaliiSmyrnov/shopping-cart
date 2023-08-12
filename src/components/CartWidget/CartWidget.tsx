import React from "react";
import { useNavigate } from "react-router-dom";

import shoppingCart from "src/assets/svg/shopping-cart.svg";

import css from "./CartWidget.module.scss";

interface IProps {
  productsCount: number;
}

export const CartWidget: React.FC<IProps> = ({ productsCount }) => {
  const navigate = useNavigate();

  return (
    <button className={css.container} onClick={() => navigate("/cart")}>
      <span className={css.productsCount}>{productsCount}</span>
      <img
        className={css.shoppingCart}
        src={shoppingCart}
        alt="Shopping-cart"
      />
    </button>
  );
};
