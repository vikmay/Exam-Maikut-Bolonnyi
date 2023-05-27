import React from "react";
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
  return (
    <>
      <header className={s.header}>
        <div className={s.logo}>
          <Link href="/">
            <Image src={Logo} width={94} height={68} alt="Logo" />
          </Link>
        </div>
        <Nav />
        <div className={s.action__bar}>
          <Likes></Likes>
          <Search></Search>
          <Cart></Cart>
          <a href="tel:+3800065628">
            <div className={s.phone__btn}>Телефонувати</div>
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
