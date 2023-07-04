import React from 'react'
import HeroHeader from '../../components/Hero/HeroHeader'
import { Row, Col, Button, Divider, Radio, Space } from "antd";
import { useState } from "react";
import Aside from "../../components/Hero/Aside";
import './Chat.scss'
import Contact from './Contact';

const Chat = () => {
    const [size, setSize] = useState("large"); // default is 'middle'

    const TypographyTitle = {
        color: "#222324",
        fontSize: "18px",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "28px",
        letterSpacing: "-0.4px",
    };
    const TypographyDesc = {
        color: "#67646A",
        fontSize: "18px",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "28px",
        letterSpacing: "-0.4px",
    };

    const button = {
        width: "300px",
        height: "46px",
        color: "#D6001C",
        background: "none",
        textAlign: "center",
        fontSize: "16px",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "28px",
        letterSpacing: "-0.4px",
        borderRadius: "40px",
        border: "1px solid #D6001C",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };

    return (
        <>
            <HeroHeader />
            <div className="container" style={{ marginTop: "50px" }}>
                <Row style={{ display: "flex", justifyContent: "space-between" }}>
                    <Aside />
                    <Row style={{ justifyContent: "space-between", gap: "8%", width: '80%' }}>
                        <div className="contacts_block ">
                            <input type="text" className="search_contact" placeholder='Поиск' />
                            <div className="contact online">
                                <div className="contact_image">TF</div>
                                <div className="contact_info">
                                    <div className="contact_name">Team Fly</div>
                                    <div className="contact_message">hello!</div>
                                </div>
                                <div className="message_info">
                                    <div className="message_time">12:22</div>
                                    <div className="message_amount">3</div>
                                </div>
                            </div><div className="contact online">
                                <div className="contact_image">TF</div>
                                <div className="contact_info">
                                    <div className="contact_name">Team Fly</div>
                                    <div className="contact_message">hello!</div>
                                </div>
                                <div className="message_info">
                                    <div className="message_time">12:22</div>
                                    <div className="message_amount">3</div>
                                </div>
                            </div>
                            <div className="contact">
                                <div className="contact_image">TF</div>
                                <div className="contact_info">
                                    <div className="contact_name">Team Fly</div>
                                    <div className="contact_message">hello!</div>
                                </div>
                                <div className="message_info">
                                    <div className="message_time">12:22</div>
                                    <div className="message_amount">3</div>
                                </div>
                            </div>
                        </div>
                        <div className="chat">
                            <div className="chat_header">
                                <p className="contact_name">Бермет</p>
                                <div className="was_online">был(а) 45 минут назад</div>
                            </div>
                            <div className="message_area">
                                <div className="message">
                                    <p className="message_date">1 июня 2023</p>

                                    <div className="our_message_block first">
                                        <p className="our_message">Здравствуйте! 👋 <span className='message_time'>11:31 AM</span></p>
                                    </div>
                                    <div className="our_message_block">
                                        <p className="our_message">Здравствуйте! 👋 <span className='message_time'>11:31 AM</span></p>
                                    </div>

                                    <div className="their_message_block first">
                                        <p className="their_message">Здравствуйте! <span className='message_time their'>11:31 AM</span> </p>
                                    </div>
                                    <div className="their_message_block">
                                        <p className="their_message">Здравствуйте! <span className='message_time their'>11:31 AM</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="input_area">

                            </div>
                        </div>
                    </Row>
                </Row>
            </div>
        </>
    );
};
export default Chat