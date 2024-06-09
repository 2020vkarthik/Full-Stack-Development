import logo from './logo.svg';
import Cal from './Components/Cal';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <p>
          Hello! Welcome to the Adder
      </p>

      <img src={logo} className="App-logo" alt="logo" />
      
      <Cal />

      </header>
    </div>
  );
}

export default App;
