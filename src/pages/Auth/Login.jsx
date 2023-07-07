import Logo from '../../components/icons/Logo'
import React, { useState } from 'react'
import track from './image.png'
import { Button } from 'antd'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [user, setUser] = useState({})
  const navigate = useNavigate()

  const submitHandler = e => {
    const { name, value } = e.target
    setUser(prevFormData => ({ ...prevFormData, [name]: value }))
  }

  const handlerChange = async () => {
    const res = await fetch('http://192.168.1.3:8000/auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(user),
    })
    const data = await res.json()

    localStorage.setItem('secretKey', data.access)
    localStorage.setItem('user', JSON.stringify(data.user))

    if(data.user.type_user) {
      navigate('/profile-driver')
    } else {
      navigate('/profile-user')
    }
  }

  let cardStyle = {
    background: '#FFF',
    borderRadius: '32px',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '540px',
    fontFamily: 'Montserrat',
  }

  const formStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  }
  const inputStyle = {
    width: '100%',
    padding: '15px 20px',
    color: '#515050',
    borderRadius: '32px',
    border: '1px solid #ECECEC',

    background: '#FFF',
  }
  const btn = {
    padding: '15px 0',
    width: '100%',
    color: '#FFF',
    borderRadius: '28px',
    background: '#D6001C',
    textDecoration: 'none',
    height: 'auto',
  }

  return (
    <div className="bg">
      <div style={cardStyle} className="card">
        <Logo />
        <h2 className="card_title">Добро пожаловать</h2>
        <form style={formStyle} action="submit" className="card_form">
          <label>
            <input
              className="card_text"
              style={inputStyle}
              placeholder="Введите username"
              type="text"
              name="username"
              onChange={submitHandler}
            />
          </label>
          <label>
            <input
              className="card_text"
              required
              style={inputStyle}
              placeholder="Введите пароль"
              type="password"
              name="password"
              onChange={submitHandler}
            />
          </label>
        </form>
        <div
          className="card_text"
          required
          style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}
        >
          <p>
            <input type="checkbox" />
            Запомнить меня
          </p>
          <p>
            <a href="#" style={{ color: 'black', textDecoration: 'none' }}>
              Забыли пароль?
            </a>
          </p>
        </div>
        <Button className="register-btn" style={btn} onClick={handlerChange}>
          Зарегистрироваться
        </Button>
        <hr style={{ background: '#E7E5EA', width: '100%' }} />
        <p className="card_text">
          У вас нет аккaунта?
          <b>
            <Link to="/register" style={{ color: 'black', textDecoration: 'none' }}>
              Зарегистрироваться
            </Link>
          </b>
        </p>
      </div>
      <img src={track} alt="" className="image" />
    </div>
  )
}

export default Login
