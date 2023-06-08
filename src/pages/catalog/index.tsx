import React, { useState, useEffect } from "react";
import productsList from "@/data/products/products.json";
import ProductCard from "@/components/cards/product";
import { Container, Row, Col } from "react-bootstrap";
import Filter from "@/components/filter";
import Pagination from "@/components/pagination";
import s from "./index.module.scss";
import cartimg from "@/../public/images/AddToCartBtn.png";
import Cart from "@/components/cart";
import Accordion from "@/components/accordion2";
import Sort from "@/components/sort";
import Link from "next/link";

const ProductListPage: React.FC = () => {
  const productsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("Сортувати за");

  // Filters
  const [filterColor, setFilterColor] = useState("");
  const [filterCountry, setFilterCountry] = useState("");
  const [filterManufacturer, setFilterManufacturer] = useState("");

  const invertedStyle: React.CSSProperties = {
    color: "#C90000",
    backgroundColor: "whitesmoke",
    top: "-3px",
    left: "40px",
  };

  let products = Object.values(productsList);
  const totalProducts = products.length;

  const [displayedProducts, setDisplayedProducts] = useState(
    products.slice(0, productsPerPage)
  );

  useEffect(() => {
    let filteredProducts = products;

    if (filterColor) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.color.toLowerCase() === filterColor.toLowerCase()
      );
    }

    if (filterCountry) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.country.toLowerCase() === filterCountry.toLowerCase()
      );
    }

    if (filterManufacturer) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.manufacturer.toLowerCase() === filterManufacturer.toLowerCase()
      );
    }

    switch (sortOption) {
      case "сортувати від А до Я":
        filteredProducts.sort((a, b) => {
          if (a.title && b.title) {
            return a.title.localeCompare(b.title);
          }
          return 0;
        });
        break;
      case "від Я до А":
        filteredProducts.sort((a, b) => {
          if (a.title && b.title) {
            return b.title.localeCompare(a.title);
          }
          return 0;
        });
        break;
      default:
        // No sorting or restore original order
        filteredProducts = Object.values(productsList);
        break;
    }

    const start = (currentPage - 1) * productsPerPage;
    const end = Math.min(currentPage * productsPerPage, filteredProducts.length);
    setDisplayedProducts(filteredProducts.slice(start, end));
  }, [filterColor, filterCountry, filterManufacturer, sortOption, currentPage]);

  return (
    <>
      <Container className={s.products_container}>
        <Row className="align-items-start">
          <Col lg="9" md="8" xs="12">
            <Row>
              <Col lg="12" md="12" xs="12">
                <Row className="flex align-items-center mb-4">
                  <Col lg="5" xs="12">
                    <h2>Каталог</h2>
                  </Col>
                  <Col lg="3" className="text-end">
                    <span>кількість товарів</span>
                  </Col>
                  <Col lg="4" className={s.sort_accordion}>
                    <Sort onSortOptionChange={setSortOption} />
                  </Col>
                </Row>
              </Col>
              {displayedProducts.map((product: any) => {
                return (
                  <Col key={product.id} lg="4" md="6" className="mb-4">
                    <ProductCard product={product} />
                  </Col>
                );
              })}
            </Row>
            <div className={s.pagination_wrapper}>
              <Pagination
                totalItems={totalProducts}
                itemsPerPage={productsPerPage}
                onPageChange={setCurrentPage}
              />
            </div>
          </Col>
          <Col lg="3" md="4" xs="12">
            <Filter 
              onColorChange={setFilterColor} 
              onCountryChange={setFilterCountry} 
              onManufacturerChange={setFilterManufacturer} 
            />
          </Col>
        </Row>
        <Cart
          className={s.cart_container}
          newImage={cartimg}
          imageSize={{ width: 60, height: 60 }}
          totalItemsStyle={invertedStyle}
        />
      </Container>
    </>
  );
};

export default ProductListPage;
