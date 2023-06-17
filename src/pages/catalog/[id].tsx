import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useRef } from "react";
import { Col, Container, Row, Tab } from "react-bootstrap";
import { Product } from "../../../interfaces";
import productsList from "@/data/products/products.json";
import s from "./index.module.scss";
import toast, { Toaster } from "react-hot-toast";
import ProductCard from "@/components/cards/product";
import AddToCartBtn from "@/components/cart/addToCart";
import AddToFavBtn from "@/components/favorites/addToFav";

interface ProductPageProps {}

const ProductPage: React.FC<ProductPageProps> = () => {
  const [selectedTab, setSelectedTab] = useState(""); // Початково нічого не вибрано

  // Scroll tabs //
  const descriptionRef = useRef<HTMLDivElement | null>(null);
  const scrollToDescription = () => {
    descriptionRef.current?.scrollIntoView({ behavior: "smooth" });
    setSelectedTab("description");
  };

  const featuresRef = useRef<HTMLDivElement | null>(null);
  const scrollFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
    setSelectedTab("features");
  };

  const reviewRef = useRef<HTMLDivElement | null>(null);
  const scrollReview = () => {
    reviewRef.current?.scrollIntoView({ behavior: "smooth" });
    setSelectedTab("reviews");
  };

  const similarRef = useRef<HTMLDivElement | null>(null);
  const scrollSimilar = () => {
    similarRef.current?.scrollIntoView({ behavior: "smooth" });
    setSelectedTab("similar");
  };
  //
  const [products, setProducts] = useState(Object.values(productsList));
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
      (product: any) => product.id.toString() === id
    ) as Product | undefined;

    setProduct(productData ?? null);
    if (productData && productData.colors && productData.colors.length > 0) {
      setSelectedColor(productData.colors[0]);
    } else {
      setSelectedColor(""); // Provide a default value if colors array is empty or undefined
    }
  }, [router.isReady, router.query]);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) return <div>Loading...</div>;

  const productColors = product.colors?.slice(0, 4);

  return (
    <>
      <Container className={s.product__card_container}>
        <Row className={`${s.product__card_block}`}>
          <Col md={12} lg={6} className="mb-3 mb-lg-0">
            <div className={s.img_swiper_col}>
              <div className={s.img__block}>
                <Image
                  className={s.img__block_img}
                  src={product?.images[selectedImageIndex]}
                  alt={product?.title}
                  width={420}
                  height={418}
                />
              </div>
              <div className={s.swiper_tabs_wrapper}>
                <div className={s.swiper__img}>
                  {product?.images.map((image, index) => (
                    <Image
                      className={`${s.swiper__img_block} ${
                        index === selectedImageIndex ? s.selectedImage : ""
                      }`}
                      key={index}
                      src={image}
                      alt={product?.title}
                      width={420}
                      height={418}
                      onClick={() => setSelectedImageIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Col>

          <Col md={12} lg={6}>
            <div className={s.title_features_container}>
              <div className={s.text__block}>
                <div className={s.text__block_title_producer_wrapper}>
                  <div className={s.text__block_title}>
                    {product?.title.slice(0, 15)}
                  </div>
                  <div className={s.text__block_producer}>
                    _{product?.producer}
                  </div>
                </div>
                <div className={s.text__block_model}>
                  {product?.title.slice(28)}
                </div>
                <ul className={s.text__block_features}>
                  {product?.features.slice(0, 5).map((feature, index) => (
                    <li className={s.text__block_li} key={index}>
                      <span className={s.feature_label}>{feature.label}:</span>{" "}
                      <span className={s.feature_value}>{feature.value}</span>
                    </li>
                  ))}
                </ul>
                <div className={s.text__block_color}>
                  Колір Виробника: {selectedColor}
                  <div className={s.text__block_color_all}>
                    {productColors?.map((color, index) => (
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
                <div className={s.text__block_btns}>
                  <div>
                    {" "}
                    <AddToCartBtn
                      className={s.text__block_btn_addtocart}
                      id={product.id}
                      product={product}
                      simple={true}
                      btnText="Додати до кошика"
                      increaseClassName={s.btn__increase}
                      decreaseClassName={s.btn__decrease}
                    />
                  </div>
                  <div className={s.text__block_heart_containe}>
                    <AddToFavBtn
                      isSimple={true}
                      product={product}
                      id={product.id}
                    />
                  </div>
                </div>
              </div>
              <div className={s.tabs__block_wrapper}>
                <div className={s.tabs__block}>
                  <div
                    className={`${s.tabs__block_title} ${
                      s.tabs__block_all_features
                    } ${selectedTab === "features" ? s.selected : ""}`}
                    onClick={(e) => {
                      scrollFeatures();
                      setSelectedTab("features");
                    }}
                  >
                    Всі характеристики
                  </div>
                  <div
                    className={`${s.tabs__block_title} ${
                      selectedTab === "description" ? s.selected : ""
                    }`}
                    onClick={(e) => {
                      scrollToDescription();
                      setSelectedTab("description");
                    }}
                  >
                    Опис
                  </div>
                  <div
                    className={`${s.tabs__block_title} ${
                      selectedTab === "reviews" ? s.selected : ""
                    }`}
                    onClick={(e) => {
                      scrollReview();
                      setSelectedTab("reviews");
                    }}
                  >
                    Відгуки
                  </div>
                </div>

                <div
                  className={`${s.tabs__block_title} ${s.tabs__block_similar} ${
                    selectedTab === "similar" ? s.selected : ""
                  }`}
                  onClick={(e) => {
                    scrollSimilar();
                    setSelectedTab("similar");
                  }}
                >
                  Схожі товари
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="d-flex mt-4">
            <div className={s.features__section}>
              <Row>
                {/* this div for scroll */}
                <div
                  style={{ height: "100px", marginTop: "-100px", zIndex: -1 }}
                  ref={featuresRef}
                />
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
              </Row>
              <Col>
                <Row className={s.features__section_right}>
                  {product?.features.slice(8, 14).map((feature, index) => (
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
            </div>
          </Col>
        </Row>
      </Container>

      <Container className={s.description__section}>
        {/* this div for scroll */}
        <div
          style={{ height: "120px", marginTop: "-120px", zIndex: -1 }}
          ref={descriptionRef}
        />
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
        {/* this div for scroll */}
        <div
          style={{ height: "100px", marginTop: "-100px", zIndex: -1 }}
          ref={reviewRef}
        />
        <Row>
          <Col className={s.review__section_card}>
            <p className={s.review__section_card_title}>Відгуки(4)</p>

            <p className={s.review__section_card_name}>Анастасія ⭐⭐⭐⭐⭐</p>
            <p className={s.review__section_card_date}>10 вересня 2023</p>
            <p className={s.review__section_card_text}>
              Lorem ipsum dolor sit amet consectetur. Gravida amet consectetur
              cras lectus viverra vitae. Enim enim ut quis iaculis viverra augue
              vel.
            </p>
            <button className={s.review__section_card_btn}>Відповісти</button>
            <p className={s.review__section_card_name}>Анастасія ⭐⭐⭐⭐⭐</p>
            <p className={s.review__section_card_date}>10 вересня 2023</p>
            <p className={s.review__section_card_text}>
              Lorem ipsum dolor sit amet consectetur. Gravida amet consectetur
              cras lectus viverra vitae. Enim enim ut quis iaculis viverra augue
              vel.
            </p>
            <button className={s.review__section_card_btn}>Відповісти</button>
          </Col>
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
      <Container className={s.similar__products}>
        {/* this div for scroll */}
        <div
          style={{ height: "30px", marginTop: "-30px", zIndex: -1 }}
          ref={similarRef}
        />
        <p className={s.similar__products_title}>Схожі товари</p>
        <Row className={s.similar__products_cards}>
          {products.slice(0, 4).map((id: any) => (
            <Col key={id} lg={3} md={4} className="mb-4">
              <ProductCard product={id} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductPage;
