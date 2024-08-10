import { Navbar } from "../components/ui/Navbar"
import { CardClientsLarge } from "../components/common/CardClientsLarge"
import { CardClientsSquare } from "../components/common/CardClientsSquare"
import { ImageModal } from "../components/ui/ImageModal"
import { Footer } from "../components/ui/Footer"
import { useState } from 'react'
import { CLIENTES_LARGE, CLIENTES_SQUARE, IMAGES_TRABAJOS } from "../constants/dataConstants"

import '../styles/pages/Clientes.css'

export function Clientes () {
  const [modalOpen, setModalOpen] = useState(false)
  const [imageModal, setImageModal] = useState('')

  const handleModal = (image) => {
    setModalOpen(!modalOpen)
    setImageModal(image)
  }

  const closeModal = () => {
    setImageModal('')
    setModalOpen(false)
  }

  return (
    <>
      <Navbar />
      <main className='hero-services'>
        <span>CLIENTES</span>
        <h1><span>CONFIANZA</span> DEPOSITADA EN <span>NOSOTROS</span></h1>
        <p>Nos enorgullece haber trabajado con estos clientes, brindando soluciones tecnológicas a medida.</p>
      </main>
      <section className='section-clients'>
        <h3>Nuestros clientes</h3>
        <h2>Clientes que nos avalan</h2>
        <div className='gallery-clients-large'>
          {CLIENTES_LARGE.map((clients) => (
            <CardClientsLarge key={clients.id} image={clients.image} name={clients.name} />
          ))}
          {CLIENTES_SQUARE.map((clients) => (
            <CardClientsSquare key={clients.id} image={clients.image} name={clients.name} />
          ))}
        </div>
      </section>
      <section className='section-clients'>
        <h2>Conoce nuestros trabajos</h2>
        {IMAGES_TRABAJOS.map((trabajo) => (
          <div className='trabajo-cliente' key={trabajo.id}>
            <h3><span>{trabajo.empresa}: </span>{trabajo.actividad}</h3>
            <p><span>Trabajo realizado: </span>{trabajo.trabajo}</p>
            <div className='gallery-trabajo'>
              {trabajo.images.map((image, index) => (
                <img loading='lazy' key={index} src={image} onClick={() => handleModal(image)}/>
              ))}
            </div>
          </div>
        ))}
      </section>
      <Footer />

      {modalOpen && (
        <ImageModal image={imageModal} closeModal={closeModal} />
      )}
    </>
  )
}