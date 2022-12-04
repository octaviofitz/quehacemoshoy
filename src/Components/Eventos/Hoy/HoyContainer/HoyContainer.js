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

/* Fecha Actual */
var FechaActual= 	Math.round(new Date().getTime()/1000.0)

    return (
        <div className='containerHoy'>

            <h2 className='titulo'>Eventos hoy</h2>       

                        <div className='containerComponente'>
    

            {eventosHoy.map((evento) =>{
    
                /* Map y cálculo de días restantes para el evento */
                var FechaDelEvento= (evento.fecha.seconds)

                let DiasRestantesMS= FechaDelEvento - FechaActual;
                let DiasRestantesSEG= DiasRestantesMS / 3600;
                let DiasDiferencia= Math.round(DiasRestantesSEG / 24) ;
                    console.log(DiasDiferencia);
                return(

                    <div>

                    {DiasDiferencia === 1 || DiasDiferencia === 0 && FechaActual < DiasRestantesMS
                    ?
                       <div>
                        <HoyList data={evento} />
                       </div> 
                       :
                       null
                         }
                    </div>
                )
            }) }
            </div>
        </div>   
    );
}

export default Hoy;