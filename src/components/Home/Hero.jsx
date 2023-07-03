import React from 'react'
import { Layout, Space, Anchor, Button, Row, Col, Typography } from 'antd'
import Checkbox from "../icons/Checkbox";
import heroImg from "../../assets/img/hero-img.png";

const Hero = () => {
  return (
    <Row className="hero">
      <Col className="gutter-row" span={12}>
        <h1>Грузоперевозки с высоким качеством</h1>
        <p>Новое направление логистики с передовой платформой как для грузоотправителей, так и для перевозчиков</p>
        <Button>Начать</Button>
        <div>
          <ul>
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
              Более 5 000 довольных клиентов
            </li>
          </ul>
        </div>
      </Col>
      <Col className="gutter-row" span={12}>
        <img src={heroImg} alt="" />
      </Col>
      <div className="red-box"></div>
    </Row>
  )
}

export default Hero
