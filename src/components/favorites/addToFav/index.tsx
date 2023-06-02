import { useDispatch } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "@/../../store/features/favoritesSlice";
import Image from "next/image";
import s from "./index.module.scss";
import { Product } from "@/../../interfaces";

interface Props {
  product: Product;
  id: number;
}

const AddToFavBtn = ({ product, id }: Props) => {
  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    if (product.isFavorite) {
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
              product.isFavorite ? "/images/fheart.svg" : "/images/heart.svg"
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
