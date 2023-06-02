import Image from "next/image";
import Link from "next/link";
import React from "react";
// 💬 Img --//
import heartimg from "../../../public/images/heart.svg";
const Likes = () => {
  return (
    <>
      <Link href="/favorites">
        <Image src={heartimg} width={24} height={22} alt="Likes" />
      </Link>
    </>
  );
};

export default Likes;
