import Image from "next/image";
import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import products from "../../data/products/products.json";
import Link from "next/link";
import s from "./index.module.scss";
// Img //
import SearchImg from "../../../public/images/SearchImg.svg";

interface Product {
  id: string;
  title: string;
  price: string;
  colors: string[];
  features: { label: string; value: string }[];
  attributes: { label: string; value: string }[];
  images: string[];
  producer: string;
  isNew: boolean;
}

const Search = ({ focus }: { focus: any }) => {
  const [show, setShow] = useState(false);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [searchText, setSearchText] = useState("");
  const imageRef = useRef(null);

  const handleClose = () => {
    setShow(false);
    setSearchText("");
    setSearchResults([]);
  };

  const handleShow = () => {
    setShow(true);
    setSearchText("");
    setSearchResults([]);
  };

  const handleSearch = () => {
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <input
            className={s.search__input}
            type="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className={s.search__btn} onClick={handleSearch}>
            Пошук
          </button>
          <ul className={s.list}>
            {searchResults.map((product) => (
              <li className={s.line} key={product.id}>
                <Link
                  className={s.product__list}
                  href={`/catalog/${product.id}`}
                  key={product.id}
                >
                  {product.title}
                </Link>
              </li>
            ))}
          </ul>
        </Modal.Body>
      </Modal>
      <Image
        ref={imageRef}
        onClick={handleShow}
        style={{
          cursor: "pointer",
        }}
        src={SearchImg}
        width={22.5}
        height={22.5}
        alt="SearchImg"
      ></Image>
    </>
  );
};

export default Search;
