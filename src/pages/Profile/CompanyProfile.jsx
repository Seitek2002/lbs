import React from "react";
import { Layout, Row, Col } from "antd";
import HeroHeader from "../../components/Hero/HeroHeader";
import Aside from "../../components/Hero/Aside";
import { Content } from "antd/es/layout/layout";
import ProfileContent from "../../components/Profile/ProfileContent";

const CompanyProfile = () => {
  return (
    <>
      <HeroHeader />
      <div className="container">
        <Row style={{ display: "flex", justifyContent: "space-between" }}>
          <Aside />
          <Content>
            <ProfileContent />
          </Content>
        </Row>
      </div>
    </>
  );
};

export default CompanyProfile;
