import React from "react";
import FooterLinks from "../footerLinks/FooterLinks";
import NewsLetter from "../newsLetter/NewsLetter";
import TipsBanner from "../tips/TipsBanner";
import style from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={style.footerWrapper}>
      <TipsBanner />
      <NewsLetter />
      <FooterLinks />
    </footer>
  );
}

export default Footer;
