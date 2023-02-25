import { useState } from 'react'
import './app.scss';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="App">
      <section className="appContainer">
        <div className="header">
          <h2>Random Password Generator</h2>
        </div>
      </section>
    </main>
  )
}

export default App
