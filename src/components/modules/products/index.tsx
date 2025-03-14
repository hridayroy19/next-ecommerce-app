import { IProduct } from "@/types";
import FilterSidebar from "./filterSidebar";
import ProductCard from "@/components/ui/core/ProductCard";


const AllProducts = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="flex gap-8 px-4 my-10">
      <div className="w-full max-w-80">
        <FilterSidebar />
      </div>
      <div>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-8">
          {products?.map((product: IProduct, idx: number) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;