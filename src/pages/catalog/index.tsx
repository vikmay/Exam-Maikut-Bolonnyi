import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import productsList from "@/data/products/products.json";
import ProductCard from "@/components/cards/product";
// boostrap
import { Container, Row, Col } from "react-bootstrap";



const ProductListPage: React.FC = () => {
  const [products, setProducts] = useState(Object.values(productsList));
  return (
    <>
    <Container>
    <Row>
      {
      products.map((el: any)  => {
        return (
          <Col key={el.id} lg="4" md="6" className="mb-4">
            <ProductCard  product={el} />
        </Col>     
        )
      })
    }
        
      </Row>
    </Container>
    
    </>
  );
};

export default ProductListPage;
