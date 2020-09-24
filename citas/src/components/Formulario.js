import React, {Fragment} from 'react';
const Formulario = () => {
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
            />   

            <label>Propietario </label>
            <input
                type="text"
                name="propietario"
                className="u-full-width"
                placeholder="Propietario"
            /> 
            <label>Fecha</label>
            <input
                type="date"
                name="fecha"
                className="u-full-width"
                
            /> 
            <label>Hora</label>
            <input
                type="time"
                name="hora"
                className="u-full-width"
            /> 
             <label>Sintomas</label>
            <textarea
                name="sintomas"
                className="u-full-width"
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