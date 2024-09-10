import Header from "./components/Header"
import Home from "./pages/Home"
import Perfil from "./pages/Perfil"

import { Routes, Route, useLocation } from "react-router-dom"

const Rotas = () => {
  const location = useLocation() // Defina aqui fora

  return (
    <>
      {/* Renderiza o Header em todas as páginas, exceto na rota "/perfil" */}
      {location.pathname !== "/perfil" && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </>
  )
}
export default Rotas
