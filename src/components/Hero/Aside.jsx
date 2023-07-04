import React, { useState } from "react";
import { Row } from "antd";

const Typography = {
  fontSize: "20px",
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "28px",
  letterSpacing: "-0.4px",
};

const Aside = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (index) => {
    setActiveLink(index);
  };

  return (
    <Row>
      <div
        className="aside"
        style={{ display: "flex", flexDirection: "column", gap: "24px", width: '20%' }}
      >
        <a
          onClick={() => handleClick(0)}
          href="#"
          style={{
            ...Typography,
            color: activeLink === 0 ? "red" : "black",
          }}
          className="HeroHeader__link"
        >
          Работа
        </a>
        <a
          onClick={() => handleClick(1)}
          style={{
            ...Typography,
            color: activeLink === 1 ? "red" : "black",
          }}
          href="#"
          className="HeroHeader__link"
        >
          Профиль
        </a>
        <a
          onClick={() => handleClick(2)}
          href="#"
          style={{
            ...Typography,
            color: activeLink === 2 ? "red" : "black",
          }}
          className="HeroHeader__link"
        >
          Заказы
        </a>
        <a
          onClick={() => handleClick(3)}
          href="#"
          style={{
            ...Typography,
            color: activeLink === 3 ? "red" : "black",
          }}
          className="HeroHeader__link"
        >
          Избранное
        </a>
        <a
          onClick={() => handleClick(4)}
          href="#"
          style={{
            ...Typography,
            color: activeLink === 4 ? "red" : "black",
          }}
          className="HeroHeader__link"
        >
          Чат
        </a>
      </div>
    </Row>
  );
};

export default Aside;
