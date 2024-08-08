/* eslint-disable react/prop-types */
import '../../styles/components/common/IconMenu.css'

export function IconMenu({ isOpen, onClick }) {
  return(
      <div className={`icon nav-icon ${isOpen ? 'open' : ''}`} onClick={onClick}>
          <span></span>
          <span></span>
          <span></span>
      </div>
  )
}