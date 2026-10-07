import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Servicos from './components/Servicos.jsx'
import Sobre from './components/Sobre.jsx'
import Contato from './components/Contato.jsx'
import BotaoFlutuante from './components/BotaoFlutuante.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Servicos />
        <Sobre />
        <Contato />
      </main>
      <footer>© NS Elétrica – Instalações elétricas e manutenção · Atendimento em Brasília e Entorno</footer>
      <BotaoFlutuante />
    </>
  )
}
