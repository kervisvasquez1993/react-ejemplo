import React, {Fragment, useState}  from 'react';
import Formulario from './components/Formulario';
import Cita  from './components/Cita';
function App() {

  // arreglo de citas
  const [citas, guardarCitas] = useState([])

  // funcion que tome las citas actuales y agregue las nuevas 

  const crearCita = cita =>{
    guardarCitas([...citas,cita])
  }

  // funcion para eliminar cita por su id 
  const eliminaCita = id =>{
    const nuevasCitas = citas.filter(cita => cita.id !== id) // crea un nuevo arreglo
    guardarCitas(nuevasCitas)
  }
  return (
  <Fragment>
      <h1>Formulario de contacto desde casa</h1>
      <div className="container">
          <div className="row">
              <div className="one-half column">
                <Formulario
                  crearCita = {crearCita}
                />
              </div>
              <div className="one-half column">
                 <h2>Administra tus citas </h2>
                 {citas.map( cita => (
                   <Cita 
                      key =  {cita.id}
                      cita = {cita}
                      eliminaCita = {eliminaCita}
                    />
                 )
                 )
                 }
              </div>


          </div>
      </div>
   </Fragment>
  );
}

export default App;
