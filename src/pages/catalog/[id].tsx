import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Col, Container, Row, Tab } from "react-bootstrap";
import { Product } from "../../../interfaces";
import productsList from "@/data/products/products.json";
import s from "./index.module.scss";
import Tabs from "../../components/tabs";
import toast, { Toaster } from "react-hot-toast";

interface ProductPageProps {}

const ProductPage: React.FC<ProductPageProps> = () => {
  // Toaster //
  const notify = () => {
    const { name, phone, comment } = formData;
    toast(`✔Ім’я: ${name}
    
    ✔Відгук: Надіслано`);
  };
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: "",
  });
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

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
      <Container className={s.features__section}>
        <Row>
          <p className={s.title}>характеристики</p>
          <Col>
            <Row className={s.features__section_left}>
              {product?.features.slice(0, 6).map((feature, index) => (
                <React.Fragment key={index}>
                  <Col xs={6} className={`${s.label} ${s.labelMargin}`}>
                    {feature.label}
                  </Col>
                  <Col xs={6} className={`${s.value} ${s.valueMargin}`}>
                    {feature.value}
                  </Col>
                </React.Fragment>
              ))}
            </Row>
          </Col>

          <Col>
            <Row className={s.features__section_right}>
              {product?.features.slice(6, 12).map((feature, index) => (
                <React.Fragment key={index}>
                  <Col xs={6} className={`${s.label} ${s.labelMargin}`}>
                    {feature.label}
                  </Col>
                  <Col xs={6} className={`${s.value} ${s.valueMargin}`}>
                    {feature.value}
                  </Col>
                </React.Fragment>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className={s.description__section}>
        <Row>
          <p className={s.description__section_title}>Опис</p>
          <Col className={s.description__section_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et error
            nisi quidem similique ab nemo laudantium doloribus commodi
            laboriosam quisquam, ut fugiat eligendi excepturi nesciunt, enim
            soluta consequatur at obcaecati. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Et error nisi quidem similique ab nemo
            laudantium doloribus commodi laboriosam quisquam, ut fugiat eligendi
            excepturi nesciunt, enim soluta consequatur at obcaecati.
          </Col>
        </Row>
      </Container>
      <Container className={s.review__section}>
        <Row>
          <Col className={s.review__section_card}>Card</Col>
          <Col className={s.review__section_form}>
            <p className={s.review__section_title}>Написати відгук</p>
            <input
              className={s.review__section_form_input}
              type="text"
              placeholder="Ім’я"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              className={s.review__section_form_input}
              type="text"
              placeholder="Відгук"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
            />
            <button className={s.review__section_form_btn} onClick={notify}>
              Надіслати відгук
            </button>
            <Toaster position="top-right" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductPage;
