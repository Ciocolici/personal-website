import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Nav() {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && (
        <div className="position-fixed top-0 start-0 p-2 w-100 fade-slide">
          <header className="d-flex flex-wrap justify-content-end">
            <ul className="nav">
              {/*Desktop*/}
              <li className="nav-item d-none d-md-block">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `btn btn-outline-light shadow-sm me-2 ${
                      isActive ? "active" : ""
                    }`
                  }
                  aria-current={({ isActive }) =>
                    isActive ? "page" : undefined
                  }
                >
                  <i className="bi bi-house"></i>
                </NavLink>
              </li>
              <li className="nav-item d-none d-md-block">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `btn btn-outline-light shadow-sm me-2 ${
                      isActive ? "active" : ""
                    }`
                  }
                  aria-current={({ isActive }) =>
                    isActive ? "page" : undefined
                  }
                >
                  {t("navAbout")}
                </NavLink>
              </li>
              <li className="nav-item d-none d-md-block">
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `btn btn-outline-light shadow-sm me-2 ${
                      isActive ? "active" : ""
                    }`
                  }
                  aria-current={({ isActive }) =>
                    isActive ? "page" : undefined
                  }
                >
                  {t("navProjects")}
                </NavLink>
              </li>
              <li className="nav-item d-none d-md-block">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `btn btn-outline-light shadow-sm me-2 ${
                      isActive ? "active" : ""
                    }`
                  }
                  aria-current={({ isActive }) =>
                    isActive ? "page" : undefined
                  }
                >
                  {t("navContact")}
                </NavLink>
              </li>

              {/* Mobile icons */}
              <li className="nav-item d-md-none position-fixed top-0 start-0 p-2">
                <NavLink
                  to="/"
                  title="Home"
                  className={({ isActive }) =>
                    `btn btn-dark border border-dark me-2 ${
                      isActive ? "active" : ""
                    }`
                  }
                  aria-current={({ isActive }) =>
                    isActive ? "page" : undefined
                  }
                >
                  <i className="bi bi-house"></i>
                </NavLink>
              </li>
              <li className="nav-item d-md-none">
                <NavLink
                  to="/about"
                  title={t("navAbout")}
                  className={({ isActive }) =>
                    `btn btn-dark border border-dark me-2 ${
                      isActive ? "active" : ""
                    }`
                  }
                  aria-current={({ isActive }) =>
                    isActive ? "page" : undefined
                  }
                >
                  <i className="bi bi-file-person"></i>
                </NavLink>
              </li>
              <li className="nav-item d-md-none">
                <NavLink
                  to="/projects"
                  title={t("navProjects")}
                  className={({ isActive }) =>
                    `btn btn-dark border border-dark me-2 ${
                      isActive ? "active" : ""
                    }`
                  }
                  aria-current={({ isActive }) =>
                    isActive ? "page" : undefined
                  }
                >
                  <i className="bi bi-file-code"></i>
                </NavLink>
              </li>
              <li className="nav-item d-md-none">
                <NavLink
                  to="/contact"
                  title={t("navContact")}
                  className={({ isActive }) =>
                    `btn btn-dark border border-dark me-2 ${
                      isActive ? "active" : ""
                    }`
                  }
                  aria-current={({ isActive }) =>
                    isActive ? "page" : undefined
                  }
                >
                  <i className="bi bi-envelope"></i>
                </NavLink>
              </li>
            </ul>
          </header>
        </div>
      )}
    </div>
  );
}

export default Nav;
