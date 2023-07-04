import Check from '../../components/icons/Check';
import Logo from '../../components/icons/Logo';
import React, { useState } from 'react'
import track from './image.png'
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
  const cardStyle = {
    background: '#FFF',
    borderRadius: '32px',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    
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
  }
  
  return (
    <div className="bg">
      <div style={cardStyle} className='card'>
        <Logo />
        <h2 className='card_title'>Добро пожаловать</h2>
        <form style={formStyle} action="submit" className='card_form' onSubmit={handlerChange}>

          <label>
            <input className='card_text' style={inputStyle} placeholder='Введите имя' type="text" name='name' value={user.nameame} onChange={submitHandler} /></label>
          <label>
            <input className='card_text' style={inputStyle} placeholder='Введите почту' type="text" name='mail' value={user.mail} onChange={submitHandler} /></label>
          <label>
            <input className='card_text' style={inputStyle} placeholder='Создайте пароль' type="password" name='password' value={user.password} onChange={submitHandler} /></label>
          <label>
            <input className='card_text' style={inputStyle} placeholder='Повторите пароль' type="password" name='password' onChange={submitHandler} /></label>
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