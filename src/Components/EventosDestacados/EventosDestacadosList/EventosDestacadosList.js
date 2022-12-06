import React from 'react';
import { Link } from 'react-router-dom';

import '../EventosDestacadosList/eventosDestacadosList.css'

function EventosDestacadosList({data}) {
    return (
      <div className='destacados'>
        <Link to={`/evento/${data.id}`}><img src={data.img} className='imagen' /></Link>
      </div>
    );
}

export default EventosDestacadosList;