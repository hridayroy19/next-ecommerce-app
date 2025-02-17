import ManageCatagories from "@/components/modules/shop/category";
import { GetAllCategory } from "@/services/Category";

const ProductCatagory = async() => {
    
 const {data} = await GetAllCategory()

    return (
        <div>
           <ManageCatagories catagoris={data}/>
        </div>
    );
};

export default ProductCatagory;