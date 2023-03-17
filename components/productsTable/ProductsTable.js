import React from "react";
import style from "./ProductsTable.module.scss";
import ProductsTableControls from "../productsTableControls/ProductsTableControls";
import ItemCard from "../itemCard/ItemCard";

function ProductsTable() {
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

  return (
    <section className={style.wrapper}>
      <ProductsTableControls />
      <ul className={style.productsList}>
        {itemsArr.map((item, i) => (
          <ItemCard item={item} key={i} />
        ))}
      </ul>
    </section>
  );
}

export default ProductsTable;
