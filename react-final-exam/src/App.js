import './App.css';
import Cars from './components/Cars';
import Hello from './components/Hello';

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
