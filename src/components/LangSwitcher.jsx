import { useTranslation } from "react-i18next";
import { useState } from "react";

function LangSwitcher() {
  const { i18n } = useTranslation();
  const [showLangs, setShowLangs] = useState(false);

  return (
    <div
      className="position-fixed bottom-0 start-0 p-2"
      style={{ zIndex: 2147483647, pointerEvents: "auto" }}
    >
      {/* Desktop*/}
      <div className="d-none d-md-block">
        <button
          className="btn btn-sm btn-outline-light me-1"
          onClick={() => i18n.changeLanguage("de")}
          title="Sprache auf Deutsch ändern"
        >
          DE
        </button>
        <button
          className="btn btn-sm btn-outline-light me-1"
          onClick={() => i18n.changeLanguage("en")}
          title="Change language to English"
        >
          EN
        </button>
        <button
          className="btn btn-sm btn-outline-light me-1"
          onClick={() => i18n.changeLanguage("ro")}
          title="Schimbă limba în română"
        >
          RO
        </button>
      </div>

      {/* Mobile*/}
      <div className="position-fixed bottom-0 start-0 p-2">
        <div className="d-md-none position-relative">
          <button
            className="btn btn-sm btn-outline-light"
            onClick={() => setShowLangs(!showLangs)}
          >
            <i className="bi bi-globe" />
          </button>

          {showLangs && (
            <div className="position-absolute bottom-100 start-0 mb-2 d-flex flex-column align-items-start gap-1">
              <button
                className="btn btn-sm btn-outline-dark btn-light w-100"
                onClick={() => i18n.changeLanguage("de")}
              >
                DE
              </button>
              <button
                className="btn btn-sm btn-outline-dark btn-light w-100"
                onClick={() => i18n.changeLanguage("en")}
              >
                EN
              </button>
              <button
                className="btn btn-sm btn-outline-dark btn-light w-100"
                onClick={() => i18n.changeLanguage("ro")}
              >
                RO
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LangSwitcher;
