import React from "react";
import style from "./Tip.module.scss";

function Tip({ image, title, subtitle, copy }) {
  return (
    <article className={style.tip}>
      <div className={style.tip__image}>{image}</div>
      <h4 className={style.tip__title}>{title}</h4>
      <p className={style.tip__subtitle}>{subtitle}</p>
      <p className={style.tip__copy}>{copy}</p>
    </article>
  );
}

export default Tip;
