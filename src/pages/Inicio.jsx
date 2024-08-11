import '../styles/pages/Inicio.css'
import { useState } from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Contacto } from '../components/ui/Contacto'
import { Footer } from '../components/ui/Footer'
import { CardValores } from '../components/common/CardValores'
import { CardServices } from '../components/common/CardServices'
import { WhatsAppIcon } from '../components/common/WhatsAppIcon'
import { MARCAS, SERVICIOS, VALORES } from '../constants/dataConstants'

export function Inicio() {
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpenModal = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <>
      <Navbar />
      <main>
        <div className='hero'>
          <div className='hero-text'>
            <h1>¿Buscas <span>optimizar</span> tu <span>infraestructura tecnológica</span>?</h1>
            <h2>Transforma tus servicios y soluciones tecnológicas en resultados reales</h2>
            <button className='button-contacto' onClick={handleOpenModal}>Contáctanos</button>
          </div>
          <div className='hero-image'>
            <img src="/assets/images/laptop.webp" alt="Imagen de laptop" />
          </div>
        </div>
        {modalOpen && <Contacto handleOpenModal={handleOpenModal} />}
      </main>
      <section className='about'>
        <h3>SOBRE NOSOTROS</h3>
        <div className='section-about'>
          <h2 className='titulo-section'>Nuestros <span>valores</span> fundamentales</h2>
          <div className='valores'>
            {VALORES.map((valor) => (
              <CardValores
                key={valor.id}
                image={valor.image}
                title={valor.title}
                description={valor.description}
              />
            ))}
          </div>
        </div>
        <div className='section-about'>
          <h2 className='titulo-section'><span>Marcas</span> con las que trabajamos</h2>
          <div className='marcas'>
            {MARCAS.map((marca) => (
              <img loading='lazy' className={marca.type} key={marca.id} src={marca.imagen} alt={marca.nombre} />
            ))}
          </div>
        </div>
        <div className='section-about'>
          <h2 className='titulo-section'><span>Servicios</span> que ofrecemos</h2>
          <div className='servicios'>
            {SERVICIOS.map((servicio) => (
              <CardServices
                key={servicio.id}
                image={servicio.image}
                title={servicio.title}
                description={servicio.description}
              />
            ))}
          </div>
        </div>
      </section>
      <WhatsAppIcon />
      <Footer />
    </>
  )
}