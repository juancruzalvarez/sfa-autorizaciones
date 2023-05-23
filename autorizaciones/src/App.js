import logo from './logo.svg';
import './App.css';
import { Login } from './Components/Login';
import { ViewCarga } from './Components/ViewCarga';
import { useState } from 'react';
function App() {
  const [datosUsuario, setDatosUsuario] = useState({roles:[], nombre:''});
  return (
    <div className="App" style={{
      height:'100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'}}>
      <ViewCarga />
    </div>
  );
}

export default App;
