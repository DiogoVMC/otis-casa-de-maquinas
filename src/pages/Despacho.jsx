import Cabecalho from '../components/Cabecalho.jsx'
import JanelaRegistrarLigacao from '../components/JanelaRegistrarLigacao.jsx'
import './Despacho.css'

// Tela de Despacho (fila da central)
// Os dados abaixo são de EXEMPLO, iguais aos do protótipo.
// Depois eles vão vir da API (GET /api/ocorrencias).

const grupos = [
  {
    titulo: 'Sem técnico',
    itens: [
      { id: 'OC-1039', p: 'P1', local: 'Hosp. Vale Verde · Maca 1', tempo: '00:26', detalhe: 'Elevador parado · sem técnico', atrasado: true },
      { id: 'OC-1042', p: 'P1', local: 'Ed. Horizonte · Elev. B', tempo: '00:12', detalhe: 'Passageiro preso · sem técnico', atrasado: true, selecionada: true },
      { id: 'OC-1041', p: 'P2', local: 'Cond. Bela Vista · Serviço', tempo: '00:18', detalhe: 'Falta de energia · sem técnico' },
    ],
  },
  {
    titulo: 'Em andamento',
    itens: [
      { id: 'OC-1036', p: 'P1', local: 'Torre Jacarandá · Elev. 2', tempo: '00:41', detalhe: 'Passageiro preso · Ana no local' },
      { id: 'OC-1035', p: 'P2', local: 'Shopping Ipê · Panorâmico', tempo: '01:05', detalhe: 'Elevador parado · Rafael a caminho' },
    ],
  },
  {
    titulo: 'Resolvidas no turno',
    itens: [
      { id: 'OC-1031', p: 'P3', local: 'Ed. Horizonte · Elev. A', tempo: '01:38', detalhe: 'Falha com elevador funcionando · resolvida' },
    ],
  },
]

const tecnicos = [
  { nome: 'Carlos Mendes', status: 'Livre · 3,2 km', livre: true },
  { nome: 'Denise Ota', status: 'Livre · 7,9 km', livre: true },
  { nome: 'Ana Prado', status: 'No local · Torre Jacarandá' },
  { nome: 'Rafael Souza', status: 'A caminho · Shopping Ipê' },
  { nome: 'Bruna Teles', status: 'Folga até 08:00', folga: true },
]

