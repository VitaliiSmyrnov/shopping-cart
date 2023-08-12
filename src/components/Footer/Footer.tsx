import React from "react";

import css from "./Footer.module.scss";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={css.footer} data-cy="footer">
      <ul>
        <li className={css.footerLinks}>
          <a
            href="https://www.linkedin.com/in/vitalii-smyrnov/"
            target="_blank"
            rel="noopener noreferrer"
            data-cy="twitterLink"
          >
            linkedIn
          </a>{" "}
          &bull;{" "}
          <a
            href="https://github.com/VitaliiSmyrnov"
            target="_blank"
            rel="noopener noreferrer"
            data-cy="githubLink"
          >
            github
          </a>
        </li>
        <li className={css.footerCopyrights}>
          © 2022-{currentYear}. All rights reserved.
        </li>
       
      </ul>
    </footer>
  );
};
