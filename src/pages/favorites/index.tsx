// Import the RootState from your Redux store
import { RootState } from "@/../store/store";
import { useAppSelector } from "@/../store/store";

const FavoritesPage = () => {
  // Note that state is now of type RootState
  const favoritesItems = useAppSelector((state: RootState) => state.favorites?.favoritesItems);

  return (
    <div>
      {favoritesItems?.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
      favorites
    </div>
  );
};

export default FavoritesPage;
