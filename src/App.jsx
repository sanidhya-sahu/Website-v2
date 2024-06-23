import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Proj from './components/Project Section/proj'
import Magazine from './components/Magazine/magazine'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Proj></Proj>
              </>
            }
          >
          </Route>
          <Route path="/magazine" element={<Magazine />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
