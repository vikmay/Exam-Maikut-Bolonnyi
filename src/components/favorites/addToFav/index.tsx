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
}


const AddToFavBtn = ({ product, id }: Props) => {
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
      <div>
        <button className={s.fav_btn} onClick={handleFavoriteClick}>
          <Image
            src={
              isFavorite ? "/images/fheart.svg" : "/images/heart.svg"
            }
            alt="heart_image"
            width={20}
            height={20}
          />
        </button>
      </div>
    </>
  );
};

export default AddToFavBtn;
