import React from "react";
import IntroItem from "../introItem/IntroItem";
import style from "./IntroItems.module.scss";

function IntroItems() {
  const itemsArr = [
    { category: "Exercise", name: `Mens Fitness 6" Shorts`, price: 34.99 },
    { category: "Exercise", name: `Mens Fitness 6" Shorts`, price: 34.99 },
    { category: "Exercise", name: `Mens Fitness 6" Shorts`, price: 34.99 },
    { category: "Exercise", name: `Mens Fitness 6" Shorts`, price: 34.99 },
    { category: "Exercise", name: `Mens Fitness 6" Shorts`, price: 34.99 },
    { category: "Exercise", name: `Mens Fitness 6" Shorts`, price: 34.99 },
    { category: "Exercise", name: `Mens Fitness 6" Shorts`, price: 34.99 },
    { category: "Exercise", name: `Mens Fitness 6" Shorts`, price: 34.99 },
    { category: "Exercise", name: `Mens Fitness 6" Shorts`, price: 34.99 },
    { category: "Exercise", name: `Mens Fitness 6" Shorts`, price: 34.99 },
  ];
  return (
    <section className={style.container}>
      <div className={style.controls}>
        <h3 className={style.controls__title}>shop by</h3>
        <form className={style.controls__list}>
          <div className={style.controls__itemContainer}>
            <input
              className={style.controls__item}
              id="all"
              type="radio"
            ></input>
            <label htmlFor="all" className={style.controls__label}>
              all
            </label>
          </div>
          <div className={style.controls__itemContainer}>
            <input
              className={style.controls__item}
              id="accessories"
              type="radio"
            ></input>
            <label htmlFor="accessories" className={style.controls__label}>
              accessories
            </label>
          </div>
          <div className={style.controls__itemContainer}>
            <input
              className={style.controls__item}
              id="men"
              type="radio"
            ></input>
            <label htmlFor="men" className={style.controls__label}>
              men
            </label>
          </div>
          <div className={style.controls__itemContainer}>
            <input
              className={style.controls__item}
              id="women"
              type="radio"
            ></input>
            <label htmlFor="women" className={style.controls__label}>
              women
            </label>
          </div>
          <div className={style.controls__itemContainer}>
            <input
              className={style.controls__item}
              id="shoes"
              type="radio"
            ></input>
            <label htmlFor="shoes" className={style.controls__label}>
              shoes
            </label>
          </div>
        </form>
      </div>
      <ul className={style.itemList}>
        {itemsArr.map((item, i) => (
          <IntroItem key={i} item={item} />
        ))}
      </ul>
    </section>
  );
}

export default IntroItems;
