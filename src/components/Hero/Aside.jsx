import React, { useState } from "react";
import { Row, Button } from "antd";  
import './Aside.scss'
import { Link, useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()

  const handleClick = () => {
    console.log(JSON.parse(localStorage.getItem("user")).type_user);
    if(JSON.parse(localStorage.getItem("user")).type_user) {
      navigate('/profile-driver')
    } else {
      navigate('/profile-user')
    }
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
        <Button
          onClick={() => handleClick(1)}
          style={{
            ...Typography,
            color: activeLink === 1 ? "red" : "black",
            border: 'none',
            padding: '0'
          }}

          className="HeroHeader__link"
        >
          Профиль
        </Button>
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
      </div>
    </Row>
  );
};

export default Aside;
