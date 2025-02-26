"use client";

import Image from "next/image";

const InfoSection = () => {
  const infoCards = [
    {
      image: "https://i.ibb.co.com/Qvtm6ycr/fi-5726558.png",
      title: "Having Queries?",
      description:
        "Save big this Black Friday with unbeatable deals on tech, home essentials.",
    },
    {
      image: "https://i.ibb.co.com/TMb2rk9k/fi-1538493.jpg",
      title: "Call Us Today",
      description:
        "Save big this Black Friday with unbeatable deals on tech, home essentials.",
    },
    {
      image: "https://i.ibb.co.com/Ng25NDRZ/fi-1946770.png",
      title: "Locate Us",
      description:
        "Save big this Black Friday with unbeatable deals on tech, home essentials.",
    },
  ];

  return (
    <div className=" py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {infoCards.map((card, index) => (
          <div
            key={index}
            className="bg-[#f0efef] p-6 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <Image
              src={card.image}
              alt={card.title}
              width={200}
              height={200}
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
