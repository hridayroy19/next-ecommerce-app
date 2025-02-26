"use client";

import { useState } from "react";

const ProductDescription = () => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { key: "description", label: "Descriptions" },
    { key: "specification", label: "Specification" },
    { key: "seller", label: "Seller Information" },
  ];

  return (
    <div className=" w-full p-4 ">
      <div className=" bg-white rounded-lg shadow-md p-6">
        <div className="flex border-b">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`py-2 px-4 text-sm font-medium ${
                activeTab === tab.key
                  ? "border-b-2 border-black"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "description" && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold">
              Apple Vision Pro 256GB Storage Spatial Computer VR Headset
            </h2>
            <ul className="list-disc list-inside mt-4 text-gray-700">
              <li>
                Apple unveiled Apple Vision Pro, a groundbreaking spatial
                computer that allows users to remain present and socially
                engaged while seamlessly fusing digital material with the real
                environment.
              </li>
              <li>
                It features an ultra-high-resolution display system with 23
                million pixels across two displays and a unique dual-chip
                design.
              </li>
              <li>
                Transforms how people utilize their favorite apps, create and
                relive memories, and enjoy TV shows and movies.
              </li>
              <li>
                Keep your team ready and stylish with the Nike Dri-FIT Jacket,
                featuring sweat-wicking technology.
              </li>
              <li>
                Made from 100% recycled polyester fibers, making it both
                sustainable and high-performing.
              </li>
            </ul>

            <h3 className="mt-6 text-lg font-semibold">Key Features</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Model: Vision Pro</li>
              <li>An Immersive Way to Experience Entertainment</li>
              <li>Interaction Designed for Spatial Computing</li>
              <li>Innovation You Can See, Hear, and Feel</li>
              <li>More pixels than a 4K TV for each eye</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;
