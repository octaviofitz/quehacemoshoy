import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../Botones/botones.css'

function Botones() {
    return (
        <section className='botones'>
         {/*  <Button className='botonIndividual' id='primerBoton' size='lg'><Link to='/hoy'>Hoy</Link></Button>
          <Button className='botonIndividual' id='segundoBoton' size='lg'><Link to='/semana'>Esta semana</Link></Button>
          <Button className='botonIndividual' id='tercerBoton' size='lg'><Link to='/mes'>Este mes</Link></Button>
        <Button className='botonIndividual' id='cuartoBoton' size='lg'><Link to='todos'> Todas las fechas</Link></Button> */}
        
        <Link to='/hoy'><button id='boton1' className='boton'>
       <span>Hoy</span>
        </button></Link>

        <Link to='/semana'><button id='boton2' className='boton'>
        <span>Esta semana</span>
        </button>
        </Link>

        <Link to='/mes'> <button id='boton3' className='boton'>
        <span>Este mes</span>
        </button>
        </Link>
        
        <Link to='todos'> <button id='boton4' className='boton'>
       <span>Todas las fechas</span>
        </button>
        </Link>


        </section>
    );
}

export default Botones;