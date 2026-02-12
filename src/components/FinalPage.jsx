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
      className="text-center max-w-lg mx-auto"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="inline-block mb-4"
      >
        <FaHeart className="text-5xl text-red-500 drop-shadow-lg" />
      </motion.div>

      <h2 className="text-3xl font-extrabold text-pink-600 mb-2">
        Yeay! Our Date is Set!
      </h2>
      <p className="text-gray-600 mb-6 italic">"Every moment with you is a treasure"</p>

      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border-4 border-pink-100 overflow-hidden relative">
        {/* Decorative hearts */}
        <div className="absolute top-2 left-2 text-pink-100 -rotate-12"><FaHeart size={40} /></div>
        <div className="absolute bottom-2 right-2 text-pink-100 rotate-12"><FaHeart size={40} /></div>

        {/* Date Section */}
        <div className="relative z-10 bg-pink-50 py-3 px-4 rounded-2xl mb-6 inline-flex items-center gap-3 border border-pink-200">
          <FaCalendarAlt className="text-2xl text-pink-500" />
          <p className="font-bold text-pink-700 text-lg">
            {new Date(date).toLocaleDateString("id-ID", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {/* Location Section */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="flex flex-col gap-3"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-md border-2 border-white">
              <img
                src={location.image}
                alt={location.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-white p-3 rounded-xl shadow-sm border border-pink-100">
              <div className="flex items-center justify-center gap-2">
                <FaMapMarkerAlt className="text-pink-500" />
                <p className="font-bold text-gray-800">{location.name}</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">Activities</p>
            </div>
          </motion.div>

          {/* Restaurant Section */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="flex flex-col gap-3"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-md border-2 border-white">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-white p-3 rounded-xl shadow-sm border border-pink-100">
              <div className="flex items-center justify-center gap-2">
                <FaUtensils className="text-pink-500" />
                <p className="font-bold text-gray-800">{restaurant.name}</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">Dinner</p>
            </div>
          </motion.div>
        </div>

        <motion.p 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-pink-600 font-black text-xl mt-8 mb-2"
        >
          See you soon, Love! 💝
        </motion.p>
      </div>

      <button
        onClick={onReset}
        className="mt-8 group relative bg-white hover:bg-pink-50 text-pink-500 border-2 border-pink-500 font-bold py-3 px-8 rounded-full flex items-center gap-2 mx-auto transition-all shadow-md hover:shadow-pink-200"
      >
        <FaRedo className="group-hover:rotate-180 transition-transform duration-500" /> 
        Ganti Rencana?
      </button>
    </motion.div>
  );
}
