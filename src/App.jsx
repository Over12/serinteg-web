import { BrowserRouter as Router } from 'react-router-dom'
import Rutas from './Routes'
import './App.css'
import { ScrollToTop } from './utils/ScrollToTop'

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Rutas />
    </Router>
  )
}

export default App
