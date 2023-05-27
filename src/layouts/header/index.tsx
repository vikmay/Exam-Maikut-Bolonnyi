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
//💬 Img //
import Logo from "../../../public/images/Logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <header className={s.header}>
        <div className={s.logo}>
          <Link href="/">
            <Image src={Logo} width={90} height={90} alt="Logo" />
          </Link>
        </div>
        <Nav />
        <div className="action__bar">
          <Likes></Likes>
          <button className={s.phone__btn}>Телефонувати</button>
        </div>
      </header>
    </>
  );
};

export default Header;
