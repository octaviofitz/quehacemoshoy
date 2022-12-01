import React, { useState, useEffect} from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import SemanaList from '../SemanaList/SemanaList'

/* css */
import '../SemanaContainer/semanaContainer.css'

function SemanaContainer() {

    const [eventosSemana, setEventosSemana] = useState([]);

    useEffect(()=>{
        const querydb= getFirestore()
        const queryCollection= collection(querydb, 'Prueba')
        getDocs(queryCollection)
        .then(res => setEventosSemana(res.docs.map(evento => ({id: evento.id, ...evento.data() }))));
    },[])

/* Fecha Actual */
var FechaActual= Math.round(new Date().getTime()/1000.0)

    return (
        <div className='containerSemana'>

            <h2 className='titulo'>Eventos esta semana</h2>           

            {eventosSemana.map((evento) =>{
    
                /* Map y cálculo de días restantes para el evento */
                var FechaDelEvento= (evento.fecha.seconds)

                let DiasRestantesMS= FechaDelEvento - FechaActual;
                let DiasRestantesSEG= DiasRestantesMS / 3600;
                let DiasDiferencia= Math.round(DiasRestantesSEG / 24) ;

                return(
                    <div>
                        {DiasDiferencia < 7 ?
                        <div className='eventos'>
                        <SemanaList data={evento} fechaRestante={DiasDiferencia} />
                    </div> 
                    :
                    null
                        } 
                        
                    </div>
                )
            }) }
        </div>   
    );
}

export default SemanaContainer;