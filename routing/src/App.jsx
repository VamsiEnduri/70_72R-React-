import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Navbar from './Components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Recipes from "./Components/Recipes/Recipes";
import SingleRecipe from "./Components/SingleRecipe/SingleRecipe";
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}/>
        <Route path="/recipes" element={<Recipes />}/>
        <Route path="/recipes/:id" element={<SingleRecipe />}/>
        {/* <Route ></Route>
        <Route ></Route>
        <Route ></Route> */}
      </Routes>
    </div>
  )
}

export default App