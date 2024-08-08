/* eslint-disable react/prop-types */
import '../../styles/components/ui/SectionServices.css'

export function SectionServices ({ image1, image2, image3, description }) {
  return (
    <div className='services-gallery'>
      <div className='item-a'>
        <img loading='lazy' src={image1}/>
      </div>
      <div className='item-b'>
        <img loading='lazy' src={image2}/>
      </div>
      <div className='item-c'>
        <img loading='lazy' src={image3}/>
      </div>
      <div className='item-d'>
        <p>{description}</p>
      </div>
    </div>
  )
}