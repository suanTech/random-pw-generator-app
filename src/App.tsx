import { useState, createContext } from 'react'
import './app.scss';
import { CustomizeForm } from './components/CustomizeForm/CustomizeForm';
import { Output } from './components/Output/Output.jsx';

type OuptutContextType = string;
const OutputContext = createContext<OuptutContextType>('');

function App() {
  const [output, setOutPut] = useState('');

  return (
    <OutputContext.Provider value={output}>
      <div className="App">
        <header>
          <h2>Random <br />Password <br />Generator</h2>
        </header>
        <main>
          <Output />
          <CustomizeForm />
          {/* <div className="container">
          <input type="text" />
          <button><img></img>click</button>
        </div> */}
          {/* <div className="container main">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque corrupti perspiciatis error voluptatibus suscipit harum, aperiam assumenda distinctio earum cumque architecto est dignissimos delectus velit illum saepe neque rerum unde?</p>
        </div> */}
        </main>
      </div>
    </OutputContext.Provider>
  )
}

export default App
