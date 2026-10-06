import { link, MENSAGEM_GERAL } from '../config.js'
import { IconeWhatsApp } from './Icons.jsx'

export default function BotaoFlutuante() {
  return (
    <a className="fab" href={link(MENSAGEM_GERAL)} target="_blank" rel="noopener noreferrer" aria-label="Chamar no WhatsApp">
      <IconeWhatsApp />
    </a>
  )
}
