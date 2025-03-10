import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/core/ProductCard";
import { getFlashSaleProducts } from "@/services/FlashSale";
import { IProduct } from "@/types";
import Link from "next/link";
import CountDownFals from "./CountDown";

const FlashSale = async () => {
  const { data: products } = await getFlashSaleProducts();

  return (
    <div className=" container mx-auto  bg-white bg-opacity-50 pt-6 pb-8">
      <div className="flex items-center px-3 gap-5 justify-between ">
        <div className="flex items-center gap-8">
          <div className="flex items-center md:gap-8">
            <h2 className=" md:text-3xl font-bold">Flash Sale</h2>
            <CountDownFals />
          </div>
        </div>

        <Link href="/products">
          <Button  className="rounded-full">
            All Flash
          </Button>
        </Link>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 px-2 gap-4 mt-10">
        {products?.slice(0, 4)?.map((product: IProduct, idx: number) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
