import React from "react";
import { Layout, Space, Anchor, Button, Row, Col, Typography } from "antd";
import Logo from "../icons/Logo.jsx";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const history = useNavigate();
  const anchors = [
    {
      href: "#part-1",
      title: "Главная",
    },
    {
      href: "#result",
      title: "О нас",
    },
    {
      href: "#part-3",
      title: "Отзывы",
    },
    {
      href: "#part-4",
      title: "Помощь",
    },
  ];

  const options = anchors.map((item, i) => {
    return {
      ...item,
      key: i,
    };
  });

  return (
    <Layout.Header className="header">
      <div className="container">
        <div className="header__content">
          <Logo />
          <nav>
            <Anchor direction="horizontal" items={options} />
            <Button onClick={() => history('/location')}>Зарегистрироваться</Button>
            <Button onClick={() => history('/location')}>Войти</Button>
          </nav>
          <div className="burger">
            <div className="burger-menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="burger-content">1234</div>
          </div>
        </div>
      </div>
    </Layout.Header>
  );
};

export default Header;
