import logo from './logo.svg';
import './App.css';
import { List } from './components/List/List';

function App() {
  const data = [
    { id: 1, content: 'first element' },
    { id: 2, content: 'second element' },
    { id: 3, content: 'third element' },
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <List data={data}/>
      </header>
    </div>
  );
}

export default App;
