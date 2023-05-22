import React from "react";
import Link from "next/link";
import s from "@/components/nav/index.module.scss";
const Nav = () => {
  return (
    <>
      <nav className={s.nav}>
        <ul className={s.ul}>
          <li>
            <Link href="/catalog">Каталог</Link>
          </li>
          <li>
            <Link href="/about">Про нас</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <Link href="/contact">Контакти</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
