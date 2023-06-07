import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import s from "./index.module.scss";
import productsList from "../../data/products/products.json";

const SingleCard = () => {
  const [products, setProducts] = useState(Object.values(productsList));

  const product = products[0];
  return (
    <Container className={s.product__card}>
      <Row>
        <Col>
          <div className={s.product__img}>
            <img src={product.images[0]} alt={product.title} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleCard;
