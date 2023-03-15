import React from "react";
import Image from "next/image";
import itemImage from "../../assets/images/shorts.jpeg";
import style from "./IntroItem.module.scss";

function IntroItem({ item, handleCartUpdate }) {
  const buttonClickHandler = () => {
    handleCartUpdate(item);
  };
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
        <button className={style.item__button} onClick={buttonClickHandler}>
          add to cart
        </button>
      </div>
    </li>
  );
}

export default IntroItem;
