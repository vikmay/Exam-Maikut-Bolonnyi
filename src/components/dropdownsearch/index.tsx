import React, { useEffect, useRef, useState } from "react";
import products from "../../data/products/products.json";
import Link from "next/link";
import Image from "next/image";
import s from "./index.module.scss";
import CrossButton from "../crossBtn";
import { Product } from "../../../interfaces";



const DropdownSearch = () => {
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [searchText, setSearchText] = useState("");

  const inputRef = useRef<HTMLInputElement>(null); // Create a ref

  useEffect(() => {
    inputRef.current?.focus(); // Focus the input field on component mount
  }, []);

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
    setSearchText("");
    setSearchResults([]);
  };

  return (
    <div className={s.search_container} id="search_point">
      <input
        ref={inputRef}
        className={s.search_input}
        type="search"
        value={searchText}
        onChange={handleSearch}
        placeholder="Пошук"

      />
      {searchResults.length > 0 && (
        <ul className={s.search_list}>
            <div className={s.crossBtn}><CrossButton onClick={handleLinkClick} /></div>
          {searchResults.map((product) => (
            <li className={s.line} key={product.id}>
              <Link
                className={s.product_li}
                href={`/catalog/${product.id}`}
                key={product.id}
                onClick={handleLinkClick}
              >
                <div>
                  <Image
                    width={100}
                    height={100}
                    src={product.images[0]}
                    alt={product.title}
                  />
                </div>
                <div className={s.title_container}>{product.title}</div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownSearch;
