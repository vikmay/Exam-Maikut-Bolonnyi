import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import s from "./index.module.scss";
import Tabs from "../../components/tabs";
const SingleCard = (props: any) => {
  const { product } = props;

  return (
    <Container>
      <Row className={s.product__card}>
        <Col className={s.product__img}>
          <Image
            src={product?.images[0]}
            alt={product?.title}
            width={200}
            height={200}
          />
        </Col>
        <Col className={s.product__text}>text</Col>
      </Row>
      <Row>
        <Col>
          <Tabs></Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleCard;
