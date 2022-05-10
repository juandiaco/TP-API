import { ReactDOM } from 'react-dom/client';
import { Route, Routes, BrowserRouter, } from 'react-router-dom';
import './App.css';
import Inicio from './components/Inicio';
import Login from './components/Login';
import Prueba from './components/Test';




function App() {
  return (
  <div>
    
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route path='login' element={<Login />} />
      <Route path='prueba' element={<Prueba />} />
      
    </Routes>
    
  </div>
  );
}

export default App;
