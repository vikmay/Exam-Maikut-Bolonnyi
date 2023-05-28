import React, { useState, useEffect } from "react";
import Link from "next/link";

//💬 Styles --//
import s from "@/layouts/header/index.module.scss";

//💬 Pages --//
import About from "@/pages/about";
import Catalog from "@/pages/catalog";

//💬 Components --//
import Nav from "@/components/nav";
import Likes from "@/components/likes";
import Search from "@/components/search";
import Cart from "@/components/cart";
//💬 Img //
import Logo from "../../../public/images/Logo.png";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleMenuToggle = () => {
    setClickCount(clickCount + 1);
  };

  const handleWindowResize = () => {
    setIsNavVisible(window.innerWidth > 1000);
  };

  useEffect(() => {
    setIsNavVisible(window.innerWidth > 1000); // Initialize isNavVisible inside useEffect
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (clickCount >= 2) {
      setIsMenuOpen(true);
    }
  }, [clickCount]);

  return (
    <>
      <header className={s.header}>
        <div className={s.logo}>
          <Link href="/">
            <Image src={Logo} width={94} height={68} alt="Logo" />
          </Link>
        </div>
        {isNavVisible && <Nav ulClassName={isMenuOpen ? s.open : ""} />}

        <div className={s.action__bar}>
          <Likes></Likes>
          <Search></Search>
          <Cart></Cart>
          <button className={s.menu__toggle} onClick={handleMenuToggle}>
            <span className={s.menu__icon}></span>
            <span className={s.menu__icon}></span>
            <span className={s.menu__icon}></span>
          </button>
          <a href="tel:+3800065628">
            <div className={s.phone__btn}>Телефонувати</div>
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
