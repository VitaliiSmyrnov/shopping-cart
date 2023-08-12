import React from "react";

import css from "./CurrencyFormatter.module.scss";

interface IProps {
  amount: number;
}

export const CurrencyFormatter: React.FC<IProps> = ({ amount }) => {
  const formattedAmount = amount.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
  });

  return <span className={css.currency}>{formattedAmount}</span>;
};