// Andares do Ed. Horizonte: térreo (T) até o 14º
const andares = ['T', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14']
// A cabine parou entre o 7º e o 8º
const andaresParada = ['7', '8']

function Despacho({ perfil, mostrarJanela }) {
  return (
    <div className="despacho">
      <Cabecalho perfil={perfil} />

      {/* Barra de resumo do turno */}
      <div className="despacho-resumo d-flex flex-wrap align-items-center">
        <span><strong>5</strong> abertas</span>
        <span><strong className="numero-p1">3</strong> P1 em aberto</span>
        <span><strong>3</strong> sem técnico</span>
        <span><strong className="numero-alerta">0</strong> esperando sua confirmação</span>
        <span><strong className="numero-resolvidas">1</strong> resolvidas</span>
        <button type="button" className="btn btn-principal despacho-btn-ligacao">+ Registrar ligação</button>
      </div>

      {/* As 3 colunas: fila | ocorrência | técnicos */}
      <div className="despacho-colunas">

        {/* ---------- COLUNA 1: FILA ---------- */}
        <section aria-label="Fila" className="fila">
          <div className="fila-filtros d-flex flex-column gap-2">
            <div>
              <label htmlFor="busca" className="fila-busca-label">Buscar</label>
              <input id="busca" type="search" className="form-control" placeholder="Prédio, elevador ou nº" />
            </div>

            <div role="group" aria-label="Filtrar por prioridade" className="fila-prioridades d-flex flex-wrap gap-2">
              <button type="button" className="filtro ativo">Todas</button>
              <button type="button" className="filtro">P1</button>
              <button type="button" className="filtro">P2</button>
              <button type="button" className="filtro">P3</button>
              <button type="button" className="filtro">P4</button>
            </div>
          </div>

          {grupos.map((grupo) => (
            <div key={grupo.titulo}>
              <h2 className="rotulo-secao fila-grupo-titulo">
                {grupo.titulo} · {grupo.itens.length}
              </h2>

              {grupo.itens.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={item.selecionada ? 'fila-item selecionada' : 'fila-item'}
                >
                  <span className={'etiqueta-prioridade fila-item-p etiqueta-' + item.p.toLowerCase()}>{item.p}</span>
                  <span className="fila-item-local">{item.local}</span>
                  <span className={item.atrasado ? 'fila-item-tempo atrasado' : 'fila-item-tempo'}>{item.tempo}</span>
                  <span className="fila-item-detalhe">{item.detalhe}</span>
                </button>
              ))}
            </div>
          ))}
        </section>

        {/* ---------- COLUNA 2: OCORRÊNCIA SELECIONADA ---------- */}
        <section aria-label="Ocorrência selecionada" className="ocorrencia d-flex flex-column">
          <div className="d-flex flex-wrap align-items-baseline ocorrencia-titulo">
            <span className="codigo">OC-1042</span>
            <h1 className="ocorrencia-h1">Passageiro preso — Ed. Horizonte · Elev. B</h1>
            <span className="etiqueta-status status-aberta">Aberta</span>
          </div>

          <p className="ocorrencia-texto m-0">
            Cabine parou entre o 7º e o 8º andar com 2 pessoas. Interfone funcionando, estão calmas.
          </p>

          <div className="caixa-alerta ocorrencia-texto d-flex flex-wrap align-items-center gap-2">
            <strong>4ª ocorrência neste elevador em 30 dias.</strong>
            <span className="cor-apoio">Vale abrir uma manutenção preventiva depois do atendimento.</span>
            <a href="#">Ver ficha</a>
          </div>

          <div className="d-flex flex-wrap ocorrencia-detalhes">
            {/* Desenho do poço do elevador */}
            <div aria-label="Posição da cabine" className="d-flex gap-2">
              <div className="poco">
                {andares.map((andar) => (
                  <div
                    key={andar}
                    className={andaresParada.includes(andar) ? 'poco-andar parada' : 'poco-andar'}
                  >
                    {andar}
                  </div>
                ))}
              </div>
              <div className="poco-legenda d-flex flex-column justify-content-center">
                <strong>Entre 7º e 8º</strong>
                <span>informado por quem abriu</span>
              </div>
            </div>

            {/* Lista de informações (dl = lista de definições) */}
            <dl className="ocorrencia-dados m-0">
              <dt>Prédio</dt>
              <dd>Rua das Acácias, 210 — Jardim Paulista</dd>
              <dt>Quem abriu</dt>
              <dd>Portaria · Sr. João</dd>
              <dt>Origem</dt>
              <dd>QR do elevador (sem login)</dd>
              <dt>Prioridade</dt>
              <dd>P1 — pessoa dentro da cabine</dd>
              <dt>Prazo</dt>
              <dd>até 30 min</dd>
              <dt>Técnico</dt>
              <dd className="fw-semibold">ninguém ainda</dd>
            </dl>
          </div>

          <div className="proximo-passo d-flex flex-column gap-2">
            <h2 className="rotulo-secao">Próximo passo</h2>
            <p className="m-0">
              Escolha um técnico livre na coluna da direita e clique em <strong>Enviar</strong>.
              Ele recebe o chamado no celular.
            </p>
          </div>

          <div>
            <h2 className="rotulo-secao mb-2">Registro</h2>
            <ul className="registro list-unstyled m-0">
              <li>
                <span className="codigo registro-hora">02:14</span>
                <span>Aberta pela portaria com o QR do elevador B</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ---------- COLUNA 3: TÉCNICOS ---------- */}
        <aside aria-label="Técnicos" className="tecnicos">
          <h2 className="rotulo-secao fila-grupo-titulo">Técnicos de plantão</h2>

          {tecnicos.map((tecnico) => (
            <div key={tecnico.nome} className="tecnico-item">
              <span className="fw-semibold">{tecnico.nome}</span>
              {tecnico.livre && (
                <button type="button" className="btn btn-secundario tecnico-btn">Enviar</button>
              )}
              <span
                className={
                  tecnico.livre ? 'tecnico-status livre' : tecnico.folga ? 'tecnico-status folga' : 'tecnico-status'
                }
              >
                {tecnico.status}
              </span>
            </div>
          ))}
        </aside>
      </div>

      {/* Janela "Registrar ligação" (só aparece se mostrarJanela for true) */}
      {mostrarJanela && <JanelaRegistrarLigacao />}
    </div>
  )
}

export default Despacho
