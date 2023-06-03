import React from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Header from './Components/Header'
import CockTail from './pages/CockTail'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import NotProductFound from './pages/NotProductFound'
import ProDetails from './pages/ProDetails'
import Product from './pages/Product'


function App() {
    return (
        
<>
<BrowserRouter>
<Header />
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path='/Product' element={<Product />}  />
    <Route path='/productName/:id' element={<ProDetails />}/>
    <Route path="/Cocktails-drink" element={<CockTail />} />
    <Route path='*' element={<NotProductFound/>}/>

</Routes>

</BrowserRouter>

</>

    )
}
export default App