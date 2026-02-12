import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Petal = ({ delay }) => {
  const randomX = Math.random() * window.innerWidth;
  const duration = 3 + Math.random() * 3;
  const size = 10 + Math.random() * 15; // Random petal size

  return (
    <motion.div
      initial={{ y: -20, x: randomX, rotate: 0, opacity: 0.8 }}
      animate={{
        y: window.innerHeight + 20,
        x: randomX + (Math.random() * 200 - 100),
        rotate: 360,
        opacity: 0,
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "linear",
      }}
      className="absolute"
    >
      {/* Sakura Petal Shape */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 50 50"
        className="fill-pink-200"
      >
        <path d="M25 0C25 0 18.5 15.5 0 25C18.5 34.5 25 50 25 50C25 50 31.5 34.5 50 25C31.5 15.5 25 0 25 0Z" />
        <circle cx="25" cy="25" r="5" className="fill-pink-300" />
      </svg>
    </motion.div>
  );
};

export default function FlowerPetals() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const petalCount = 40; // More petals for a fuller effect
    const newPetals = Array.from({ length: petalCount }, (_, i) => ({
      id: i,
      delay: Math.random() * 3,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {petals.map((petal) => (
        <Petal key={petal.id} delay={petal.delay} />
      ))}
    </div>
  );
}
