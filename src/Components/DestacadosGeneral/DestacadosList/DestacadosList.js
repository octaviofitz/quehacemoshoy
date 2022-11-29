//material ui
import { CircularProgress } from '@mui/material'
//components
import Destacados from '../Destacados/Destacados'

function DestacadosList({data, loader}) {

  return (
    <>

      { loader ? <CircularProgress id="loader" color='success' /> :
           <div className="containerItemsGeneral">
           {data.map(destacado => {
              return(
                  <div className='containerItems' key={destacado.id}>  
                { <Destacados data={destacado} /> }
                
                </div>
              )
          })}

  </div> 
        }      
    </>
  )
}

export default DestacadosList;
