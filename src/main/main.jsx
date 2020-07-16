import React from 'react';
import './main.style.css'
import Maincomponent from './main.components';
import Back from '../images/back.jpg'

const Main = () => (
    <div className="main1">
        <div className="mainleft"><img src={Back} alt="Background"/> </div>
        <div className="mainright">
            <Maincomponent 
                text="Novayarabota - компания, которая специализируется 
                на трудоустройстве людей за границей и изготовлении 
                документов для трудоустройства (Приглашение, страховка, 
                трансфер). Мы предлагаем высокооплачиваемую и надежную 
                работу для мужчин, женщин и семейных пар во многих 
                городах Польши и Чехии." />
        </div>
    </div>
)
export default Main;