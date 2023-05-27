import Image from "next/image";
import React from "react";
// Img //
import SearchImg from "../../../public/images/SearchImg.svg";
const Search = () => {
  return (
    <>
      <Image
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
