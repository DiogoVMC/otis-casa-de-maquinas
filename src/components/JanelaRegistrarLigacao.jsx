import './JanelaRegistrarLigacao.css'

// Janela (modal) "Registrar ligação" - tela C1
// Por enquanto só o visual. Os valores são de exemplo.
function JanelaRegistrarLigacao() {
  return (
    <div className="janela-fundo">
      <form role="dialog" aria-label="Registrar ligação" className="janela">
        <div className="faixa-amarela janela-faixa"></div>

        <div className="janela-corpo d-flex flex-column">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="titulo-h2">Registrar ligação</h2>
            <button type="button" className="janela-fechar" aria-label="Fechar">×</button>
          </div>

          {/* row e col do Bootstrap: 2 colunas no computador, 1 no celular */}
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <label htmlFor="predio" className="form-label">Prédio</label>
              <select id="predio" className="form-select" defaultValue="hor">
                <option value="hor">Ed. Horizonte</option>
                <option value="hvv">Hospital Vale Verde</option>
                <option value="jac">Torre Jacarandá</option>
                <option value="bv">Cond. Bela Vista</option>
                <option value="ipe">Shopping Ipê</option>
              </select>
            </div>

            <div className="col-12 col-md-6">
              <label htmlFor="elevador" className="form-label">Elevador</label>
              <select id="elevador" className="form-select" defaultValue="a">
                <option value="a">Elev. A</option>
                <option value="b">Elev. B</option>
              </select>
            </div>

            <div className="col-12 col-md-6">
              <label htmlFor="tipo" className="form-label">Tipo</label>
              <select id="tipo" className="form-select" defaultValue="falha">
                <option value="preso">Passageiro preso</option>
                <option value="parado">Elevador parado</option>
                <option value="energia">Falta de energia</option>
                <option value="falha">Falha com elevador funcionando</option>
                <option value="pedido">Solicitação do cliente</option>
              </select>
            </div>

            <div className="col-12 col-md-6">
              <label htmlFor="andar" className="form-label">Andar onde parou</label>
              <select id="andar" className="form-select" defaultValue="">
                <option value="">Não informado</option>
                <option value="0">Térreo</option>
                <option value="1">1º andar</option>
                <option value="2">2º andar</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="quem-ligou" className="form-label">Quem ligou</label>
            <input
              id="quem-ligou"
              type="text"
              className="form-control"
              placeholder="Ex.: Portaria · Sr. João"
              defaultValue="Morador · apto 81"
            />
          </div>

          <div>
            <label htmlFor="descricao" className="form-label">Descrição</label>
            <textarea
              id="descricao"
              rows="3"
              className="form-control"
              placeholder="O que a pessoa relatou"
              defaultValue="Porta demora para fechar no térreo."
            ></textarea>
          </div>

          {/* Prioridade calculada (ninguém digita) */}
          <div className="janela-prioridade d-flex flex-wrap align-items-center gap-2">
            <span className="etiqueta-prioridade etiqueta-p3">P3</span>
            <span>funciona com defeito · prazo até 8 h</span>
          </div>

          <div className="d-flex justify-content-end gap-2">
            <button type="button" className="btn btn-neutro janela-cancelar">Cancelar</button>
            <button type="button" className="btn btn-principal">Abrir ocorrência</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default JanelaRegistrarLigacao
