import ProductsHeader from "@/components/productsHeader/ProductsHeader";
import ProductsTable from "@/components/productsTable/ProductsTable";
import style from "../../styles/products/Products.module.scss";
import React from "react";

function index({ handleCartUpdate }) {
  return (
    <section className={style.wrapper}>
      <ProductsHeader />
      <ProductsTable />
    </section>
  );
}

export default index;
