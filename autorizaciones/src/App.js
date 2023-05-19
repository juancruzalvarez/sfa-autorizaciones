import logo from './logo.svg';
import './App.css';
import { Login } from './Components/Login';

function App() {
  return (
    <div className="App" style={{
      height:'100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'}}>
      <Login />
    </div>
  );
}

export default App;
