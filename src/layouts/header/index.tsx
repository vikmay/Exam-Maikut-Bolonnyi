import React, { useState, useEffect, memo } from "react";
import Link from "next/link";
import s from "@/layouts/header/index.module.scss";
import Logo from "../../../public/images/Logo.png";
import Image from "next/image";

import Nav from "@/components/nav";
import Favorites from "@/components/favorites";
import Search from "@/components/search";
import Cart from "@/components/cart";
import { Container } from "react-bootstrap";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleMenuToggle = () => {
    setIsNavOpen(!isNavOpen);
    console.log(123);
  };

  const handleWindowResize = () => {
    setIsNavVisible(window.innerWidth > 1000);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1000px)");

    setIsNavVisible(mediaQuery.matches);

    const handleWindowResize = () => {
      setIsNavVisible(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleWindowResize);

    return () => {
      mediaQuery.removeEventListener("change", handleWindowResize);
    };
  }, []);

  return (
    <>
      <Container className={s.container__header}>
        <header className={s.header}>
          <div className={s.logo}>
            <Link href="/">
              <Image
                src={Logo}
                width={94}
                height={68}
                alt="Логотип"
                loading="eager"
                priority
              />
            </Link>
          </div>
          {isNavVisible && (
            <Nav
              ulClassName={isNavOpen ? `${s.ul} ${s.open}` : s.ul}
              liClassName={s.li}
              aClassName={s.a}
            />
          )}

          <div className={s.action__bar}>
            <Favorites></Favorites>
            <Search focus={undefined} />

            <Cart />
            <button
              className={`${s.menu__toggle} ${isNavOpen ? s.active : ""}`}
              onClick={handleMenuToggle}
            >
              <span
                className={`${s.menu__icon} ${
                  isNavOpen ? s.activeMenuIcon : ""
                }`}
              ></span>
              <span
                className={`${s.menu__icon} ${
                  isNavOpen ? s.activeMenuIcon : ""
                }`}
              ></span>
              <span
                className={`${s.menu__icon} ${
                  isNavOpen ? s.activeMenuIcon : ""
                }`}
              ></span>
            </button>
            <a href="tel:+3800065628">
              <div className={s.phone__btn}>Телефонувати</div>
            </a>
          </div>
        </header>
      </Container>
    </>
  );
};

export default memo(Header);
