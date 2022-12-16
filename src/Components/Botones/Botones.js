import React from 'react';
import { Link } from 'react-router-dom';
import Calendario from '../../img/Iconos/calendario.png';

import '../Botones/botones.css'

function Botones() {
    return (
        <section className='botones'>
            
        <div>
            <img src={Calendario} alt='calendario' className='calendario'/>
            <p className='data'>Elegí el recital que quieras filtrado por fecha</p>
        </div>
        
        <div>
        <Link to='/hoy'><button id='boton1' className='boton'><span>Hoy</span></button></Link>
        <Link to='/semana'><button id='boton2' className='boton'><span>Esta semana</span></button></Link>
        <Link to='/mes'> <button id='boton3' className='boton'><span>Este mes</span></button></Link>
        <Link to='todos'><button id='boton4' className='boton'><span>Todas las fechas</span></button></Link>
        </div>

        </section>
    );
}

export default Botones;