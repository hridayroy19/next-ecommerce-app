import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/core/ProductCard";
import { getAllProducts } from "@/services/Product";
import { IProduct } from "@/types";
import Link from "next/link";

const FeaturedProducts = async () => {
  const { data: products } = await getAllProducts();

  return (
    <div className="bg-white bg-opacity-50 py-10">
      <div className="container mx-auto px-3">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl">Featured Products</h2>
          <Link href="/products">
            <Button className="rounded-full">All Collection</Button>
          </Link>
        </div>

        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 xl:gap-8 gap-4  my-5">
          {products?.map((product: IProduct, idx: number) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
