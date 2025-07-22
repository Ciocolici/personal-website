import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <div
      className="fade-slided-flex flex-column align-items-center justify-content-center text-center p-4"
      style={{ minHeight: "75vh" }}
    ></div>
  );
}

export default Projects;
