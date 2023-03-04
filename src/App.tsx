import { useState, createContext } from 'react'
import './app.scss';
import { Form } from './components/form/Form';
import { AppcontextProvider } from './context/context';

function App() {

  return (
    <AppcontextProvider>
      <div className="App">
        <header>
          <h2>Random <br />Password <br />Generator</h2>
        </header>
        <main>
          <Form />
        </main>
      </div>
    </AppcontextProvider>
  )
}

export default App
