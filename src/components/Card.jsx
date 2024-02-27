import { motion } from "framer-motion";

const transition = {
  type: "spring",
  stiffness: 300,
  damping: 40,
};

export default function Card({ card, handleFlip, flipped }) {
  let animation = {
    initial: false,
    animate: {
      rotateY: flipped ? 180 : 0,
      transition: { ...transition },
    },
    exit: {
      rotateY: 0,
      transition: { ...transition },
    },
    whileHover: { scale: !flipped ? 1.1 : 1 },
  };

  return (
    <motion.div
      className={`cursor-pointer transition ${
        flipped ? "-rotate-3" : "-rotate-6"
      }`}
      onClick={handleFlip}
    >
      <motion.img
        className={`w-48 p-3 ${
          flipped ? "bg-blue-400" : "bg-yellow-400"
        } border-4 border-black`}
        alt={card}
        src={`images/${flipped ? card : "box"}.webp`}
        {...animation}
      />
    </motion.div>
  );
}
