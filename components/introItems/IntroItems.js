import React, { useState } from "react";
import IntroItem from "../introItem/IntroItem";
import style from "./IntroItems.module.scss";

function IntroItems() {
  const itemsArr = [
    {
      category: ["Exercise", "all", "men"],
      name: `Mens Fitness 6" Shorts`,
      price: 34.99,
    },
    {
      category: ["Exercise", "all", "men"],
      name: `Mens Fitness 6" Shorts`,
      price: 34.99,
    },
    {
      category: ["Exercise", "all", "men"],
      name: `Mens Fitness 6" Shorts`,
      price: 34.99,
    },
    {
      category: ["Exercise", "all", "men"],
      name: `Mens Fitness 6" Shorts`,
      price: 34.99,
    },
    {
      category: ["Shoes", "all", "men"],
      name: `Mens Fitness 6" Shorts`,
      price: 34.99,
    },
    {
      category: ["Shoes", "all", "men"],
      name: `Mens Fitness 6" Shorts`,
      price: 34.99,
    },
    {
      category: ["Exercise", "all", "men"],
      name: `Mens Fitness 6" Shorts`,
      price: 34.99,
    },
    {
      category: ["Shoes", "all", "women"],
      name: `Mens Fitness 6" Shorts`,
      price: 34.99,
    },
    {
      category: ["Accessories", "all", "women"],
      name: `Mens Fitness 6" Shorts`,
      price: 34.99,
    },
    {
      category: ["Accessories", "all", "women"],
      name: `Mens Fitness 6" Shorts`,
      price: 34.99,
    },
  ];

  const [categorySort, setCategorySort] = useState("all");
  const handleRadioSelect = (e) => {
    setCategorySort(e.target.id);
  };

  return (
    <section className={style.container}>
      <div className={style.controls}>
        <h3 className={style.controls__title}>shop by</h3>
        <form className={style.controls__list} onChange={handleRadioSelect}>
          <div className={style.controls__itemContainer}>
            <input
              className={style.controls__item}
              id="all"
              type="radio"
              name="category"
              defaultChecked
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
              name="category"
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
              name="category"
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
              name="category"
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
              name="category"
            ></input>
            <label htmlFor="shoes" className={style.controls__label}>
              shoes
            </label>
          </div>
        </form>
      </div>
      <ul className={style.itemList}>
        {itemsArr
          .filter((item) => item.category.includes(categorySort))
          .map((item, i) => (
            <IntroItem key={i} item={item} />
          ))}
      </ul>
    </section>
  );
}

export default IntroItems;
