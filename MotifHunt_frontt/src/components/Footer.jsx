import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer d-flex text-center justify-content-center align-items-center">
      <p className="m-0">
        <strong>
          <span>MotifHunts</span>
        </strong>{" "}
        2024 &copy; Copyright . All rights reserved. <br />
        Created and developed by{" "}
        <Link className="links" to="https://webgenius212.onrender.com/"><strong>WebGenius212</strong></Link>
      </p>
    </div>
  );
}

export default Footer;
