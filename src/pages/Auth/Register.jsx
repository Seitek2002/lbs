import Check from '../../components/icons/Check';
import Logo from '../../components/icons/Logo';
import React, { useState } from 'react'
import track from './image/track.png'
import backIcon from './image/Back.png'
import lockIcon from './image/Lock.png'
import emailIcon from './image/Email.png'
import loginIcon from './image/Profile.png'
import './auth.scss'

const Register = () => {
  const [user, setUser] = useState({ firstName: '', typeUser: '', phoneNumber: '', login: '' })
  const submitHandler = (e) => {
    const { name, value } = e.target;
    setUser((prevFormData) => ({ ...prevFormData, [name]: value }));
  }
  const handlerChange = (e) => {
    e.preventDefault()
    console.log(user);
  }
 

  const formStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  }

  const btn = {
    padding: '15px 0',
    width: '100%',
    color: '#FFF',
    borderRadius: '28px',
    background: '#D6001C',
  }
  
  return (
    <div className="bg">
      <a href='#' className="back">
        <img src={backIcon} alt="" className="back_icon" />
        Назад
      </a>
      <div className='card'>
        <Logo />
        <h2 className='card_title'>Добро пожаловать</h2>
        <form style={formStyle} action="submit" className='card_form' onSubmit={handlerChange}>

          <label style={{position:'relative'}}>
            <img src={loginIcon} alt="" className="card_input_icon" />
            <input className='card_text input' placeholder='Введите имя' type="text" name='name' value={user.nameame} onChange={submitHandler} /></label>
          <label style={{position:'relative'}}>
            <img src={emailIcon} alt="" className="card_input_icon" />
            <input className='card_text input' placeholder='Введите почту' type="text" name='mail' value={user.mail} onChange={submitHandler} /></label>
          <label style={{position:'relative'}}>
            <img src={lockIcon} alt="" className="card_input_icon" />
            <input className='card_text input' placeholder='Создайте пароль' type="password" name='password' value={user.password} onChange={submitHandler} /></label>
          <label style={{position:'relative'}}>
            <img src={lockIcon} alt="" className="card_input_icon" />
            <input className='card_text input' placeholder='Повторите пароль' type="password" name='password' onChange={submitHandler} /></label>
        </form>
        <p className='card_text'><input type="checkbox" />Я принимаю условия <a href="#">Пользовательского соглашения</a> </p>
        <button style={btn}>Зарегистрироваться</button>
        <hr style={{ background: '#E7E5EA', width: '100%' }} />
        <p className='card_text'>У вас есть аккоунт? <b><a href="/login" style={{ color: 'black', textDecoration: 'none' }}>Войти</a></b></p>
      </div>
      <img src={track} className='image' alt="" />
    </div>
  )
}

export default Register