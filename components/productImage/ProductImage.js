import Image from "next/image";
import React from "react";
import style from "./ProductImage.module.scss";
import productImage from "../../assets/images/1.png";

function ProductImage() {
  return (
    <section className={style.wrapper}>
      <div className={style.mainImageWrapper}>
        <Image
          alt="main product large"
          src={productImage}
          className={style.mainImage}
        />
      </div>
      <div className={style.altImagesBar}>
        <div className={style.altImage}></div>
        <div className={style.altImage}></div>
        <div className={style.altImage}></div>
        <div className={style.altImage}></div>
      </div>
    </section>
  );
}

export default ProductImage;
