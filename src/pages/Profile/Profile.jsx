import React from "react";
import HeroHeader from "../../components/Hero/HeroHeader";
import ProfileContent from "../../components/Profile/ProfileContent";
import { Row } from "antd";
import Aside from "../../components/Hero/Aside";

const Profile = () => {
  return (
    <>
      <HeroHeader />
      <div className="container" style={{ marginTop: "50px" }}>
        <Row style={{ display: "flex", justifyContent: "space-between" }}>
          <Aside />
          <ProfileContent />
        </Row>
      </div>
    </>
  );
};

export default Profile;
