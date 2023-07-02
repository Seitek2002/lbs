import React, { useMemo } from 'react'
import { Layout, Space, Anchor, Button, Row, Col, Typography } from 'antd'
import Logo from '../components/icons/Logo'
import Checkbox from '../components/icons/checkbox'
const { Header, Footer, Sider, Content } = Layout
const { Title, Text, Link } = Typography;
import heroImg from "../assets/img/hero-img.png"
import whyImg from "../assets/img/why-img.png"

const anchors = [
  {
    href: '#part-1',
    title: 'Главная',
  },
  {
    href: '#part-2',
    title: 'О нас',
  },
  {
    href: '#part-3',
    title: 'Отзывы',
  },
  {
    href: '#part-4',
    title: 'Помощь',
  },
]

const options = anchors.map((item, i) => {
  return {
    ...item,
    key: i,
  }
})

const Home = () => {
  return (
    <Layout style={{ backgroundColor: 'transparent' }}>
      <Header className="header">
        <div className="container">
          <div className="header__content">
            <Logo />
            <nav>
              <Anchor direction="horizontal" items={options} />
              <Button>Зарегистрироваться</Button>
              <Button>Войти</Button>
            </nav>
          </div>
        </div>
      </Header>
      <Content style={{ backgroundColor: 'transparent' }}>
        <div className="container">
          <Row className="hero">
            <Col className="gutter-row" span={12}>
              <h1>Грузоперевозки с высоким качеством</h1>
              <p>
                Новое направление логистики с передовой платформой как для грузоотправителей, так и для перевозчиков
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
          <Row className='why'>
            <Title level={2}>
              Почему LBS?
            </Title>
            <Text>
              Благодаря инновационным технологиям и специальной команде экспертов в своей области LSB — это не просто логистическая и транспортная сеть в мире. Это платформа и сервис, которые помогают грузоотправителям и перевозчикам контролировать свои грузы и достигать поставленных целей.
            </Text>
            <Link href="https://ant.design">
              Подробнее
            </Link>
            <div>
            <img src={whyImg} alt="" />
            </div>
          </Row>
        </div>
      </Content>
      <Footer style={{ backgroundColor: 'transparent' }}></Footer>
    </Layout>
  )
}

export default Home
