import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import '../MesList/mesList.css'

function MesList({data}) {

    /*  calcular la fecha final para mostrarla en la tarjeta */
  let fechaEventoEnMs= data.fecha.seconds * 1000;
  let fechaEventoFinal= new Date(fechaEventoEnMs)
  let fechaEventoFormateada= fechaEventoFinal.toLocaleDateString();

        return(
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
                    <Icon className='icono' name='rocket' />
                    <Link to={`/evento/${data.id}`}><span className='masInformacion'>Más información</span></Link>
                </Card.Content>
            </Card>
            </div>
            )
            } 

export default MesList;