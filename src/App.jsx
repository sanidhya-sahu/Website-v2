import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Proj from './components/Project Section/proj'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <div className='page'></div>
                <Proj></Proj>
                <div className='page'></div>
              </>
            }
          >
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
