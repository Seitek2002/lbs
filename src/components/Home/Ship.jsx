import { Layout, Space, Anchor, Button, Row, Col, Typography } from "antd";
const { Title, Text, Link } = Typography;
import Check from "../../components/icons/Check";
import Arrow from "../../components/icons/Arrow";
import React, { useMemo } from "react";

const Ship = () => {
  return (
    <Row className="ship">
      <Title level={2}>Отправляйте и перевозите с LBS</Title>
      <Text>
        LBS открывает лучшие возможности и варианты для грузоотправителей и
        перевозчиков по перемещению товаров
      </Text>
      <Row className="ship-wrapper">
        <div className="ship-block">
          <div className="ship-info">
            <Title level={4}>Безопасно</Title>
            <div className="ship-item">
              <Check />
              Отслеживание груза в реальном времени
            </div>
            <div className="ship-item">
              <Check />
              Безопасные платежи
            </div>
            <div className="ship-item">
              <Check />
              Поиск лучших участников при помощи системы рейтингов
            </div>
            <Link href="#">
              Подробнее <Arrow />
            </Link>
          </div>
        </div>
        <div className="ship-block">
          <div className="ship-info">
            <Title level={4}>Безопасно</Title>
            <div className="ship-item">
              <Check />
              Отслеживание груза в реальном времени
            </div>
            <div className="ship-item">
              <Check />
              Безопасные платежи
            </div>
            <div className="ship-item">
              <Check />
              Поиск лучших участников при помощи системы рейтингов
            </div>
            <Link href="#">
              Подробнее <Arrow />
            </Link>
          </div>
        </div>
        <div className="ship-block">
          <div className="ship-info">
            <Title level={4}>Безопасно</Title>
            <div className="ship-item">
              <Check />
              Отслеживание груза в реальном времени
            </div>
            <div className="ship-item">
              <Check />
              Безопасные платежи
            </div>
            <div className="ship-item">
              <Check />
              Поиск лучших участников при помощи системы рейтингов
            </div>
            <Link href="#">
              Подробнее <Arrow />
            </Link>
          </div>
        </div>
        <div className="ship-block">
          <div className="ship-info">
            <Title level={4}>Безопасно</Title>
            <div className="ship-item">
              <Check />
              Отслеживание груза в реальном времени
            </div>
            <div className="ship-item">
              <Check />
              Безопасные платежи
            </div>
            <div className="ship-item">
              <Check />
              Поиск лучших участников при помощи системы рейтингов
            </div>
            <Link href="#">
              Подробнее <Arrow />
            </Link>
          </div>
        </div>
      </Row>
    </Row>
  );
};
export default Ship;
