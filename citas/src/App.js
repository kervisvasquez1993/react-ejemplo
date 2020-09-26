import React, {Fragment, useState}  from 'react';
import Formulario from './components/Formulario';
function App() {

  // arreglo de citas
  const [citas, guardarCitas] = useState([])

  // funcion que tome las citas actuales y agregue las nuevas 

  const crearCita = cita =>{
    guardarCitas([...citas,cita])
  }
  return (
  <Fragment>
      <h1>Formulario de contacto</h1>
      <div className="container">
          <div className="row">
              <div className="one-half column">
                <Formulario
                  crearCita = {crearCita}
                />
              </div>
              <div className="one-half column">2</div>


          </div>
      </div>
   </Fragment>
  );
}

export default App;