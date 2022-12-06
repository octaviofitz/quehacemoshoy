import React, { useState, useEffect} from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import EventosDestacadosList from '../EventosDestacadosList/EventosDestacadosList'

import '../EventosDestacadosContainer/eventosDestacadosContainer.css'

function EventosDestacadosContainer() {

    const [EventosDestacados, setEventosDestacados] = useState([]);

    useEffect(()=>{
        const querydb= getFirestore()
        const queryCollection= collection(querydb, 'Prueba')
        getDocs(queryCollection)
        .then(res => setEventosDestacados(res.docs.map(evento => ({id: evento.id, ...evento.data() }))));
    },[])

    return (
        <section className='destacadosContainer'>
                <h2 className='titulo'>Eventos Destacados</h2>
            
            <article>

                
            {EventosDestacados.map((evento) =>{
                return(
                        <div className='eventos' key={evento.id}>
                            {evento.destacados === 1 
                            ?
                            <EventosDestacadosList data={evento} />
                            :
                            null
                        }
                        
                    </div>      
                    
                )
            }) }
                
                
            </article>

        </section>
    );
}

export default EventosDestacadosContainer;