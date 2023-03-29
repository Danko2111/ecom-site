import React from "react";
import style from "./CartAside.module.scss";
import Image from "next/image";
import emptyCartImage from "../../assets/images/emptyCartImage.svg";
import { RxCross2 } from "react-icons/rx";
import { useAppContext } from "@/context/AppWrapper";
import CartItemCard from "../cartItemCard/CartItemCard";

function CartAside() {
  const { cart, cartOpen, setCartOpen } = useAppContext();

  let cartTotal = 0;
  if (cart.length > 0) {
    cartTotal = cart
      .map((item) => item.price * item.quantity)
      .reduce((items, item) => items + item);
  }

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
        {cart.length ? (
          <>
            <ul className={style.cartList}>
              {cart.map((item) => (
                <CartItemCard item={item} />
              ))}
            </ul>
            <div className={style.cartFooter}>
              <div className={style.cartTotalWrapper}>
                <div className={style.cartTotalTextWrapper}>
                  <p className={style.cartTotalText}>Estimated Total:</p>
                  <p className={style.cartTotalSubtext}>
                    Shipping, taxes and promo codes applied at checkout
                  </p>
                </div>
                <p className={style.cartTotal}>${cartTotal.toFixed(2)}</p>
              </div>

              <button className={style.checkoutButton}>
                Proceed to Checkout
              </button>
            </div>
          </>
        ) : (
          <>
            <p className={style.emptyText}>
              Theres nothing here! Check out all the awesome things you can buy
              on GymLand!
            </p>
            <Image className={style.emptyImage} src={emptyCartImage}></Image>
          </>
        )}
      </div>
    </section>
  );
}

export default CartAside;
