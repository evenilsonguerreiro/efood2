import Header from "./components/Header"
import Home from "./pages/Home"
import { EstiloGlobal } from "./styles"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const Rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <RouterProvider router={Rotas} />
    </>
  )
}

export default App
