import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Botones from '../../Components/Botones/Botones';
import EventosDestacadosContainer from '../../Components/EventosDestacados/EventosDestacadosContainer/EventosDestacadosContainer'
import Genero from '../../Components/Genero/Genero';
import Introduccion from '../../Components/Introduccion/Introduccion';

import '../Home/home.css'

function HomePage() {
    return (
        <main className='index'>
            <Banner />
            <Introduccion />
            <Botones />
            <Genero />
            <EventosDestacadosContainer />
        </main>
    );
}

export default HomePage;