import '../styles/pages/Page404.css'
import { Link } from 'react-router-dom'

export function Page404 () {
  return (
    <div className='page-404'>
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>Oops, no hemos podido encontrar esta página</p>
      <Link to='/'>&larr; Volver al inicio</Link>
    </div>
  )
}