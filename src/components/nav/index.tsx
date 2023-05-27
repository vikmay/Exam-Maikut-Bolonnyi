import React from "react";
import Link from "next/link";
import s from "@/components/nav/index.module.scss";

interface NavProps {
  ulClassName?: string;
  liClassName?: string;
  aClassName?: string;
}

const Nav: React.FC<NavProps> = ({ ulClassName, liClassName, aClassName }) => {
  return (
    <nav className={s.nav}>
      <ul className={`${s.ul} ${ulClassName}`}>
        <li className={liClassName}>
          <Link className={aClassName} href="/catalog">Каталог</Link>
        </li>
        <li className={liClassName}>
          <Link className={aClassName} href="/about">Про нас</Link>
        </li>
        <li className={liClassName}>
          <Link className={aClassName} href="/faq">FAQ</Link>
        </li>
        <li className={liClassName}>
          <Link className={aClassName} href="/contact">Контакти</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
