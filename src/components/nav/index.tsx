import React, { memo } from "react";
import Link from "next/link";
import s from "@/components/nav/index.module.scss";

interface NavProps {
  ulClassName?: string;
  liClassName?: string;
  aClassName?: string;
  onItemClick?: () => void; // new prop to handle menu item clicks
}

function scrollToBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}

export const Nav: React.FC<NavProps> = ({
  ulClassName,
  liClassName,
  aClassName,
  onItemClick, // receive the new prop
}) => {
  const handleItemClick = (event: React.MouseEvent<HTMLElement>) => {
    // call onItemClick when a menu item is clicked
    if (onItemClick) {
      onItemClick();
    }
  };
  
  return (
    <nav className={s.nav}>
      <ul className={`${s.ul} ${ulClassName}`}>
        <li className={liClassName} onClick={handleItemClick}>
          <Link href="/catalog">Каталог</Link>
        </li>
        <li className={liClassName} onClick={handleItemClick}>
          <Link href="/about">Про нас</Link>
        </li>
        <li className={liClassName} onClick={handleItemClick}>
          <Link href="/faq">FAQ</Link>
        </li>
        <li onClick={handleItemClick}>
          <a className={liClassName} onClick={scrollToBottom}>Контакти</a>
        </li>
      </ul>
    </nav>
  );
};

export default memo(Nav);
