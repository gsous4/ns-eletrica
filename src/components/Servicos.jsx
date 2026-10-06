import { link, mensagemServico, SERVICOS } from '../config.js'
import { IconeRaio } from './Icons.jsx'

function ItemServico({ nome, descricao, emergencia }) {
  return (
    <li>
      <a
        className={emergencia ? 'svc em' : 'svc'}
        href={link(mensagemServico(nome))}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconeRaio />
        <span className="tx">
          <b>{nome}</b>
          <small>{descricao}</small>
        </span>
        <span className="go">Pedir orçamento</span>
      </a>
    </li>
  )
}

export default function Servicos() {
  return (
    <section className="sec" id="servicos">
      <div className="wrap">
        <h2>Serviços</h2>
        <p>Toque no serviço que você precisa. O WhatsApp abre com a mensagem pronta para pedir o orçamento.</p>
        <ul className="list">
          {SERVICOS.map((s) => (
            <ItemServico key={s.nome} {...s} />
          ))}
        </ul>
      </div>
    </section>
  )
}
