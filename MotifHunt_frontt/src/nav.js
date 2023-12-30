import image from './motifHunts-removebg-preview.png';
const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="d-flex align-items-center">
                    <a href='/'><img src={image} alt="MotifHunts" style={{ maxWidth: '120%', maxHeight: '120px' }} /></a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto"> {/* Utilisation de ms-auto pour déplacer les éléments à droite */}
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Documentation</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"> Download <img src="https://github.com/fluidicon.png" alt="GitHub" style={{ maxWidth: '30px', maxHeight: '30px' }} /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;