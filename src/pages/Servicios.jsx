import '../styles/pages/Servicios.css'
import { Navbar } from '../components/ui/Navbar'
import { Footer } from '../components/ui/Footer'
import { SectionServices } from '../components/ui/SectionServices'
import { WhatsAppIcon } from '../components/common/WhatsAppIcon'
import { INFO_SERVICIOS } from '../constants/dataConstants'

export function Servicios () {
  return (
    <>
      <Navbar />
      <main className='hero-services'>
        <span>SERVICIOS</span>
        <h1><span>SOLUCIONES</span> TECNOLÓGICAS <span>A</span> TU <span>MEDIDA</span></h1>
        <p>Adaptamos nuestras soluciones a las necesidades específicas de tu negocio.</p>
      </main>
      <section className='section-services'>
        {INFO_SERVICIOS.map((servicios) => (
          <>
            <h2 className='titulo-section'>{servicios.title}</h2>
            <SectionServices key={servicios.id} {...servicios} />
          </>
        ))}
      </section>
      <WhatsAppIcon />
      <Footer />
    </>
  )
}