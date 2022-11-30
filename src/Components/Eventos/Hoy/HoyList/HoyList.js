import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

/* css */
import '../HoyList/hoylist.css'

function HoyList({data}) {

/* console.log("La fecha del evento en seg es", data.fecha.seconds);
 */
let fechaActual= Date.now();
console.log("La fechaActual actual es", fechaActual);

let fechaEventos= data.fecha.seconds;
console.log("la fecha de los eventos en segundos es: ", fechaEventos);

let resultado= fechaEventos-fechaActual;

    return (
        <section className='lista'>
            {resultado > 86400 ? 
            <p>No hay eventos el día de la fecha</p> : 
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
             }
       
      </section>
    );
}

export default HoyList;