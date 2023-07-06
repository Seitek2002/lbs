import React from "react";
import HeroHeader from "../../components/Hero/HeroHeader";
import { Row, Col, Button, Divider, Radio, Space } from "antd";
import { useState } from "react";
import Sider from "antd/es/layout/Sider";
import Aside from "../../components/Hero/Aside";
import PhotoAvatar from "../../components/icons/PhotoAvatar";
import Pen from "../../components/icons/Pen";
import IdCard from "../../components/icons/IdCard";
import Docs from "../../components/icons/Docs";

const Profile = () => {
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
    <>
      <HeroHeader />
      <div className="container" style={{marginTop: "140px"}}>
        <Row style={{ display: "flex", justifyContent: "space-between" }}>
          <Aside />
          <Row style={{ justifyContent: "space-between", gap: "48px" }}>
            <div className="left">
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
                      ФИО
                    </div>
                    <div style={TypographyDesc} className="text-box-content">
                      Томас Смит
                    </div>
                  </div>
                  <div className="text-box">
                    <div style={TypographyTitle} className="text-box-title">
                      Опыт вождения
                    </div>
                    <div style={TypographyDesc} className="text-box-content">
                      13 лет
                    </div>
                  </div>
                  <div className="text-box">
                    <div style={TypographyTitle} className="text-box-title">
                      Номер DOT
                    </div>
                    <div style={TypographyDesc} className="text-box-content">
                      123456
                    </div>
                  </div>
                  <div className="text-box">
                    <div style={TypographyTitle} className="text-box-title">
                      Местоположение
                    </div>
                    <div style={TypographyDesc} className="text-box-content">
                      Чикаго, Иллинойс, США
                    </div>
                  </div>
                  <div className="col-content">
                    <div style={TypographyTitle} className="text-box-title">
                      Водительские права
                    </div>
                    <div style={TypographyDesc} className="text-box-content">
                      <IdCard />
                    </div>
                  </div>
                  <div className="col-content">
                    <div style={TypographyTitle} className="text-box-title">
                      Водительские права
                    </div>
                    <div style={TypographyDesc} className="text-box-content">
                      <Docs />
                    </div>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="text-box">
                    <div style={TypographyTitle} className="text-box-title">
                      Номер телефона
                    </div>
                    <div style={TypographyDesc} className="text-box-content">
                      +55 916 778 678
                    </div>
                  </div>
                  <div className="text-box">
                    <div style={TypographyTitle} className="text-box-title">
                      Почта
                    </div>
                    <div style={TypographyDesc} className="text-box-content">
                      tomassmith@gmail.com
                    </div>
                  </div>
                </Col>
              </div>
            </div>
          </Row>
        </Row>
      </div>
    </>
  );
};

export default Profile;
