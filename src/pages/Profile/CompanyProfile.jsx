import React from "react";
import { Layout, Row, Col } from "antd";
import HeroHeader from "../../components/Hero/HeroHeader";
import Aside from "../../components/Hero/Aside";
import { Content } from "antd/es/layout/layout";
import CompanyProfileContent from "../../components/Profile/CompaniProfileContent";
import { company } from "../../components/Profile/Company";

const CompanyProfile = () => {
  return (
    <>
      <HeroHeader />
      <div className="container" style={{ marginTop: "140px" }}>
        <Row style={{ display: "flex", justifyContent: "space-between" }}>
          <Aside />
          <Content style={{ width: "50%" }}>
            {company.map((company) => (
              <CompanyProfileContent key={company.id} company={company} />
            ))}
          </Content>
        </Row>
      </div>
    </>
  );
};

export default CompanyProfile;
