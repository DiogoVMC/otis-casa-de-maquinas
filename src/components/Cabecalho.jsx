import './Cabecalho.css'

// Cabeçalho das telas da central (faixa amarela + logo + menu)
// perfil: "admin" vê a aba Cadastros, "operador" não vê (tela A3)
function Cabecalho({ perfil }) {
  const usuario = perfil === 'admin' ? 'Diogo · Admin' : 'Operador · turno noite'

  return (
    <>
      <div className="faixa-amarela"></div>

      <header className="cabecalho d-flex flex-wrap align-items-center">
        <span className="logo">Casa de Máquinas</span>

        <nav aria-label="Seções" className="cabecalho-menu d-flex">
          <a href="#" className="cabecalho-link ativo" aria-current="page">Despacho</a>
          <a href="#" className="cabecalho-link">Elevadores</a>
          {perfil === 'admin' && <a href="#" className="cabecalho-link">Cadastros</a>}
          <a href="#" className="cabecalho-link">Relatório do turno</a>
        </nav>

        <div className="cabecalho-usuario ms-auto d-flex align-items-center">
          <span>
            <span className="codigo">02:26</span> · {usuario}
          </span>
          <a href="#">Sair</a>
        </div>
      </header>
    </>
  )
}

export default Cabecalho
