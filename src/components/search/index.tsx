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
  image: string; //
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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;
    setSearchText(searchText);

    const results = products.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );

    const searchResultsWithImages = results.map((product) => ({
      ...product,
      image: product.images[0],
    }));

    setSearchResults(searchResultsWithImages);
  };

  const handleLinkClick = () => {
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <input
            autoFocus
            className={s.search__input}
            type="search"
            value={searchText}
            onChange={handleSearch}
            placeholder="Пошук"
          />
          <ul className={s.list}>
            {searchResults.map((product) => (
              <li className={s.line} key={product.id}>
                <Link
                  className={s.product__list}
                  href={`/catalog/${product.id}`}
                  key={product.id}
                  onClick={handleLinkClick}
                >
                  <div className={s.product__image}>
                    <Image
                      src={product.image}
                      width={100}
                      height={100}
                      alt={product.title}
                    />
                  </div>
                  <div className={s.product__title}>{product.title}</div>
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
