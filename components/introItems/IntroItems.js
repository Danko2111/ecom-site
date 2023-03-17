import React, { useState } from "react";
import ItemCard from "@/components/itemCard/ItemCard";
import style from "./IntroItems.module.scss";

function IntroItems({ handleCartUpdate }) {
  const itemsArr = [
    {
      id: "121314-123123-123-123123123",
      category: ["Exercise", "all", "men"],
      name: `Mens Fitness 6" Shorts`,
      price: 34.99,
    },
    {
      id: "12234314-3123-123-123123",
      category: ["Exercise", "all", "men"],
      name: `Mens Fitness 6" Shorts`,
      price: 34.99,
    },
    {
      id: "5s21314-1d3123-123-1sdfsdf3123",
      category: ["Exercise", "all", "men"],
      name: `Mens Fitness 6" Shorts`,
      price: 34.99,
    },
    {
      id: "5s214-1d3123-123-1s444fsdf3123",
      category: ["Exercise", "all", "men"],
      name: `Mens Fitness 6" Shorts`,
      price: 34.99,
    },
    {
      id: "5sdd1314-1dg23-123-1sdf3123",
      category: ["Shoes", "all", "men"],
      name: `Mens Fitness 6" Shorts`,
      price: 34.99,
    },
    {
      id: "5ggg1314-1d3asd3-123-1sdfsaa3123",
      category: ["Shoes", "all", "men"],
      name: `Mens Fitness 6" Shorts`,
      price: 34.99,
    },
    {
      id: "5s21314-1d31nnn-123-1sdfsbbn123",
      category: ["Exercise", "all", "men"],
      name: `Mens Fitness 6" Shorts`,
      price: 34.99,
    },
    {
      id: "5sbvsd314-1d3sss3-123-1sssdf3123",
      category: ["Shoes", "all", "women"],
      name: `Mens Fitness 6" Shorts`,
      price: 34.99,
    },
    {
      id: "5s21314-1123-123-1sdbb3123",
      category: ["Accessories", "all", "women"],
      name: `Mens Fitness 6" Shorts`,
      price: 34.99,
    },
    {
      id: "5s324v14-1d3123-123-1shhfas343",
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
            <ItemCard key={i} item={item} handleCartUpdate={handleCartUpdate} />
          ))}
      </ul>
    </section>
  );
}

export default IntroItems;
