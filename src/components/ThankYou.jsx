import { motion } from "framer-motion";

export default function ThankYou({ onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-pink-50"
    >
      <div className="text-center flex flex-col items-center">
        <h1 className="text-2xl font-bold text-pink-600 mb-6">
          Thank You Sweety! 💖
        </h1>

        <div className="flex justify-center items-center mb-6">
          <iframe
            src="https://tenor.com/embed/22536058"
            className="w-72 h-72 rounded-2xl shadow-lg mx-auto"
            frameBorder="0"
          />
        </div>

        <motion.button
          onClick={onNext}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg"
        >
          Let's Plan Our Date 💝
        </motion.button>
      </div>
    </motion.div>
  );
}
