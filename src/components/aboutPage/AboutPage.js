import React from "react";
import { useNavigate } from "react-router-dom";

import "./AboutPage.css";
import backArrow from "../../assets/img/Vector.png";

function AboutPage() {
  const navigate = useNavigate();

  function handleClick() {
    document
      .querySelectorAll(".relocationButton")
      .forEach((elem) => elem.classList.toggle("active"));
    navigate(-1);
  }
  return (
    <div className="aboutWrapper">
      <div className="headerAboutContainer">
        <div className="backContainer">
          <button className="backArrow" onClick={handleClick}>
            <img
              src={backArrow}
              width="15px"
              height="24px"
              alt="backArrow"
            ></img>
          </button>
          <p className="back">Назад</p>
        </div>
        <h3 className="pageTitle">О проекте</h3>
      </div>
      <div className="aboutContainer">
        <p className="aboutText1">
          Данный проект создан по мотивам приключений Рика и Морти. Здесь вы
          можете поближе познакомиться со всеми персонажами, эпизодами и
          локациями данного мультсериала.
        </p>
        <p className="aboutText2">
          Проект является тестовым заданием для входящих кандидатов пула
          Frontend. В зависимости от грейда кандидата необходимо выполнить
          соответствующий список заданий. Желаем удачи!
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
