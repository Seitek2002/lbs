import React, { useMemo } from 'react'
import { Layout, Space, Anchor, Button, Row, Col } from 'antd'
import Logo from '../components/icons/Logo'
const { Header, Footer, Sider, Content } = Layout

const headerStyle = {
  backgroundColor: 'transparent',
  padding: '28px 0',
}

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
    <Layout style={{backgroundColor: 'transparent'}}>
      <Header className="header" style={headerStyle}>
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
      <Content style={{backgroundColor: 'transparent'}}>
        <div className="container">
        <Row className='hero'>
            <Col className="gutter-row" span={12}>
                <h1>
                    Грузоперевозки с высоким качеством
                </h1>
                <p>
                    Новое направление логистики с передовой платформой как для грузоотправителей, так и для перевозчиков
                </p>
                <Button>Начать</Button>
                <div>

                </div>
            </Col>
            <Col className="gutter-row" span={12}>
                
            </Col>
        </Row>
        </div>
      </Content>
      <Footer style={{backgroundColor: 'transparent'}}></Footer>
    </Layout>
  )
}

export default Home
