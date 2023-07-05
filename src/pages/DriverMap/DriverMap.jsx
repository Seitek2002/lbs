import React from 'react'
import HeroHeader from '../../components/Hero/HeroHeader'
import Aside from '../../components/Hero/Aside';
import Location from '../../components/icons/Location';
import Shop from '../../components/icons/Shop';
import './DriverMap.scss'

const DriverMap = () => {
  return (
    <>
      <HeroHeader />
      <div className="container container-styled">
        <Aside />
        <div className="location-block">
          <iframe
            style={{ position: "relative" }}
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab6de785ac3f08a15d6263bbe7344cf3361c8c7d74f85aba5cf1ebd97c060dab6&amp;source=constructor"
            width="100%"
            height="807"
            frameborder="0"
          ></iframe>
          <div className="driverMap-block">
            <button className="driverMap-block__btn">
              <Location /> Заправки
            </button>
            <button className="driverMap-block__btn">
              <Shop /> Магазины
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DriverMap