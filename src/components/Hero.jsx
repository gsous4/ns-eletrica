import logo from '../assets/logo-ns-eletrica.png'
import { link, MENSAGEM_GERAL } from '../config.js'
import { IconeWhatsApp } from './Icons.jsx'

export default function Hero() {
  return (
    <div className="hero">
      <div className="wrap">
        <img className="logo" src={logo} alt="Logo NS Elétrica – Instalações elétricas e manutenção" />
        <h1 className="silver">Precisando de eletricista?</h1>
        <p>Instalação, manutenção e reparos elétricos com segurança. Escolha o serviço e peça seu orçamento no WhatsApp.</p>
        <p className="act">
          <a className="btn" href={link(MENSAGEM_GERAL)} target="_blank" rel="noopener noreferrer">
            <IconeWhatsApp />Chamar no WhatsApp
          </a>
        </p>
      </div>
    </div>
  )
}
