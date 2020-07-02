import React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import Main from '../main/main';
import Price from '../price/price';
import Partners from '../partners/partners';

const Homepage = () => (
    <div>
        <Navbar />
        <Main />
        <Partners />
        <Price />
        <Footer />
    </div>
)
export default Homepage;