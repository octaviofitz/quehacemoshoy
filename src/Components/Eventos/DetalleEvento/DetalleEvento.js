import React from 'react';
import { useState, useEffect} from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore';


/* Css */
import '../DetalleEvento/detalleEvento.css';

function DetalleEvento({data}) {

  /* console.log("el lugar es: ", Locaciones.locacion);
  console.log("la locación es: ", data.lugar); */


  const [locaciones, setLocaciones] = useState([]);

  
  useEffect(()=>{
    const query= getFirestore()
    const queryCollection= collection(query, 'Locaciones')
    getDocs(queryCollection)
    .then(res => setLocaciones(res.docs.map(locacion => ({id: locacion.id, ...locacion.data() }))));
},[])

console.log("prueba: ", locaciones)

    return (
      <section className='detalleEvento'>   
            <h3 className='titulo'>{data.evento}</h3>
            <p className='lugar'>Se presentan en {data.lugar}</p>

           <img src={data.img} className='imagen' alt='Imagen Evento' />
          <a href={data.link} target='_blank'><button className="button-53" role="button">Conseguir entradas</button></a>
          <p className='descripcion'>{data.descripcion}</p>
          <div className='informacionContainer'>
          <h4 className='titulo'>Información del lugar</h4>
    
           </div>
      </section>
    )
  }
  
  export default DetalleEvento;
