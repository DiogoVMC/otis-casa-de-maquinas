import './LoginCentral.css'

// Tela A1 - Login da central (admin e operador)
// Por enquanto é só o visual: o botão ainda não faz nada.
function LoginCentral() {
  return (
    <div className="login-central min-vh-100 d-flex flex-column">
      <div className="faixa-amarela"></div>

      {/* Meio da tela: o cartão fica centralizado */}
      <main className="flex-grow-1 d-flex flex-column align-items-center justify-content-center gap-3 px-3">
        <form className="login-cartao d-flex flex-column gap-3">
          <span className="logo">Casa de Máquinas</span>
          <h1 className="titulo-h1">Entrar na central</h1>

          <div>
            <label htmlFor="email" className="form-label">E-mail</label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="admin@casademaquinas.com"
            />
          </div>

          <div>
            <label htmlFor="senha" className="form-label">Senha</label>
            <input id="senha" type="password" className="form-control" placeholder="••••••••" />
          </div>

          <button type="button" className="btn btn-principal w-100">Entrar</button>

          <a href="#" className="login-esqueci align-self-center">Esqueci minha senha</a>
        </form>

        {/* Usuários de teste para o avaliador (RNF07) */}
        <div className="login-teste">
          <p className="rotulo-secao mb-1">Usuários de teste</p>
          <p className="mb-2">
            Senha de todos: <span className="codigo">demo1234</span>
          </p>
          <ul className="list-unstyled m-0">
            <li><span className="codigo">admin@casademaquinas.com</span> · Admin</li>
            <li><span className="codigo">operador@casademaquinas.com</span> · Operador</li>
          </ul>
        </div>
      </main>

      <p className="nota text-center m-0 p-3">Técnico de campo? Use o app no celular.</p>
    </div>
  )
}

export default LoginCentral
