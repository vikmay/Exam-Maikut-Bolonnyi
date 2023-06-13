import React from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./index.module.scss";
import productsList from "@/data/products/products.json";
import { RootState } from "@/store/store";
import { clearFilters } from "@/store/features/filterActions";
import { Container, Row, Col } from "react-bootstrap";
import Sort from "@/components/sort";
import ClearFilterButton from "@/components/filter/ClearFilterButton";
import ProductCard from "@/components/cards/product";
import Pagination from "@/components/pagination";
import Filter from "@/components/filter";
import getQuantityLabel from "@/utils/quantityLabel";


const ProductListPage: React.FC = () => {
  const dispatch = useDispatch();
  const colorFilter = useSelector(
    (state: RootState) => state.filter.colorFilter
  );
  const producerFilter = useSelector(
    (state: RootState) => state.filter.producerFilter
  );
  const countryFilter = useSelector(
    (state: RootState) => state.filter.countryFilter
  );

  const productsPerPage = 9;
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortOption, setSortOption] = React.useState("Сортувати за");
  const products = Object.values(productsList);
  const [filteredProducts, setFilteredProducts] = React.useState(products);

  // Apply filters and sorting
  React.useEffect(() => {
    let updatedProducts = [...products];
    if (colorFilter.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        product.colors.some((color) => colorFilter.includes(color))
      );
    }
    if (producerFilter.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        producerFilter.includes(product.producer)
      );
    }
    if (countryFilter.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        product.features.some(
          (feature) =>
            feature.label === "Країна виробника" &&
            countryFilter.includes(feature.value)
        )
      );
    }
    switch (sortOption) {
      case "сортувати від А до Я":
        updatedProducts.sort((a, b) =>
          a.title.localeCompare(b.title, "uk", { sensitivity: "base" })
        );
        break;
      case "від Я до А":
        updatedProducts.sort((a, b) =>
          b.title.localeCompare(a.title, "uk", { sensitivity: "base" })
        );
        break;
      default:
        // No sorting or restore original order
        break;
    }
    setFilteredProducts(updatedProducts);
  }, [colorFilter, producerFilter, countryFilter, sortOption]);

  // Pagination
  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;
  const displayedProducts = filteredProducts.slice(start, end);

  return (
    <>
      <Container>
        <Row className="align-items-start">
          <Col lg="3">
            <h2 className={s.main_title}>Каталог</h2>
          </Col>

          <Col className="text-end mt-4" lg="3">
            <span className={s.total__items}>{`${totalProducts} ${getQuantityLabel(totalProducts)}`}</span>
          </Col>
          <Col lg="3">
            <Sort onSortOptionChange={setSortOption} />
          </Col>
          <Col className="mt-3 mt-lg-0" lg="3">
            <div className={s.filter_btn_container}>
              <span>Фільтрування</span><ClearFilterButton onClick={() => dispatch(clearFilters())} />
            </div>
          </Col>
        </Row>
      </Container>

      <Container className={s.products_container}>
        <Row className="align-items-start">
          <Col className="order-2 order-lg-1" lg="9" md="12" xs="12">
            <Row>
              {displayedProducts.map((product: any) => (
                <Col
                  key={product.id}
                  lg="4"
                  md="6"
                  className="mb-4 mt-sm-3 mt-lg-0"
                >
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
            <div className={s.pagination_wrapper}>
              <Pagination
                totalItems={totalProducts}
                itemsPerPage={productsPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </div>
          </Col>
          <Col className="order-1 order-lg-2" lg="3" md="12" xs="12">
            <Filter />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductListPage;
