import '../../styles/components/ui/ImageModal.css'

// eslint-disable-next-line react/prop-types
export function ImageModal ({ image, closeModal }) {

  return (
    <div className='modal-image'>
      <div className='modal-image-content'>
        <button className='close-modal-button' onClick={closeModal}>&times;</button>
        <img src={image} alt='Imagen ampliada' />
      </div>
    </div>
  )
}