import './App.css';
import Demo from './components/demo_component';
import D2 from './components/demo2';
import D3 from './components/demo3post';
import InputField from "./components/InputField";
import Button from "./components/Button";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Demo/>
      <D2/>
      <D3/>
    </div>
    
  );
}

export default App;
