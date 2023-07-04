import React from "react";
import { Layout, Space, Anchor, Button, Row, Col, Typography } from "antd";
import Header from "../components/Home/Header";
import Hero from "../components/Home/Hero";
import Why from "../components/Home/Why";
import Result from "../components/Home/Result";
import Ship from "../components/Home/Ship";
import Send from "../components/Home/Send";
import Footer from "../components/Home/Footer";

const { Content } = Layout;
const { Title, Text, Link } = Typography;

const Home = () => {
  return (
    <Layout style={{ backgroundColor: "transparent" }}>
      <Header />
      <Content style={{ backgroundColor: "transparent" }}>
        <div className="container">
          <Hero />
        </div>

        <div className="container">
          <Why />
        </div>

        <Result />

        <div className="container">
          <Ship />
        </div>

        <Send />
      </Content>
      <Footer />
    </Layout>
  );
};

export default Home;
