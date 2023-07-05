import React from "react";
import { Card, Col, Row, Timeline } from "antd";
import DotOrder from "../icons/DotOrder";
import Location from "../icons/Location";
import Call from "../icons/Call";
import Message from "../icons/Message";

const TrackingTruckCard = () => {
  const TypographyTitle = {
    color: "#222324",
    fontSize: "16px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    letterSpacing: "0.16px",
    margin: "0",
  };

  const TypographyDesc = {
    color: "#B1B1B1",
    fontSize: "12px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    letterSpacing: "0.12px",
    margin: "0",
  };

  const TypographyBtn = {
    color: "#D6001C",
    textAlign: "center",
    fontSize: "16px",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "26px",
    letterSpacing: "-0.36px",
    width: "100%",
    height: "50px",
    borderRadius: "30px",
    border: "1px solid #D6001C",
    background: "#FFF",
    cursor: "pointer",
  };

  const TypographyTrackingTruckCardSubTitle = {
    color: "#B0B0B0",
    fontSize: "14px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
    letterSpacing: "0.14px",
  };

  const TypographyTrackingTruckCardTitle = {
    color: "#232323",
    fontSize: "18px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    letterSpacing: "0.18px",
  };

  return (
    <Col span={9}>
      <Card
        style={{
          borderRadius: "12px",
          border: "1px solid #E6E6E6",
          background: "#FFF",
          marginBottom: "30px",
        }}
        bordered={false}
      >
        <div className="trackingTruckCard-text-box">
          <p style={TypographyDesc}>Трек-номер</p>
          <p style={TypographyTitle}>EV-2017003323</p>
        </div>
        <div>
          <p style={TypographyDesc} className="distance">
            233 км
          </p>
          <Timeline
            style={{ marginTop: "30px" }}
            items={[
              {
                dot: <DotOrder />,
                children: (
                  <>
                    <p style={TypographyTitle}>Бишкек, Кыргызстан</p>
                    <p style={TypographyDesc}>пр. Манаса 38</p>
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
                    <p style={TypographyTitle}>Алматы, Казахстан</p>
                    <p style={TypographyDesc}>ул. Абай 77</p>
                  </>
                ),
              },
            ]}
          />
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: "13px", alignItems: "center" }}>
              <img
                src="https://raw.githubusercontent.com/beksultan2200/ForImg/18b06c940a56cd9f2f04c4606e932130f234da6a/Avatar.svg"
                alt=""
                className="trackingTruckCard__img"
              />
              <div style={{}}>
                <p style={TypographyTrackingTruckCardSubTitle}>Джени Вильсон</p>
                <p style={TypographyTrackingTruckCardTitle}>Клиент</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "28px" }}>
              <a href="#">
                <Call />
              </a>
              <a href="#">
                <Message />
              </a>
            </div>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default TrackingTruckCard;
