import React from "react";
import style from "./ProductsHeader.module.scss";
import { FiChevronDown } from "react-icons/fi";

function ProductsHeader() {
  return (
    <section className={style.wrapper}>
      <div className={style.results}>
        <p className={style.results__title}>Your Search Results</p>
        <p>{0} items found</p>
      </div>
      <div className={style.sort}>
        <label className={style.sort__label}>Sort By</label>
        <div className={style.sort__selectWrapper}>
          <select className={style.sort__select}>
            <option>Lowest Price First</option>
            <option>Highest Price First</option>
            <option>Name</option>
          </select>
          <FiChevronDown className={style.sort__chevron} />
        </div>
      </div>
    </section>
  );
}

export default ProductsHeader;
