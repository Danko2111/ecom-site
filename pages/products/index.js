import ProductsHeader from "@/components/productsHeader/ProductsHeader";
import ProductsTable from "@/components/productsTable/ProductsTable";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/footer";
import style from "../../styles/products/Products.module.scss";
import React from "react";
import CartAside from "@/components/cartAside/CartAside";
import { useAppContext } from "@/context/AppWrapper";

function index() {
  const { setCartOpen, cartOpen } = useAppContext();
  const handleClick = (e) => {
    if (cartOpen) {
      setCartOpen(false);
    }
  };
  return (
    <main onClick={handleClick}>
      <Header />
      <section className={style.wrapper}>
        <ProductsHeader />
        <ProductsTable />
      </section>
      <Footer />
      <CartAside />
    </main>
  );
}

export default index;
