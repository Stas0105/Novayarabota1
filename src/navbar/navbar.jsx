import React from 'react';
import './navbar.style.css';
import Navbarcomponent from './navbar.component';
import Facebook from '../images/facebook.png';
import Instagram from '../images/insta.jpg';
import Logo from '../images/logo.png';
import Whatsapp from '../images/whatsapp.png'

class Navbar extends React.Component {
    render (){
    return(
        <div className="navbar">
            <div className="navbarlogo" >
                <a href="#"> 
                    <img src={Logo} alt="Logo"/> 
                </a>
            </div>
            <div className="navbartext">
                <div><Navbarcomponent text="Главная"/></div>
                <div><Navbarcomponent text="Цены" /></div>
                <div><Navbarcomponent text="Визы" /></div>
                <a href="https://novayarabota.com/vacations/"><div><Navbarcomponent text="Работа за границей" /></div></a>
                <div><Navbarcomponent text="Трансфер" /></div>
                <div><Navbarcomponent text="Сотрудничество" /></div>
            </div>
            <div className="social">
                <a href="https://www.facebook.com/profile.php?id=100045883009797">
                    <img src={Facebook} alt="facebook"  />
                </a>
                 <a href="https://www.instagram.com/">
                    <img src={Instagram} alt="Instagram" /> 
                </a>
                <a>
                    <img src={Whatsapp} alt="Whatsapp" />   
                </a>
            </div>
        </div>
    )
}

}
export default Navbar;
