import React from 'react';
import './App.css';
import Upload from './uploadComponent/upload';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Envioindividual from './envioIndividual';



function App() {
  return (
    <Router>
    <div className="App">
      <div className='btn-group'>
        <Link to="/enviomasivo" className='btn-students'>
          Envio Masivo
        </Link>
        <Link to="/envioindividual" className='btn-students'>
          Envio Individual
        </Link>
        <Link to="/" className='btn-students'>
          Inicio
        </Link>

      </div>
      <Routes>
        <Route path="/envioindividual" element={<Envioindividual/>}>
        </Route>
      </Routes>
      <Routes>
        <Route path="/enviomasivo" element={
           <header className="App-header">
             <Upload/>
          </header> 
        }>
        </Route>
      </Routes>
      <Routes>
        <Route path="/" element={<btn-group/>}>
        </Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
