import Image from "next/image";
import Link from "next/link";
import React from "react";
// 💬 Img --//
import LikesImg from "../../../public/images/likes.svg";
const Likes = () => {
  return (
    <>
      <Link href="/favorites">
        <Image src={LikesImg} width={24} height={22} alt="Likes" />
      </Link>
    </>
  );
};

export default Likes;
