import UpdateProductsForm from "@/components/modules/shop/product/UpdateProductForm";
import { getSingleProduct } from "@/services/Product";


const UpdateProductpage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
//   console.log(productId);

   const { data:product } = await getSingleProduct(productId)
   console.log(product)

  return <div className="flex justify-center items-center"> <UpdateProductsForm product={product} /> </div>;
};

export default UpdateProductpage;
