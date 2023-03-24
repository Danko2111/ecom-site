import React from "react";
import FooterLinks from "../footerLinks/FooterLinks";
import TipsBanner from "../tips/TipsBanner";
import style from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={style.footerWrapper}>
      <TipsBanner />
      <FooterLinks />
    </footer>
  );
}

export default Footer;
