import React from 'react';
import './footer.style.css'
import Footcomponent from './footer.component';

const Footer = ({}) => (
    <div className="high">
        <div><h1>Зв'язок з нами</h1></div>
        <div className="contact">
            <div className="Ter">
                <Footcomponent text="Адреса: м.Тернопіль, вул. Живова 28" />
                <Footcomponent text=" Пошта:adsnovayarabota@gmail.com" />
                <Footcomponent text=" Телефон: +380675558247" />
            </div>
            <div className="IF">
                <Footcomponent text="Адреса: м.Івано-Франківськ, вул. Залізнчина 17" />
                <Footcomponent text="Пошта:novayarabotareclama@gmail.com" />
                <Footcomponent text=" Телефон: +380675405128" /></div>
        </div>
    </div>
)
export default Footer;