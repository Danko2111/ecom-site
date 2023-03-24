import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo/Apparel.svg";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useAppContext } from "@/context/AppWrapper";
import style from "./Header.module.scss";

function Header() {
  const { cart, setCartOpen } = useAppContext();

  let cartTotal = 0;

  if (cart.length > 0) {
    cartTotal = cart
      .map((item) => item.quantity)
      .reduce((items, item) => items + item);
  }

  return (
    <header className={style.header}>
      <nav className={style.navbar}>
        <Link href="/" className={style.navbar__logoLink}>
          <Image
            src={logo}
            alt="Site Logo"
            className={style.navbar__image}
          ></Image>
        </Link>
        <ul className={style.navbar__links}>
          <li className={style.navbar__item}>
            <Link href="/" className={style.navbar__link}>
              Collections
              <KeyboardArrowDownIcon
                fontSize="small"
                className={style.navbar__arrow}
              />
            </Link>
            <ul className={style.navbar__dropdownList}>
              <li className={style.navbar__dropdownItem}>
                <Link href="/">
                  Summer{" "}
                  <KeyboardArrowDownIcon
                    fontSize="small"
                    className={style.navbar__dropdownArrow}
                  />
                </Link>
              </li>
              <li className={style.navbar__dropdownItem}>
                <Link href="/">
                  Winter{" "}
                  <KeyboardArrowDownIcon
                    fontSize="small"
                    className={style.navbar__dropdownArrow}
                  />
                </Link>
              </li>
              <li className={style.navbar__dropdownItem}>
                <Link href="/">
                  Hiking{" "}
                  <KeyboardArrowDownIcon
                    fontSize="small"
                    className={style.navbar__dropdownArrow}
                  />
                </Link>
              </li>
              <li className={style.navbar__dropdownItem}>
                <Link href="/">
                  Apparel{" "}
                  <KeyboardArrowDownIcon
                    fontSize="small"
                    className={style.navbar__dropdownArrow}
                  />
                </Link>
              </li>
            </ul>
          </li>
          <li className={style.navbar__item}>
            <Link href="/products" className={style.navbar__link}>
              Products
              <KeyboardArrowDownIcon
                fontSize="small"
                className={style.navbar__arrow}
              />
            </Link>
            <ul className={style.navbar__dropdownList}>
              <li className={style.navbar__dropdownItem}>
                <Link href="/">
                  Footwear{" "}
                  <KeyboardArrowDownIcon
                    fontSize="small"
                    className={style.navbar__dropdownArrow}
                  />
                </Link>
              </li>
              <li className={style.navbar__dropdownItem}>
                <Link href="/">
                  Accessories{" "}
                  <KeyboardArrowDownIcon
                    fontSize="small"
                    className={style.navbar__dropdownArrow}
                  />
                </Link>
              </li>
              <li className={style.navbar__dropdownItem}>
                <Link href="/">
                  Tops{" "}
                  <KeyboardArrowDownIcon
                    fontSize="small"
                    className={style.navbar__dropdownArrow}
                  />
                </Link>
              </li>
              <li className={style.navbar__dropdownItem}>
                <Link href="/">
                  Bottoms{" "}
                  <KeyboardArrowDownIcon
                    fontSize="small"
                    className={style.navbar__dropdownArrow}
                  />
                </Link>
              </li>
            </ul>
          </li>
          <li className={style.navbar__item}>
            <a href="#offers" className={style.navbar__link}>
              Special Offers
            </a>
          </li>
        </ul>
        <ul className={style.navbar__utility}>
          <li className={style.navbar__item}>
            <a className={style.navbar__link}>
              <SearchIcon />
            </a>
          </li>
          <li className={style.navbar__item}>
            <div className={style.cart} onClick={() => setCartOpen(true)}>
              <ShoppingCartOutlinedIcon className={style.cartIcon} />
              {cart.length > 0 ? (
                <p className={style.cartCounter}>{cartTotal}</p>
              ) : (
                ""
              )}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
