import Link from "next/link";
import React from "react";
import style from "./DiscountSection.module.scss";

function DiscountSection() {
  return (
    <section className={style.container}>
      <div className={style.boxLight}>
        <div className={style.boxLight__textWrapper}>
          <p className={style.boxLight__text}>Summer Sale</p>
          <p className={style.boxLight__subtext}>20% off</p>
        </div>
        <Link className={style.boxLight__button} href="/">
          shop now
        </Link>
      </div>
      <div className={style.boxDark}>
        <div className={style.boxDark__textWrapper}>
          <p className={style.boxDark__text}>Flash Sale</p>
          <p className={style.boxDark__subtext}>30% off</p>
        </div>
        <Link className={style.boxDark__button} href="/">
          shop now
        </Link>
      </div>
    </section>
  );
}

export default DiscountSection;
