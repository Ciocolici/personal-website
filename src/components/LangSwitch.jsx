import { useTranslation } from "react-i18next";

function LangSwitch() {
  const { i18n } = useTranslation();

  return (
    <div className="position-absolute top-0 start-0 p-2">
      <button className="btn btn-sm btn-outline-light shadow-sm me-1" onClick={() => i18n.changeLanguage("de")}title="Sprache auf Deutsch ändern">DE</button>
      <button className="btn btn-sm btn-outline-light shadow-sm me-1" onClick={() => i18n.changeLanguage("en")}title="Change language to English">EN</button>
      <button className="btn btn-sm btn-outline-light shadow-sm me-1" onClick={() => i18n.changeLanguage("ro")}title="Schimbă limba în română">RO</button>
    </div>
  );
}

export default LangSwitch;
