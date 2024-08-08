import '../../styles/components/common/CardClientsLarge.css'

// eslint-disable-next-line react/prop-types
export function CardClientsLarge ({ image, name }) {
  return (
    <div className='card-client-large'>
      <img src={image} alt={name} />
    </div>
  )
}