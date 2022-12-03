import React from 'react';

import '../EventosDestacadosList/eventosDestacadosList.css'

function EventosDestacadosList({data}) {
    return (
      <div className='destacados'>
        <img src={data.img} className='imagen' />
      </div>
    );
}

export default EventosDestacadosList;