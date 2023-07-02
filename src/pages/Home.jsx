import React, { useMemo } from "react";
import { Layout, Space, Anchor, Button, Row, Col, Typography } from "antd";
import Logo from "../components/icons/Logo";
import Check from "../components/icons/Check";
import Arrow from "../components/icons/Arrow";
import Checkbox from "../components/icons/Checkbox";
import Facebook from "../components/icons/Facebook";
import Twiter from "../components/icons/Twiter";
import Instagram from "../components/icons/Instagram";
import In from "../components/icons/In";
import Youtube from "../components/icons/Youtube";
const { Header, Footer, Sider, Content } = Layout;
const { Title, Text, Link } = Typography;
import heroImg from "../assets/img/hero-img.png";
import whyImg from "../assets/img/why-img.png";
import sendImg from "../assets/img/send-img.png";

const anchors = [
    {
        href: "#part-1",
        title: "Главная",
    },
    {
        href: "#part-2",
        title: "О нас",
    },
    {
        href: "#part-3",
        title: "Отзывы",
    },
    {
        href: "#part-4",
        title: "Помощь",
    },
];

const options = anchors.map((item, i) => {
    return {
        ...item,
        key: i,
    };
});

const Home = () => {
    return (
        <Layout style={{ backgroundColor: "transparent" }}>
            <Header className="header">
                <div className="container">
                    <div className="header__content">
                        <Logo />
                        <nav>
                            <Anchor direction="horizontal" items={options} />
                            <Button>Зарегистрироваться</Button>
                            <Button>Войти</Button>
                        </nav>
                        <div className="burger">
                            <div className="burger-menu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="burger-content">1234</div>
                        </div>
                    </div>
                </div>
            </Header>
            <Content style={{ backgroundColor: "transparent" }}>
                <div className="container">
                    <Row className="hero">
                        <Col className="gutter-row" span={12}>
                            <h1>Грузоперевозки с высоким качеством</h1>
                            <p>
                                Новое направление логистики с передовой
                                платформой как для грузоотправителей, так и для
                                перевозчиков
                            </p>
                            <Button>Начать</Button>
                            <div>
                                <ul>
                                    <li>
                                        <Checkbox />
                                        Оперативность
                                    </li>
                                    <li>
                                        <Checkbox />
                                        Лучшие цены
                                    </li>
                                    <li>
                                        <Checkbox />
                                        Более 5 000 довольных клиентов
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={12}>
                            <img src={heroImg} alt="" />
                        </Col>
                        <div className="red-box"></div>
                    </Row>
                </div>

                <div className="container">
                    <Row className="why">
                        <Title level={2}>Почему LBS?</Title>
                        <Text>
                            Благодаря инновационным технологиям и специальной
                            команде экспертов в своей области LSB — это не
                            просто логистическая и транспортная сеть в мире. Это
                            платформа и сервис, которые помогают
                            грузоотправителям и перевозчикам контролировать свои
                            грузы и достигать поставленных целей.
                        </Text>
                        <Link href="https://ant.design">Подробнее</Link>
                        <div>
                            <img src={whyImg} alt="" />
                        </div>
                    </Row>
                </div>

                <Row className="results">
                    <div className="container">
                        <Title level={2}>Наши результаты в цифрах</Title>
                        <Row className="results-wrapper">
                            <div className="results-item">
                                <Text>10</Text>
                                <p className="results-description">
                                    Лет опыта работы
                                </p>
                            </div>
                            <div className="results-line"></div>
                            <div className="results-item">
                                <Text>200 000</Text>
                                <p className="results-description">
                                    Активных пользователей
                                </p>
                            </div>
                            <div className="results-line"></div>
                            <div className="results-item">
                                <Text>96%</Text>
                                <p className="results-description">
                                    Успешных заказов
                                </p>
                            </div>
                        </Row>
                    </div>
                </Row>

                <div className="container">
                    <Row className="ship">
                        <Title level={2}>Отправляйте и перевозите с LBS</Title>
                        <Text>
                            LBS открывает лучшие возможности и варианты для
                            грузоотправителей и перевозчиков по перемещению
                            товаров
                        </Text>
                        <Row className="ship-wrapper">
                            <div className="ship-block">
                                <div className="ship-info">
                                    <Title level={4}>Безопасно</Title>
                                    <div className="ship-item">
                                        <Check />
                                        Отслеживание груза в реальном времени
                                    </div>
                                    <div className="ship-item">
                                        <Check />
                                        Безопасные платежи
                                    </div>
                                    <div className="ship-item">
                                        <Check />
                                        Поиск лучших участников при помощи
                                        системы рейтингов
                                    </div>
                                    <Link href="#">
                                        Побробнее <Arrow />
                                    </Link>
                                </div>
                            </div>
                            <div className="ship-block">
                                <div className="ship-info">
                                    <Title level={4}>Безопасно</Title>
                                    <div className="ship-item">
                                        <Check />
                                        Отслеживание груза в реальном времени
                                    </div>
                                    <div className="ship-item">
                                        <Check />
                                        Безопасные платежи
                                    </div>
                                    <div className="ship-item">
                                        <Check />
                                        Поиск лучших участников при помощи
                                        системы рейтингов
                                    </div>
                                    <Link href="#">
                                        Побробнее <Arrow />
                                    </Link>
                                </div>
                            </div>
                            <div className="ship-block">
                                <div className="ship-info">
                                    <Title level={4}>Безопасно</Title>
                                    <div className="ship-item">
                                        <Check />
                                        Отслеживание груза в реальном времени
                                    </div>
                                    <div className="ship-item">
                                        <Check />
                                        Безопасные платежи
                                    </div>
                                    <div className="ship-item">
                                        <Check />
                                        Поиск лучших участников при помощи
                                        системы рейтингов
                                    </div>
                                    <Link href="#">
                                        Побробнее <Arrow />
                                    </Link>
                                </div>
                            </div>
                            <div className="ship-block">
                                <div className="ship-info">
                                    <Title level={4}>Безопасно</Title>
                                    <div className="ship-item">
                                        <Check />
                                        Отслеживание груза в реальном времени
                                    </div>
                                    <div className="ship-item">
                                        <Check />
                                        Безопасные платежи
                                    </div>
                                    <div className="ship-item">
                                        <Check />
                                        Поиск лучших участников при помощи
                                        системы рейтингов
                                    </div>
                                    <Link href="#">
                                        Побробнее <Arrow />
                                    </Link>
                                </div>
                            </div>
                        </Row>
                    </Row>
                </div>

                <Row className="send">
                    <Col className="send-left" span={12}>
                        <div>
                            <Title level={2}>
                                Отправляйте и перевозите с LBS
                            </Title>
                            <Text>
                                LBS открывает лучшие возможности и варианты для
                                грузоотправителей и перевозчиков по перемещению
                                товаров
                            </Text>
                            <button>Начать</button>
                        </div>
                    </Col>
                    <Col className="send-right" span={12}>
                        <img src={sendImg} alt="img" />
                    </Col>
                </Row>
            </Content>
            <Footer
                className="container footer"
                style={{ backgroundColor: "transparent" }}
            >
                <div className="footer-wrapper">
                    <Row className="footer-info">
                        <Logo />
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit aliquam mauris sed ma
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
                </div>
                <div className="footer-line"></div>
                <p className="footer-description">Copyright © 2023 BRIX Templates | All Rights Reserved | Terms and Conditions | Privacy Policy</p>
            </Footer>
        </Layout>
    );
};

export default Home;
