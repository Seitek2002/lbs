import React from "react";
import { Layout, Space, Anchor, Button, Row, Col, Typography } from "antd";
import Logo from "../../components/icons/Logo";
import Notification from "../icons/Notification";
import Avatar from "../icons/Avatar";

const HeroHeader = () => {
  const anchors = [
    {
      href: "#part-1",
      title: "Главная",
    },
    {
      href: "#part-2",
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
    <Layout.Header className="header" style={{position: "fixed"}}>
      <div className="container">
        <div className="header__content">
          <Logo />
          <nav style={{ gap: "142px" }}>
            <Anchor direction="horizontal" items={options} />
            <div
              className="nav__content"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <a
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Notification />
              </a>
              <a
                href="#"
                className="nav__avatar"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Avatar />
                <p
                  style={{
                    margin: "0",
                    color: "#222",
                    fontSize: "16px",
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "20px",
                  }}
                >
                  Имя пользователя
                </p>
              </a>
            </div>
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

export default HeroHeader;
