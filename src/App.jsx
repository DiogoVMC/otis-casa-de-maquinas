import { useState } from 'react'
import LoginCentral from './pages/LoginCentral.jsx'
import LoginTecnico from './pages/LoginTecnico.jsx'
import Despacho from './pages/Despacho.jsx'
import './App.css'

// TEMPORÁRIO: enquanto não tem rotas (react-router) nem login funcionando,
// esta barrinha no canto serve só para eu ver cada tela.
function App() {
  const [tela, setTela] = useState('a1')

  return (
    <>
      {tela === 'a1' && <LoginCentral />}
      {tela === 'a2' && <LoginTecnico />}
      {tela === 'despacho' && <Despacho perfil="admin" />}
      {tela === 'a3' && <Despacho perfil="operador" />}
      {tela === 'c1' && <Despacho perfil="admin" mostrarJanela />}

      <div className="seletor-telas">
        <label htmlFor="seletor">Ver tela:</label>
        <select id="seletor" value={tela} onChange={(e) => setTela(e.target.value)}>
          <option value="a1">A1 · Login da central</option>
          <option value="a2">A2 · Login do técnico</option>
          <option value="despacho">Despacho (admin)</option>
          <option value="a3">A3 · Despacho do operador</option>
          <option value="c1">C1 · Registrar ligação</option>
        </select>
      </div>
    </>
  )
}

export default App
