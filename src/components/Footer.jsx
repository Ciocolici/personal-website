import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-100 d-flex justify-content-end align-items-center gap-2 px-3 py-2 text-light"style={{ zIndex: 9999, pointerEvents: "auto" }}>
      <a
        href="https://github.com/Ciocolici/personal-website"
        className="mb-0 me-1 mb-md-0 text-light text-decoration-none lh-1"
        aria-label="GitHub"
        title={t("footerSource")}
      >
        <i className="bi bi-github"></i>
      </a>
      <span className="mb-0 me-1 mb-md-0 text-light text-decoration-none lh-1">
        © {new Date().getFullYear()} Daniel Marian Cîrjeu
      </span>
    </footer>
  );
}

export default Footer;
