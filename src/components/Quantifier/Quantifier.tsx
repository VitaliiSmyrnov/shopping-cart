import React, { useState } from "react";

import css from "./Quantifier.module.scss";

type Operation = "increase" | "decrease";

interface IProps {
  remove: (productId: number) => void;
  update: (productId: number, operation: Operation) => void;
  productId: number;
}

export const Quantifier: React.FC<IProps> = ({ remove, update, productId }) => {
  const [value, setValue] = useState(1);

  const reduce = (): void => {
    update(productId, "decrease");

    setValue((prevState) => {
      const updatedValue = prevState - 1;

      if (updatedValue === 0) {
        remove(productId);
      }

      return updatedValue;
    });
  };

  const increase = (): void => {
    update(productId, "increase");
    setValue((prevState) => prevState + 1);
  };

  return (
    <div className={css.quantifier}>
      <input
        type="button"
        value="-"
        className={css.buttonMinus}
        onClick={reduce}
      />
      <input
        type="number"
        step="1"
        max=""
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        className={css.quantityField}
      />
      <input
        type="button"
        value="+"
        className={css.buttonPlus}
        onClick={increase}
      />
    </div>
  );
};
