import Header from "./components/Header"
import Home from "./pages/Home"

import { Routes, Route, useLocation } from "react-router-dom"
import PerfilModal from "./pages/PerfilModal"
import Perfil from "./pages/Perfil"
import PerfilCarrinho from "./pages/PerfilCarrinho"

const Rotas = () => {
  const location = useLocation() // Defina aqui fora

  return (
    <>
      {/* Renderiza o Header em todas as páginas, exceto na rota "/perfil" */}

      {location.pathname !== "/perfil" &&
        location.pathname !== "/perfilmodal" &&
        location.pathname !== "/perfilcarrinho" && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/perfilmodal" element={<PerfilModal />} />
        <Route path="/perfilcarrinho" element={<PerfilCarrinho />} />
      </Routes>
    </>
  )
}
export default Rotas
