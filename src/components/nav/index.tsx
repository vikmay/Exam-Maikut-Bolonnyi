import React, { memo } from "react";
import Link from "next/link";
import s from "@/components/nav/index.module.scss";

interface NavProps {
  ulClassName?: string;
  liClassName?: string;
  aClassName?: string;
}

export const Nav: React.FC<NavProps> = ({
  ulClassName,
  liClassName,
  aClassName,
}) => {
  return (
    <nav className={s.nav}>
      <ul className={`${s.ul} ${ulClassName}`}>
        <li className={liClassName}>
          <Link href="/catalog">Каталог</Link>
        </li>
        <li className={liClassName}>
          <Link href="/about">Про нас</Link>
        </li>
        <li className={liClassName}>
          <Link href="/faq">FAQ</Link>
        </li>
        <li className={liClassName}>
          <Link href="/contact">Контакти</Link>
        </li>
      </ul>
    </nav>
  );
};

export default memo(Nav);
