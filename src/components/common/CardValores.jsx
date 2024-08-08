/* eslint-disable react/prop-types */
import '../../styles/components/common/CardValores.css'

export function CardValores ({image, title, description}) {
  return (
    <div className='card-valores'>
      <img loading='lazy' src={image} alt={'Imagen de ' + title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}