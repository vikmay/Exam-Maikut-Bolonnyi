import { RootState } from "@/../store/store";
import { useAppSelector } from "@/../store/store";
import FavItemCard from "@/components/favorites/favItemCard";
import { Product } from "@/../../interfaces";

const FavoritesPage = () => {
  const favoritesItems = useAppSelector(
    (state: RootState) => state.favorites?.favoritesItems
  );

  return (
    <>
      <div>
        FAVORITES
        {favoritesItems?.map((product) => (
          <FavItemCard product={product} />
        ))}
      </div>
    </>
  );
};

export default FavoritesPage;
