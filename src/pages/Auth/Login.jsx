import Logo from '../../components/icons/Logo';
import React, { useState } from 'react'
import track from './image/track.png'
import backIcon from './image/Back.png'
import lockIcon from './image/Lock.png'
import emailIcon from './image/Email.png'


const Login = () => {
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

          <label style={{ position: 'relative' }}>
            <img src={emailIcon} alt="" className="card_input_icon" />
            <input className='card_text input' placeholder='Введите почту' type="text" name='mail' value={user.nameame} onChange={submitHandler} /></label>
          <label style={{ position: 'relative' }}>
            <img src={lockIcon} alt="" className="card_input_icon" />
            <input className='card_text input' placeholder='Введите пароль' type="text" name='password' value={user.mail} onChange={submitHandler} /></label>
        </form>
        <div className='card_text' style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}><p><input type="checkbox" />Запомнить меня </p><p><a href="#" style={{ color: 'black', textDecoration: 'none' }}>Забыли пароль?</a></p></div>
        <button className='card_btn'>Зарегистрироваться</button>
        <hr style={{ background: '#E7E5EA', width: '100%' }} />
        <p className='card_text'>У вас нет аккоунта? <b><a href="/register" style={{ color: 'black', textDecoration: 'none' }}>Зарегистрироваться</a></b></p>
      </div>
      <img src={track} alt="" className="image" />
    </div>
  )


}

export default Login