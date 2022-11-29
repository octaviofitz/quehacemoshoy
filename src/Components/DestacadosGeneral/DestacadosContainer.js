/* react */
import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

/* componentes */
 import Carousel from 'react-bootstrap/Carousel';
import Destacado1 from '../../img/destacados1.webp'
import Destacado2 from '../../img/destacados2.webp'
import Destacado3 from '../../img/destacados3.webp' 
import DestacadosList from './DestacadosList/DestacadosList';

/* estilos */
import './destacados.css'

/* firebase */
import db from '../../Firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';

function DestacadosContainer() {

    const [loader, setLoader] = useState(true)
    const [destacados, setDestacados] = useState([])
    const {category} = useParams()



   //Conexión con FireBase
   async function getDestacados(db){
    const eventosCol = collection(db, 'Prueba');
    const eventosSnapshot = await getDocs(eventosCol);
    const eventosList = eventosSnapshot.docs.map(doc => {
        let evento = doc.data()
        evento.id= doc.id
        return evento;
    }) 
    return eventosList;
}

useEffect(() => {
  getDestacados(db).then((resultDestacados) => {
  
      
  })
},[])



  return (
    <section className='destacados'>
    <h2 className='titulo'>Eventos destacados</h2>

<Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Destacado1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h5 className='card-title'>Las Ligas Menores en el Konex</h5>
      <p className='card-subtitle'>24 de diciembre</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Destacado2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5 className='card-title'>Second slide label</h5>
      <p className='card-subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Destacado3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5 className='card-title'>Third slide label</h5>
      <p  className='card-subtitle'>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  
  </section>
  );
}

export default DestacadosContainer;