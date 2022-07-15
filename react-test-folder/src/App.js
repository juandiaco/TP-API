import { ReactDOM } from 'react-dom/client';
import { Route, Routes, BrowserRouter, } from 'react-router-dom';
import './bootstrap.min.css';
import './components/css_inicio.css';
import Inicio from './components/JS/Inicio';
import Login from './components/JS/Login';
import Main from './components/JS/main';
import Registrar from './components/JS/Registrar';
import CrearReceta from './components/JS/crearReceta';
import Recetario from './components/JS/recetario';
import EditarPerfil from './components/JS/editarPerfil';
import RecetaCompleta from './components/JS/recetaCompleta';
import RecuperoContraseña from './components/JS/recuperoContraseña';
import MisRecetas from './components/JS/misRecetas';

function App() {
  return (
  <div>
    
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route path='login' element={<Login />} />
      <Route path='main' element={<Main />} />
      <Route path='registrar' element={<Registrar />} />
      <Route path='crearReceta' element={<CrearReceta />}/>
      <Route path='recetario' element={<Recetario />} />
      <Route path='inicio' element={<Inicio />} />
      <Route path='editarPerfil' element={<EditarPerfil />} />
      <Route path='recetaCompleta' element={<RecetaCompleta />} />
      <Route path='recuperoContraseña' element={<RecuperoContraseña />} />
      <Route path='misRecetas' element={<MisRecetas />}/>
      
    </Routes>
  </div>
  );
}

export default App;
