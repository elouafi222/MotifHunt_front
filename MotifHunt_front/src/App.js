import logo from './logo.svg';
import './App.css';
import Nav from './nav';
import Body from './body';
import Footer from './footer';
import Sumaraze from './sumurazePage'
import SumarazeYou from './sumurazeYou'
import { Routes, Route } from 'react-router-dom';
import { motion as m } from "framer-motion";
import { AnimatePresence } from 'framer-motion'

function Bug(props) {
  const bag = {
    padding: "20px",
    border: "1px solid gray",
    background: "#fff",
    margin: "20px 0"
  }

  return (
    <div style={bag}>
      {props.children}
    </div>
  )
}


function App() {
  return (
    <AnimatePresence>
      <Nav />
      <m.div initial={{ y: "100%" }} animate={{ y: "0%" }} transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 1 }}
      >
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/sumaraze' element={<Sumaraze />} />
          <Route path='/sumarazeyou' element={<SumarazeYou />} />
        </Routes>
        <Footer />
      </m.div>
    </AnimatePresence >
  );
}

export default App;