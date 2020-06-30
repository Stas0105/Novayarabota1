import React from 'react';
import './main.style.css'
import Maincomponent from './main.components';
import Back from '../images/back.jpg'

const Main = () => (
    <div className="main1">
        <div className="mainleft"><img src={Back}/> </div>
        <div className="mainright"><Maincomponent text="Novayarabota - компанія, яка спеціалізується на працевлаштуванні людей за кордоном та виготовленні документів для працевлаштуання(Запрошення, страхівка, трансфер). Ми пропонуємо високооплачувану та надійну роботу для чоловіків, жінок та сімейних пар у багатьох містах Польщі та Чехії." /></div>
    </div>
)
export default Main;