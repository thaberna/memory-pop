import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Game, Home, Result } from "./pages";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence mode="wait">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="game" element={<Game />} />
          <Route path="result" element={<Result />} />
        </Routes>
      </Router>
    </AnimatePresence>
  );
}

export default App;
