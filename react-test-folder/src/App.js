import { ReactDOM } from 'react-dom/client';
import { Route, Routes, BrowserRouter, } from 'react-router-dom';
import './bootstrap.min.css';
import './components/css_inicio.css';
import Inicio from './components/Inicio';
import Login from './components/Login';
import Main from './components/main';
import Prueba from './components/Test';
import Registrar from './components/Registrar';
import CrearReceta from './components/crearReceta';

function App() {
  return (
  <div>
    
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route path='login' element={<Login />} />
      <Route path='prueba' element={<Prueba />} />
      <Route path='main' element={<Main />} />
      <Route path='registrar' element={<Registrar />} />
      <Route path='crearReceta' element={<CrearReceta />}/>
    </Routes>
  </div>
  );
}

export default App;
