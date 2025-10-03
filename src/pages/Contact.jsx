import { useTranslation } from "react-i18next";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_squ87ap",
        "template_9qvberc",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "CTKv7OQBCnS94abBn"
      )
      .then(() => {
        alert(t("contactMeAutoresponse"));
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert(t("contactMeAutoresponseNegative"));
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main
      className="fade-slide d-flex flex-column justify-content-center mt-5"
      style={{ minHeight: "75vh" }}
    >
      <section className="container-fluid d-flex justify-content-center pe-0">
        <div className="w-100 p-0" style={{ maxWidth: "1600px" }}>
          <div className="row justify-content-center">
            <div className="col-12 d-flex flex-column align-items-center ">
              <h1 className="Display-6 text-light mt-4 text-center">
                {t("contactMeContent2")}{" "}
                <i className="bi bi-emoji-smile ms-2"></i>
              </h1>

              <div
                className="w-100 d-flex justify-content-center mt-3"
                style={{ maxWidth: "620px" }}
              >
                <p className="lead text-light text-start text-mobile-words">
                  {t("contactMeContent")}
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="w-100 mt-4"
                style={{ maxWidth: "500px" }}
              >
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder={t("yourName")}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="E-Mail"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
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
              <h2 className="Display-6 text-light m-4 text-center">/</h2>
              <div className="mb-3">
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
