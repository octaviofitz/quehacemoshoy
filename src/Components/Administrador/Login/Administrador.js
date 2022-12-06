/* import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import '../Login/administrador.css'

import db from '../../../Firebase/firebase';
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(db)

function Administrador() {

  const {usuario, setUsuario} = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) { 
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null)
    }
  })

  const [Registrando, setStateRegistrando] = useState(false);

  function submitHandler(e) {
    e.preventDefault();
  
    const email= e.target.elements.email.value;
    const password= e.target.elements.password.value;

    console.log('submit: ', email, password);
    }

    return (
        <section className='login'>
            <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={submitHandler}
    >
      <TextField id="email" label="Correo electrónico" variant="outlined" />
      <TextField id="password" label="Contraseña" variant="outlined" />
      <Button variant="outlined" type='submit'>Enviar</Button>
    </Box>
        </section>
    );
}

export default Administrador; */