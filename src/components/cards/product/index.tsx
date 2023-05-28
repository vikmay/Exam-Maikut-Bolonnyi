import React from 'react'
import Image from "next/image";


const ProductCard = (props: any) => {
    const { product } = props
  return (
    <>
    <div>ProductCard: {product?.title}</div>
    <div>ProductCard: {product?.price}</div>
    <Image src={product?.images[0]} alt={product?.title} width={200} height={200} />
    </>
  )
}

export default ProductCard