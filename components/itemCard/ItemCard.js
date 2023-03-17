import React from "react";
import Image from "next/image";
import itemImage from "../../assets/images/shorts.jpeg";
import { useAppContext } from "../../context/AppWrapper";
import style from "./ItemCard.module.scss";

function ItemCard({ item }) {
  const { addItem } = useAppContext();
  return (
    <li className={style.item}>
      <div className={style.item__itemWrapper}>
        <Image
          className={style.item__img}
          src={itemImage}
          alt="Thumbnail for an item"
        ></Image>
        <p className={style.item__subtitle}>Shop Now</p>
        <p className={style.item__name}>{item.name}</p>
        <p className={style.item__price}>${item.price}</p>
        <button className={style.item__button} onClick={() => addItem(item, 1)}>
          Add to cart
        </button>
      </div>
    </li>
  );
}

export default ItemCard;
