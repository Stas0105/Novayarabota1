import React from 'react';
import './partners.style.css';
import Partcomp from './partners.component';
import Rabota from '../images/rabota.jpg'

const Partners = () => (
    <div className="mains">
        <h1><Partcomp text="Сотрудничество"/></h1>
        <div className="partnerstop"><img src={Rabota} /></div>
        <div className="partnersbot">
            <p className="partnerstext1">
                <Partcomp text="Предлагаем высокооплачиваемую удаленную работу!
                            Мы компания novayarabota предлагаем вам сотрудничество 
                            в виде дополнительного или основного заработка. Ваша основная 
                            задача - это поиск работников по нашим вакансиям и клиентов 
                            которым требуются услуги по изготовлению виз, приглашений, 
                            страховок и заполнения анкет. Вознаграждение за одного вакансиями 
                            работника варьируется от 100 до 150 злотых / за человека который 
                            отработал 1 месяц. Ваш заработок за изготовление пакета документов, 
                            приглашений и страховок будет варьироваться от 100 до 400 гривен
                            + Вы можете предложить клиенту свою цену (выше нашей, представленной нами, вам)."/>
            </p>   
            <p className="partnerstext2">             
                <Partcomp text="📞📞📞Обращаться к менеджеру по тел. +380675405128"/>
            </p>
            <p className="partnerstext3">
                <Partcomp text= "Будем рады сотрудничеству!"/>
            </p>
        </div>
    </div>
) 
export default Partners;
