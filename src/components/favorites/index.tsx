import { useSelector } from "react-redux";
import { totalFavItemsSelector } from "@/store/features/favoritesSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import heartimg from "../../../public/images/heart.svg";
import s from "./index.module.scss";

const Likes = () => {
  const totalFavItems = useSelector(totalFavItemsSelector);

  return (
    <>
      <Link href="/favorites">
        <div className={s.favItemContainer}>
          <Image
            className={s.favItemContainer__favIcon}
            src={heartimg}
            width={24}
            height={22}
            alt="Favorites"
          />
          {totalFavItems > 0 && (
            <span className={s.favItemContainer__totalItems}>
              {totalFavItems}
            </span>
          )}
        </div>
      </Link>
    </>
  );
};

export default Likes;
