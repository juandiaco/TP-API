import { ReactDOM } from 'react-dom/client';
import { Route, Routes, BrowserRouter, } from 'react-router-dom';
import './App.css';
import Inicio from './components/Inicio';
import Login from './components/Login';
import Main from './components/main';
import Prueba from './components/Test';
import Registrar from './components/Registrar';

function App() {
  return (
  <div>
    
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route path='login' element={<Login />} />
<<<<<<< Updated upstream
      <Route path='registrar' element={<Registrar />} />
      
=======
      <Route path='prueba' element={<Prueba />} />
      <Route path='main' element={<Main />} />
>>>>>>> Stashed changes
    </Routes>
    
  </div>
  );
}

export default App;
