import React from "react";
import HeroHeader from "../../components/Hero/HeroHeader";
import { Menu, Col, Row, Button, Dropdown, Space } from "antd";
import { useState } from "react";
import "./Orders.scss";
import Calendar from "../../components/icons/Calendar"

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Aside from "../../components/Hero/Aside";
import Navigation from "../../components/Hero/Navigation";
import Filter from "../../components/icons/Filter";
import Card from "antd/es/card/Card";
import IdCard from "../../components/icons/IdCard";
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

  return (
    <>
      <HeroHeader />
      <div className="container" style={{ marginTop: "50px" }}>
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
              <HeroCard />
              <HeroCard />
              <HeroCard />
              <HeroCard />
              <HeroCard />
              <HeroCard />
            </Row>
          </div>
        </Row>
      </div>
    </>
  );
};

export default Orders;
