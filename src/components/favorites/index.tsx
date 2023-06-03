import { useSelector } from "react-redux";
import { totalFavItemsSelector } from "@/../../store/features/favoritesSlice";
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
        <div className={s.fav_item_container}>
          <Image
            className={s.fav_icon}
            src={heartimg}
            width={24}
            height={22}
            alt="Likes"
          />
          {totalFavItems > 0 && (
            <span className={s.total_items}>{totalFavItems}</span>
          )}
        </div>
      </Link>
    </>
  );
};

export default Likes;
