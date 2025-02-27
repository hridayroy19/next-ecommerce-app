"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "@/components/ui/core/ProductCard";
import { getAllProducts } from "@/services/Product";
import { toast } from "sonner";

const RelatedProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data } = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch products");
        setProducts([]); // Fallback to empty array
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full py-8 px-4">
      <h2 className="text-2xl font-bold mb-4 ">Related Products</h2>

      {isLoading ? (
        <p className="text-center">Loading products...</p>
      ) : products.length > 0 ? (
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className="px-2">
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center text-gray-500">No related products found.</p>
      )}
    </div>
  );
};

export default RelatedProduct;
