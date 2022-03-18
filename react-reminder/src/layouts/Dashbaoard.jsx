import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BookDetail from '../pages/BookDetail'
import BookList from '../pages/BookList'
import DailyRoutineDetail from '../pages/DailyRoutineDetail'
import DailyRoutineList from '../pages/DailyRoutineList'
export default function Dashbaoard() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<BookList />} exact />
        <Route path='/DailyRoutines' element={<DailyRoutineList/>} exact/>
        <Route exact path='/books/:id' element={<BookDetail/>}/>
        <Route exact path='/DailyRoutineDetail/:personName' element={<DailyRoutineDetail/>}/>
      </Routes>

    </div>

  )
}
