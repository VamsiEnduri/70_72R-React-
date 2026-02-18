import React from 'react'
import Nav from './comps/Nav/Nav'
import {Routes,Route} from "react-router-dom"
import Products from "./comps/products/Products"
import Posts from "./comps/posts/Posts"
import Recipes from "./comps/recipes/Recipes"

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/products" element={<Products />}/>
        <Route path="/recipes" element={<Recipes />}/>
        <Route path="/posts" element={<Posts />}/>
      </Routes>
    </div>
  )
}

export default App