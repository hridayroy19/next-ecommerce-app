"use client";

import { Button } from "@/components/ui/button";
import { IProduct } from "@/types";
import { Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const ProductDetails = ({ product }: { product: IProduct }) => {
  console.log(product);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(
    product?.availableColors?.[0] || ""
  );
  console.log(selectedColor);
  return (
    <div className="container mx-auto my-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6  p-6 rounded-md shadow-md bg-white">
        {/* Image Section */}
        <div className="border p-2">
          <Image
            src={product?.imageUrls[0]}
            alt="product image"
            width={400}
            height={300}
            className="rounded-md lg:w-[58%] w-full mx-auto object-cover h-80 "
          />
          <div className="grid grid-cols-3 gap-4 mt-5">
            {product?.imageUrls
              .slice(0, 3)
              .map((image: string, idx: number) => (
                <Image
                  key={idx}
                  src={image}
                  alt="product image"
                  width={500}
                  height={500}
                  className="rounded-md w-full object-cover h-28"
                />
              ))}
          </div>
        </div>

        {/* Details Section */}
        <div className="p-4 flex flex-col justify-between">
          <div>
            <h2 className="font-bold  text-2xl mb-4">{product?.name}</h2>
            <p className="text-gray-500 font-light text-sm mb-4">
              {product?.description}
            </p>
            <div className="flex flex-wrap gap-2 text-gray-500 text-xs mb-4">
              <p className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1">
                <Star className="w-4 h-4" fill="orange" stroke="orange" />
                {product?.averageRating} Ratings
              </p>
              <p className="bg-gray-100 px-3 py-1 rounded-full">
                Stock: {product?.stock}
              </p>
              <p className="bg-gray-100 px-3 py-1 rounded-full">
                Brand: {product?.brand?.name}
              </p>
              <p className="bg-gray-100 px-3 py-1 rounded-full">
                Category: {product?.category?.name}
              </p>
            </div>
            <hr />
            <p className="my-4 font-bold text-lg">
              Price:{" "}
              {product?.offerPrice ? (
                <>
                  <span className="text-orange-400 font-semibold mr-2">
                    $ {product?.offerPrice}
                  </span>
                  <del className="text-gray-500 text-sm">
                    $ {product?.price}
                  </del>
                </>
              ) : (
                <span className="font-semibold">$ {product?.price}</span>
              )}
            </p>
            <hr />
          </div>

          {/* Color Selection */}
          <div className="my-4">
            <p className="text-sm font-medium mb-2">Color:</p>
            <div className="flex gap-2">
              {[...(product?.availableColors || []), "silver"].map(
                (color: string, idx: number) => (
                  <button
                    key={idx}
                    className={`w-8 h-8  border-2 ${
                      selectedColor === color
                        ? "border-black"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                )
              )}
            </div>
          </div>

          {/* Quantity and Buttons */}
          <div className="flex items-center gap-4 my-5">
            <p className="text-sm font-medium">Quantity:</p>
            <div className="flex items-center border px-3 py-1 rounded-md">
              <button
                className="px-2 text-lg"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                className="px-2 text-lg"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Button variant="outline" className="w-full">
              Add To Cart
            </Button>
            <Button className="w-full text-white">Buy Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
