import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <div
      className="fade-slide d-flex flex-column justify-content-center mt-5"
      style={{ minHeight: "75vh" }}
    >
      <div className="container-fluid d-flex justify-content-center pe-0">
        <div className="w-100 p-0" style={{ maxWidth: "1600px" }}>
          <div className="row justify-content-center">
            <div className="col-12 d-flex flex-column align-items-center">
              <h1 className="Display-6 text-light mt-4 text-center">
                {t("contactMeContent2")}{" "}
                <i className="bi bi-emoji-smile ms-2"></i>
              </h1>

              <div
                className="w-100 d-flex justify-content-center mt-3"
                style={{ maxWidth: "620px" }}
              >
                <p className="lead text-light text-start">
                  {t("contactMeContent")}
                </p>
              </div>

              <div>
                <i className="bi bi-arrow-right text-light"></i>
                <a
                  href="mailto:daniel.cirjeu@proton.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light ms-2"
                  title="E-Mail"
                >
                  <i className="bi bi-envelope-at fs-3"></i>
                </a>
                <i className="bi bi-arrow-left ms-2 text-light"></i>
              </div>

              <form
                action="http://formsubmit.co/0956479d7939fd7c38cd3ded17f8e6f7"
                method="post"
                className="w-100 mt-4"
                style={{ maxWidth: "500px" }}
              >
                <input type="hidden" name="_captcha" value="true" />
                <input type="hidden" name="_template" value="table" />
                <input
                  type="hidden"
                  name="_autoresponse"
                  value={t("contactMeAutoresponse")}
                />

                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder={t("yourName")}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="E-Mail"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder={t("yourMessage")}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-light w-100 mb-3"
                >
                  {t("send")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
