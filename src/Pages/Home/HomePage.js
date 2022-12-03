import React from 'react';
import Botones from '../../Components/Botones/Botones';
import EventosDestacadosContainer from '../../Components/EventosDestacados/EventosDestacadosContainer/EventosDestacadosContainer'

function HomePage() {
    return (
        <div>
            <Botones />
            <EventosDestacadosContainer />
        </div>
    );
}

export default HomePage;