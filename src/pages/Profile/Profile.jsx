import React from "react";
import HeroHeader from "../../components/Hero/HeroHeader";
import ProfileContent from "../../components/Profile/DriverProfileContent";
import { Row } from "antd";
import Aside from "../../components/Hero/Aside";
import { driver } from "../../components/Profile/Driver";
import './Profile.scss'

const Profile = () => {
  return (
    <>
      <HeroHeader />
      <div className="container" style={{marginTop: "140px"}}>
        <Row style={{ display: "flex", justifyContent: "space-between" }}>
          <Aside />
          {driver.map((driver) => (
            <ProfileContent key={driver.id} driver={driver} />
          ))}
        </Row>
      </div>
    </>
  );
};

export default Profile;
