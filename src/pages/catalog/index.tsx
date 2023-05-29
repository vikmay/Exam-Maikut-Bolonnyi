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
      products.map((id: any)  => {
        return (
          <Col key={id} lg="4" className="mb-4">
            <ProductCard  product={id} />
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
