import { link, MENSAGEM_GERAL, NOME_PROFISSIONAL } from '../config.js'

export default function Contato() {
  return (
    <div className="cta">
      <div className="wrap">
        <h2>Pronto para pedir seu orçamento?</h2>
        <p>Fale direto com {NOME_PROFISSIONAL}.</p>
        <a className="btn" href={link(MENSAGEM_GERAL)} target="_blank" rel="noopener noreferrer">
          Chamar no WhatsApp
        </a>
      </div>
    </div>
  )
}
