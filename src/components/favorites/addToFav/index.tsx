import { useDispatch } from "react-redux";
import { addToFavorites } from "@/../../store/features/favoritesSlice";
import Image from "next/image";
import s from "./index.module.scss";



const AddToFavBtn = ({ product }) => {
  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    dispatch(addToFavorites(product));
  };

  return (
    <div>
      <button className={s.fav_btn} onClick={handleFavoriteClick}>
        <Image
          src={
            product.isFavorite
              ? "@/../../public/images/likes.svg"
              : "@/../../public/images/likes.svg"
          }
          alt="heart_image"
          width={20}
            height={20}
        />
      </button>
    </div>
  );
};

export default AddToFavBtn;
