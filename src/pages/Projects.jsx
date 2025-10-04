import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useRef } from "react";

import web from "../assets/web.png";
import funfineins from "../assets/5in1.png";
import adresseprogramm from "../assets/adresseprogramm.png";
import andreasdaniel from "../assets/andreasdaniel.png";
import animepersona from "../assets/animepersona.png";
import api from "../assets/api.png";
import bitsbites from "../assets/bitsbites.png";
import bootstrap from "../assets/bootstrap.png";
import caesarcipher from "../assets/caesarcipher.png";
import ciocoshomepage from "../assets/ciocoshomepage.png";
import csharp from "../assets/csharp.png";
import css from "../assets/CSS.png";
import diebuecherei from "../assets/diebuecherei.png";
import diedokumentablage from "../assets/diedokumentablage.png";
import dontfeedthetrolls from "../assets/dontfeedthetrolls.png";
import einausknopf from "../assets/einausknopf.png";
import ejs from "../assets/ejs.png";
import expressjs from "../assets/expressjs.png";
import fahrzeughandel from "../assets/fahrzeughandel.png";
import fizzbuzz from "../assets/fizzbuzz.png";
import html from "../assets/html.png";
import jahreszifferpruefung from "../assets/jahreszifferpruefung.png";
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";
import kaffeemaschine from "../assets/kaffeemaschine.png";
import lotto from "../assets/lotto.png";
import mylearnplan from "../assets/mylearnplan.png";
import mysql from "../assets/MySQL.png";
import nextjs from "../assets/nextjs.png";
import nodejs from "../assets/nodejs.png";
import nutzer from "../assets/nutzer.png";
import palindrom from "../assets/palindrom.png";
import pdf2form from "../assets/pdf2form.jpg";
import personalsite from "../assets/personalsite.png";
import presencedays from "../assets/presencedays.png";
import prisma from "../assets/prisma.png";
import promillerechnung from "../assets/promillerechnung.png";
import python from "../assets/python.png";
import rechnerverwaltung from "../assets/rechnerverwaltung.png";
import scheresteinpapier from "../assets/scheresteinpapier.png";
import snake from "../assets/snake.png";
import startupmotivationalmessage from "../assets/startupmotivationalmessage.png";
import stillnoguts from "../assets/stillnoguts.png";
import tailwindcss from "../assets/tailwindcss.png";
import tarifrechner from "../assets/tarifrechner.png";
import tierverwaltung from "../assets/tierverwaltung.png";
import tinyblogs from "../assets/tinyblogs.png";
import typescript from "../assets/typescript.png";
import wassermelone from "../assets/wassermelone.png";
import wetterpruefung from "../assets/wetterpruefung.png";
import winform from "../assets/winform.png";
import wpf from "../assets/wpf.png";
import zooprogramm from "../assets/zooprogramm.png";

