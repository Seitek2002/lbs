import React, { useEffect } from 'react'
import { Layout, Space, Anchor, Button, Row, Col, Typography } from 'antd'
import Header from '../components/Home/Header'
import Hero from '../components/Home/Hero'
import Why from '../components/Home/Why'
import Result from '../components/Home/Result'
import Ship from '../components/Home/Ship'
import Send from '../components/Home/Send'
import Footer from '../components/Home/Footer'

const { Content } = Layout
const { Title, Text, Link } = Typography

const Home = () => {
  // useEffect(async () => {
  //   if (navigator.geolocation) {
  //     const options = {
  //       enableHighAccuracy: true, // Запрос на более высокую точность
  //       timeout: 10000, // Максимальное время ожидания
  //       maximumAge: 0, // Не использовать кэшированное местоположение
  //     }

  //     const watchId = await navigator.geolocation.watchPosition(
  //       function (position) {
  //         // Обработка обновленного местоположения
  //         const latitude = position.coords.latitude
  //         const longitude = position.coords.longitude

  //         console.log('Широта:', latitude)
  //         console.log('Долгота:', longitude)
  //       },
  //       function (error) {
  //         console.log(error)
  //       },
  //       options
  //     )
  //   } else {
  //     // Геолокация не поддерживается
  //     console.log('Геолокация не поддерживается вашим браузером')
  //   }
  // }, [])

  return (
    <Layout style={{ backgroundColor: 'transparent' }}>
      <Header />
      <Content style={{ backgroundColor: 'transparent' }}>
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
  )
}

export default Home
