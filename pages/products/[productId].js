import React from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/footer";
import { useRouter } from "next/router";
import { useAppContext } from "@/context/AppWrapper";
import CartAside from "@/components/cartAside/CartAside";
import style from "../../styles/products/product.module.scss";

function productPage() {
  const router = useRouter();
  const { setCartOpen, cartOpen } = useAppContext();
  const handleClick = () => {
    if (cartOpen) {
      setCartOpen(false);
    }
  };

  const { productId } = router.query;

  return (
    <main onClick={handleClick}>
      <Header />
      <section className={style.wrapper}></section>
      <Footer />
      <CartAside />
    </main>
  );
}
export default productPage;
