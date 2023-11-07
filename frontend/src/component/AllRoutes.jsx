import React from 'react'
import Movies from './Movies'
import SingleMovie from './SingleMovie'
import {Route, Routes} from 'react-router-dom'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Movies/>} />
        <Route path='/singlemovie/:id' element={<SingleMovie/>} />
    </Routes>
  )
}

export default AllRoutes