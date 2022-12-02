import React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Card, Icon, Image } from 'semantic-ui-react'


/* css */
import '../HoyList/hoylist.css'

function HoyList({data, fechaRestante}) {

 /*  calcular la fecha final para mostrarla en la tarjeta */
  let fechaEventoEnMs= data.fecha.seconds * 1000;
  let fechaEventoFinal= new Date(fechaEventoEnMs)
  let fechaEventoFormateada= fechaEventoFinal.toLocaleDateString();

    return (
      <div className='containerTarjeta'>
      <Card className='tarjeta'>
          <Image src={data.img} alt="Imagen banda" wrapped ui={false} />
          <Card.Content>
          <Card.Header id="titulo">{data.evento}</Card.Header>
          <Card.Meta id='lugar'>{data.lugar}</Card.Meta>
          <Card.Description id='fecha'>
              {fechaEventoFormateada} <Icon name='calendar alternate outline' />
          </Card.Description>
          </Card.Content>
          <Card.Content extra id='mas'>
          <a>
              <Icon className='icono' name='rocket ' />
             <span className='masInformacion'> Más información</span>
          </a>
          </Card.Content>
      </Card>
      </div>
      )
    
}

export default HoyList;