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

/* Fecha Actual en MS */
let FechaActualMS= Date.now();

    return (
        <div className='containerSemana'>

            <h2 className='titulo'>Eventos esta semana</h2>   

            <div className='containerComponente'>

            {eventosSemana.map((evento) =>{

                /* Map y cálculo de días restantes para el evento */
                var FechaDelEvento= (evento.fecha.seconds)

                let DiasRestantesMS= FechaDelEvento - FechaActual;
                let DiasRestantesSEG= DiasRestantesMS / 3600;
                let DiasDiferencia= Math.round(DiasRestantesSEG / 24) ;

                /* calculo fecha evento en ms para luego comparar */
                let fechaEventoEnMs= evento.fecha.seconds * 1000;


                return(
                    <div key={evento.id}>
                        {DiasDiferencia < 7 && FechaActualMS < fechaEventoEnMs
                        ?
                        <div className='eventos'>
                        <SemanaList data={evento} />
                        
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

export default SemanaContainer;