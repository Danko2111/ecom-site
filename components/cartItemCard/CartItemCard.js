import React from "react";
import thumbnail from "../../assets/images/shorts.jpeg";
import style from "./CartItemCard.module.scss";
import Image from "next/image";
import { useAppContext } from "@/context/AppWrapper";

function CartItemCard({ item }) {
  const { removeItem, changeQty } = useAppContext();

  let itemPrice = item.price;

  if (item.quantity > 1) {
    itemPrice = item.price * item.quantity;
  }

  return (
    <div className={style.wrapper}>
      <Image className={style.image} src={thumbnail}></Image>
      <div className={style.itemInfo}>
        <p className={style.itemBrand}>Abbibas</p>
        <h3 className={style.itemTitle}>{item.name}</h3>
        <p className={style.size}>Size: 28</p>
        {item.quantity > 1 ? (
          <p className={style.eachPrice}>Each: ${item.price}</p>
        ) : (
          ""
        )}
        <p className={style.itemPrice}>${itemPrice.toFixed(2)}</p>
        <div className={style.functions}>
          <select
            className={style.qtySelect}
            value={item.quantity}
            onChange={(e) => changeQty(e.target.value, item.id)}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
          </select>
          <button
            className={style.removeButton}
            onClick={() => removeItem(item.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItemCard;
