import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Botones from '../../Components/Botones/Botones';
import EventosDestacadosContainer from '../../Components/EventosDestacados/EventosDestacadosContainer/EventosDestacadosContainer'

function HomePage() {
    return (
        <div>
            <Banner />
            <Botones />
            <EventosDestacadosContainer />
        </div>
    );
}

export default HomePage;