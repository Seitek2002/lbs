import React from "react";
import { Layout, Space, Anchor, Button, Row, Col, Typography } from "antd";
import Checkbox from "../icons/Checkbox";
import heroImg from "../../assets/img/hero-img.png";

const Hero = () => {
  return (
    <Row id="hero" className="hero">
      <Col className="gutter-row" span={12}>
        <h1>
          Грузоперевозки <br /> с высоким качеством
        </h1>
        <p>
          Новое направление логистики с передовой <br /> платформой как для
          грузоотправителей, так <br /> и для перевозчиков
        </p>
        <Button className="hero-btn">Начать</Button>
        <div>
          <ul id="hero-ul" >
            <li>
              <Checkbox />
              Оперативность
            </li>
            <li>
              <Checkbox />
              Лучшие цены
            </li>
            <li>
              <Checkbox />
              Сатисфактинг
            </li>
          </ul>
        </div>
      </Col>
      <Col className="gutter-row" span={12}>
        <img className="hero-img" id="hero-img" src={heroImg} alt="" />
      </Col>
      <div className="red-box"></div>
    </Row>
  );
};

export default Hero;
