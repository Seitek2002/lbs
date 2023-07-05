import { Layout, Row } from 'antd'
import React from 'react'
import HeroHeader from '../../components/Hero/HeroHeader'
import Aside from '../../components/Hero/Aside'
import './location.scss'
import LocationCard from '../../components/Location/LocationCard'
import DrawMap from '../../components/DrawMap'

const Location = () => {

  return (
    <>
      <HeroHeader />
        <button style={{ marginTop: "100px" }} onClick={() => handleCheck()}>Click</button>
      <div className="container container-styled">
        <Aside />
        <div className="location-block">
          {/* <iframe
            style={{ position: "relative" }}
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab6de785ac3f08a15d6263bbe7344cf3361c8c7d74f85aba5cf1ebd97c060dab6&amp;source=constructor"
            width="100%"
            height="807"
            frameborder="0"
          ></iframe> */}
          <DrawMap />

          <div className="box">
            <div className="location__left">
              <h3 className="info__h3">
                Информация о грузе <hr />
              </h3>

              <p className="info__p">
                <img
                  src="https://raw.githubusercontent.com/beksultan2200/ForImg/1d55ab23634abefc49b954ee0705775bcb85454c/Group%20270.svg"
                  alt=""
                />{' '}
                Тип груза : Бумага
              </p>
              <p className="info__p">
                <img
                  src="https://raw.githubusercontent.com/beksultan2200/ForImg/1d55ab23634abefc49b954ee0705775bcb85454c/Group%20270.svg"
                  alt=""
                />{' '}
                Вес : 2 000 т
              </p>
              <p className="info__p">
                <img
                  src="https://raw.githubusercontent.com/beksultan2200/ForImg/1d55ab23634abefc49b954ee0705775bcb85454c/Group%20270.svg"
                  alt=""
                />{' '}
                Дата отправки : 01.07.23
              </p>
              <p className="info__p">
                <img
                  src="https://raw.githubusercontent.com/beksultan2200/ForImg/1d55ab23634abefc49b954ee0705775bcb85454c/Group%20270.svg"
                  alt=""
                />{' '}
                Маршрут :Бишкек, Кыргызстан
                <img
                  src="https://raw.githubusercontent.com/beksultan2200/ForImg/d82703862bf1ed0a0ccb591a436d4a6a0e3ca51b/Group%20271.svg"
                  alt=""
                />
                Алматы, Казахстан
              </p>

              <h3 className="info__h3">
                Транспорт и оплата <hr />
              </h3>
              <p className="info__p">
                <img
                  src="https://raw.githubusercontent.com/beksultan2200/ForImg/1d55ab23634abefc49b954ee0705775bcb85454c/Group%20270.svg"
                  alt=""
                />{' '}
                Транспорт: Фургон (отдельной машиной)
              </p>
            </div>
            <div className="location-right">
              <LocationCard />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Location
