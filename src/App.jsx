import { useState } from 'react'
import LoginCentral from './pages/LoginCentral.jsx'
import LoginTecnico from './pages/LoginTecnico.jsx'
import Despacho from './pages/Despacho.jsx'
import Portaria from './pages/Portaria.jsx'
import Tecnico from './pages/Tecnico.jsx'
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

      {tela === 'b1' && <Portaria etapa="tipo" />}
      {tela === 'b2' && <Portaria etapa="andar" />}
      {tela === 'b3' && <Portaria etapa="fim" />}

      {tela === 't1' && <Tecnico etapa="chamado" />}
      {tela === 't2' && <Tecnico etapa="scan" />}
      {tela === 't2b' && <Tecnico etapa="qrErrado" />}
      {tela === 't3' && <Tecnico etapa="chegada" />}
      {tela === 't4' && <Tecnico etapa="relatorio" />}
      {tela === 't5' && <Tecnico etapa="aguardando" />}
      {tela === 't6' && <Tecnico etapa="devolvida" />}
      {tela === 't7' && <Tecnico etapa="encerrada" />}

      <div className="seletor-telas">
        <label htmlFor="seletor">Ver tela:</label>
        <select id="seletor" value={tela} onChange={(e) => setTela(e.target.value)}>
          <optgroup label="A · Acesso">
            <option value="a1">A1 · Login da central</option>
            <option value="a2">A2 · Login do técnico</option>
            <option value="a3">A3 · Despacho do operador</option>
          </optgroup>
          <optgroup label="Central">
            <option value="despacho">Despacho (admin)</option>
            <option value="c1">C1 · Registrar ligação</option>
          </optgroup>
          <optgroup label="B · Portaria (QR)">
            <option value="b1">B1 · O que aconteceu</option>
            <option value="b2">B2 · Qual andar</option>
            <option value="b3">B3 · Chamado aberto</option>
          </optgroup>
          <optgroup label="T · Técnico (celular)">
            <option value="t1">T1 · Recebe o chamado</option>
            <option value="t2">T2 · Lê o QR</option>
            <option value="t2b">T2b · QR errado</option>
            <option value="t3">T3 · Chegada enviada</option>
            <option value="t4">T4 · Relatório</option>
            <option value="t5">T5 · Aguardando central</option>
            <option value="t6">T6 · Devolvida</option>
            <option value="t7">T7 · Encerrada</option>
          </optgroup>
        </select>
      </div>
    </>
  )
}

export default App
