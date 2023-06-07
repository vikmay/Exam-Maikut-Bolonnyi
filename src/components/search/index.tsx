import Image from "next/image";
import React from "react";
import { useRef } from "react";
// Img //
import SearchImg from "../../../public/images/SearchImg.svg";

const Search = ({ focus }: { focus: any }) => {
  const imageRef = useRef(null);
  return (
    <>
      <Image
        ref={imageRef}
        onClick={focus}
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
