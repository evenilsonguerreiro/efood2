/* eslint-disable react/react-in-jsx-scope */
import Header from './components/Header'
import Home from './pages/Home'

import { Routes, Route, useLocation } from 'react-router-dom'
import PerfilModal from './pages/PerfilModal'
import Perfil from './pages/Perfil'
import PerfilCarrinho from './pages/PerfilCarrinho'
import PerfilEntrega from './pages/PerfilEntrega'
import PerfilPagamento from './pages/PerfilPagamento'
import PerfilConfirmacao from './pages/PerfilConfirmacao'

const Rotas = () => {
  const location = useLocation() // Defina aqui fora

  return (
    <>
      {/* Renderiza o Header em todas as páginas, exceto nas rotas especificadas */}
      {location.pathname !== '/perfil' &&
        location.pathname !== '/perfilmodal' &&
        location.pathname !== '/perfilEntrega' &&
        location.pathname !== '/perfilPagamento' &&
        location.pathname !== '/perfilConfirmacao' &&
        location.pathname !== '/perfilcarrinho' && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/perfilmodal" element={<PerfilModal />} />
        <Route path="/perfilcarrinho" element={<PerfilCarrinho />} />
        <Route path="/perfilEntrega" element={<PerfilEntrega />} />
        <Route path="/perfilpagamento" element={<PerfilPagamento />} />
        <Route path="/perfilconfirmacao" element={<PerfilConfirmacao />} />
      </Routes>
    </>
  )
}
export default Rotas
