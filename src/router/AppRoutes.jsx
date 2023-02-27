import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from '../pages/Details';
import Station from '../pages/Station';
import Header from '../components/Header';

const AppRoutes = () => {
  return (
    <>
        <Router>
            <Header/>
            <Routes>
                <Route path='/details/:uri_station' element={<Details/>}/>
                <Route exact path='/' element={<Station/>}/>
            </Routes>
        </Router>
      
    </>
  )
}

export default AppRoutes
