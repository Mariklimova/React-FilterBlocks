import Vacancy from './Pages/Vacancy/Vacancy'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Item from './Pages/Item/Item'


function App() {
  

  return (
    <>
    
    <Routes>
     <Route path={'/'} element={<Vacancy/>}></Route>
     <Route path={'/:id/:name'} element={<Item/>}></Route>
   </Routes>
        
    </>
  )
}

export default App
