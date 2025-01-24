import { motion } from "framer-motion";
import {
  FaHeart,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUtensils,
  FaRedo,
} from "react-icons/fa";

export default function FinalPage({ date, location, restaurant, onReset }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.2 }}
      className="text-center"
    >
      <h2 className="text-2xl font-bold text-pink-600 mb-4 flex items-center justify-center gap-2">
        <FaHeart className="text-red-500" /> Our Perfect Date Plan
      </h2>

      <div className="bg-white p-4 rounded-xl shadow-lg">
        {/* Date Section */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <FaCalendarAlt className="text-xl text-pink-500" />
          <p className="font-medium">
            {new Date(date).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Location Section */}
        <div className="mb-3">
          <div className="flex items-center justify-center gap-2 mb-2">
            <FaMapMarkerAlt className="text-xl text-pink-500" />
            <p className="font-semibold text-lg">{location.name}</p>
          </div>
          <div className="rounded-lg">
            <img
              src={location.image}
              alt={location.name}
              className="w-full h-36 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Restaurant Section */}
        <div className="mb-3">
          <div className="flex items-center justify-center gap-2 mb-2">
            <FaUtensils className="text-xl text-pink-500" />
            <p className="font-semibold text-lg">{restaurant.name}</p>
          </div>
          <div className="rounded-lg">
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-36 object-cover rounded-lg"
            />
          </div>
        </div>

        <p className="text-pink-500 font-bold text-lg mt-3">
          Can't wait for our special day! 💝
        </p>
      </div>

      <button
        onClick={onReset}
        className="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full flex items-center gap-2 mx-auto transition-all"
      >
        <FaRedo /> Plan Another Date
      </button>
    </motion.div>
  );
}
