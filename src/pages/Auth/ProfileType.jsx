import React from 'react'
import backIcon from './image/Back.png'
import ProfileIcon from './image/Profile.png'
import UsersIcon from './image/Users.png'
import TrackIcon from './image/Track_icon.png'

const ProfileType = () => {
    return (
        <div className='bg_type'>
            <a href='#' className="back">
                <img src={backIcon} alt="" className="back_icon" />
                Назад
            </a>
            <div className="card_type">
                <div className="card_title_box">
                    <img src={ProfileIcon} alt="" className='card_img' />
                    <div className="card_title">
                    Отправитель
                    </div>
                    <div className="card_subtitle">
                    Combined with the ingredients makes for beautiful landings.
                    </div>
                </div>
                <button className="card_btn">Выбрать</button>
            </div>
            <div className="card_type">
                <div className="card_title_box">
                    <img src={TrackIcon} alt="" className='card_img' />
                    <div className="card_title">
                    Отправитель
                    </div>
                    <div className="card_subtitle">
                    Combined with the ingredients makes for beautiful landings.
                    </div>
                </div>
                <button className="card_btn">Выбрать</button>
            </div>
            <div className="card_type">
                <div className="card_title_box">
                    <img src={UsersIcon} alt="" className='card_img' />
                    <div className="card_title">
                    Отправитель
                    </div>
                    <div className="card_subtitle">
                    Combined with the ingredients makes for beautiful landings.
                    </div>
                </div>
                <button className="card_btn">Выбрать</button>
            </div>
        </div>
    )
}

export default ProfileType