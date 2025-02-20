import Category from "@/components/modules/home/Category";
import FeaturedProducts from "@/components/modules/home/FeaturedProducts";
import HeroSection from "@/components/modules/home/Herosection";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <Category />
      <FeaturedProducts />
    </div>
  );
};

export default Homepage;
