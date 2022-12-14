import React from 'react';
import { useState, useEffect} from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore';


/* Css */
import '../DetalleEvento/detalleEvento.css';

function DetalleEvento({data}) {

  const [locaciones, setLocaciones] = useState([]);

  /* Calculo fecha para mostrarla */
  let fechaEventoEnMs= data.fecha.seconds * 1000;
  let fechaEventoFinal= new Date(fechaEventoEnMs)
  let fechaEventoFormateada= fechaEventoFinal.toLocaleDateString();

  
  useEffect(()=>{
    const query= getFirestore()
    const queryCollection= collection(query, 'Locaciones')
    getDocs(queryCollection)
    .then(res => setLocaciones(res.docs.map(locacion => ({id: locacion.id, ...locacion.data() }))));
},[])

console.log(locaciones);

    return (
      
      <section className='detalleEvento'>   
             <div>
            <h3 className='titulo'>{data.evento}</h3>
            <p className='lugar'>{data.lugar}</p>
           <img src={data.img} className='imagen' alt='Imagen Evento' />
           <div className='infoFechaPrecio'>
           <p className='fecha'><b>Fecha del evento: </b>{fechaEventoFormateada}</p>
           <p className='precio'><b>Entradas desde: </b>${data.precio}</p>
           </div>
          <a href={data.link} target='_blank'><button className="button-53" role="button">Conseguir entradas</button></a>
          <p className='descripcion'>{data.descripcion}</p>

          <iframe className='video' src={data.musica} title="YouTube video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading='lazy'></iframe>

          </div>
          <div className='informacionContainer'>
          <h4 className='titulo'>Información del lugar</h4>
              {locaciones.map((locacion) =>{
                return(
                  <div key={locacion.id}>
                      {locacion.plaza === data.lugar
                      ?
                      <div className='locacion'>
                      <p className='informacion'>{locacion.descripcion}</p>
                      <p className='capacidad'><b>Capacidad del lugar:</b> {locacion.capacidad} personas</p>
                      <img src={locacion.img} alt='Imagen locación' className='img' />
                      <img src={locacion.img1} alt='Imagen locación' className='img' />
                      <p className='transporte'><b>Formas de llegar:</b> {locacion.transporte}</p>
                      <iframe src={locacion.mapa} className='map'></iframe>
                      </div>
                  :
                        null
                }  
                  </div> 
              )
            }) }
             </div> 



                  </section>
                )
              }
  
  export default DetalleEvento;
