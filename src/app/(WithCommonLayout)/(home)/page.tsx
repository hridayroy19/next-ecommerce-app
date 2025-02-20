import Category from "@/components/modules/home/Category";
import HeroSection from "@/components/modules/home/Herosection";

const Homepage = () => {
  return (
    <div className="bg-background text-foreground p-6 rounded-lg ">
      <HeroSection />
      <Category/>
    </div>
  );
};

export default Homepage;
