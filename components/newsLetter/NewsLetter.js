import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import style from "./NewsLetter.module.scss";

function NewsLetter() {
  return (
    <section className={style.newsletterWrapper}>
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
    </section>
  );
}

export default NewsLetter;
