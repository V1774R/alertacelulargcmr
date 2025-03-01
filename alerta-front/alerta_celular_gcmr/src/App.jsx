import {BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './Layout'
import { Cadastro } from './Pages/Cadastro'
import { Usuarios } from './Pages/Usuarios'
import { Home } from './Pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/cadastrar' element={<Cadastro/>}></Route>
          <Route path='/usuarios' element={<Usuarios/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
