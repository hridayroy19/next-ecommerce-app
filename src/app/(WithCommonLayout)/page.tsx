import { currentUser } from "@/services/AuthService";

const Homepage = async () => {
  const user = await currentUser()
  console.log(user);
  
  return (
    <div className=" mt-20 px-16">
      <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-opacity-80 transition">
        Shop Now
      </button>

      <div className="bg-background text-foreground p-6 rounded-lg ">
        Welcome to our store!
      </div>
    </div>
  );
};

export default Homepage;
