# Casa de Máquinas

Central web para registrar, priorizar e acompanhar ocorrências de elevadores, do chamado da portaria até o encerramento confirmado pela central.

Projeto do **Challenge FIAP 2026 com a OTIS** (Engenharia de Software).

> **Situação atual:** telas de acesso (A1, A2, A3), Despacho, portaria pelo QR (B) e celular do técnico (T) prontas **só no visual**, com dados de exemplo. A ligação com a API e o banco vem nas próximas etapas.

## Tecnologias

| Parte | Tecnologia |
|---|---|
| Telas | React + Vite |
| Layout | CSS próprio + Bootstrap 5 |
| API | Python com Flask (pasta `api/`) |
| Banco | Oracle FIAP (`oracledb`) |
| Hospedagem | Vercel |

## Como rodar no computador

Precisa ter **Node.js** e **Python** instalados.

```bash
# 1. Instalar as dependências do site
npm install

# 2. Abrir o site
npm run dev
```

Abra `http://localhost:5173`. No canto inferior direito tem a caixa **"Ver tela"** para trocar entre as telas (é temporária, até as rotas existirem).

Para rodar a API em outro terminal:

```bash
python -m venv .venv
.venv\Scripts\activate          # no Windows (PowerShell)
pip install -r requirements.txt
flask --app api/index run --port 5000
```

Teste: `http://127.0.0.1:5000/api/ping` deve responder `{"status":"ok"}`.

## Usuários de teste

| Perfil | Login | Senha |
|---|---|---|
| Admin | admin@casademaquinas.com | demo1234 |
| Operador | operador@casademaquinas.com | demo1234 |
| Técnico (Carlos Mendes) | (11) 98000-1111 | demo1234 |
| Técnico (Rafael Souza) | (11) 98000-4444 | demo1234 |

## Estrutura de pastas

```text
api/
  index.py                  API em Flask
src/
  index.css                 estilos universais (cores, fontes, espaços, botões)
  App.jsx                   troca de telas (temporária)
  components/
    Cabecalho.jsx           faixa amarela, logo e menu
    JanelaRegistrarLigacao.jsx
  pages/
    LoginCentral.jsx        tela A1
    LoginTecnico.jsx        tela A2 (celular)
    Despacho.jsx            despacho do admin e tela A3 (operador)
    Portaria.jsx            telas B1 a B3 (portaria pelo QR, celular)
    Tecnico.jsx             telas T1 a T7 (celular do técnico)
```

Cada componente e cada página tem o seu próprio arquivo `.css` ao lado.

## Guia de estilo

Os valores vêm do protótipo no Figma e ficam todos como variáveis em `src/index.css`. Se uma cor ou fonte mudar, muda só lá.

- **Fontes:** Barlow Semi Condensed (títulos), Barlow (texto) e IBM Plex Mono (códigos, horários e P1–P4).
- **Cores:** a tela é quase toda preto e branco. Cor só aparece quando quer dizer algo (prioridade, status, alerta). O amarelo é só a faixa de 4 px do topo e a linha selecionada.
- **Prioridade:** sempre escrita com texto (P1–P4), não só com cor.
- **Celular:** abaixo de 760 px as colunas ficam uma embaixo da outra; botões com no mínimo 44 px de altura.

## Convenção de nomes

- Tudo o que criamos (classes, variáveis do CSS, componentes, props e dados) é escrito **em português**.
  Ex.: `--cor-primaria`, `--espaco-16`, `.titulo-h1`, `.btn-principal`, `Cabecalho`, `mostrarJanela`.
- Termos que são o **nome oficial** de algo no HTML, no CSS ou no Bootstrap ficam como estão.
  Ex.: `link`, `hover`, `btn`, `label`, e as classes do Bootstrap (`d-flex`, `form-control`).
- As classes têm nome pela **função**, não pelo tipo. Ex.: `.janela-cancelar` em vez de `.janela-botao`.
