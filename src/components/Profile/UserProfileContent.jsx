import React from "react";

import { Row, Col, Button } from "antd";
import { useState } from "react";
import PhotoAvatar from "../icons/PhotoAvatar";
import Pen from "../icons/Pen";
import { user } from "./User";
import "./UserProfileContent.scss";

const UserProfileContent = ({ user }) => {
  const [size, setSize] = useState("large"); // default is 'middle'

  const TypographyTitle = {
    color: "#222324",
    fontSize: "18px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "28px",
    letterSpacing: "-0.4px",
  };
  const TypographyDesc = {
    color: "#67646A",
    fontSize: "18px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "28px",
    letterSpacing: "-0.4px",
  };



  return (
    <Row className="drProfile__row">
      <div className="left">
        <img
          className="img"
          src="https://github.com/beksultan2200/ForImg/blob/main/Rectangle%203108.png?raw=true"
          alt=""
        />
        <Button
          className="UserProfileContent__btn"
          type="primary"
          icon={<Pen />}
          size={size}
        >
          Редактировать
        </Button>
      </div>
      <div className="right">
        <div className="right__content">
          <Col
            className="drProfile__col"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "23px",
              marginBottom: "23px",
            }}
            span={9}
          >
            <div className="text-box">
              <div style={TypographyTitle} className="text-box-title">
                ФИО
              </div>
              <div style={TypographyDesc} className="text-box-content">
                {user.name}
              </div>
            </div>
            <div className="text-box">
              <div style={TypographyTitle} className="text-box-title">
                Номер телефона
              </div>
              <div style={TypographyDesc} className="text-box-content">
                {user.phoneNumber}
              </div>
            </div>
          </Col>
          <Col
            className="drProfile__col"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "23px",
              marginBottom: "23px",
            }}
            span={12}
          >
            <div className="text-box">
              <div style={TypographyTitle} className="text-box-title">
                Почта
              </div>
              <div style={TypographyDesc} className="text-box-content">
                {user.email}
              </div>
            </div>
            <div className="text-box">
              <div style={TypographyTitle} className="text-box-title">
                Местоположение
              </div>
              <div style={TypographyDesc} className="text-box-content">
                {user.location}
              </div>
            </div>
          </Col>
        </div>
      </div>
    </Row>
  );
};

export default UserProfileContent;
