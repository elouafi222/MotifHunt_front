import React from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";

function Animation() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [" Welcome !", "Summarize your video to any duration"],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <h1 className="App animation">
      <span ref={el} />
    </h1>
  );
}

const Home = () => {
  return (
    <div
      className="container p-5 d-flex flex-column justify-content-center align-items-center"
      style={{ marginTop: "10vh", minHeight: "90vh" }}
    >
      <p className="mb-5 text-center ">
        <Animation />
      </p>
      <div className="d-flex flex-row">
        <Link
          className="px-lg-5 py-2 text-center  btn-custom mx-1 px-4 rounded-5"
          to="/sumaraze/youtube"
        >
          Summarize Youtube video
        </Link>
        <Link
          className="px-lg-5 py-2  text-center btn-custom mx-1 px-4 rounded-5"
          to="/sumaraze/custom"
        >
          Summarize uploaded video
        </Link>
      </div>
    </div>
  );
};

export default Home;
