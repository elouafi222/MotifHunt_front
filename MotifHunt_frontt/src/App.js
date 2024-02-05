import "./App.css";
import Nav from "./components/nav";
import Home from "./Pages/Home";
import Footer from "./components/footer";
import Sumaraze from "./Pages/sumurazePage";
import SumarazeYou from "./Pages/sumurazeYou";
import { Routes, Route } from "react-router-dom";
import { motion as m } from "framer-motion";
import { AnimatePresence } from "framer-motion";

function Bug(props) {
  const bag = {
    padding: "20px",
    border: "1px solid gray",
    background: "#fff",
    margin: "20px 0",
  };

  return <div style={bag}>{props.children}</div>;
}

function App() {
  return (
    <AnimatePresence>
      <Nav />
      <m.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 1 }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sumaraze/custom" element={<Sumaraze />} />
          <Route path="/sumaraze/youtube" element={<SumarazeYou />} />
        </Routes>
        {/* <Footer /> */}
      </m.div>
    </AnimatePresence>
  );
}

export default App;
