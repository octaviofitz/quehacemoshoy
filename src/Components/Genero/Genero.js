import React from 'react';

import Microfono from '../../img/Iconos/microfono.png'
import '../Genero/genero.css'

function Genero() {
    return (
        <section className='genero'>    

        <img src={Microfono} alt='ícono micrófono' className='microfono' />
        <p className='titulodata'>Filtrá por género</p>
        <p className='data'>¿Estás en busca de un recital de una onda en específica?</p>
            
        </section>
    );
}

export default Genero;