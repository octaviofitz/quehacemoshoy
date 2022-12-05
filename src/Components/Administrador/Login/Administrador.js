import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import loginEmailPassword from './Function';


import '../Login/administrador.css'

function Administrador() {

   /*  async function submitHandler(e) {
        e.preventDefault();
        const email= e.target.emailForm.value;
        const password= e.target.passwordForm.value;
         await loginEmailPassword(email, password);
     }
 */
    return (
        <section className='login'>
            <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="emailForm" label="Correo electrónico" variant="outlined" />
      <TextField id="passwordForm" label="Contraseña" variant="outlined" />
      <Button variant="outlined" type='submit'>Enviar</Button>
    </Box>
        </section>
    );
}

export default Administrador;