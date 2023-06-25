import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import SearchImg from "../../../public/images/SearchImg.svg";
import { scroller } from "react-scroll";
import { delay } from "@reduxjs/toolkit/dist/utils";

const Search = () => {
  const router = useRouter();
  const imageRef = useRef(null);

  const handleShow = () => {
    router.push("/").then(() => {
      const header = document.getElementById("scroll_point");
      const search = document.getElementById("search_point");
    
      if (header && search) {
        search.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

        const vwHeight = window.innerWidth * 0.378;
        window.scrollBy({
          top: vwHeight,
          behavior: "smooth"
        });
  
        // Delay focus by 1 second
        setTimeout(() => {
          const searchInput = document.getElementById("searchInput");
          if (searchInput) {
            searchInput.focus();
          }
        }, 500); // delay in milliseconds
      }
    });
  };
  
  useEffect(() => {
    if (router.asPath === "/") {
      const searchInput = document.getElementById("searchInput");
      if (searchInput) {
        searchInput.focus();
      }
    }
  }, [router.asPath]);

  return (
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
    />
  );
};

export default Search;
