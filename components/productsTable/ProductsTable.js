import React from "react";
import style from "./ProductsTable.module.scss";
import ProductsTableControls from "../productsTableControls/ProductsTableControls";
import ItemCard from "../itemCard/ItemCard";

function ProductsTable() {
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
