import React from "react";

import css from "./Loader.module.scss";

export const Loader: React.FC = () => {
  return (
    <div className={css.loader}>
      <div className={css.spinner}></div>
    </div>
  );
};
