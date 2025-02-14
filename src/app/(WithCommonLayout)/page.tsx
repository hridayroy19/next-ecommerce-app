"use client";
import { useUser } from "@/context/UserContext";

const Homepage = () => {
  const user = useUser();
  console.log(user);

  return (
    <div className="bg-background text-foreground p-6 rounded-lg ">
      Welcome to our store!
    </div>
  );
};

export default Homepage;
