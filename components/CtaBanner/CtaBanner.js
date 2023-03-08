import React from "react";
import Link from "next/link";
import style from "./CtaBanner.module.scss";

function CtaBanner() {
  return (
    <section className={style.ctaBanner}>
      <div className={style.ctaBanner__textWrapper}>
        <h3 className={style.ctaBanner__title}>explore the best of you</h3>
        <Link className={style.ctaBanner__button} href="/">
          shop now
        </Link>
      </div>
    </section>
  );
}

export default CtaBanner;
