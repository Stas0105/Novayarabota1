import React from 'react';
import './navbar.style.css';
import Navbarcomponent from './navbar.component';
import Facebook from '../images/facebook.png';
import Instagram from '../images/insta.jpg';
import Logo from '../images/logo.png'

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
                <div><Navbarcomponent text="Головна"/></div>
                <div><Navbarcomponent text="Ціни" /></div>
                <div><Navbarcomponent text="Візи" /></div>
                <a href="https://novayarabota.com/vacations/"><div><Navbarcomponent text="Робота за кордоном" /></div></a>
                <div><Navbarcomponent text="Квитки" /></div>
                <div><Navbarcomponent text="Співпраця" /></div>
            </div>
            <div className="social">
                <a href="https://www.facebook.com/profile.php?id=100045883009797">
                    <img src={Facebook} alt="facebook"  />
                </a>
                 <a href="https://www.instagram.com/">
                    <img src={Instagram} alt="Instagram" /> 
                </a>
            </div>
        </div>
    )
}

}
export default Navbar;
