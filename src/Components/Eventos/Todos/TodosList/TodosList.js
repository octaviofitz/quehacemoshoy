import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

/* css */
import '../TodosList/todosList.css'

function TodosList({data}) {

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

export default TodosList;