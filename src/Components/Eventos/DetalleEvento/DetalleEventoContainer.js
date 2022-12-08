//react
import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore } from 'firebase/firestore';

//components
import DetalleEvento from '../DetalleEvento/DetalleEvento'
//firebase
import db from '../../../Firebase/firebase'
import {doc, getDoc} from 'firebase/firestore'

function DetalleEventoContainer() {

  /* traigo los datos de los eventos y el params  */

    const [evento, setEvento] = useState([])
   
    const { id } = useParams()

     async function getEvent(db) {
        const docRef= doc(db, 'Prueba', id);
        const docSnap= await getDoc(docRef);
        if (docSnap.exists()) {
            let evento= docSnap.data();
            evento.id= docSnap.id;
            setEvento(evento)
        } 
    }

    useEffect(() => {
            getEvent(db)
    },[id]) //eslint-disable-line react-hooks/exhaustive-deps

    return (
      <>
        <DetalleEvento data={evento}/>
      </>
    )
  }
  
  
  export default DetalleEventoContainer;