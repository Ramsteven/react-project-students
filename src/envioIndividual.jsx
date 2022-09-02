import React from 'react';

const Envioindividual = () => {
    return(
        <div>
          <>
          <h1>subiendo estudiantes de manera individual</h1>
          <form>
            <label htmlFor="id">id</label>
            <input type="number" id="id"/>

            <label htmlFor="nombre">nombre</label>
            <input type="text" id="nombre"/>

            <label htmlFor="birthday">birthday</label>
            <input type="text" id="birthday"/>

            <input type="submit" value="Enviar formulario" className="enviar"></input>
          </form>
          </>
        </div>
    )

}

export default Envioindividual