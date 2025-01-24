import { motion } from "framer-motion";
import { useState } from "react";
import { IoMdRestaurant } from "react-icons/io";
import { FaUtensils, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import mieImage from "../assets/demie.jpg";
import ketoprakImage from "../assets/ketoprak.jpg";
import taichanImage from "../assets/taichan.jpg";
import pecelImage from "../assets/pecel-ayam.jpg";
import gyukakuImage from "../assets/gyukaku.jpg";
import sushiImage from "../assets/sushi.jpg";
const restaurants = [
  {
    id: 1,
    name: "Bakmie",
    image: mieImage,
    icon: <IoMdRestaurant className="text-xl" />,
  },
  {
    id: 2,
    name: "Ketoprak 🤤",
    image: ketoprakImage,
    icon: <IoMdRestaurant className="text-xl" />,
  },
  {
    id: 3,
    name: "Taichan",
    image: taichanImage,
    icon: <IoMdRestaurant className="text-xl" />,
  },
  {
    id: 4,
    name: "Pecel",
    image: pecelImage,
    icon: <IoMdRestaurant className="text-xl" />,
  },
  {
    id: 5,
    name: "Gyukaku",
    image: gyukakuImage,
    icon: <IoMdRestaurant className="text-xl" />,
  },
  {
    id: 6,
    name: "Sushi",
    image: sushiImage,
    icon: <IoMdRestaurant className="text-xl" />,
  },
];

export default function RestaurantPicker({ onNext, onPrev, setRestaurant }) {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (restaurant) => {
    setSelectedId(restaurant.id);
    setRestaurant(restaurant);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center flex items-center justify-center gap-2">
        <FaUtensils /> Pilih kamu mau mam apa
      </h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            onClick={() => handleSelect(restaurant)}
            className={`cursor-pointer p-4 border-2 rounded-lg transition-all hover:shadow-lg group
              ${
                selectedId === restaurant.id
                  ? "border-pink-500 shadow-lg scale-[1.02]"
                  : "border-pink-200 hover:border-pink-500"
              }`}
          >
            <div className="overflow-hidden rounded">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-32 object-cover rounded mb-2 contrast-105 group-hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-center gap-2 mt-2">
              {restaurant.icon}
              <p className="font-medium">{restaurant.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <button
          onClick={onPrev}
          className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-6 rounded-full flex items-center gap-2 transition-all"
        >
          <FaArrowLeft /> Back
        </button>
        <button
          onClick={onNext}
          disabled={!selectedId}
          className={`${
            !selectedId
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-pink-500 hover:bg-pink-600"
          } text-white font-bold py-2 px-6 rounded-full flex items-center gap-2 transition-all`}
        >
          Next <FaArrowRight />
        </button>
      </div>
    </motion.div>
  );
}
