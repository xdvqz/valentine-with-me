import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaArrowLeft,
  FaArrowRight,
  FaHeart,
} from "react-icons/fa";
import cinemaImage from "../assets/cinema.jpg";
import aquariumImage from "../assets/aquarium.jpg";
import museumImage from "../assets/museum.jpg";
import coffeImage from "../assets/coffe.jpg";

const locations = [
  {
    id: 1,
    name: "Watch Movie Together",
    image: cinemaImage,
  },
  {
    id: 2,
    name: "Aquarium Date",
    image: aquariumImage,
  },
  {
    id: 3,
    name: "Museum Date",
    image: museumImage,
  },
  {
    id: 4,
    name: "Coffe Date",
    image: coffeImage,
  },
];

export default function DateLocationPicker({ onNext, onPrev, setLocation }) {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (location) => {
    setSelectedId(location.id);
    setLocation(location);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center flex items-center justify-center gap-2">
        <FaMapMarkerAlt /> Jangan terserah, ayo pilih
      </h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {locations.map((location) => (
          <div
            key={location.id}
            onClick={() => handleSelect(location)}
            className={`cursor-pointer p-4 border-2 rounded-lg transition-all hover:shadow-lg group
              ${
                selectedId === location.id
                  ? "border-pink-500 shadow-lg scale-[1.02]"
                  : "border-pink-200 hover:border-pink-500"
              }`}
          >
            <div className="overflow-hidden rounded">
              <img
                src={location.image}
                alt={location.name}
                className="w-full h-32 object-cover rounded mb-2 contrast-105 group-hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="flex items-center justify-center gap-2 mt-2">
              {location.icon}
              <p className="font-medium">{location.name}</p>
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
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full flex items-center gap-2 transition-all"
        >
          Next <FaArrowRight />
        </button>
      </div>
    </motion.div>
  );
}
