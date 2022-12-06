//react
import { Link } from 'react-router-dom'
import React, { useState } from 'react'

function DetalleEvento({data}) {

    return (
      <>
           <h2>{data.evento}</h2>
           <p>{data.lugar}</p>

      </>
    )
  }
  
  export default DetalleEvento;