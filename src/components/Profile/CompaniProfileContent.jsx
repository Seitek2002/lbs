import React from "react";

import { Row, Col, Button } from "antd";
import { useState } from "react";
import PhotoAvatar from "../icons/PhotoAvatar";
import Pen from "../icons/Pen";
import IdCard from "../icons/IdCard";
import Docs from "../icons/Docs";
import { company } from "./Company";

const CompanyProfileContent = ({ company }) => {
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
    width: "300px",
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
    <Row style={{ justifyContent: "flex-end", gap: "48px", flexWrap: "wrap" }}>
      <div
        className="left"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "27px",
        }}
      >
        <PhotoAvatar />
        <Button style={button} type="primary" icon={<Pen />} size={size}>
          Download
        </Button>
      </div>
      <div className="right">
        <div style={{ display: "flex", gap: "150px" }}>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "23px",
            }}
            span={9}
          >
            <div className="text-box">
              <div style={TypographyTitle} className="text-box-title">
                Название компании
              </div>
              <div style={TypographyDesc} className="text-box-content">
                {company.name}
              </div>
            </div>
            <div className="text-box">
              <div style={TypographyTitle} className="text-box-title">
                Регистрационный номер
              </div>
              <div style={TypographyDesc} className="text-box-content">
                {company.regNumber}
              </div>
            </div>
            <div className="text-box">
              <div style={TypographyTitle} className="text-box-title">
                Номер DOT
              </div>
              <div style={TypographyDesc} className="text-box-content">
                {company.dotNumber}
              </div>
            </div>
            <div className="text-box">
              <div style={TypographyTitle} className="text-box-title">
                Местоположение
              </div>
              <div style={TypographyDesc} className="text-box-content">
                {company.location}
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="text-box">
              <div style={TypographyTitle} className="text-box-title">
                Номер телефона
              </div>
              <div style={TypographyDesc} className="text-box-content">
                {company.phoneNumber}
              </div>
            </div>
            <div className="text-box">
              <div style={TypographyTitle} className="text-box-title">
                Почта
              </div>
              <div style={TypographyDesc} className="text-box-content">
                {company.email}
              </div>
            </div>
            <div className="text-box">
              <div style={TypographyTitle} className="text-box-title">
                Количество водителей
              </div>
              <div style={TypographyDesc} className="text-box-content">
                {company.numberOfDrivers}
              </div>
            </div>
          </Col>
        </div>
      </div>
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="col-content">
          <div style={TypographyTitle} className="text-box-title">
            Лицензия
          </div>
          <div style={TypographyDesc} className="text-box-content">
            <img src={company.license} alt="" />
          </div>
        </div>
        <div className="col-content">
          <div style={TypographyTitle} className="text-box-title">
            Договор страхования
          </div>
          <div style={TypographyDesc} className="text-box-content">
            <img src={company.InsuranceContract} alt="" />
          </div>
        </div>
      </div>
    </Row>
  );
};

export default CompanyProfileContent;
