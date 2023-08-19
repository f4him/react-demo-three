import React from 'react'
import Header from './components/Header'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Characterset from './components/Characterset'
import Character from './components/Character'
import Home from './components/Home'
import Episodes from './components/Episodes'
import Locations from './components/Locations'
const App = () => {
  return (

    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/characters' element={<Characterset />}/>
        <Route path='/character/:id' element={<Character />}/>
        <Route path='/locations' element={<Locations />}/>
        <Route path='/episodes' element={<Episodes />}/>
      </Routes>
    </Router>
 
 
  )
}

export default App