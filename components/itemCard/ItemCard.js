import React from "react";
import Image from "next/image";
import itemImage from "../../assets/images/shorts.jpeg";
import { useAppContext } from "../../context/AppWrapper";
import style from "./ItemCard.module.scss";

function ItemCard({ item }) {
  const { addItem, setCartOpen } = useAppContext();

  const handleButtonClick = (e) => {
    e.stopPropagation();
    addItem(item, 1);
    setCartOpen(true);
  };
  return (
    <li className={style.item}>
      <div className={style.item__itemWrapper}>
        <Image
          className={style.item__img}
          src={itemImage}
          alt="Thumbnail for an item"
        ></Image>
        <p className={style.item__brand}>Shop Now</p>
        <p className={style.item__name}>{item.name}</p>
        <p className={style.item__price}>${item.price}</p>
        <button className={style.item__button} onClick={handleButtonClick}>
          Add to Cart
        </button>
      </div>
    </li>
  );
}

export default ItemCard;
