import React from "react";

import { Row, Col, Button } from "antd";
import { useState } from "react";
import PhotoAvatar from "../icons/PhotoAvatar";
import Pen from "../icons/Pen";
import IdCard from "../icons/IdCard";
import Docs from "../icons/Docs";
import { driver } from "./Driver";
import './DriverProfileContent.scss'

const ProfileContent = ({ driver }) => {
  



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

  const button = {
    width: "100%",
    height: "46px",
    color: "#D6001C",
    background: "none",
    textAlign: "center",
    fontSize: "16px",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "28px",
    letterSpacing: "-0.4px",
    borderRadius: "40px",
    border: "1px solid #D6001C",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Row className="drProfile__row">
      <div className="left">
        <PhotoAvatar />
        <Button style={button} type="primary" icon={<Pen />} size={size}>
          Download
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
                {driver.name}
              </div>
            </div>
            <div className="text-box">
              <div style={TypographyTitle} className="text-box-title">
                Опыт вождения
              </div>
              <div style={TypographyDesc} className="text-box-content">
                {driver.drivingExperience}
              </div>
            </div>
            <div className="text-box">
              <div style={TypographyTitle} className="text-box-title">
                Номер DOT
              </div>
              <div style={TypographyDesc} className="text-box-content">
                {driver.dotNumber}
              </div>
            </div>
            <div className="text-box">
              <div style={TypographyTitle} className="text-box-title">
                Местоположение
              </div>
              <div style={TypographyDesc} className="text-box-content">
                {driver.location}
              </div>
            </div>
          </Col>
          <Col className="col-mobile" span={12}>
            <div className="text-box">
              <div style={TypographyTitle} className="text-box-title">
                Номер телефона
              </div>
              <div style={TypographyDesc} className="text-box-content">
                {driver.phoneNumber}
              </div>
            </div>
            <div className="text-box">
              <div style={TypographyTitle} className="text-box-title">
                Почта
              </div>
              <div className="text-box-content">
                <p className="text-box-content__p">{driver.email}</p>
              </div>
            </div>
          </Col>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <div className="col-content">
            <div style={TypographyTitle} className="text-box-title">
              Водительские права
            </div>
            <img style={{ width: "100%" }} src={driver.DrivingLicense} alt="" />
          </div>
          <div className="col-content">
            <div style={TypographyTitle} className="text-box-title">
              Страховка
            </div>
            <img style={{ width: "100%" }} src={driver.Insurance} alt="" />
          </div>
        </div>
      </div>
    </Row>
  );
};

export default ProfileContent;
