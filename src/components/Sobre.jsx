import foto from '../assets/foto-natanael.jpg'
import { NOME_PROFISSIONAL } from '../config.js'

export default function Sobre() {
  return (
    <section className="about">
      <div className="wrap">
        <div className="photo">
          <img src={foto} alt="Natanael Sousa, eletricista da NS Elétrica, de capacete e uniforme" />
        </div>
        <div>
          <h2><span className="silver">Quem atende você</span></h2>
          <p><span className="name">{NOME_PROFISSIONAL}</span> cuida de cada serviço pessoalmente, da instalação ao reparo de emergência.</p>
          <p>Trabalho com equipamento de proteção, material de qualidade e o cuidado de deixar tudo funcionando e seguro antes de ir embora.</p>
        </div>
      </div>
    </section>
  )
}
