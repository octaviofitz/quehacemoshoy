import React from 'react'

/* Css */
import '../DetalleEvento/detalleEvento.css';

function DetalleEvento({data}) {

    return (
      <section className='detalleEvento'>   
            <h3 className='titulo'>{data.evento}</h3>
            <p className='lugar'>Se presentan en {data.lugar}</p>

           <img src={data.img} className='imagen' alt='Imagen Evento' />
          <a href={data.link} target='_blank'><button class="button-53" role="button">Conseguir entradas</button></a>
          <p className='descripcion'>{data.descripcion}</p>
          <div className='informacionContainer'>
          <h4 className='titulo'>Información del lugar</h4>
          <p className='data'>Ciudad Cultural Konex es una organización que tiene como misión crear experiencias artísticas innovadoras. Desarrolla múltiples espectáculos y contenidos artísticos con el objetivo de acercar a la comunidad una propuesta cultural diversa y de calidad, promoviendo la expresión, la inspiración, el disfrute y la creatividad.
          El espacio, situado en el mítico barrio del Abasto de la ciudad de Buenos Aires, cuenta con seis salas y un patio descubierto para la realización de todo tipo de eventos culturales.</p>
          </div>
           
      </section>
    )
  }
  
  export default DetalleEvento;
