import Logo from '../../components/icons/Logo';
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import track from "./image.png";

const Login = () => {
  const [user, setUser] = useState({ nameame: '', mail: '', phoneNumber: '', login: '' })
  const submitHandler = (e) => {
    const { name, value } = e.target;
    setUser((prevFormData) => ({ ...prevFormData, [name]: value }));
  }
  const handlerChange = (e) => {
    e.preventDefault()
    console.log(user);
  }
  let cardStyle = {
    background: '#FFF',
    borderRadius: '32px',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '540px',
    fontFamily: 'Montserrat'
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

    background: '#FFF'
  }
  const btn = {
    padding: '15px 0',
    width: '100%',
    color: '#FFF',
    borderRadius: '28px',
    background: '#D6001C',
    textDecoration: 'none'
  }

  return (
    <div className="bg">
      <div style={cardStyle} className='card'>
      <Logo />
      <h2 className='card_title'>Добро пожаловать</h2>
      <form style={formStyle} action="submit" className='card_form' onSubmit={handlerChange}>

        <label>
          <input className='card_text' style={inputStyle} placeholder='Введите почту'  type="text" name='mail' value={user.nameame} onChange={submitHandler} /></label>
        <label>
          <input className='card_text' required style={inputStyle} placeholder='Введите пароль' type="text" name='password' value={user.mail} onChange={submitHandler} /></label>
      </form>
      <div className='card_text' required style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}><p><input type="checkbox" />Запомнить меня </p><p><a href="#" style={{ color: 'black', textDecoration: 'none' }}>Забыли пароль?</a></p></div>
      <Link to="/location" className='register-btn' style={btn}>Зарегистрироваться</Link>
      <hr style={{ background: '#E7E5EA', width: '100%' }} />
      <p className='card_text'>У вас нет аккоунта? <b><Link to="/register" style={{ color: 'black', textDecoration: 'none' }}>Зарегистрироваться</Link></b></p>
    </div>
    <img src={track} alt="" className="image" />
    </div>
  )


}

export default Login