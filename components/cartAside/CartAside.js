import React from "react";
import style from "./CartAside.module.scss";
import { RxCross2 } from "react-icons/rx";
import { useAppContext } from "@/context/AppWrapper";
import CartItemCard from "../cartItemCard/CartItemCard";

function CartAside() {
  const { cart, incQty, decQty, removeItem, cartOpen, setCartOpen } =
    useAppContext();

  const handleClick = (e) => {
    e.stopPropagation();
  };
  return (
    <section className={style.cartWrapper}>
      <div
        className={cartOpen ? style.cartBodyOpen : style.cartBodyClosed}
        onClick={handleClick}
      >
        <div className={style.cartHeader}>
          <h2 className={style.title}>My Bag</h2>
          <RxCross2
            className={style.cross}
            onClick={() => setCartOpen(false)}
          />
        </div>
        {cart ? (
          <ul className={style.cartList}>
            {cart.map((item) => (
              <CartItemCard item={item} />
            ))}
          </ul>
        ) : (
          <p className={style.emptyText}>
            Theres nothing here! Check out all the awesome things you can buy on
            GymLand!
          </p>
        )}
      </div>
    </section>
  );
}

export default CartAside;
