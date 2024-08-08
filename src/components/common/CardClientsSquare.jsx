import '../../styles/components/common/CardClientsSquare.css'

// eslint-disable-next-line react/prop-types
export function CardClientsSquare ({ image, name }) {
  return (
    <div className='card-client-square'>
      <img src={image} alt={name} />
      <span>{name}</span>
    </div>
  )
}