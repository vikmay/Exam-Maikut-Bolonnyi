import { RootState } from '@/store/store';
import { useAppSelector, useAppDispatch } from '@/store/store';
import FavItemCard from '@/components/favorites/favItemCard';
import s from './index.module.scss';
import { emptyFavorites } from '@/store/features/favoritesSlice';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

/**
 * FavoritesPage is a React Component rendering the list of favorite items
 * This component makes use of the state from Redux store (favoritesItems) which
 * represents the list of items the user has marked as favorite
 * The user can clear the list of favorites by clicking on the clear button
 * Each item in the favorites list is rendered using the FavItemCard component
 */
const FavoritesPage = () => {
    // Hooks from Redux toolkit to dispatch actions and access the state
    const dispatch = useAppDispatch();
    const favoritesItems = useAppSelector(
        (state: RootState) => state.favorites?.favoritesItems
    );

    // Handler to clear the favorites list
    const emptyFavoritesList = () => {
        dispatch(emptyFavorites());
    };

    return (
        <>
            {/* Title of the page */}
            <div className={s.favPage__title}>Список бажань</div>
            <Container>
                <Row>
                    <Col>
                        {/* Check if there are items in the favorites list */}
                        {favoritesItems?.length > 0 ? (
                            <>
                                {/* Favorites container */}
                                <div className={s.favPage__container}>
                                    {/* Clear favorites button */}
                                    <button
                                        className={s.favPage__clearBtn}
                                        onClick={emptyFavoritesList}
                                    >
                                        Очистити список бажань
                                    </button>
                                    {/* Favorites items list */}
                                    <div className={s.favPage__itemsWrapper}>
                                        {favoritesItems?.map((product) => (
                                            <FavItemCard
                                                key={product.id}
                                                product={product}
                                            />
                                        ))}
                                    </div>
                                </div>
                                {/* Clear favorites button at the bottom */}
                                <div className={s.favPage__bottomClearBtn}>
                                    <button onClick={emptyFavoritesList}>
                                        Очистити список бажань
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Message and link to catalog when the favorites list is empty */}
                                <div className={s.favPage__emptyContainer}>
                                    <div className={s.favPage__emptyMessage}>
                                        Ваш список бажань порожній
                                    </div>
                                    <Link
                                        className={s.favPage__goToCatalog}
                                        href="/catalog"
                                    >
                                        Йти до вибору товарів
                                    </Link>
                                </div>
                            </>
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default FavoritesPage;
