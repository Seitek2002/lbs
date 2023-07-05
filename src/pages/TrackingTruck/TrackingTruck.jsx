import React from "react";
import HeroHeader from "../../components/Hero/HeroHeader";
import Aside from "../../components/Hero/Aside";
import TrackingTruckCard from "../../components/TrackingTruck/TrackingTruckCard";
//import "./TrackingTruck.scss";

const TrackingTruck = () => {
  return (
    <>
      <HeroHeader />
      <div className="container container-styled">
        <Aside />
        <div className="location-block">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Afdf5b0dea1be318082af4c3903cefdb55af431df69cd1a51f5a587f09a1bc0a3&amp;source=constructor"
            width="100%"
            height="720"
            frameborder="0"
          ></iframe>
          <div className="trackingTruck__block" style={{display: "flex", gap: "30px", marginTop: "35px"}}>
            <TrackingTruckCard />
            <TrackingTruckCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackingTruck;
