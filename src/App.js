import Reflexology from "./pages/Reflexology";
import { Route, Routes, useLocation } from "react-router-dom";
import { BubblyContainer } from "react-bubbly-transitions";
import { AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/App.scss";

export default function App() {
  let location = useLocation();

  return (
    <>
      <BubblyContainer />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Reflexology />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
