import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import {
  addToFavorites,
  removeFromFavorites,
} from "@/store/features/favoritesSlice";
import Image from "next/image";
import s from "./index.module.scss";
import { Product } from "@/../../interfaces";

interface Props {
  product: Product;
  id: number;
  className?: string;
  isSimple?: boolean;
}

const AddToFavBtn = ({ product, id, className, isSimple }: Props) => {
  const dispatch = useDispatch();

  const favorites = useSelector((state: any) => state.favorites);
  const { favoritesItems } = favorites;

  const isFavorite = useMemo(() => {
    return favoritesItems.some((item: any) => item.id === product.id);
  }, [favoritesItems]);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(product));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  return (
    <>
      <button className={s.fav_btn} onClick={handleFavoriteClick}>
        {isSimple && (
          <div className={s.fav_btn_container}>
            <span className={s.fav_text_btn}>У бажання</span>
            <Image
              src={isFavorite ? "/images/fheart.svg" : "/images/heart.svg"}
              alt="heart_image"
              width={20}
              height={20}
            />
          </div>
        )}
        {!isSimple && (
          <Image
            src={isFavorite ? "/images/fheart.svg" : "/images/heart.svg"}
            alt="heart_image"
            width={20}
            height={20}
          />
        )}
      </button>
    </>
  );
};

export default AddToFavBtn;
