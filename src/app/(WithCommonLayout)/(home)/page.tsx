import Category from "@/components/modules/home/Category";
import FeaturedProducts from "@/components/modules/home/FeaturedProducts";
import FlashSale from "@/components/modules/home/FlashSale";
import HeroSection from "@/components/modules/home/Herosection";
import TopBrands from "@/components/modules/home/TopBrands";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <Category />
      <FeaturedProducts />
      <FlashSale/>
      <TopBrands/>
    </div>
  );
};

export default Homepage;
