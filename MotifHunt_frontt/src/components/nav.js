import image from "../img/motifHunts-removebg-preview.png";
const Nav = () => {
  return (
    <nav className="navbar px-5 fixed-top">
      <div className="container-fluid">
        <a className="navbar-logo" href="/">
          Motif Hunts
        </a>
        <i
          className="fa-solid fa-bars togelle"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        ></i>
        <div
          className="offcanvas offcanvas-top "
          tabindex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header ">
            <a className="navbar-logo" href="" id="offcanvasDarkNavbarLabel">
              Motif Hunts
            </a>
            <i
              className="fa-solid fa-xmark togelle"
              type="button"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></i>
          </div>
          <div className="offcanvas-body  d-flex  justify-content-center align-items-center ">
            <ul className="navbar-nav  justify-content-end flex-grow-1 pe-3">
              <li className="nav-item d-flex justify-content-center    text-center">
                <a
                  className="nav-link rounded-5  d-flex justify-content-between align-items-center px-4 py-2 my-2  rounded-2"
                  aria-current="page"
                  href="/"
                >
                  Home
                  <i class="fa-solid fa-house"></i>
                </a>
              </li>
              <li className="nav-item d-flex justify-content-center text-center">
                <a
                  className="nav-link rounded-5 d-flex justify-content-between align-items-center px-4 py-2 my-2  rounded-2"
                  href="/sumaraze/custom"
                >
                  Summarize Uploaded Video
                  <i class="fa-solid fa-video"></i>
                </a>
              </li>
              <li className="nav-item d-flex justify-content-center text-center">
                <a
                  className="nav-link rounded-5  d-flex justify-content-between align-items-center px-4 py-2 my-2  rounded-2"
                  href="/sumaraze/youtube"
                >
                  Summarize Youtube Video
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
