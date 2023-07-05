import React from "react";
import HeroHeader from "../../components/Hero/HeroHeader";
import UserProfileContent from "../../components/Profile/UserProfileContent";
import { Row } from "antd";
import Aside from "../../components/Hero/Aside";
import { user } from "../../components/Profile/User";
import "./Profile.scss";

const UserProfile = () => {
  return (
    <>
      <HeroHeader />
      <div className="container" style={{ marginTop: "140px" }}>
        <Row style={{ display: "flex" }}>
          <Aside />
          {user.map((user) => (
            <UserProfileContent key={user.id} user={user} />
          ))}
        </Row>
      </div>
    </>
  );
};

export default UserProfile;
