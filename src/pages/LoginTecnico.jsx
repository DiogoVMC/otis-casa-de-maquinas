import './LoginTecnico.css'

// Tela A2 - Login do técnico (feita para o celular, 390 px)
function LoginTecnico() {
  return (
    <div className="login-tecnico min-vh-100 d-flex flex-column">
      <div className="faixa-amarela"></div>

      <form className="login-tecnico-form flex-grow-1 d-flex flex-column gap-3">
        <span className="logo">Casa de Máquinas</span>
        <h1 className="titulo-h1-celular mb-2">Acesso do técnico</h1>

        <div>
          <label htmlFor="celular" className="form-label">Celular</label>
          <input id="celular" type="tel" className="form-control" placeholder="(11) 98000-1111" />
        </div>

        <div>
          <label htmlFor="senha-tecnico" className="form-label">Senha</label>
          <input id="senha-tecnico" type="password" className="form-control" placeholder="••••••••" />
        </div>

        {/* form-check é a classe do Bootstrap para checkbox */}
        <div className="form-check login-tecnico-check d-flex align-items-center gap-2">
          <input id="manter" type="checkbox" className="form-check-input m-0" defaultChecked />
          <label htmlFor="manter" className="form-check-label">Manter conectado neste celular</label>
        </div>

        {/* mt-auto empurra o botão para o fim da tela */}
        <button type="button" className="btn btn-principal btn-celular w-100 mt-auto">Entrar</button>

        <p className="texto-secundario text-center m-0">
          Fique conectado: é o login que faz o QR da cabine registrar sua chegada
          em vez de abrir o formulário da portaria.
        </p>
      </form>
    </div>
  )
}

export default LoginTecnico
