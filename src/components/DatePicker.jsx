import { motion } from "framer-motion";
import { useState } from "react";
export default function DatePicker({ onNext, onPrev, setDate }) {
  const [selectedDate, setSelectedDate] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setDate(e.target.value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="text-center"
    >
      <h2 className="text-2xl font-bold text-pink-600 mb-6">
        Let's pick our date 📅
      </h2>
      <input
        type="date"
        min={today}
        onChange={handleDateChange}
        className="w-full p-3 border-2 border-pink-300 rounded-lg mb-6 focus:border-pink-500 focus:outline-none"
      />
      <div className="flex justify-between">
        <button
          onClick={onPrev}
          className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-6 rounded-full"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!selectedDate}
          className={`${
            !selectedDate
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-pink-500 hover:bg-pink-600"
          } text-white font-bold py-2 px-6 rounded-full transition-all`}
        >
          Next
        </button>
      </div>
    </motion.div>
  );
}
