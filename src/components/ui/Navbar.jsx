import { IconMenu } from '../common/IconMenu'
import { NavLink } from 'react-router-dom'
import '../../styles/components/ui/Navbar.css'
import { useState } from 'react'

export function Navbar () {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <nav>
      <div className='logo'>
        <img src='/assets/images/SERINTEG_Banner.webp' alt='Logo de SERINTEG' />
      </div>
      <div className='menu-icon'>
        <IconMenu isOpen={ open } onClick={ handleClick }/>
      </div>
      <ul className={`menu ${open ? 'open' : ''}`}>
        <li><NavLink to='/'>Inicio</NavLink></li>
        <li><NavLink to='/servicios'>Servicios</NavLink></li>
        <li><NavLink to='/bitdefender'>BitDefender</NavLink></li>
        <li><NavLink to='/clientes'>Clientes</NavLink></li>
        <li><NavLink className='button-ingresar' to='https://serinteg-dashboard-v2.vercel.app/'>Ingresar</NavLink></li>
      </ul>
    </nav>
  )
}