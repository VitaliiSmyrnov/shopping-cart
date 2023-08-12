import React from "react";

import { CurrencyFormatter } from "src/components/CurrencyFormatter";

import css from "./TotalPrice.module.scss";

interface IProps {
  amount: number;
}

export const TotalPrice: React.FC<IProps> = ({ amount }) => {
  return (
    <div className={css.totalPrice}>
      Total: {<CurrencyFormatter amount={amount} />}
    </div>
  );
};
