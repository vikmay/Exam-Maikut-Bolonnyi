import React from "react";
import Link from "next/link";
import s from "@/components/nav/index.module.scss";

interface NavProps {
  ulClassName?: string;
  liClassName?: string;
  aClassName?: string;
  onItemClick?: () => void;
}

const Nav: React.FC<NavProps> = ({
  ulClassName,
  liClassName,
  aClassName,
  onItemClick,
}) => {
  const handleItemClick = () => {
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <nav className={s.nav}>
      <ul className={`${s.ul} ${ulClassName}`}>
        <li className={liClassName}>
          <Link
            className={aClassName}
            href="/catalog"
            onClick={handleItemClick}
          >
            Каталог
          </Link>
        </li>
        <li className={liClassName}>
          <Link className={aClassName} href="/about" onClick={handleItemClick}>
            Про нас
          </Link>
        </li>
        <li className={liClassName}>
          <Link className={aClassName} href="/faq" onClick={handleItemClick}>
            FAQ
          </Link>
        </li>
        <li className={liClassName}>
          <Link
            className={aClassName}
            href="/contact"
            onClick={handleItemClick}
          >
            Контакти
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
