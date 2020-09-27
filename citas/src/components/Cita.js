import React from 'react';

// atajo para crear un cmponente ====> sfc
const Cita = ({cita, eliminaCita}) => (

    
    <div className="cita">
       <p>Mascota : <span>{cita.mascota}</span> </p>
       <p>Dueño   : <span>{cita.propietario}</span> </p>
       <p>Fecha   : <span>{cita.fecha}</span> </p>
       <p>hora    : <span>{cita.mascota}</span> </p>
       <p>sintoma : <span>{cita.sintomas}</span> </p>
       <button
            className="button eliminar u-full-width"
            onClick = { () =>  eliminaCita(cita.id)}
       >
           Eliminar &times;
       </button>
    </div>
    
)

export default Cita