import logo from './logo.svg';
import Hello from './components/Hello';
import Cars from './components/Cars';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello/>
      </header>
      <div style={{paddingLeft: '5vh'}}>
        <Cars/>
      </div>
    </div>
  );
}

export default App;
