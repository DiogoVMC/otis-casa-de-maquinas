import './Portaria.css'

// Telas B - Portaria abre o chamado lendo o QR da cabine (sem login)
// etapa: "tipo" (B1), "andar" (B2) ou "fim" (B3)
// Por enquanto é só o visual: os botões ainda não trocam de etapa.

const tipos = [
  { id: 'preso', texto: 'Tem gente presa na cabine', urgente: true },
  { id: 'parado', texto: 'Elevador parado, sem ninguém dentro' },
  { id: 'energia', texto: 'Faltou energia no prédio' },
  { id: 'defeito', texto: 'Funciona, mas com problema' },
  { id: 'outro', texto: 'Outro pedido' },
]

// Andares do Ed. Horizonte: térreo (T) até o 14º
const andares = ['T', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14']

function Portaria({ etapa }) {
  return (
    <div className="tela-celular">
      <div className="faixa-amarela"></div>

      {/* Qual elevador foi escaneado (vem do QR) */}
      <div className="portaria-elevador">
        <p className="texto-secundario m-0">Você escaneou o QR do</p>
        <p className="titulo-h1-celular">Elevador B · Ed. Horizonte</p>
        <p className="codigo portaria-endereco m-0">EL-0418 · Rua das Acácias, 210</p>
      </div>

      {/* ---------- B1: o que está acontecendo ---------- */}
      {etapa === 'tipo' && (
        <div className="tela-celular-corpo portaria-tipos">
          <p className="portaria-pergunta">O que está acontecendo?</p>

          {tipos.map((tipo) => (
            <button
              key={tipo.id}
              type="button"
              className={tipo.urgente ? 'portaria-opcao urgente' : 'portaria-opcao'}
            >
              {tipo.texto}
            </button>
          ))}

          <p className="texto-secundario mt-auto mb-0">
            Não precisa de login. O chamado já sai com o prédio e o elevador preenchidos.
            Técnico? <a href="#">Entre na sua conta</a> para registrar chegada.
          </p>
        </div>
      )}

      {/* ---------- B2: em que andar parou ---------- */}
      {etapa === 'andar' && (
        <div className="tela-celular-corpo">
          <p className="portaria-pergunta">Em que andar a cabine parou?</p>

          <div className="portaria-andares">
            {andares.map((andar) => (
              <button key={andar} type="button" className="portaria-andar">
                {andar}
              </button>
            ))}
          </div>

          <button type="button" className="portaria-nao-sei">Não sei o andar</button>
        </div>
      )}

      {/* ---------- B3: chamado aberto ---------- */}
      {etapa === 'fim' && (
        <div className="tela-celular-corpo">
          <h1 className="titulo-h1-celular">Chamado aberto</h1>
          <p className="codigo portaria-protocolo m-0">Protocolo OC-1043</p>

          <div className="caixa-perigo portaria-mensagem">
            Prioridade máxima. A central já foi avisada e o técnico mais próximo está
            sendo enviado. Tempo estimado: 25 min. Andar informado: 7.
          </div>

          <ul className="portaria-dicas">
            <li>Fale com quem está na cabine pelo interfone.</li>
            <li>Não tente abrir a porta nem puxar ninguém.</li>
            <li>Mantenha o celular por perto: o técnico pode ligar.</li>
          </ul>

          <button type="button" className="btn btn-secundario btn-grande w-100 mt-auto">
            Voltar ao início (demonstração)
          </button>
        </div>
      )}
    </div>
  )
}

export default Portaria
