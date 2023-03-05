import { useEffect } from 'react';
import './app.scss';
import { Form } from './components/form/Form';
import { AppcontextProvider } from './context/context';

function App() {
  useEffect(() => {
    if (navigator.userAgent.match(/samsung/i)) {
      alert(`You are using a defective browser (Samsung Internet) that might not be configured to display this website properly.
      You should consider using a proper standards-compliantbrowser instead. \n\n
      We recommend using Firefox, Microsoft Edge, or Google Chrome.`);
    }}, [navigator])

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
