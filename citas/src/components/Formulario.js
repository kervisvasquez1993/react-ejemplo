import React, {Fragment, useState} from 'react';
const Formulario = () => {
  // crear state de citas
   const [cita, actualizarCita] = useState({
       mascota : '',
       propietario : '',
       fecha : '',
       hora : '',
       sintomas : ''
   })

   // funcion que se ejecuta cada vez que el usuario escribe en un input
   const actualizarState = e =>{
       actualizarCita({
           ...cita,
            [e.target.name] : e.target.value

       }) 
   }

   // extraer valores 

   const { mascota, propietario, fecha, hora, sintomas} = cita

   
  
    return(

    
    <Fragment>
        <h2>Crear Orden</h2>
        <form>
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