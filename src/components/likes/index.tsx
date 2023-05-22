import Image from "next/image";
import Link from "next/link";
import React from "react";
// 💬 Img --//
import LikesImg from "../../../public/images/likes.svg";
const Likes = () => {
  return (
    <>
      <Link href="#">
        <Image src={LikesImg} width={20} height={20} alt="Likes" />
      </Link>
    </>
  );
};

export default Likes;
