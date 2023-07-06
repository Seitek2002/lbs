import React, { useState } from "react";
import { Row } from "antd";  
import { Link } from 'react-router-dom'
import './Aside.scss'

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
    <Row className="row-aside">
      <div
        className="aside"
      >
        <Link to="/location"
          onClick={() => handleClick(0)}
          
          style={{
            ...Typography,
            color: activeLink === 0 ? "red" : "black",
          }}
          className="HeroHeader__link"
        >
          Работа
        </Link>
        <Link to="/profile"
          onClick={() => handleClick(1)}
          style={{
            ...Typography,
            color: activeLink === 1 ? "red" : "black",
          }}
          
          className="HeroHeader__link"
        >
          Профиль
        </Link>
        <Link to="/orders"
          onClick={() => handleClick(2)}
          
          style={{
            ...Typography,
            color: activeLink === 2 ? "red" : "black",
          }}
          className="HeroHeader__link"
        >
          Заказы
        </Link> 
        <Link
          onClick={() => handleClick(4)}
          to="/chat"
          style={{
            ...Typography,
            color: activeLink === 4 ? "red" : "black",
          }}
          className="HeroHeader__link"
        >
          Чат
        </Link>
      </div>
    </Row>
  );
};

export default Aside;