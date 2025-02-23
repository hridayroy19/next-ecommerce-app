import ManageBrands from "@/components/modules/shop/brand";
import { getAllBrands } from "@/services/Brand";


const ProductBrandPage = async () => {
  const { data, meta } = await getAllBrands();
  return (
    <>
      <ManageBrands brands={data} meta ={meta} />

    </>
  );
};

export default ProductBrandPage;