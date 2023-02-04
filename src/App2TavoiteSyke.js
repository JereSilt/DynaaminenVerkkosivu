
import { useState } from 'react';
import './App.css';


function App() {
  const [ika, setIka] = useState(0)
  const [ala, setAla] = useState(0)
  const [yla, setYla] = useState(0)
  
  // function calculate(e) {} alempi toinen tapa, toimii normi funktiollakin.
  const calculate = (e) => {
    e.preventDefault()
    setAla((220-ika) * 0.65)
    setYla((220-ika) * 0.85)
  }

  return (
    <div>
      <h3>TavoiteSyke</h3>
      <form onSubmit={calculate}>
          <div>
              <label htmlFor="">Ikä</label>
              <input type="number"
               step="1"
               value={ika}
               onChange={e => setIka(e.target.value)}
               />
          </div>
          <div>
              <output>{ala.toFixed(0)} - {yla.toFixed(0)}</output>
          </div>
          <button>Laske</button>
      </form>
    </div>
  );
}

export default App;
