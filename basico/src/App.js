import React, {Fragment} from 'react';
import Header from './components/Header'
import Footer from './components/Footer.js'

function App() {
  const fecha = new Date().getFullYear()
  return (
<<<<<<< HEAD
    <div>
        <Header/>
        <Footer/>
    </div>
=======
      <Fragment>
          <Header titulo="titulo desde el App al header" />
          <Footer/>
      </Fragment>
    
>>>>>>> e4520b6b24453b9bf9f2284417b81852ac0c23ab
  );
}

export default App;
//para no generar etiquetas html de mas agregamos Fra