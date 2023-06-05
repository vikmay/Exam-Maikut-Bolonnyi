import { FavItem } from "@/../../interfaces";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { removeFromFavorites } from "@/../../store/features/favoritesSlice";
import { useAppDispatch } from "@/../../store/store";
import s from "./index.module.scss";
import Image from "next/image";
import CrossButton from "@/utils/crossBtn";
import { Product } from "@/../../interfaces";
import AddToCartBtn from "@/components/cart/addToCart";

interface Props {
  product: Product;
}

const FavItemCard = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  if (!product) {
    return null;
  }

  return (
    <Container>
      <Row className={s.favItem_container}>
        <Col xs={12} sm={12} md={2} className={s.img_name_wrapper}>
          <Image
            src={product.images[0]}
            width={100}
            height={100}
            alt={product.title}
            className={s.image}
          />
        </Col>

        <Col xs={12} sm={12} md={4} lg={3}>
          <div className={s.title}>{product.title.slice(0, 26)}</div>
          <div className={s.card_model}>{product.title.slice(28, 64)}</div>
        </Col>

        <Col xs={12} sm={4} md={2}>
          <div className={s.item_price}>{product.price} грн</div>
        </Col>

        <Col xs={12} sm={1}>
          <CrossButton onClick={() => dispatch(removeFromFavorites(product))} />
        </Col>

        <Col xs={12} sm={8} md={4}>
          <AddToCartBtn
            id={product.id}
            className={s.btn_simple}
            product={product}
            simple={true}
            btnText="Додати до кошика"
            increaseClassName={s.increaseBtn}
            decreaseClassName={s.decreaseBtn}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default FavItemCard;
