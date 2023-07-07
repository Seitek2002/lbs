import React from 'react'
import { Card, Col, Row, Timeline, Button } from 'antd'
import DotOrder from '../icons/DotOrder'
import Location from '../icons/Location'
import { useNavigate } from "react-router-dom"

const HeroCard = ({ fromCity, toCity, price, distance, fromStr, toStr, fromData, toData }) => {
  const navigate = useNavigate()
  const {type_user} = JSON.parse(localStorage.getItem("user"))
  const TypographyTitle = {
    color: '#222324',
    fontSize: '16px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    letterSpacing: '0.16px',
    margin: '0',
  }

  const TypographyDesc = {
    color: '#B1B1B1',
    fontSize: '12px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    letterSpacing: '0.12px',
    margin: '0',
  }
  console.log(type_user);
  const handleClick = () => {
    localStorage.setItem('fromData', fromData.join(" "))
    localStorage.setItem('toData', toData.join(" "))
    navigate("/location")
  }

  return (
    <Col span={12}>
      <Card
        style={{
          borderRadius: '12px',
          border: '1px solid #E6E6E6',
          background: '#FFF',
          marginBottom: '30px',
        }}
        bordered={false}
      >
        <p className="price">{price}</p>
        <div>
          <p style={TypographyDesc} className="distance">
            {distance}
          </p>
          <Timeline
            style={{ marginTop: '30px' }}
            items={[
              {
                dot: <DotOrder />,
                children: (
                  <>
                    <p style={TypographyTitle}>{fromCity}</p>
                    <p style={TypographyDesc}>{fromStr}</p>
                  </>
                ),
              },
              {
                color: 'red',
                children: 'Дополнительный маршрут',
              },
              {
                dot: <Location />,
                children: (
                  <>
                    <p style={TypographyTitle}>{toCity}</p>
                    <p style={TypographyDesc}>{toStr}</p>
                  </>
                ),
              },
            ]}
          />
           {type_user ? (<Button onClick={handleClick}>Принять заказ</Button>) : ("")}
        </div>
      </Card>
    </Col>
  )
}

export default HeroCard
