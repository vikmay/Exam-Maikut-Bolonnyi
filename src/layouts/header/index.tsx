import React from "react";
import Link from "next/link";
// Styles //
import s from "@/layouts/header/index.module.scss";
// Pages //
import About from "@/pages/about";
import Catalog from "@/pages/catalog";
const Header = () => {
  return (
    <>
      <header className={s.header}>
        <div className={s.logo}>
          <Link href="/">LOGO</Link>
        </div>
        <nav className={s.nav}>
          <ul>
            <li>
              <Link href="catalog">Каталог</Link>
            </li>
            <li>
              <Link href="about">Про нас</Link>
            </li>
            <li>
              <Link href="">FAQ</Link>
            </li>
            <li>
              <Link href="">Контакти</Link>
            </li>
          </ul>
        </nav>
        <div className="action__bar"></div>
      </header>
    </>
  );
};

export default Header;
