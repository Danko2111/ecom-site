import React from "react";
import thumbnail from "../../assets/images/shorts.jpeg";
import style from "./CartItemCard.module.scss";

function CartItemCard({ item }) {
  return (
    <div className={style.wrapper}>
      <img className={style.image} src={thumbnail} />
      <div className={style.itemInfo}>
        <h3 className={style.itemTitle}>{item.name}</h3>
        <p className={style.itemPrice}>{item.price}</p>
        <p className={style.itemCategory}>{item.category}</p>
        <p className={style.quantity}>{item.quantity}</p>
      </div>
    </div>
  );
}

export default CartItemCard;
