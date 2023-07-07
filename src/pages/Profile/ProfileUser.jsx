import React, { useEffect } from 'react'
import HeroHeader from '../../components/Hero/HeroHeader'
import { Row, Col, Button } from 'antd'
import { useState } from 'react'
import Aside from '../../components/Hero/Aside'
import PhotoAvatar from '../../components/icons/PhotoAvatar'
import Pen from '../../components/icons/Pen'
import IdCard from '../../components/icons/IdCard'
import Docs from '../../components/icons/Docs'

const ProfileUser = () => {
  const [size, setSize] = useState('large') // default is 'middle'
  const [info, setInfo] = useState({});

  useEffect(() => {
    console.log(localStorage.getItem('secretKey'))
    console.log(JSON.parse(localStorage.getItem('user')))
    setInfo(JSON.parse(localStorage.getItem('user')))
  }, [])

  const TypographyTitle = {
    color: '#222324',
    fontSize: '18px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '28px',
    letterSpacing: '-0.4px',
  }

  const TypographyDesc = {
    color: '#67646A',
    fontSize: '18px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '28px',
    letterSpacing: '-0.4px',
  }

  const button = {
    width: '300px',
    height: '46px',
    color: '#D6001C',
    background: 'none',
    textAlign: 'center',
    fontSize: '16px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '28px',
    letterSpacing: '-0.4px',
    borderRadius: '40px',
    border: '1px solid #D6001C',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  return (
    <>
      <HeroHeader />
      <div className="container" style={{ marginTop: '140px' }}>
        <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Aside />
          <Row style={{ justifyContent: 'space-between', gap: '48px' }}>
            <div className="left">
              <PhotoAvatar />
              {/* <Button style={button} type="primary" icon={<Pen />} size={size}>
                Download
              </Button> */}
            </div>
            <div className="right">
              <div style={{ display: 'flex', gap: '150px' }}>
                <Col
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '23px',
                  }}
                  span={9}
                >
                  <div className="text-box">
                    <div style={TypographyTitle} className="text-box-title">
                      ФИО
                    </div>
                    <div style={TypographyDesc} className="text-box-content">
                      {info.first_name + ' ' + info.last_name}
                    </div>
                  </div>
                  <div className="text-box">
                    <div style={TypographyTitle} className="text-box-title">
                      Местоположение
                    </div>
                    <div style={TypographyDesc} className="text-box-content">
                      Чикаго, Иллинойс, США
                    </div>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="text-box">
                    <div style={TypographyTitle} className="text-box-title">
                      Номер телефона
                    </div>
                    <div style={TypographyDesc} className="text-box-content">
                      +55 916 778 678
                    </div>
                  </div>
                  <div className="text-box">
                    <div style={TypographyTitle} className="text-box-title">
                      Почта
                    </div>
                    <div style={TypographyDesc} className="text-box-content">
                      {info.email}
                    </div>
                  </div>
                </Col>
              </div>
            </div>
          </Row>
        </Row>
      </div>
    </>
  )
}

export default ProfileUser
