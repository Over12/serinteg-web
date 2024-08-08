import { Navbar } from "../components/ui/Navbar"
import { Footer } from "../components/ui/Footer"
import { WhatsAppIcon } from "../components/common/WhatsAppIcon"
import '../styles/pages/BitDefender.css'

export function BitDefender () {
  return (
    <>
      <Navbar />
      <main className='hero-services'>
        <span>ANTIVIRUS</span>
        <h1>SOMOS <span>PARTNER</span> AUTORIZADO DE <span>BITDEFENDER</span></h1>
        <p>Especialistas en seguridad de la información</p>
      </main>
      <section className="section-bitdefender">
        <h2 className='titulo-section'>Desafíos para la seguridad</h2>
        <div className="bd-horizontal">
          <p>Con la llegada del malware al mundo digital, las pequeñas y medianas empresas pueden convertirse en un blanco fácil para los piratas informáticos. Los estudios muestran que más del 50 % de las pequeñas y medianas empresas son víctimas de ataques informáticos. No obstante, contando con la seguridad adecuada, incluso las pequeñas empresas pueden permanecer protegidas frente a todo tipo de ataques, desde el ransomware hasta las amenazas persistentes avanzadas. <br /><br />Por ello, nos alegra informarles que ahora somos partner autorizado de la prestigiosa marca BITDEFENDER y ayudaremos en la prevención, detección, respuesta y administración de riesgos en los endpoints unificada para cada organización.</p>
          <img loading="lazy" src='assets/images/bitdefender/bitdefender-4.webp' alt='' />
        </div>
        <h2 className='subtitulo-section center'>Lo último en protección, detección, respuesta y análisis de riesgos avanzados, diseñado para abordar todo el ciclo de vida de la amenaza.</h2>
        <div className="bd-vertical">
          <p className="center">Utiliza una arquitectura adaptativa por niveles de seguridad que incluye el control de los endpoints y la prevención, detección, reparación y visibilidad.</p>
          <img loading="lazy" src='assets/images/bitdefender/bitdefender-3.webp' alt="" />
        </div>
        <h2 className='subtitulo-section center'>Comparación de soluciones</h2>
        <div className="bd-vertical">
          <p className="center">GravityZone es una solución de negocios que se puede instalar localmente o alojarse en Bitdefender. Cada una de las opciones que se indican a continuación incluyen la protección de múltiples capas con un demostrado aprendizaje automático, heurística avanzada, defensa contra ransomware, potente antiexploit, firmas, cortafuego y control de dispositivos.</p>
          <img loading="lazy" src='assets/images/bitdefender/bitdefender-2.webp' alt="" />
        </div>
      </section>
      <WhatsAppIcon />
      <Footer />
    </>
  )
}