import React, {Fragment} from 'react';
import Header from './components/Header'
import Footer from './components/Footer.js'

function App() {
  const fecha = new Date().getFullYear()
  return (
      <Fragment>
          <Header titulo="titulo desde el App al header" />
          <Footer/>
      </Fragment>
    
  );
}

export default App;
