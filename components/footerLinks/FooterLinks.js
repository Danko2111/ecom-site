import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../assets/logo/Apparel.svg";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { HiChevronDoubleUp } from "react-icons/hi";
import style from "./FooterLinks.module.scss";

function FooterLinks() {
  function handleScrollButton() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <section className={style.footerLinks}>
      <div className={style.footerLinks__main}>
        {" "}
        <div className={style.footerLinks__info}>
          <Image
            src={logo}
            alt="company logo"
            className={style.footerLinks___logo}
          />
          <h4 className={style.footerLinks__cta}>questions?</h4>
          <p className={style.footerLinks__number}>{`+1 888-999-4747`}</p>
        </div>
        <form className={style.form}>
          <div className={style.form__textWrapper}>
            <h4 className={style.form__title}>subscribe to our newsletter</h4>
            <p className={style.form__subtitle}>
              Lorem ipsum dolor sit amet. Nam ut odio orci. Donec rutrum vitae.
            </p>
          </div>
          <div className={style.form__inputWrapper}>
            <input
              type="email"
              className={style.form__input}
              placeholder="Email Address"
            ></input>
            <button className={style.form__button}>submit</button>
          </div>
        </form>
        <div className={style.footerLinks__links}>
          <article className={style.footerLinks__account}>
            <h4 className={style.footerLinks__title}>My Account</h4>
            <Link className={style.footerLinks__link} href="/">
              About Us
            </Link>
            <Link className={style.footerLinks__link} href="/">
              Contact Us
            </Link>
            <Link className={style.footerLinks__link} href="/">
              My Community
            </Link>
            <Link className={style.footerLinks__link} href="/">
              Payment Methods
            </Link>
          </article>
          <article className={style.footerLinks__about}>
            <h4 className={style.footerLinks__title}>About</h4>
            <Link className={style.footerLinks__link} href="/">
              About Us
            </Link>
            <Link className={style.footerLinks__link} href="/">
              Contact Us
            </Link>
            <Link className={style.footerLinks__link} href="/">
              My Community
            </Link>
            <Link className={style.footerLinks__link} href="/">
              Payment Methods
            </Link>
          </article>
        </div>
        <div className={style.socialLinks}>
          <a href="https://www.facebook.com/" target="_blank">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <BsTwitter />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <BsInstagram />
          </a>
        </div>
      </div>
      <div className={style.footerLinks__copyright}>
        <p className={style.footerLinks__copyrightText}>
          Copyright @ 2023 Daniel Kolesnitski all rights reserved
        </p>
        <div
          className={style.footerLinks__scrollButton}
          onClick={handleScrollButton}
        >
          <HiChevronDoubleUp className={style.footerLinks__scrollButtonIcon} />
        </div>
      </div>
    </section>
  );
}

export default FooterLinks;
