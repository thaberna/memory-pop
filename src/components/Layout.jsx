import { motion } from "framer-motion";

export default function Layout({ children }) {
  return (
    <main className="py-8 h-full md:h-screen w-full flex items-center justify-center bg-gradient">
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <div className="px-8 flex items-center justify-center">{children}</div>
      </motion.div>
    </main>
  );
}
