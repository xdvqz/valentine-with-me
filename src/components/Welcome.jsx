import { motion } from "framer-motion";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import CatPlease from "../assets/cat-please.gif";
export default function Welcome({ onNext }) {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  const moveButton = () => {
    const newX = Math.random() * 60 - 30;
    const newY = Math.random() * 60 - 30;
    setNoButtonPosition({ x: newX, y: newY });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-pink-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="text-center max-w-[90vw]"
      >
        <h1 className="text-2xl md:text-4xl font-bold text-pink-600 flex items-center justify-center gap-2 mb-4">
          Will You Be My Valentine? <FaHeart className="text-red-500" />
        </h1>

        <img
          src={CatPlease}
          alt="Cute Bear Kiss"
          className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-2xl shadow-lg object-cover mb-6"
        />

        <div className="flex items-center justify-center gap-8 md:gap-16">
          <motion.button
            onClick={onNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg"
          >
            Yes! ❤️
          </motion.button>

          <div className="relative">
            <motion.button
              animate={{
                x: noButtonPosition.x,
                y: noButtonPosition.y,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              onHoverStart={moveButton}
              onClick={moveButton}
              className="bg-gray-400 text-white font-bold py-3 px-8 rounded-full shadow-lg"
            >
              No 💔
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
