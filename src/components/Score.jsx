import { motion } from "framer-motion";

export default function Score({ points }) {
  return (
    <div
      className={`flex items-center justify-center flex-col font-meoow ${
        points < 0 ? "text-red-600" : "text-blue-500"
      } -rotate-6 text-stroke text-8xl`}
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0, position: "absolute" }}
        key={points}
      >
        {points}
      </motion.div>
      <span className="text-4xl text-blue-500">puntos</span>
    </div>
  );
}
