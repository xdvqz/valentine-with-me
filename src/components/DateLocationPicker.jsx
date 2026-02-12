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
import bowlingImage from "../assets/Bowling.jpg";
import arcadeImage from "../assets/arcade.jpg";
const locations = [
  {
    id: 1,
    name: "Movie Night",
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
  {
    id: 5,
    name: "Arcade Date",
    image: arcadeImage,
  },
  {
    id: 6,
    name: "Bowling Date",
    image: bowlingImage,
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
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 max-h-[60vh] overflow-y-auto p-2">
        {locations.map((location) => (
          <div
            key={location.id}
            onClick={() => handleSelect(location)}
            className={`cursor-pointer p-2 border-2 rounded-xl transition-all hover:shadow-lg group
              ${
                selectedId === location.id
                  ? "border-pink-500 shadow-lg scale-[1.02] bg-pink-50"
                  : "border-pink-100 hover:border-pink-400 bg-white"
              }`}
          >
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={location.image}
                alt={location.name}
                className="w-full h-full object-cover contrast-105 group-hover:scale-110 transition-all duration-500"
              />
            </div>
            <div className="flex items-center justify-center gap-2 mt-3">
              <FaHeart className={`text-sm ${selectedId === location.id ? "text-pink-500" : "text-pink-200 group-hover:text-pink-400"}`} />
              <p className="font-semibold text-sm md:text-base text-gray-700">{location.name}</p>
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
