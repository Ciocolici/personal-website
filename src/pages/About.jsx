import { useTranslation } from "react-i18next";
import Photo from "../assets/Photo.jpg";
import Stack from "../assets/Stack.png";

function About() {
  const { t } = useTranslation();

  return (
    <main
      className="fade-slide d-flex flex-column justify-content-center mt-4"
      style={{ minHeight: "75vh" }}
    >
      <section className="container-fluid d-flex justify-content-center pe-0">
        <div className="w-100" style={{ maxWidth: "1600px" }}>
          <div className="row ">
            <div className="col-12 col-xxl-6 p-0">
              <div className="container pe-0">
                <div className="row align-items-center">
                  <div className="col-xxl-3 d-flex justify-content-center mb-3 mb-xxl-0 mt-4">
                    <img
                      src={Photo}
                      alt={t("profilePhoto")}
                      className="img-fluid"
                      style={{
                        width: "100%",
                        maxWidth: "200px",
                        borderRadius: "0.5rem",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="col-xxl-9 pe-0">
                    <h1 className="Display-4 text-light">
                      {t("aboutMeTitle")}
                    </h1>
                    <h2 className="Display-5 text-light">
                      {t("aboutMeTitle2")}
                    </h2>
                    <h3 className="Display-6 text-light">
                      {t("aboutMeTitle3")}
                    </h3>
                    <a
                      href="https://www.linkedin.com/in/daniel-cirjeu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light ms-1"
                      title="LinkedIn"
                    >
                      <i className="bi bi-linkedin fs-3"></i>
                    </a>
                    <a
                      href="https://github.com/Ciocolici"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light ms-3"
                      title="GitHub"
                    >
                      <i className="bi bi-github fs-3"></i>
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mt-4 pe-0">
                    <p className="lead text-light text-xxl-start text-mobile-words">
                      {t("aboutMeContent")}
                    </p>
                    <p className="lead text-light text-xxl-start text-mobile-words">
                      {t("aboutMeContent2")}
                    </p>
                    <p className="lead text-light text-xxl-start text-mobile-words">
                      {t("aboutMeContent3")}
                    </p>
                    <p className="lead text-light text-xxl-start text-mobile-words">
                      {t("aboutMeContent4")}
                    </p>
                    <p className="lead text-light text-xxl-start text-mobile-words">
                      {t("aboutMeContent5")}
                    </p>
                    <p className="lead text-light text-xxl-start text-mobile-words">
                      {t("aboutMeContent6")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-xxl-6 d-flex align-items-center justify-content-center mb-4 mb-xxl-0">
              <img
                src={Stack}
                alt={t("Technology Stack")}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
