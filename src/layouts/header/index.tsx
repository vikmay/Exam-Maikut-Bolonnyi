import React, { useState, useEffect } from "react";
import Link from "next/link";
import s from "@/layouts/header/index.module.scss";
import Logo from "../../../public/images/Logo.png";
import Image from "next/image";

import Nav from "@/components/nav";
import Favorites from "@/components/favorites";
import Search from "@/components/search";
import Cart from "@/components/cart";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleMenuToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleWindowResize = () => {
    setIsNavVisible(window.innerWidth > 1000);
  };

  useEffect(() => {
    setIsNavVisible(window.innerWidth > 1000);
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <header className={s.header}>
        <div className={s.logo}>
          <Link href="/">
            <Image src={Logo} width={94} height={68} alt="Logo" />
          </Link>
        </div>
        {isNavVisible && (isNavOpen ? <Nav ulClassName={s.open} /> : <Nav />)}

        <div className={s.action__bar}>
          <Favorites></Favorites>
          <Search></Search>
          <Cart />
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
