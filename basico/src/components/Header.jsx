import React from 'react'
function Header()
{
    // lugar para escribir codigo javascript
    const edad = 18
    let mensaje 
    if (edad >= 18) {
        mensaje = 'eres mayor de edad'
    }
    else{
        mensaje = 'eres menor de edad'
    }
return(<h1 className="encabezado"> tienda virtual</h1>)
}
export default Header