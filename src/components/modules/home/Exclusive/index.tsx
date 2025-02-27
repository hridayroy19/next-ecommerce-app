import Image from "next/image";

const ExclusivSection = () => {
  return (
    <div className="container py-10 mx-auto px-4">
      <div className="relative w-full h-[400px] md:h-[400px] lg:h-[400px]">
        <Image
          src="https://i.ibb.co/fzpB8nj2/Frame-2087325618.png"
          alt="Exclusive Banner"
          layout="fill"
          quality={90}
          className="bg-cover"
        />
      </div>
    </div>
  );
};

export default ExclusivSection;
