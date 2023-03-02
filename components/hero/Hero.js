import React from "react";
import style from "./Hero.module.scss";

function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.hero__bg}>
        <p className={style.hero__uptext}>Spring / Summer Season</p>
        <h2 className={style.hero__text}>Up to 50% off</h2>
        <p className={style.hero__subtext}>
          Starting at<span>$29.99</span>
        </p>
        <a className={style.hero__button}>shop now</a>
      </div>
    </section>
  );
}

export default Hero;
