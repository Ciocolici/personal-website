import { Outlet, useLocation } from "react-router-dom";
import Background from "./components/Background";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import LangSwitcher from "./components/LangSwitcher";

function Layout() {
  const location = useLocation();

  return (
    <>
      <div className="d-flex flex-column min-vh-100 position-relative">
        <div className="z-3">
          <Nav />
        </div>
        <Background />
        <main className="flex-grow-1 position-relative z-1">
          <Outlet key={location.pathname} />
        </main>

        <LangSwitcher />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
