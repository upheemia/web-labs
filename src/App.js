import logo from './logo.svg';
import './App.css';
import { List } from './components/List/List';
import { useEffect, useState } from 'react';

const initialData = [
  { id: 1, content: 'first element' },
  { id: 2, content: 'second element' },
  { id: 3, content: 'third element' },
  { id: 4, content: 'fourth element' },
  { id: 5, content: 'fifth element' },
]

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState(initialData)
  
  useEffect(() => {
    const filteredData = initialData.filter(item => item.content.toLowerCase().includes(searchValue.toLowerCase()));
    setData(filteredData)

    if (!searchValue.length) {
      document.title = "useEffect hook example"
    } else {
      document.title = `${data.length} элементов в списке`
    }
  }, [searchValue, data])

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
        <input
          type="text"
          className='search-input'
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <List data={data} searchSubs={searchValue}/>
      </header>
    </div>
  );
}

export default App;
