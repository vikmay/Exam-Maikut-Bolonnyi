import { RootState } from "@/../store/store";
import { useAppSelector, useAppDispatch } from "@/../store/store";
import FavItemCard from "@/components/favorites/favItemCard";
import { Product } from "@/../../interfaces";
import s from "./index.module.scss";
import { emptyFavorites } from "@/../store/features/favoritesSlice";
import Link from "next/link"; 
import { Container, Row, Col } from 'react-bootstrap';  // Import these

const FavoritesPage = () => {
  const dispatch = useAppDispatch();
  const favoritesItems = useAppSelector(
    (state: RootState) => state.favorites?.favoritesItems
  );

  const emptyFavoritesList = () => {
    dispatch(emptyFavorites());
  };

  return (
    <Container>
      <Row>
        <Col className={s.fav_container}>
          <span className={s.fav_title}>Список бажань</span>
          {favoritesItems?.length > 0 ? (
            <>
              <button className={s.top_clear_btn} onClick={emptyFavoritesList}>Очистити список бажань</button>
              {favoritesItems?.map((product) => (
                <FavItemCard product={product} />
              ))}
              <button className={s.bottom_clear_btn} onClick={emptyFavoritesList}>Очистити список бажань</button>
            </>
          ) : (
            <>
              <span className={s.empty_list_message} >Ваш список бажань порожній</span>
              <Link className={s.go_to_catalog} href="/catalog">
                Йти до вибору товарів
              </Link>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default FavoritesPage;
