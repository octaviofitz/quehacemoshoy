//react
import {Link} from 'react-router-dom'
//material ui
import Button from '@mui/material/Button';

function Destacado({data}) {
 
  return (
    <>
     <div className="productos">
            <div>  
       <img src="" className="img-producto" alt="imgProducto"/>
       <h3 className="titleProduct">{data.titulo}</h3>
      <p className="priceItem">${data.category}</p>

{/*       <Button variant="contained" id="addCart"><Link to={`/producto/${data.id}`}>Ver producto</Link></Button>
 */}       
         </div> 
      
      </div>  
    </>
  )
}

export default Destacado;
