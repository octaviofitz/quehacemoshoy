import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

/* css */
import '../SemanaList/semanaList.css'

function SemanaList({data, fechaRestante}) {

/* FechasRestantes */
/* var FechaActual= 	Math.round(new Date().getTime()/1000.0)
console.log("Fecha ACTUAL: ", FechaActual);  

var FechaDelEvento= (data.fecha.seconds)
console.log("Fecha evento en Milisegundos: ", FechaDelEvento); 

let DiasRestantesMS= FechaDelEvento - FechaActual;
let DiasRestantesSEG= DiasRestantesMS / 3600;
let DiasDiferencia= Math.round(DiasRestantesSEG / 24) ;

console.log("La fecha en horas es: ", DiasRestantesSEG);
console.log("FALTAN: ", DiasDiferencia, "días para el evento"); 

console.log(data); */

    return (
        <section className='lista'>
        
        <Card sx={{ maxWidth: 345 }} className='tarjeta'>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={data.img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.evento}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.descripcion}            
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card> 
    
      </section>
    );
}

export default SemanaList;