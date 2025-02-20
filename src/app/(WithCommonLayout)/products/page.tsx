import ProductBanner from "@/components/modules/products/banner";
import CategoryCard from "@/components/ui/core/CategoryCard";
import { GetAllCategory } from "@/services/Category";
import { ICategory } from "@/types";

const AllProductsPage = async () => {
  const { data: categories } = await GetAllCategory();

  return (
    <div className="my-10 container mx-auto">
      <ProductBanner title="All Products" path="Home - Products" />
      <h2 className="text-xl font-bold my-5">Featured Collection </h2>
      <div className="grid grid-cols-6 gap-6">
        {categories?.slice(0, 6).map((category: ICategory, idx: number) => (
          <CategoryCard key={idx} category={category} />
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
