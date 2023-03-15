import React from "react";
import Link from "next/link";
import style from "./NewProducts.module.scss";

function NewProducts() {
  return (
    <section className={style.newProduct} id="offers">
      <div className={style.newProduct__text}>
        <h3 className={style.newProduct__title}>Abibas</h3>
        <h3 className={style.newProduct__subtitle}>futurecraft 4D</h3>
        <Link href="/" className={style.newProduct__ctaButton}>
          shop now
        </Link>
      </div>
    </section>
  );
}

export default NewProducts;
