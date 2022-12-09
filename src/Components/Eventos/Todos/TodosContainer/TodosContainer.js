import React, { useState, useEffect} from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import TodosList from '../TodosList/TodosList';

/* css */
import './todosContainer.css'

function TodosContainer() {

    const [EventosTodos, setEventosTodos] = useState([]);

    useEffect(()=>{
        const querydb= getFirestore()
        const queryCollection= collection(querydb, 'Prueba')
        getDocs(queryCollection)
        .then(res => setEventosTodos(res.docs.map(evento => ({id: evento.id, ...evento.data() }))));
    },[])

    /* fecha actual en ms */
    let fechaActualMS= Date.now();
    
    return (
        <div className='containerTodos'>

            <h2 className='titulo'>Todos los eventos</h2>           
            <div className='containerComponente'>

            {EventosTodos.map((evento) =>{
                let fechaEventoEnMs= evento.fecha.seconds * 1000;
                return(
                    <div key={evento.id}>                    
                        {fechaActualMS < fechaEventoEnMs
                         ?
                        <div className='eventos'>
                        <TodosList data={evento}/>
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

export default TodosContainer;