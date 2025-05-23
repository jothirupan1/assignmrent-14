import { Link, useLocation, useNavigate } from "react-router-dom";

function Nav() {
  const location = useLocation();
  const navigate = useNavigate();

  const goToContact = () => {
    if (location.pathname !== "/Home") {
      navigate("/Home");
      setTimeout(() => {
        const el = document.getElementById("Contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById("Contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a href="/" className="navbar-brand fw-bold text-uppercase">
          Legacy Mart
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navMenu"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/Home" className="nav-link fw-bold ms-2">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/New" className="nav-link fw-bold ms-2">
                PRODUCT
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="nav-link fw-bold ms-2 btn btn-link"
                style={{ textDecoration: "none" }}
                onClick={goToContact}
              >
                CONTACT
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
