import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Background from "./components/Background";
import Footer from "./components/Footer";
import LangSwitch from "./components/LangSwitch";

function Layout() {
  const location = useLocation();

  return (
    <>
      <div className="position-relative z-3">
        <LangSwitch />
      </div>
      <Background />
      <div style={{ position: "relative", zIndex: 1 }}>
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </div>

      <Footer />
    </>
  );
}

export default Layout;
