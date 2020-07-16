import React from 'react';
import './price.style.css'
import Pricecomponent from './price.component';
const Price = () => (
    <div className="main">
        <h1><Pricecomponent text="Цены" /></h1>
        <div className="top">
            <div className="store">
                <p>
                <Pricecomponent text="Пакет документов 180/365" /> 
                <Pricecomponent text="Полугодовые приглашение 180 / 180-180 / 365-3-4 дней (электронные) или + доставка -2400 грн" />
                </p>
            </div>
            <div className="store">
                <p>
                <Pricecomponent text="Пакет документов 180/365" /> 
                <Pricecomponent text="Полугодовые Приглашение 180-180-180 / 365 - 10 дней (электронные) или + доставка - 2000 грн" /> 
                </p>
            </div>
            <div className="store">
                <p>
                <Pricecomponent text="Пакет документов 180/365" /> 
                <Pricecomponent text="Полугодовые Приглашение 180 / 180-180 / 365 - 10-15 дней (электронные) или + Доставка- 1950 грн" /> 
                </p>
            </div>
        </div>
        <div className="center">
            <div className="store">
                <p>
                <Pricecomponent text="Сезонные Приглашение" /> 
                <Pricecomponent text="Сезонные Приглашение 270/270 - 3-4 дня + доставка 2600 грн" />
                </p>
            </div>
            <div className="store">
                <p>
                <Pricecomponent text="Пакет документов 180/365" />
                <Pricecomponent text="Сезонные Приглашение 270/270 - 10 дней + доставка 2400 грн" />
                </p>
            </div>
            <div className="store">
                <p>
                <Pricecomponent text="Анкета Польша - 70грн" /> 
                </p>
            </div>
        </div>
        <div className="bot">
            <div className="store">
                <p>
                <Pricecomponent text="Воевудский Приглашение" /> 
                <Pricecomponent text="Воевудский Приглашение 365/365 - 1 мес - 280Е +1020 ГРН (страховка + анкета)" /> 
                </p>
            </div>
            <div className="store">
                <p>
                <Pricecomponent text="Воевудский Приглашение" />
                <Pricecomponent text="Воевудский Приглашение 365/365 - 35-50 дней - 270 евро + 1020 ГРН (страховка + анкета)" />
                </p>  
            </div>
            <div className="store">
                <p>
                <Pricecomponent text="Воевудский Приглашение" /> 
                <Pricecomponent text="Воевудский Приглашение 365/365 - 2 мес (возможно быстрее) - 250 евро + 1020 ГРН (страховка + анкета)" /> 
                </p>
            </div>
        </div>
    </div>
)
export default Price;