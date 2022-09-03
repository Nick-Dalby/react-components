import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import AccordionPage from './pages/AccordionPage'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/accordion' element={<AccordionPage />} />
      </Routes>
    </div>
  )
}

export default App
