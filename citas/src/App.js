import React, {Fragment, useState, useEffect}  from 'react';
import Formulario from './components/Formulario';
import Cita  from './components/Cita';
function App() {

  // arreglo de citas
  const [citas, guardarCitas] = useState([])

  // citas en localstorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))

  if(!citasIniciales)
  {
    citasIniciales = []
  }

  // use effect para  realizar ciertas operaciones cuando el state cambie

  useEffect( ()=> {
   

   
  }, [citas] )

  // funcion que tome las citas actuales y agregue las nuevas 

  const crearCita = cita =>{
    guardarCitas([...citas,cita])
  }

  // funcion para eliminar cita por su id 
  const eliminaCita = id =>{
    const nuevasCitas = citas.filter(cita => cita.id !== id) // crea un nuevo arreglo
    guardarCitas(nuevasCitas)
  }

  // mensaje condicional 

  let titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus Citas' 
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
                 <h2>{titulo} </h2>
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
