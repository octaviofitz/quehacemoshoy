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

    return (
        <div className='containerTodos'>

            <h2 className='titulo'>Todos los eventos</h2>           
            <div className='containerComponente'>

            {EventosTodos.map((evento) =>{
                return(
                        <div className='eventos'>
                        <TodosList data={evento}/>
                    </div>      
                    
                )
            }) }
            </div>  
        </div>   
    );
}

export default TodosContainer;