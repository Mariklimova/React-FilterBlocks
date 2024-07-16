import Vacancy from './Pages/Vacancy/Vacancy'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Item from './Pages/Item/Item'
import NotFound from './Components/NotFound/NotFound'
import Basket from './Pages/Basket/Basket'


function App() {
  

  return (
    <>
    
    <Routes>
     <Route path={'/'} element={<Vacancy/>}></Route>
     <Route path={'/:id/:name'} element={<Item/>}></Route>
     <Route path={'/basket'} element={<Basket/>}></Route>

   </Routes>
        
    </>
  )
}

export default App
