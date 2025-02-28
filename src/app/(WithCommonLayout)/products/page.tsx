import AllProducts from "@/components/modules/products";
import ProductBanner from "@/components/modules/products/banner";
import CategoryCard from "@/components/ui/core/CategoryCard";
import { GetAllCategory } from "@/services/Category";
import { getAllProducts } from "@/services/Product";
import { ICategory } from "@/types";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;



const AllProductsPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {

  const query = await searchParams;
  console.log(query)
  const { data: categories } = await GetAllCategory();
  const { data: products } = await getAllProducts(undefined, undefined, query);


  return (
    <div className="my-10 container mx-auto">
      <ProductBanner title="All Products" path="Home - Products" />
      <h2 className="text-xl font-bold my-5">Featured Collection </h2>
      <div className="grid grid-cols-6 gap-6">
        {categories?.slice(0, 6).map((category: ICategory, idx: number) => (
          <CategoryCard key={idx} category={category} />
        ))}
      </div>
       <AllProducts products={products}/>
    </div>
  );
};

export default AllProductsPage;
