import Check from '../../components/icons/Check'
import Logo from '../../components/icons/Logo'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import track from './image.png'
import './auth.scss'
import { Button } from 'antd'

const Register = () => {
  const [user, setUser] = useState({})
  // const history = usena
  const navigate = useNavigate()

  const submitHandler = e => {
    const { name, value } = e.target
    setUser(prevFormData => ({ ...prevFormData, [name]: value }))
  }

  const handlerChange = () => {
    navigate('/register')
  }

  const cardStyle = {
    background: '#FFF',
    borderRadius: '32px',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
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
        <form style={formStyle} className="card_form">
          <label>
            <input
              className="card_text"
              style={inputStyle}
              placeholder="Введите имя"
              type="text"
              name="first_name"
              onInput={submitHandler}
            />
          </label>
          <label>
            <input
              className="card_text"
              style={inputStyle}
              placeholder="Введите фамилию"
              type="text"
              name="last_name"
              onInput={submitHandler}
            />
          </label>
          <label>
            <input
              className="card_text"
              style={inputStyle}
              placeholder="Введите username"
              type="text"
              name="username"
              onInput={submitHandler}
            />
          </label>
          <label>
            <input
              className="card_text"
              style={inputStyle}
              placeholder="Введите почту"
              type="text"
              name="mail"
              onInput={e => submitHandler(e)}
            />
          </label>
          <label>
            <input
              className="card_text"
              style={inputStyle}
              placeholder="Создайте пароль"
              type="password"
              name="password"
              onInput={e => submitHandler(e)}
            />
          </label>
          <p className="card_text">
            <input type="checkbox" />Я принимаю условия <a href="#">Пользовательского соглашения</a>
          </p>
          <Button className="register-btn" style={btn} onClick={() => handlerChange()}>
            Зарегистрироваться
          </Button>
        </form>
        <hr style={{ background: '#E7E5EA', width: '100%' }} />
        <p className="card_text">
          У вас есть аккаунт?
          <b>
            <Link to="/login" style={{ color: 'black', textDecoration: 'none' }}>
              Войти
            </Link>
          </b>
        </p>
      </div>
      <img src={track} className="image" alt="" />
    </div>
  )
}

export default Register
