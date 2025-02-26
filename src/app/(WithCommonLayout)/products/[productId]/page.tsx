import InfoSection from "@/components/modules/home/InfoSection";
import ProductBanner from "@/components/modules/products/banner";
import ProductDescription from "@/components/modules/products/productDescription";
import ProductDetails from "@/components/modules/products/productDetails";
import ReviewsRatings from "@/components/modules/products/reviewsRatings";
import { getSingleProduct } from "@/services/Product";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  const { data: product } = await getSingleProduct(productId);

  return (
    <div className="container mx-auto mt-10">
      <ProductBanner
        title="Product Details"
        path="Home - Products - Product Details"
      />
      <ProductDetails product={product} />
      <ProductDescription />
      <ReviewsRatings/>
      <InfoSection/>
    </div>
  );
};

export default ProductDetailsPage;
