import React, { useState, useEffect } from "react";
import productsList from "@/data/products/products.json";
import ProductCard from "@/components/cards/product";
import { Container, Row, Col } from "react-bootstrap";
import Filter from "@/components/Filter";
import Pagination from "@/components/pagination";

const ProductListPage: React.FC = () => {
  const productsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const products = Object.values(productsList);
  const totalProducts = products.length;

  // Determine the products for the current page
  const [displayedProducts, setDisplayedProducts] = useState(
    products.slice(0, productsPerPage)
  );

  useEffect(() => {
    // Only update the displayed products if the current page actually changes
    const start = (currentPage - 1) * productsPerPage;
    const end = currentPage * productsPerPage;

    if (
      displayedProducts[0] !== products[start] ||
      displayedProducts[displayedProducts.length - 1] !== products[end - 1]
    ) {
      setDisplayedProducts(products.slice(start, end));
    }
  }, [currentPage, displayedProducts, products, productsPerPage]);

  return (
    <Container>
      <Row className="align-items-start">
        <Col lg="9" md="8" xs="12">
          <Row>
            {displayedProducts.map((product: any) => {
              return (
                <Col key={product.id} lg="4" md="6" className="mb-4">
                  <ProductCard product={product} />
                </Col>
              );
            })}
          </Row>
          <Pagination
            totalItems={products.length}
            itemsPerPage={productsPerPage}
            onPageChange={setCurrentPage}
          />
        </Col>
        <Col lg="3" md="4" xs="12">
          <Filter />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductListPage;
