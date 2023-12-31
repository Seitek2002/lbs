import React from "react";
import HeroHeader from "../../components/Hero/HeroHeader";
import { Menu, Row } from "antd";
import { useState } from "react";
import "./Orders.scss";
import Calendar from "../../components/icons/Calendar";
import Aside from "../../components/Hero/Aside";
import Navigation from "../../components/Hero/Navigation";
import Filter from "../../components/icons/Filter";
import HeroCard from "../../components/Orders/HeroCard";
import ArrowDown from "../../components/icons/ArrowDown";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  {
    label: "Сортировать",
    key: "SubMenu",
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
    ],
  },
];

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

const Orders = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const Typography = {
    color: "#222324",
    fontSize: "18px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "28px",
    letterSpacing: "-0.4px",
  };

  const [isVisible, setIsVisible] = useState(false);

  const items = [
    {
      id: 0,
      fromCity: "Бишкек",
      toCity: "Алматы",
      price: "$900",
      distance: "233 км",
      fromStr: "пр. Манаса 38",
      toStr: "ул. Абай 77",
      fromData: [42.874851637187824, 74.58793238255039],
      toData: [43.415522103173785, 76.97039285545371]
    },
    {
      id: 1,
      fromCity: "Бишкек",
      toCity: "Бишкек-Парк",
      price: "$100",
      distance: "10 км",
      fromStr: "ул Санжира 20",
      toStr: "ул. Киевская 148",
      fromData: [42.844028048589266, 74.64170704846893],
      toData: [42.87501702391645, 74.59039703858598]
    },
    {
      id: 2,
      fromCity: "Мое местоположение",
      toCity: "Бишкек",
      price: "???",
      distance: "???",
      fromStr: "???",
      toStr: "просп. Манаса 66",
      fromData: [1,1],
      toData: [42.845079250864885, 74.58724648804674]
    },
  ]

  return (
    <>
      <HeroHeader />
      <div className="container" style={{ marginTop: "140px" }}>
        <Row style={{ display: "flex", justifyContent: "space-between" }}>
          <Aside />
          <div
            style={{
              width: "80%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
              className="block"
            >
              <div className="left">
                <Navigation />
              </div>
              <div
                style={{ display: "flex", position: "relative" }}
                className="right"
              >
                <a
                  onClick={() => {
                    setIsVisible(!isVisible);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    ...Typography,
                  }}
                  href="#"
                >
                  Фильтр
                  <Filter />
                </a>
                {isVisible && (
                  <div className="dropDown">
                    <div className="filterBlock">
                      <div className="filterBlock__box">
                        <p className="filterBlock__box-p">Откуда</p>
                        <div className="filterInputBox">
                          <input
                            className="filterInputBox__input"
                            type="text"
                            placeholder="Страна"
                          />
                          <input
                            className="filterInputBox__input"
                            type="text"
                            placeholder="Город"
                          />
                        </div>
                      </div>
                      <div className="filterBlock__box">
                        <p className="filterBlock__box-p">Куда</p>
                        <div className="filterInputBox">
                          <input
                            className="filterInputBox__input"
                            type="text"
                            placeholder="Страна"
                          />
                          <input
                            className="filterInputBox__input"
                            type="text"
                            placeholder="Город"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="filterBlock">
                      <div className="filterBlock__box">
                        <div className="filterInputBox">
                          <select className="filterInputBox__select">
                            <option className="filterBlock__box-p">
                              Пункт 1
                            </option>
                            <option className="filterBlock__box-p">
                              Пункт 2
                            </option>
                          </select>
                          <select className="filterInputBox__select">
                            <Calendar/>
                            <option className="filterBlock__box-p">
                              Пункт 1
                            </option>
                            <option className="filterBlock__box-p">
                              Пункт 2
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="filterBlock__box">
                        <div className="filterInputBox">
                          <input
                            id="weight"
                            className="filterInputBox__input"
                            type="text"
                            placeholder="Вес"
                          />
                          <select name="" id="select">
                            <option value="">kg </option>
                            <ArrowDown />
                          </select>
                        </div>
                      </div>
                    </div>
                    <button className="filter__btn">Найти груз</button>
                  </div>
                )}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <Menu
                    className="menu"
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    items={items}
                  />
                  <ArrowDown />
                </div>
              </div>
            </div>
            <Row gutter={16}>
              {
                items.map(item => (
                  <HeroCard {...item} />
                ))
              }
            </Row>
          </div>
        </Row>
      </div>
    </>
  );
};

export default Orders;
