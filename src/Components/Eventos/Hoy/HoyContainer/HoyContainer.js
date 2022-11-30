import React, { useState, useEffect} from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import HoyList from '../HoyList/HoyList';

/* css */
import '../HoyContainer/hoyContainer.css'

function Hoy() {

    const [eventosHoy, setEventosHoy] = useState([]);

    useEffect(()=>{
        const querydb= getFirestore()
        const queryCollection= collection(querydb, 'Prueba')
        getDocs(queryCollection)
        .then(res => setEventosHoy(res.docs.map(evento => ({id: evento.id, ...evento.data() }))));
    },[])

    return (
        <div className='container'>
            {eventosHoy.map((eventohoy) =>{
                return(
                    <div className='eventos'>
                        <HoyList data={eventohoy} />
                    </div>
                )
            }) }
        </div>   
    );
}

export default Hoy;