import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Col, Container, Row, Tab } from "react-bootstrap";
import { Product } from "../../../interfaces";
import productsList from "@/data/products/products.json";
import s from "./index.module.scss";
import Tabs from "../../components/tabs";
interface ProductPageProps {}

const ProductPage: React.FC<ProductPageProps> = () => {
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("");

  useEffect(() => {
    if (!router.isReady) return; // Only execute when the router's query params are ready

    const id = router.query.id;
    const productData = productsList.find(
      (product: Product) => product.id.toString() === id
    );

    setProduct(productData);
    setSelectedColor(productData?.colors[0]);
  }, [router.isReady, router.query]);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  if (!product) return <div>Loading...</div>;

  const productColors = product.colors.slice(0, 4);

  return (
    <>
      {/* Display product details */}
      <Container className={s.product__card_container}>
        <Row className={s.product__card_block}>
          <Col className={s.img__block}>
            <Image
              src={product?.images[0]}
              alt={product?.title}
              width={420}
              height={418}
            />
          </Col>
          <Col className={s.text__block}>
            <div className={s.text__block_title}>
              {product?.title.slice(0, 26)}
            </div>
            <div className={s.text__block_model}>
              {product?.title.slice(28)}
            </div>
            <div className={s.text__block_producer}>{product?.producer}</div>
            <ul className={s.text__block_features}>
              {product?.features.slice(0, 5).map((feature, index) => (
                <li key={index}>
                  <span className={s.feature_label}>{feature.label}:</span>{" "}
                  <span className={s.feature_value}>{feature.value}</span>
                </li>
              ))}
            </ul>
            <div className={s.text__block_color}>
              Колір Виробника: {selectedColor}
              <div className={s.text__block_color_all}>
                {productColors.map((color, index) => (
                  <span
                    key={index}
                    className={`${s.color_item} ${
                      selectedColor === color ? s.selected_color : ""
                    }`}
                    onClick={() => handleColorChange(color)}
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>

            <div className={s.text__block_price}>{product?.price}грн</div>
            <span className={s.text__block_stock}>В наявності</span>
            <div className={s.text__block_btn}>1</div>
            <div className={s.text__block_btn}>1</div>
          </Col>
        </Row>
        <Row>
          <Col>Photos</Col>
          <Col>
            <Tabs></Tabs>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductPage;
