import { Layout, Space, Anchor, Button, Row, Col, Typography } from "antd";
const { Title, Text, Link } = Typography;
import whyImg from "../../assets/img/why-img.png";
import React, { useMemo } from "react";

const Why = () => {
  return (
    <Row className="why">
      <Title level={2}>Почему LBS?</Title>
      <Text>
        Благодаря инновационным технологиям и специальной команде экспертов в
        своей области LSB — это не просто логистическая и транспортная сеть в
        мире. Это платформа и сервис, которые помогают грузоотправителям и
        перевозчикам контролировать свои грузы и достигать поставленных целей.
      </Text>
      <Link href="https://ant.design">Подробнее</Link>
      <div>
        <img id="why-img" src={whyImg} alt="" />
      </div>
    </Row>
  );
};

export default Why;
