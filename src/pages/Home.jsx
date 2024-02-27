import { motion } from "framer-motion";
import { Button } from "../components";

export default function Home() {
  return (
    <main className="h-screen w-full flex items-center justify-center bg-gradient">
      <div className="flex items-center flex-col">
        <div className="text-center font-meoow text-nowrap text-6xl md:text-8xl text-yellow-300 text-stroke tracking-tight mb-8">
          <span className="block rotate-3 -mb-6">Memory</span>
          <span className="block -rotate-6">Game</span>
        </div>
        <motion.img
          initial={{ scale: 10 }}
          animate={{ scale: [8, 6, 4, 2, 1] }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="h-auto w-64 md:w-80 z-10 mb-16"
          src="/images/pop-title.webp"
          alt="Memory Pop"
        />
        <Button title="Jugar" url="game" />
      </div>
    </main>
  );
}