function Projects() {
  const { t } = useTranslation();
  const photoMap = {
    web,
    funfineins,
    adresseprogramm,
    andreasdaniel,
    animepersona,
    api,
    bitsbites,
    bootstrap,
    caesarcipher,
    ciocoshomepage,
    csharp,
    css,
    diebuecherei,
    diedokumentablage,
    dontfeedthetrolls,
    einausknopf,
    ejs,
    expressjs,
    fahrzeughandel,
    fizzbuzz,
    html,
    jahreszifferpruefung,
    java,
    javascript,
    kaffeemaschine,
    lotto,
    mylearnplan,
    mysql,
    nextjs,
    nodejs,
    nutzer,
    palindrom,
    pdf2form,
    personalsite,
    presencedays,
    prisma,
    promillerechnung,
    python,
    rechnerverwaltung,
    scheresteinpapier,
    snake,
    startupmotivationalmessage,
    stillnoguts,
    tailwindcss,
    tarifrechner,
    tierverwaltung,
    tinyblogs,
    typescript,
    wassermelone,
    wetterpruefung,
    winform,
    wpf,
    zooprogramm,
  };
  const [index, setIndex] = useState(1);

  const handleNext = () => {
    setIndex((prev) => Math.min(prev + 1, maxProjects));
  };

  const handleBack = () => {
    setIndex((prev) => Math.max(prev - 1, 1));
  };

  const maxProjects = 34;

  const keyPrefix = `project${index}`;

  const animatedRef = useRef(null);

  const retriggerAnimation = () => {
    if (!animatedRef.current) return;
    animatedRef.current.classList.remove("fade-slide");

    void animatedRef.current.offsetWidth;

    animatedRef.current.classList.add("fade-slide");
  };

  return (
    <main
      ref={animatedRef}
      className="fade-slide d-flex flex-column justify-content-center mt-5 text-center"
      style={{ minHeight: "75vh" }}
    >
      <section className="container-fluid d-flex justify-content-center pe-0 mt-5">
        <div className="w-100" style={{ maxWidth: "1600px" }}>
          <div className="row ">
            <div className="col-12 col-xxl-6 d-flex align-items-center justify-content-center mb-4 mb-xxl-0">
              {t(`${keyPrefix}.link`) ? (
                <a
                  href={t(`${keyPrefix}.link`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={t(`${keyPrefix}.linkAlt`)}
                >
                  <img
                    src={photoMap[t(`${keyPrefix}.image`)]}
                    alt={t(`${keyPrefix}.imageAlt`)}
                    className="img-fluid border border-black"
                    style={{ borderRadius: "0.5rem" }}
                  />
                </a>
              ) : (
                <img
                  src={photoMap[t(`${keyPrefix}.image`)]}
                  alt={t(`${keyPrefix}.imageAlt`)}
                  className="img-fluid border border-black"
                  style={{ borderRadius: "0.5rem" }}
                />
              )}
            </div>
            <div className="col-12 col-xxl-6 p-0">
              <div className="container pe-0">
                <div className="row align-items-center">
                  <div className="col-xxl-12 pe-0">
                    <h1 className="Display-4 text-light">
                      {t(`${keyPrefix}.title`)}
                    </h1>
                    <h2 className="Display-5 text-light">
                      {t(`${keyPrefix}.title2`)}
                    </h2>
                    <div className="container">
                      <div className="row">
                        <div className="col-12 col-md-6 text-start p-0">
                          {" "}
                          <a
                            href={t(`${keyPrefix}.link`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light d-inline-flex align-items-center"
                            title={t(`${keyPrefix}.linkAlt`)}
                          >
                            <img
                              src={photoMap[t(`${keyPrefix}.linkIcon`)]}
                              alt={t(`${keyPrefix}.linkAlt`)}
                              className="me-1 align-self-center"
                              style={{
                                height: "2em",
                                position: "relative",
                                top: "6px",
                              }}
                            />
                          </a>
                          <a
                            href={t(`${keyPrefix}.link2`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none text-white d-inline-flex align-items-center"
                            title={t(`${keyPrefix}.link2Alt`)}
                          >
                            <i
                              className={`${t(`${keyPrefix}.link2Icon`)} fs-3`}
                            ></i>
                          </a>
                          <a
                            href={t(`${keyPrefix}.link3`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none text-dark ms-3 d-inline-flex align-items-center"
                            title={t(`${keyPrefix}.link3Alt`)}
                          >
                            <i
                              className={`${t(`${keyPrefix}.link3Icon`)} fs-3`}
                            ></i>
                          </a>
                          <a
                            href={t(`${keyPrefix}.link4`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none text-dark ms-1 d-inline-flex align-items-center"
                            title={t(`${keyPrefix}.link4Alt`)}
                          >
                            <i
                              className={`${t(`${keyPrefix}.link4Icon`)} fs-3`}
                            ></i>
                          </a>
                          <a
                            href={t(`${keyPrefix}.link5`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none text-dark ms-1 d-inline-flex align-items-center"
                            title={t(`${keyPrefix}.link5Alt`)}
                          >
                            <i
                              className={`${t(`${keyPrefix}.link5Icon`)} fs-3`}
                            ></i>
                          </a>
                          <a
                            href={t(`${keyPrefix}.link6`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none text-dark ms-1 d-inline-flex align-items-center"
                            title={t(`${keyPrefix}.link6Alt`)}
                          >
                            <i
                              className={`${t(`${keyPrefix}.link6Icon`)} fs-3`}
                            ></i>
                          </a>
                          <a
                            href={t(`${keyPrefix}.link7`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none text-dark ms-1 d-inline-flex align-items-center"
                            title={t(`${keyPrefix}.link7Alt`)}
                          >
                            <i
                              className={`${t(`${keyPrefix}.link7Icon`)} fs-3`}
                            ></i>
                          </a>
                        </div>
                        <div className="col-12 col-md-6 text-start text-md-end p-0">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light d-inline-flex align-items-center"
                            title={t(`${keyPrefix}.technologyAlt`)}
                          >
                            <img
                              src={photoMap[t(`${keyPrefix}.technology`)]}
                              alt={t(`${keyPrefix}.technologyAlt`)}
                              className="me-1 align-self-center"
                              style={{
                                height: "2em",
                                position: "relative",
                                top: "6px",
                              }}
                            />
                          </a>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light ms-1 d-inline-flex align-items-center"
                            title={t(`${keyPrefix}.technology2Alt`)}
                          >
                            <img
                              src={photoMap[t(`${keyPrefix}.technology2`)]}
                              alt={t(`${keyPrefix}.technology2Alt`)}
                              className="me-1 align-self-center"
                              style={{
                                height: "2em",
                                position: "relative",
                                top: "6px",
                              }}
                            />
                          </a>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light ms-1 d-inline-flex align-items-center"
                            title={t(`${keyPrefix}.technology3Alt`)}
                          >
                            <img
                              src={photoMap[t(`${keyPrefix}.technology3`)]}
                              alt={t(`${keyPrefix}.technology3Alt`)}
                              className="me-1 align-self-center"
                              style={{
                                height: "2em",
                                position: "relative",
                                top: "6px",
                              }}
                            />
                          </a>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light ms-1 d-inline-flex align-items-center"
                            title={t(`${keyPrefix}.technology4Alt`)}
                          >
                            <img
                              src={photoMap[t(`${keyPrefix}.technology4`)]}
                              alt={t(`${keyPrefix}.technology4Alt`)}
                              className="me-1 align-self-center"
                              style={{
                                height: "2em",
                                position: "relative",
                                top: "6px",
                              }}
                            />
                          </a>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light ms-1 d-inline-flex align-items-center"
                            title={t(`${keyPrefix}.technology5Alt`)}
                          >
                            <img
                              src={photoMap[t(`${keyPrefix}.technology5`)]}
                              alt={t(`${keyPrefix}.technology5Alt`)}
                              className="me-1 align-self-center"
                              style={{
                                height: "2em",
                                position: "relative",
                                top: "6px",
                              }}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mt-4 pe-0">
                    <p className="lead text-light text-start text-mobile-words">
                      {t(`${keyPrefix}.description`)}
                    </p>
                    <p className="lead text-light text-start text-mobile-words">
                      {t(`${keyPrefix}.description2`)}
                    </p>
                    <p className="lead text-light text-start text-mobile-words">
                      {t(`${keyPrefix}.description3`)}
                    </p>
                    <p className="lead text-light text-start text-mobile-words">
                      {t(`${keyPrefix}.description4`)}
                    </p>
                    <p className="lead text-light text-start text-mobile-words">
                      {t(`${keyPrefix}.description5`)}
                    </p>
                    <p className="lead text-light text-start text-mobile-words">
                      {t(`${keyPrefix}.description6`)}
                    </p>
                    <p className="lead text-light text-start text-mobile-words">
                      {t(`${keyPrefix}.description7`)}
                    </p>
                    <p className="lead text-light text-start text-mobile-words">
                      {t(`${keyPrefix}.description8`)}
                    </p>
                  </div>
                </div>
                <div className="container px-3 px-sm-5">
                  <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
                    <button
                      className="btn btn-outline-light px-4 py-3 fs-5 shadow flex-grow-1 flex-md-grow-0 mb-3"
                      onClick={() => {
                        handleBack();
                        retriggerAnimation();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      disabled={index === 1}
                    >
                      {t("back")}
                    </button>
                    <button
                      className="btn btn-outline-light px-4 py-3 fs-5 shadow flex-grow-1 flex-md-grow-0 mb-3"
                      onClick={() => {
                        handleNext();
                        retriggerAnimation();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      disabled={index === maxProjects}
                    >
                      {t("next")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;
