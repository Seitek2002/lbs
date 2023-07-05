import React from "react";
import { Card, Col, Row, Timeline } from "antd";
import DotOrder from "../icons/DotOrder";
import Location from "../icons/Location";
import './LocationCard.scss'

const LocationCard = () => {
  //const TypographyTitle = {
  //  color: "#222324",
  //  fontSize: "16px",
  //  fontFamily: "Roboto",
  //  fontStyle: "normal",
  //  fontWeight: "400",
  //  lineHeight: "normal",
  //  letterSpacing: "0.16px",
  //  margin: "0",
  //};

  //const TypographyDesc = {
  //  color: "#B1B1B1",
  //  fontSize: "12px",
  //  fontFamily: "Roboto",
  //  fontStyle: "normal",
  //  fontWeight: "400",
  //  lineHeight: "normal",
  //  letterSpacing: "0.12px",
  //  margin: "0",
  //};


  return (
    <Col span={24}>
      <Card
        style={{
          borderRadius: "12px",
          border: "1px solid #E6E6E6",
          background: "#FFF",
          marginBottom: "30px",
        }}
        bordered={false}
      >
        <p className="location__price">$800</p>
        <div>
          <p className="location__distance">
            233 км
          </p>
          <Timeline
            style={{ marginTop: "30px" }}
            items={[
              {
                dot: <DotOrder />,
                children: (
                  <>
                    <p className="location__title">Бишкек, Кыргызстан</p>
                    <p className="location__description">пр. Манаса 38</p>
                  </>
                ),
              },
              {
                color: "red",
                children: "Дополнительный маршрут",
              },
              {
                dot: <Location />,
                children: (
                  <>
                    <p className="location__title">Алматы, Казахстан</p>
                    <p className="location__description">ул. Абай 77</p>
                  </>
                ),
              },
            ]}
          />
          <button className="location__btn">Завершить</button>
        </div>
      </Card>
    </Col>
  );
};

export default LocationCard;
