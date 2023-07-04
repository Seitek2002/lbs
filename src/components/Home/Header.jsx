import React from 'react'
import { Layout, Space, Anchor, Button, Row, Col, Typography } from 'antd'
import Logo from '../icons/Logo.jsx'

const Header = () => {
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

  return (
    <Layout.Header className="header">
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
    </Layout.Header>
  )
}

export default Header
