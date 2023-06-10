// import necessary libraries, components and styles
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import s from "./index.module.scss";
import Image from "next/image";
import CrossButton from "@/utils/crossBtn";
import AddToCartBtn from "@/components/cart/addToCart";

// import required redux action and hook
import { removeFromFavorites } from "@/../../store/features/favoritesSlice";
import { useAppDispatch } from "@/../../store/store";

// import necessary types
import { Product } from "@/../../interfaces";

// Define the type for component props
interface Props {
  product: Product;
}

// FavItemCard component
const FavItemCard = ({ product }: Props) => {
  // use the redux dispatch hook
  const dispatch = useAppDispatch();

  // return null if there is no product
  if (!product) {
    return null;
  }

  // component render
  return (
    <Container>
      <Row className={s.favItem__container}>
        <Col xs={12} sm={12} md={2} className={s.favItem__imgNameWrapper}>
          <Image
            src={product.images[0]}
            width={100}
            height={100}
            alt={product.title}
            className={s.favItem__image}
          />
        </Col>

        <Col xs={12} sm={12} md={4} lg={3}>
          <div className={s.favItem__title}>{product.title.slice(0, 26)}</div>
          <div className={s.favItem__cardModel}>
            {product.title.slice(28, 64)}
          </div>
        </Col>

        <Col xs={12} sm={4} md={2}>
          <div className={s.favItem__itemPrice}>{product.price} грн</div>
        </Col>

        <Col xs={12} sm={1}>
          <CrossButton onClick={() => dispatch(removeFromFavorites(product))} />
        </Col>

        <Col xs={12} sm={8} md={4}>
          <AddToCartBtn
            id={product.id}
            className={s.btn__simple}
            product={product}
            simple={true}
            btnText="Додати до кошика"
            increaseClassName={s.btn__increase}
            decreaseClassName={s.btn__decrease}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default FavItemCard;
