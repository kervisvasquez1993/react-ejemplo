import React, {Fragment, useState} from 'react';
import uuid from 'uuid/v4'
const Formulario = ({crearCita}) => {
  // crear state de citas
   const [cita, actualizarCita] = useState({
       mascota : '',
       propietario : '',
       fecha : '',
       hora : '',
       sintomas : ''
   })


   //segundo state

const [error, actulizarError] = useState(false)

   // funcion que se ejecuta cada vez que el usuario escribe en un input
   const actualizarState = e =>{
       actualizarCita({
           ...cita,
            [e.target.name] : e.target.value

       }) 
   }

   // extraer valores de useState

   const { mascota, propietario, fecha, hora, sintomas} = cita

   // submmit del formulario
   const submitCitas = e =>{
       e.preventDefault()
   
       if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
           console.log('Campo vacio')
           actulizarError(true)
           setTimeout( () =>{
            actulizarError(false)
           }, 3000)
           return 
       }
       //eliminar el mensaje de error
       actulizarError(false)
       // agregar ID
       cita.id = uuid()
       

       // CREAR CITA
       crearCita(cita)


      
   }
  
    return(

    
    <Fragment>
        <h2>Crear Orden</h2>
        {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null } 
        <form 
            onSubmit= {submitCitas}
        >
            <label>Nombre </label>
            <input
                type="text"
                name="mascota"
                className="u-full-width"
                placeholder="Nombre"
                onChange={actualizarState}
                value={mascota}
            />   

            <label>Propietario </label>
            <input
                type="text"
                name="propietario"
                className="u-full-width"
                placeholder="Propietario"
                onChange={actualizarState}
                value={propietario}
            /> 
            <label>Fecha</label>
            <input
                type="date"
                name="fecha"
                className="u-full-width"
                onChange={actualizarState}
                value={fecha}
                
            /> 
            <label>Hora</label>
            <input
                type="time"
                name="hora"
                className="u-full-width"
                onChange={actualizarState}
                value={hora}
            /> 
             <label>Sintomas</label>
            <textarea
                name="sintomas"
                className="u-full-width"
                onChange={actualizarState}
                value={sintomas}
            ></textarea>
            <button 
                type="submit"
                className="u-full-width"

                > Agregar Orden</button>
            

              
              
        </form>
    </Fragment>
      
  )
}


export default Formulario