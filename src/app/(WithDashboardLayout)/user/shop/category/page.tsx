import ManageCatagories from "@/components/modules/shop/category";
import { GetAllCategory } from "@/services/Category";

const ProductCatagory = async() => {
    
 const {data , meta} = await GetAllCategory()
 console.log(meta)

    return (
        <div>
           <ManageCatagories catagoris={data} meta={meta} />
        </div>
    );
};

export default ProductCatagory;