import { Routes, Route } from 'react-router-dom';
import { Inicio } from './pages/Inicio';
import { Servicios } from './pages/Servicios';
import { BitDefender } from './pages/BitDefender';
import { Clientes } from './pages/Clientes';
import { Page404 } from './pages/Page404';

export default function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/bitdefender" element={<BitDefender />} />
      <Route path="/clientes" element={<Clientes />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}
