import { useState } from 'react';
import './App.css';


function App() {
  const [sex, setSex] = useState("mies");
  const [paino, setPaino] = useState(0);
  const [pullot, setPullot] = useState(0);
  const [aika, setAika] = useState(0);
  const [tulos, setTulos] = useState(0);
  
  // 
  function laske(e) {
    e.preventDefault();
    let litrat = pullot * 0.33
    let grammat = litrat * 8 * 4.5
    let palaminen = paino / 10
    let grammatLeft = grammat - (palaminen * aika)
    let lasku = "";
    if (sex === "mies") {
      lasku = grammatLeft / (paino * 0.7)
    } else {
      lasku = grammatLeft / (paino * 0.6)
    }
    if (lasku < 0){
      setTulos(0)
    } else {
      setTulos(lasku)
    }
    
  }

  return (
    <form onSubmit={laske}>
    <div>
      <h3>Alkometri</h3>
      <div>
      <label>Weight</label>
      <input type="number" value={paino} onChange={e => setPaino(e.target.value)} /> <br></br>
      <label>Bottles</label>
      <input type="number" value={pullot} onChange={e => setPullot(e.target.value)} /> <br />
      <label>Time</label>
      <input type="number" value={aika} onChange={e => setAika(e.target.value)} /> <br />
      <label>Sukupuoli</label>
      <label><input type="radio" name="sukupuoli" value="mies" defaultChecked onChange={e => setSex(e.target.value)}/>Mies</label>
      <label><input type="radio" name="sukupuoli" value="nainen" onChange={e => setSex(e.target.value)}/>Nainen</label>
      </div>
      <div>
      <button>Laske</button> <br />
      <label>Tulos </label>
      <output>{tulos.toFixed(2)}</output>
      </div>
    </div>
    </form>
  );
}

export default App;