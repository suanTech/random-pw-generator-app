import { useState, createContext } from 'react'
import './app.scss';
import { Form } from './components/Form/Form';

function App() {

  return (
    <div className="App">
      <header>
        <h2>Random <br />Password <br />Generator</h2>
      </header>
      <main>
        <Form />
      </main>
    </div>
  )
}

export default App
