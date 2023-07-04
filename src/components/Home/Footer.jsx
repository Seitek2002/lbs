import Logo from "../../components/icons/Logo";
import Facebook from "../../components/icons/Facebook";
import Twiter from "../../components/icons/Twiter";
import Instagram from "../../components/icons/Instagram";
import In from "../../components/icons/In";
import Youtube from "../../components/icons/Youtube";
import React from "react";
import { Layout, Space, Anchor, Button, Row, Col, Typography } from "antd";
const { Title, Text, Link } = Typography;

const Footer = () => {
  return (
    <Layout.Footer
      className="container footer"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="footer-wrapper">
        <Row className="footer-info">
          <Logo className="footer-logo" />
          <Text className="footer-textl">
            Lorem ipsum dolor sit amet consectetur <br /> adipiscing elit
            aliquam mauris sed ma
          </Text>
          <div className="footer-cocial">
            <a href="#" target="_blank">
              <Facebook />
            </a>
            <a href="#" target="_blank">
              <Twiter />
            </a>
            <a href="#" target="_blank">
              <Instagram />
            </a>
            <a href="#" target="_blank">
              <In />
            </a>
            <a href="#" target="_blank">
              <Youtube />
            </a>
          </div>
        </Row>
        <Row className="footer-links">
          <ul className="footer-list">
            <li className="footer-item">
              {" "}
              <Title level={3}>Product </Title>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Features
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Pricing
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Case studies
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Reviews
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Updates
              </a>
            </li>
          </ul>
          <ul className="footer-list">
            <li className="footer-item">
              {" "}
              <Title level={3}>Product </Title>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Features
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Pricing
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Case studies
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Reviews
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Updates
              </a>
            </li>
          </ul>
          <ul className="footer-list">
            <li className="footer-item">
              {" "}
              <Title level={3}>Product </Title>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Features
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Pricing
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Case studies
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Reviews
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Updates
              </a>
            </li>
          </ul>
          <ul className="footer-list">
            <li className="footer-item">
              {" "}
              <Title level={3}>Product </Title>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Features
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Pricing
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Case studies
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Reviews
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Updates
              </a>
            </li>
          </ul>
        </Row>
      </div>
      <div className="footer-line"></div>
      <p className="footer-description">
        Copyright © 2023 BRIX Templates | All Rights Reserved <br /> | Terms and
        Conditions | Privacy Policy
      </p>
    </Layout.Footer>
  );
};

export default Footer;
