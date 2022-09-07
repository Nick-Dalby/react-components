import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import AccordionPage from './pages/AccordionPage'
import StarsPage from './pages/StarsPage'
import SomePage from './pages/SomePage'
import AnotherPage from './pages/AnotherPage'
import DropdownPage from './pages/DropdownPage'
import ProductImagesPage from './pages/ProductImagesPage'
import PaginationHooks from './components/pagination/PaginationHooks'
import PaginationQuery from './components/pagination/PaginationQuery'
import PaginationPage from './pages/PaginationPage'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/accordion' element={<AccordionPage />} />
        <Route path='/stars' element={<StarsPage />} />
        <Route path='/dropdown' element={<DropdownPage />} />

        <Route path='/pagination' element={<PaginationPage />} />
        <Route path='/pagination-hooks' element={<PaginationHooks />} />
        <Route path='/pagination-query' element={<PaginationQuery />} />
        <Route path='/product-images' element={<ProductImagesPage />} />
        <Route path='/some-page' element={<SomePage />} />
        <Route path='/another-page' element={<AnotherPage />} />
      </Routes>
    </div>
  )
}

export default App
