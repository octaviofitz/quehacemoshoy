import React, { useState, useEffect} from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import MesList from '../MesList/MesList';

import '../MesContainer/mesContainer.css'
import 'semantic-ui-css/semantic.min.css'

function MesContainer() {

    const [eventosMes, setEventosMes] = useState([]);

    useEffect(()=>{
        const querydb= getFirestore()
        const queryCollection= collection(querydb, 'Prueba')
        getDocs(queryCollection)
        .then(res => setEventosMes(res.docs.map(evento => ({id: evento.id, ...evento.data() }))));
    },[])

    /* fecha último día del mes */

    let fechaActual = new Date();
    let mesActual = fechaActual.getMonth() + 1;
/*     console.log("estoy consiguiendo el MesActual actual: ?", mesActual);
 */
    /* fecha actual en ms */
    let fechaActualMS= Date.now();
/*     console.log("la fecha actual en MS ES:", fechaActualMS);
 */

    return (
        <div className='mes'>
          
             <div class="titulo" id='title'>
            <h3>Recitales este mes</h3>
            </div> 

            <div className='containerComponente'>

            {eventosMes.map((evento) =>{
            
           /*  Extraigo la fecha del evento en segundos y la multiplo para tenerla en ms */
            let fechaEventoEnMs= evento.fecha.seconds * 1000;
            /* consigo la fecha a partir de los ms anteriores */
            let fechaEventoFinal= new Date(fechaEventoEnMs);
            /* formateo la fecha */
            let fechaEventoFormateada= fechaEventoFinal.toLocaleDateString();

            /* extraigo el mes de la fecha formateada */
            let MesEvento= fechaEventoFinal.getMonth() +1;
/*             console.log("el recital es el mes: ", MesEvento);
 */

                            /* let FechaDelEvento= (evento.fecha.seconds)
                            console.log("fecha del evento en ms: ", FechaDelEvento);

                            var date = new Date(FechaDelEvento * 1000).toISOString();
                            console.log(date); */


    return(

        <div key={evento.id}>
            {MesEvento === mesActual && fechaActualMS < fechaEventoEnMs
            ?
            <MesList data={evento} />
            : 
            null }
           
          </div>
    )
}) }
</div>


        </div>
    );
}

export default MesContainer;