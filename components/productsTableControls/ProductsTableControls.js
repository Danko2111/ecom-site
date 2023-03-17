import style from "./ProductsTableControls.module.scss";
import React from "react";

function ProductsTableControls() {
  return (
    <section className={style.controls}>
      <h3 className={style.controls__title}>Narrow Choices</h3>
      <article className={style.controls__control}>
        <h4 className={style.controls__subtitle}>Category</h4>
        <ul className={style.controls__controlList}>
          <li className={style.controls__controlItem}>Shirts & Tops</li>
          <li className={style.controls__controlItem}>Shorts</li>
          <li className={style.controls__controlItem}>Pants</li>
          <li className={style.controls__controlItem}>Hoodies & Sweatshirts</li>
          <li className={style.controls__controlItem}>Accessories</li>
          <li className={style.controls__controlItem}>Mens</li>
          <li className={style.controls__controlItem}>Womans</li>
          <li className={style.controls__controlItem}>Socks</li>
        </ul>
      </article>
      <article className={style.controls__control}>
        <h4 className={style.controls__subtitle}>Brand</h4>
        <ul className={style.controls__controlList}>
          <li className={style.controls__controlItem}>Filler</li>
          <li className={style.controls__controlItem}>Filler</li>
          <li className={style.controls__controlItem}>Filler</li>
          <li className={style.controls__controlItem}>Filler</li>
          <li className={style.controls__controlItem}>Filler</li>
          <li className={style.controls__controlItem}>Filler</li>
          <li className={style.controls__controlItem}>Filler</li>
          <li className={style.controls__controlItem}>Filler</li>
        </ul>
      </article>
      <article className={style.controls__control}>
        <h4 className={style.controls__subtitle}>Price</h4>
        <ul className={style.controls__controlList}>
          <li className={style.controls__controlItem}>$10.00 and Under</li>
          <li className={style.controls__controlItem}>$25.00 and Under</li>
          <li className={style.controls__controlItem}>$50.00 and Under</li>
          <li className={style.controls__controlItem}>$75.00 and Under</li>
          <li className={style.controls__controlItem}>$100.00 and Under</li>
          <li className={style.controls__controlItem}>$125.00 and Under</li>
          <li className={style.controls__controlItem}>$150.00 and Under</li>
          <li className={style.controls__controlItem}>$200.00 and Under</li>
          <li className={style.controls__controlItem}>$200.00 and Over</li>
        </ul>
      </article>
    </section>
  );
}

export default ProductsTableControls;
