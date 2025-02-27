import Category from "@/components/modules/home/Category";
import ExclusivSection from "@/components/modules/home/Exclusive";
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
      <ExclusivSection/>
    </div>
  );
};

export default Homepage;
