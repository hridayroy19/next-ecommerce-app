import ManageBrands from "@/components/modules/shop/brand";
import TabilPagination from "@/components/ui/core/NEtabil/TabilPagination";
import { getAllBrands } from "@/services/Brand";


const ProductBrandPage = async () => {
  const { data, meta } = await getAllBrands();
  return (
    <>
      <ManageBrands brands={data} />
      <div className=" mt-10">
      <TabilPagination/>
      </div>
    </>
  );
};

export default ProductBrandPage;