/* eslint-disable react/react-in-jsx-scope */
import { EstiloGlobal } from './styles'

import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <EstiloGlobal />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
