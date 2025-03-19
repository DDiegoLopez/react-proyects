import React, {useState} from 'react'
import {Products} from './components/Products.jsx'
import {products as InitialProducts} from './mocks/products.json'

function App() {

  const [products] = useState(InitialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  
  return (
    <Products products={products} filters={filters} setFilters={setFilters} />
  )     
}

export default App