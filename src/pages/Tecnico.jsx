import './Tecnico.css'

// Telas T - Celular do técnico
// etapa: "chamado" (T1), "scan" (T2), "qrErrado" (T2b), "chegada" (T3),
//        "relatorio" (T4), "aguardando" (T5), "devolvida" (T6), "encerrada" (T7)
// Por enquanto é só o visual: os botões ainda não trocam de etapa.

// Etiqueta de status que aparece no topo, conforme a etapa
const statusDaEtapa = {
  chamado: { texto: 'A caminho', classe: 'status-andamento' },
  scan: { texto: 'A caminho', classe: 'status-andamento' },
  qrErrado: { texto: 'A caminho', classe: 'status-andamento' },
  chegada: { texto: 'Chegada a confirmar', classe: 'status-confirmar' },
  relatorio: { texto: 'No local', classe: 'status-andamento' },
  devolvida: { texto: 'No local', classe: 'status-andamento' },
  aguardando: { texto: 'Encerramento a confirmar', classe: 'status-confirmar' },
  encerrada: { texto: 'Resolvida', classe: 'status-resolvida' },
}

const relatoExemplo =
  'Passageiros liberados às 02:39 pelo resgate manual. Ajustei o freio e o nivelamento entre o 7º e o 8º. Recomendo preventiva na porta do 8º.'

function Tecnico({ etapa }) {
  const status = statusDaEtapa[etapa]

  return (
    <div className="tela-celular">
      <div className="faixa-amarela"></div>

      {/* Barra do técnico logado */}
      <div className="tecnico-barra d-flex justify-content-between align-items-center">
        <span>Carlos Mendes · técnico</span>
        <a href="#">Sair</a>
      </div>

      {/* Resumo do chamado (igual em todas as etapas) */}
      <div className="tecnico-chamado">
        <div className="d-flex align-items-center gap-2">
          <span className="etiqueta-prioridade etiqueta-p1">P1</span>
          <span className="codigo">OC-1042</span>
          <span className={'etiqueta-status tecnico-status ms-auto ' + status.classe}>{status.texto}</span>
        </div>
        <p className="titulo-h1-celular">Passageiro preso</p>
        <p className="m-0">Ed. Horizonte · Elevador B</p>
      </div>

      {/* ---------- T1: recebeu o chamado ---------- */}
      {etapa === 'chamado' && (
        <div className="tela-celular-corpo">
          <dl className="tecnico-dados m-0">
            <dt>Endereço</dt>
            <dd>Rua das Acácias, 210 — Jardim Paulista</dd>
            <dt>Onde parou</dt>
            <dd className="fw-semibold">Entre o 7º e o 8º</dd>
            <dt>Contato</dt>
            <dd>Portaria · Sr. João</dd>
            <dt>Histórico</dt>
            <dd>4ª ocorrência em 30 dias</dd>
          </dl>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Rua+das+Acacias+210"
            className="btn btn-secundario btn-grande w-100"
          >
            Abrir rota no mapa
          </a>

          <div className="mt-auto d-flex flex-column gap-2">
            <button type="button" className="btn btn-principal btn-celular w-100">
              Cheguei · ler QR da cabine
            </button>
            <p className="texto-secundario text-center m-0">
              A central só recebe sua chegada depois que você lê o QR de dentro do elevador.
            </p>
          </div>
        </div>
      )}

      {/* ---------- T2: lendo o QR ---------- */}
      {etapa === 'scan' && (
        <div className="tela-celular-corpo">
          {/* Área escura que imita a câmera */}
          <div className="leitor-qr">
            <div className="leitor-qr-mira"></div>
            <span className="leitor-qr-texto">Aponte para a etiqueta da cabine</span>
          </div>

          <button type="button" className="btn btn-grande tecnico-btn-amarelo w-100">
            Simular: QR do Elevador B
          </button>
          <button type="button" className="btn btn-simular w-100">
            Simular: QR de outro elevador
          </button>
        </div>
      )}

      {/* ---------- T2b: QR do elevador errado ---------- */}
      {etapa === 'qrErrado' && (
        <div className="tela-celular-corpo">
          <div className="caixa-perigo tecnico-mensagem">
            <strong>Este QR é do Elevador A.</strong> Seu chamado é no <strong>Elevador B</strong> do
            mesmo prédio. A chegada não foi enviada.
          </div>
          <button type="button" className="btn btn-principal btn-celular w-100">Ler de novo</button>
        </div>
      )}

      {/* ---------- T3: chegada enviada ---------- */}
      {etapa === 'chegada' && (
        <div className="tela-celular-corpo">
          <div className="caixa-alerta tecnico-mensagem">
            Chegada enviada às <span className="codigo">02:31</span>.{' '}
            <strong>Aguardando a central confirmar.</strong> Pode começar o atendimento.
          </div>
          <button type="button" className="btn btn-simular w-100">Simular: central confirmou</button>
        </div>
      )}

      {/* ---------- T4 e T6: relatório (T6 = devolvido pela central) ---------- */}
      {(etapa === 'relatorio' || etapa === 'devolvida') && (
        <form className="tela-celular-corpo">
          {etapa === 'devolvida' ? (
            <div className="caixa-perigo tecnico-mensagem">
              <strong>A central devolveu:</strong> "Informe o horário em que os passageiros saíram."
            </div>
          ) : (
            <div className="caixa-sucesso tecnico-mensagem">
              Chegada confirmada pela central às <span className="codigo">02:32</span>.
            </div>
          )}

          <div>
            <label htmlFor="relato" className="form-label">O que foi feito</label>
            <textarea
              id="relato"
              rows="5"
              className="form-control"
              placeholder="Ex.: passageiros liberados às 02:39, ajustei o nivelamento"
              defaultValue={relatoExemplo}
            ></textarea>
          </div>

          <div className="form-check d-flex align-items-center gap-2">
            <input id="liberado" type="checkbox" className="form-check-input" />
            <label htmlFor="liberado" className="form-check-label">Elevador liberado para uso</label>
          </div>

          <button type="button" className="btn btn-principal btn-celular w-100 mt-auto">
            Enviar para a central
          </button>
        </form>
      )}

      {/* ---------- T5: aguardando a central ---------- */}
      {etapa === 'aguardando' && (
        <div className="tela-celular-corpo">
          <div className="caixa-alerta tecnico-mensagem">
            Relatório enviado. <strong>Aguardando a central confirmar o encerramento.</strong>
          </div>
          <p className="caixa-cinza tecnico-mensagem m-0">{relatoExemplo}</p>

          <div className="mt-auto d-flex flex-column gap-2">
            <button type="button" className="btn btn-simular w-100">Simular: central confirmou</button>
            <button type="button" className="btn btn-simular w-100">Simular: central devolveu</button>
          </div>
        </div>
      )}

      {/* ---------- T7: encerrada ---------- */}
      {etapa === 'encerrada' && (
        <div className="tela-celular-corpo">
          <h1 className="titulo-h1-celular">Ocorrência encerrada</h1>
          <p className="tecnico-mensagem m-0">
            A central confirmou às <span className="codigo">02:48</span>. Você está livre para o
            próximo chamado.
          </p>
          <button type="button" className="btn btn-secundario btn-grande w-100 mt-auto">
            Voltar ao início (demonstração)
          </button>
        </div>
      )}
    </div>
  )
}

export default Tecnico
