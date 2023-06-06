import { CartItem } from "@/../../interfaces";
import React from "react";
import { decrement, increment, remove } from "@/../../store/features/cartSlice";
import { useAppDispatch } from "@/../../store/store";
import QtyBtn from "../qtyBtn";
import s from "./index.module.scss";
import Image from "next/image";
import CrossButton from "@/utils/crossBtn";
import { Container, Row, Col } from "react-bootstrap";

interface Props {
  cartItem: CartItem;
}

const CartItemCard = ({ cartItem }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <Container>
      <Row className={s.cartItem_container}>
        <Col xs={12} sm={2} lg={2} className={s.img_name_wrapper}>
          <Image
            src={cartItem.product?.images[0]}
            width={100}
            height={100}
            alt={cartItem.product.title}
            className={s.image}
          />
        </Col>
        <Col xs={12} sm={4} md={3} lg={3}>
          <div>
            <div className={s.title}>{cartItem.product.title.slice(0, 26)}</div>
            <div className={s.card_model}>
              {cartItem.product.title.slice(28)}
            </div>
          </div>
        </Col>

        <Col xs={12} sm={2} className={s.qtyBtn_container}>
          <QtyBtn
            qty={cartItem.qty}
            onDecrease={() => dispatch(decrement(cartItem.product))}
            onIncrease={() => dispatch(increment(cartItem.product))}
            increaseClassName={s.increase_btn}
            decreaseClassName={`${s.decrease_btn} ${
              cartItem.qty === 1 ? s.decrease_btn_disabled : ""
            }`}
            isInCart={true}
          />
        </Col>
        <Col xs={12} sm={4} md={2} className={s.item_price}>
          {cartItem.product.price} грн
        </Col>

        <Col xs={12} sm={2} md={1} >
        <CrossButton onClick={() => dispatch(remove(cartItem.product))} />
        </Col>
      </Row>
    </Container>
  );
};

export default CartItemCard;
