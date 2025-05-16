import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import DefaultLayout from './layouts/DefaultLayouts'
import TripContext from './context/TripContext'
import ArrayTrip from './data/ArrayTrip'


function App() {


  return (
    <>
      <TripContext.Provider value={{ ArrayTrip }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<HomePage />} />
              <Route path='/trip/:id' element={<div>Dettagli Viaggio</div>} />
              <Route path='/user/:id' element={<div>Partecipante X</div>} />
              <Route path='/about' element={<div>Parliamo di noi</div>} />
            </Route>
            <Route path='*' element={<div>404</div>} />
          </Routes>
        </BrowserRouter>
      </TripContext.Provider>
    </>
  )
}

export default App
