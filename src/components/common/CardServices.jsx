/* eslint-disable react/prop-types */
import '../../styles/components/common/CardServices.css'

export function CardServices ({ image, title, description}) {
  return (
    <div className="card-services">
      <img loading='lazy' src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}