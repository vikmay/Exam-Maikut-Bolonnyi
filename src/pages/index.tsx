import { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import s from "@/styles/Home.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import toast, { Toaster } from "react-hot-toast";
import ReactPaginate from "react-paginate";

//💬 Bootstrap //
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

//💬 Img //
import CarouselImg from "../../public/images/corousel/CarouselImg.png";
import BoschImg from "../../public/images/bosch.png";
import TekaImg from "../../public/images/Teka.png";
import FrankeImg from "../../public/images/Franke.png";
import FabinoImg from "../../public/images/Fabiano.png";
// 💬 Components //
import ProductCard from "@/components/cards/product";
import productsList from "@/data/products/products.json";

import Link from "next/link";
import SimpleAccordion from "../components/accordion2";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [products, setProducts] = useState(Object.values(productsList));

  // 💬 Accordion //
  const newAccordionTitle =
    "Lorem ipsum dolor sit amet consectetur. Sed amet viverra cras?";
  const newAccordionText =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facil";

  // 💬 Call Form //
  const notify = () => {
    const { name, phone, comment } = formData;
    toast(`✔Ім’я: ${name}
    ✔Номер телефону: ${phone}
    ✔Коментар: ${comment}`);
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

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Swiper
          autoplay={{ delay: 3000 }}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Image
              src={CarouselImg}
              width={1440}
              height={553}
              alt="courosel"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={CarouselImg}
              width={1440}
              height={553}
              alt="courosel"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={CarouselImg}
              width={1440}
              height={553}
              alt="courosel"
            ></Image>
          </SwiperSlide>
        </Swiper>
        <div className={s.search__block}>
          <p className={s.p}>Lorem ipsum dolor sit amet.</p>
          <input className={s.search} type="search" placeholder="Пошук" />
        </div>
        <h2 className={s.h2}>Популярні товари</h2>
        <div className={s.popular_product__section}>
          <Row>
            {products.slice(0, 4).map((id: any) => (
              <Col key={id} lg="3" md="4" className="mb-4">
                <ProductCard product={id} />
              </Col>
            ))}
          </Row>
        </div>
        <div className={s.producer_line}>
          <Image
            src={BoschImg}
            width={221}
            height={49.2}
            alt="producer"
          ></Image>
          <Image
            src={TekaImg}
            width={103.87}
            height={61.43}
            alt="producer"
          ></Image>
          <Image
            src={FrankeImg}
            width={165.47}
            height={52.01}
            alt="producer"
          ></Image>
          <Image src={FabinoImg} width={180} height={58} alt="producer"></Image>
        </div>
        <div className={s.history_block}>
          <h4 className={s.h4}>Наша історія</h4>
          <p className={s.p}>
            Lorem ipsum dolor sit amet consectetur. Nam commodo etiam lectus
            amet proin enim porttitor arcu laoreet. Volutpat posuere eu blandit
            egestas faucibus. Sit lacinia feugiat maecenas tincidunt aliquet.
            Sodales suscipit ac sollicitudin fermentum. Egestas quis sagittis
            augue egestas sit volutpat at diam.
          </p>
          <Link href="/about" className={s.history_btn}>
            Дізнатися більше
          </Link>
        </div>
        <Container className={s.question__section}>
          <Row>
            <Col lg={6} md={4} className={s.retreat}>
              <p className={s.p}>Часті запитання</p>
              <SimpleAccordion
                AccordionTitle={newAccordionTitle}
                AccordionText={newAccordionText}
              />
              <SimpleAccordion
                AccordionTitle={newAccordionTitle}
                AccordionText={newAccordionText}
              />
              <SimpleAccordion
                AccordionTitle={newAccordionTitle}
                AccordionText={newAccordionText}
              />
              <SimpleAccordion
                AccordionTitle={newAccordionTitle}
                AccordionText={newAccordionText}
              />
            </Col>
            <Col lg="6" md="4">
              <p className={s.p}>Замовити дзвінок</p>
              <div className={s.call__form}>
                <input
                  className={s.call__form_input}
                  type="text"
                  placeholder="Ім’я"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  className={s.call__form_input}
                  type="text"
                  placeholder="Номер телефону"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <input
                  className={s.call__form_input}
                  type="text"
                  placeholder="Коментар"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                />
                <button className={s.call__form_btn} onClick={notify}>
                  Make me a toast
                </button>
                <Toaster position="top-right" />
              </div>
            </Col>
          </Row>
        </Container>
        <Container className={s.feedbacks}>
          <Row>
            <Col lg={6} md={4}>
              <p className={s.feedbacks__title}>Відгуки</p>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={4} className="mb-4">
              <div className={s.feedbacks__card}>
                <p className={s.feedbacks__card_date}>10 вересня 2023</p>
                <p className={s.feedbacks__card_name}>Анастасія</p>
                <p className={s.feedbacks__card_stars}>⭐⭐⭐⭐⭐</p>
                <p className={s.feedbacks__card_text}>
                  Lorem ipsum dolor sit amet consectetur. Gravida amet
                  consectetur cras lectus viverra vitae. Enim enim ut quis
                  iaculis viverra augue vel.
                </p>
                <button className={s.feedbacks__card_btn}>
                  Відгук повністю
                </button>
              </div>
            </Col>
            <Col lg={3} md={4} className="mb-4">
              <div className={s.feedbacks__card}>
                <p className={s.feedbacks__card_date}>10 вересня 2023</p>
                <p className={s.feedbacks__card_name}>Анастасія</p>
                <p className={s.feedbacks__card_stars}>⭐⭐⭐⭐⭐</p>
                <p className={s.feedbacks__card_text}>
                  Lorem ipsum dolor sit amet consectetur. Gravida amet
                  consectetur cras lectus viverra vitae. Enim enim ut quis
                  iaculis viverra augue vel.
                </p>
                <button className={s.feedbacks__card_btn}>
                  Відгук повністю
                </button>
              </div>
            </Col>

            <Col lg={3} md={4} className="mb-4">
              <div className={s.feedbacks__card}>
                <p className={s.feedbacks__card_date}>10 вересня 2023</p>
                <p className={s.feedbacks__card_name}>Анастасія</p>
                <p className={s.feedbacks__card_stars}>⭐⭐⭐⭐⭐</p>
                <p className={s.feedbacks__card_text}>
                  Lorem ipsum dolor sit amet consectetur. Gravida amet
                  consectetur cras lectus viverra vitae. Enim enim ut quis
                  iaculis viverra augue vel.
                </p>
                <button className={s.feedbacks__card_btn}>
                  Відгук повністю
                </button>
              </div>
            </Col>
            <Col lg={3} md={4} className="mb-4">
              <div className={s.feedbacks__card}>
                <p className={s.feedbacks__card_date}>10 вересня 2023</p>
                <p className={s.feedbacks__card_name}>Анастасія</p>
                <p className={s.feedbacks__card_stars}>⭐⭐⭐⭐⭐</p>
                <p className={s.feedbacks__card_text}>
                  Lorem ipsum dolor sit amet consectetur. Gravida amet
                  consectetur cras lectus viverra vitae. Enim enim ut quis
                  iaculis viverra augue vel.
                </p>
                <button className={s.feedbacks__card_btn}>
                  Відгук повністю
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
