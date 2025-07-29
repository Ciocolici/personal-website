import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <main>
      <section
        className="d-flex flex-column align-items-center justify-content-center text-center p-4"
        style={{ minHeight: "75vh" }}
      >
        <h1 className="fade-slide display-4 delay-1s text-white">
          {t("intro")}
        </h1>
        <h2 className="fade-slide display-5 delay-2s text-white">
          {t("intro2")}
        </h2>
        <h3 className="fade-slide display-6 delay-3s text-white">
          {t("intro3")}
        </h3>
        <div className="container px-3 px-sm-5">
          <div className="d-flex flex-wrap justify-content-center gap-4 mt-5">
            {/* Pages Buttons */}
            <button
              className="btn btn-outline-light px-4 py-3 fade-slide delay-4s fs-5 shadow flex-grow-1 flex-md-grow-0"
              onClick={() => navigate("/about")}
            >
              {t("homeAbout")}
            </button>
            <button
              className="btn btn-outline-light px-4 py-3 fade-slide delay-5s fs-5 shadow flex-grow-1 flex-md-grow-0"
              onClick={() => navigate("/projects")}
            >
              {t("homeProjects")}
            </button>
            <button
              className="btn btn-outline-light px-4 py-3 fade-slide delay-6s fs-5 shadow flex-grow-1 flex-md-grow-0"
              onClick={() => navigate("/contact")}
            >
              {t("homeContact")}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
