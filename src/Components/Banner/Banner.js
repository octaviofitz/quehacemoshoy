import React from 'react';
import BannerIndex from '../../img/banner2.jpg'
/* Css */
import '../Banner/banner.css'

function Banner() {
    return (
        <section className='contenedorBanner'>
             <img src={BannerIndex} alt="banner" className="Banner" />
                   </section>
    );
}

export default Banner;