import ManageProducts from "@/components/modules/shop/product";
import { getAllProducts } from "@/services/Product";


const ManageProductsPage = async () => {
  const { data, meta } = await getAllProducts();
  console.log(data)
  return (
    <div>
      <ManageProducts products={data} meta={meta} />
    </div>
  );
};

export default ManageProductsPage;